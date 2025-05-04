"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  origX: number;
  origY: number;
  color: number[];
  mesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
}

export function CanvasRevealEffect({
  colors = [
    [255, 255, 255],
    [255, 255, 255],
  ],
  dotSize = 2,
  animationSpeed = 3,
  containerClassName = "",
}: {
  colors?: number[][];
  dotSize?: number;
  animationSpeed?: number;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create dots
    const dots: Dot[] = [];
    const geom = new THREE.CircleGeometry(dotSize, 32);
    const count = 300;

    for (let i = 0; i < count; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(
          colors[i % colors.length][0] / 255,
          colors[i % colors.length][1] / 255,
          colors[i % colors.length][2] / 255
        ),
      });
      const dot = new THREE.Mesh(geom, material);

      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      
      dot.position.set(x, y, 0);
      scene.add(dot);
      
      dots.push({
        x,
        y,
        vx: Math.random() * 0.1 - 0.05,
        vy: Math.random() * 0.1 - 0.05,
        origX: x,
        origY: y,
        color: colors[i % colors.length],
        mesh: dot,
      });
    }
    dotsRef.current = dots;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      dots.forEach((dot: Dot) => {
        dot.x += dot.vx * animationSpeed;
        dot.y += dot.vy * animationSpeed;

        if (Math.abs(dot.x - dot.origX) > 10) {
          dot.vx *= -1;
        }

        if (Math.abs(dot.y - dot.origY) > 10) {
          dot.vy *= -1;
        }

        dot.mesh.position.x = dot.x;
        dot.mesh.position.y = dot.y;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Clean up Three.js resources
      dotsRef.current.forEach((dot: Dot) => {
        dot.mesh.geometry.dispose();
        dot.mesh.material.dispose();
        sceneRef.current?.remove(dot.mesh);
      });
      rendererRef.current?.dispose();
    };
  }, [colors, dotSize, animationSpeed]);

  return <div ref={containerRef} className={containerClassName} />;
} 