import { useState, useRef, useId, useEffect } from "react";
import { Button } from "./Button";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef<number>(0);
  const yRef = useRef<number>(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col justify-end relative text-center opacity-100 transition-all duration-300 ease-in-out w-[40vmin] h-[40vmin] mx-[0.313rem] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rounded-4xl outline-3 outline-black/30 -outline-offset-3 overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
            backdropFilter: "blur(20px)",
            zIndex: 1
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
              zIndex: -1
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />

          {/* {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )} */}
        </div>

        <article
          className={`m-2.5 p-8 outline-3 outline-white/80 rounded-[1.75rem] transition-opacity duration-1000 ease-in-out -outline-offset-3 ${current === index ? "opacity-100 visible" : "opacity-0 invisible"}`}
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%)",
            backdropFilter: "blur(10px)",
            zIndex: 1
          }}
        >
          <h3 className="mb-2">{title}</h3>
          <h4 className="text-primary-3">{button}</h4>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const ArrowLeftIcon = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${reverse ? 180 : 0}deg)` }}
    >
      <path
        d="M7 1L1 7L7 13"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ArrowRightIcon = () => {
  return (
    <ArrowLeftIcon reverse={true} />
  )
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <>
      <Button
        variant="filled"
        title={title}
        onClick={handleClick}
        style={{ padding: type === "previous" ? '10px 14px 10px 12px' : '10px 12px 10px 14px' }}
        aria-label={title}
      >
        {type === "previous" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </Button>
    </>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[40vmin] h-[calc(40vmin+2.5rem+2rem)] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full bottom-0 gap-5">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <div className="flex flex-row items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer focus:outline-none ${current === index ? 'bg-primary-3' : 'bg-[#E6E7E8]'}`}
              aria-label={`Go to slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
} 