"use client";

import React from "react";

type CardProps = {
  image: string;
  title: string;
  description?: string;
  href?: string;
};

const Card: React.FC<CardProps> = ({ image, title, description, href = "#" }) => {
  return (
    <a
      href={href}
      className="block max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

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
