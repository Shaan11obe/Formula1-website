"use client";

import React from "react";
import Image from "next/image";
import { withBasePath } from "@/utils/basePath";

type CardProps = {
  image: string; // expects "/mclaren-logo.png" or "/teams/mclaren-logo.png"
  title: string;
  description?: string;
  href?: string;
};

const Card: React.FC<CardProps> = ({ image, title, description, href = "#" }) => {
  // Normalize in case someone passes "public/"
  const normalizedImage = image.replace(/^\/?public\//, "/");

  return (
    <a
      href={href}
      className="block max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={withBasePath(normalizedImage)}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
          sizes="(max-width: 768px) 100vw, 300px"
          priority={false}
        />
      </div>

      {/* Text */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        )}
      </div>
    </a>
  );
};

export default Card;