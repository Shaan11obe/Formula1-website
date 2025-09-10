"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface TiltBannerProps {
  src: string;
  className?: string;
}

const TiltBanner: React.FC<TiltBannerProps> = ({ src, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const inner = innerRef.current;
    const bgLayer = bgRef.current;
    if (!card || !inner || !bgLayer) return;

    const maxRotate = 10;
    const translateZ = 15;
    const bgTranslate = 10;
    const easing = 0.12;

    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    let rafId: number | null = null;

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
      bgLayer.style.transform = `translate3d(${bgTx}px, ${bgTy}px, 0) scale(1.05)`;

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
    <div className={`w-[90%] min-w-6xl h-[400px] mx-auto rounded-2xl overflow-hidden ${className}`} ref={cardRef} style={{ perspective: "1000px" }}>
      <div ref={innerRef} className="w-full h-full relative" style={{ transformStyle: "preserve-3d", transition: "transform 400ms cubic-bezier(.2,.9,.2,1)" }}>
        <Image src={src} alt="Banner" fill className="object-contain rounded-2xl" />
      </div>
    </div>
  );
};

export default TiltBanner;
