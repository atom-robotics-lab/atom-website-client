"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from next/image
import { cn } from "../ui/lib/utils"; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import Font Awesome icons

type CardProps = {
  card: {
    circleImageSrc?: string; // Optional image source for the circle
    name: string;
    description?: string; // Optional description
    instagramLink: string;
    githubLink: string;
    linkedinLink?: string; // Optional LinkedIn link
  };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

const Card = React.memo(({ card, index, hovered, setHovered }: CardProps) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "relative w-60 h-60 md:w-72 md:h-72 transition-all duration-300 ease-out bg-transparent", // Completely transparent background
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {/* Circle Image Overlapping the Card */}
    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden z-10">
      <Image
        src={card.circleImageSrc || "/default-circle-image.jpg"} // Default image if no circleImageSrc provided
        alt="Circle image"
        fill
        className="object-cover"
      />
    </div>
    {/* Overlay with Card Details */}
    <div
      className={cn(
        "absolute inset-0 bg-transparent flex flex-col items-center justify-center mt-24 py-4 px-2 text-center transition-opacity duration-300", // Adjusted margin for content positioning
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <p className="text-white text-lg font-semibold mb-2">{card.name}</p>
      {card.description && (
        <p className="text-white text-sm mb-2">{card.description}</p>
      )}
      <div className="mt-2 flex space-x-4">
        {card.instagramLink && (
          <a
            href={card.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
        )}
        {card.githubLink && (
          <a
            href={card.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
        )}
        {card.linkedinLink && (
          <a
            href={card.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: { circleImageSrc?: string; name: string; description?: string; instagramLink: string; githubLink: string; linkedinLink?: string }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.circleImageSrc || card.name} // Ensure uniqueness
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
