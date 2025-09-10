"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface TiltCardProps {
  src: string;
  title?: string;
  subtitle?: string;
  className?: string;
  contain?: boolean;   
}

const TiltCard: React.FC<TiltCardProps> = ({ src, title, subtitle, className, contain }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const inner = innerRef.current;
    const bgLayer = bgRef.current;
    const mainImg = imgRef.current;

    if (!card || !inner || !bgLayer || !mainImg) return;

    const maxRotate = 12;
    const translateZ = 20;
    const bgTranslate = 18;
    const easing = 0.12;

    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0, rafId: number | null = null;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      let clientX = 0, clientY = 0;
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }

      const x = clientX - cx;
      const y = clientY - cy;
      mouseX = x / (rect.width / 2);
      mouseY = y / (rect.height / 2);
    };

    const reset = () => { mouseX = 0; mouseY = 0; };

    const loop = () => {
      currentX += (mouseX - currentX) * easing;
      currentY += (mouseY - currentY) * easing;

      const rotY = -currentX * maxRotate;
      const rotX = currentY * maxRotate;
      const tz = (1 - Math.sqrt(currentX * currentX + currentY * currentY)) * translateZ;

      inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;

      const bgTx = -currentX * bgTranslate;
      const bgTy = -currentY * (bgTranslate / 2);
      bgLayer.style.transform = `translate3d(${bgTx}px, ${bgTy}px, 0) scale(1.06)`;

      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => { if (!rafId) loop(); };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("touchmove", onMove, { passive: true });
    card.addEventListener("mouseenter", startLoop);
    card.addEventListener("touchstart", startLoop, { passive: true });
    card.addEventListener("mouseleave", reset);
    card.addEventListener("touchend", reset);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("touchmove", onMove);
      card.removeEventListener("mouseenter", startLoop);
      card.removeEventListener("touchstart", startLoop);
      card.removeEventListener("mouseleave", reset);
      card.removeEventListener("touchend", reset);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-[86%] h-[86%] rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:border transition-colors duration-300
        hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={innerRef}
        className="w-full h-full flex items-center justify-center relative"
        style={{ transformStyle: "preserve-3d", transition: "transform 400ms cubic-bezier(.2,.9,.2,1)" }}
      >
        <div
          ref={bgRef}
          className="absolute inset-0 -z-10"
          style={{ transition: "transform 400ms cubic-bezier(.2,.9,.2,1)" }}
        >
          <Image src={src} alt="" fill className="object-cover brightness-95 opacity-10" />
        </div>

        <div className="relative w-full h-full">
          <div ref={imgRef} className="w-full h-full">
            <Image
              src={src}
              alt={title || "Tilt card"}
              fill
              className={`${contain ? "object-contain bg-black" : "object-cover"} rounded-2xl shadow-inner`}
            />
          </div>
          {(title || subtitle) && (
            <div className="absolute left-4 bottom-4 text-white drop-shadow-lg bg-black rounded-xl w-[30%]">
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
