import { useEffect, useRef } from "react";

class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

const VARIANTS = {
  default: {
    gap: 5,
    speed: 35,
    colors: "#FF7074",
  },
};

export default function PixelCard({
  variant = "default",
  className = "",
  children,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);

  const variantCfg = VARIANTS[variant] || VARIANTS.default;
  const isMobile = window.innerWidth <= 768;

  const initPixels = () => {
    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const colorsArray = variantCfg.colors.split(",");
    const gap = variantCfg.gap;
    const speed = variantCfg.speed;

    const pxs = [];
    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = distance;

        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, speed * 0.001, delay));
      }
    }
    pixelsRef.current = pxs;
  };

  const animate = (action) => {
    animationRef.current = requestAnimationFrame(() => animate(action));
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    pixelsRef.current.forEach((p) => {
      p[action]();
      if (!p.isIdle) allIdle = false;
    });

    if (allIdle) cancelAnimationFrame(animationRef.current);
  };

  const startAnimation = (type) => {
    cancelAnimationFrame(animationRef.current);
    animate(type);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    initPixels();

    if (isMobile) {
      // Mobile scroll-based animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) startAnimation("appear");
            else startAnimation("disappear");
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      // Desktop hover-based animation
      const el = containerRef.current;
      const handleEnter = () => startAnimation("appear");
      const handleLeave = () => startAnimation("disappear");

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, []);// Scroll-triggered animation for mobile
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && window.innerWidth < 768) {
        handleAnimation("appear");
      } else if (!entry.isIntersecting && window.innerWidth < 768) {
        handleAnimation("disappear");
      }
    },
    {
      threshold: 0.2,
    }
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    if (containerRef.current) observer.unobserve(containerRef.current);
  };
}, []);


  return (
    <div
      ref={containerRef}
      className={`h-[400px] w-[300px] relative overflow-hidden grid place-items-center border border-[#27272a] rounded-2xl ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
      <div className="z-10 p-6 w-full">{children}</div>
    </div>
  );
}
