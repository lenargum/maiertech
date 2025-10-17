"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    duration = 1,
    clockwise = true,
    ...props
}: React.PropsWithChildren<
    {
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const { darkMode } = useTheme();
    const [hovered, setHovered] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const lightColor = "#794DE3";
    const darkColor = "#794DE3";

    const movingMap: Record<Direction, string> = {
        TOP: `radial-gradient(20.7% 50% at 50% 0%, ${darkMode ? darkColor : lightColor} 0%, rgba(255, 255, 255, 0) 100%)`,
        LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${darkMode ? darkColor : lightColor} 0%, rgba(255, 255, 255, 0) 100%)`,
        BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${darkMode ? darkColor : lightColor} 0%, rgba(255, 255, 255, 0) 100%)`,
        RIGHT: `radial-gradient(16.2% 41.199999999999996% at 100% 50%, ${darkMode ? darkColor : lightColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    };

    const highlight =
        "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

    useEffect(() => {
        if (!hovered) {
            const rotateDirection = (currentDirection: Direction): Direction => {
                const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
                const currentIndex = directions.indexOf(currentDirection);
                const nextIndex = clockwise
                    ? (currentIndex - 1 + directions.length) % directions.length
                    : (currentIndex + 1) % directions.length;
                return directions[nextIndex];
            };

            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    return (
        <div
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative overflow-hidden p-0.5 w-fit", // padding is gradient border width
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "relative z-10 rounded-[inherit]",
                    className
                )}
            >
                {children}
            </div>
            <motion.div
                className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden"
                style={{
                    filter: "blur(2px)",
                    // Keep mask as a static style; not part of Motion animate API
                    maskImage:
                        "radial-gradient(calc(100% - 2px) calc(100% - 2px) at center, transparent 100%, black 100%)",
                    WebkitMaskImage:
                        "radial-gradient(calc(100% - 2px) calc(100% - 2px) at center, transparent 100%, black 100%)",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration: duration ?? 1 }}
            />
            <div className="absolute inset-0 z-[-1] rounded-[inherit] overflow-hidden outline-2 -outline-offset-2 outline-[#EDE8FB] dark:outline-[#1A1A1A]" />
        </div>
    );
}
