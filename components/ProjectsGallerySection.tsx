"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

const VIEW_ALL_HREF = "https://www.mekark.com/projects/completed-projects";

type Tile = {
  src: string;
  alt: string;
  /** Rounded corner of the tile in the Figma grid (desktop only; outer-style corners) */
  radiusClass: string;
  /** Extra classes for the phone object-cover crop (e.g. slight zoom) */
  coverClass?: string;
};

// 2 x 3 grid, left-to-right / top-to-bottom, as laid out in the Figma frame
const TILES: Tile[] = [
  {
    src: "/Images/gallery/p1.webp",
    alt: "Modern PEB warehouse with striped glazed facade",
    radiusClass: "lg:rounded-tl-[32px]",
  },
  {
    src: "/Images/gallery/p2.webp",
    alt: "Aerial view of a large white warehouse with loading docks",
    radiusClass: "lg:rounded-tr-[32px]",
  },
  {
    src: "/Images/gallery/p3-red-white-warehouse.webp",
    alt: "Large industrial warehouse with red and white cladding and trucks at the loading docks",
    radiusClass: "lg:rounded-bl-[32px]",
  },
  {
    src: "/Images/gallery/p4.webp",
    alt: "Blue PEB warehouse on an industrial estate",
    radiusClass: "lg:rounded-br-[32px]",
  },
  {
    src: "/Images/gallery/p5-green-beige-warehouse.webp",
    alt: "Aerial view of a long green and beige distribution warehouse with loading bays",
    radiusClass: "lg:rounded-bl-[32px]",
  },
  {
    src: "/Images/gallery/p6.webp",
    alt: "Steel warehouse with blue trim and loading bays",
    radiusClass: "lg:rounded-br-[32px]",
    /** Phone-only: slight zoom + shift left */
    coverClass: "max-sm:scale-[1.18] max-sm:-translate-x-[6%]",
  },
];

/** Shuffle image content; keep corner radii fixed to grid slots. */
function shuffleTiles(tiles: Tile[]): Tile[] {
  const images = tiles.map(({ src, alt, coverClass }) => ({
    src,
    alt,
    coverClass,
  }));
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }
  return images.map((img, i) => ({
    ...img,
    radiusClass: tiles[i].radiusClass,
  }));
}

/**
 * One gallery for every screen size (previously three copies).
 * Phones: 1 column. Tablet: 2 columns plus a "View All" button.
 * 1024px+: Figma frame (1920 wide, scaled) with a 2 x 3 grid and rounded outer corners.
 */
export default function ProjectsGallerySection() {
  const [tiles, setTiles] = useState(TILES);

  useEffect(() => {
    setTiles(shuffleTiles(TILES));
  }, []);

  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="flex w-full flex-col gap-6 bg-[#F9F6F7] px-5 py-8 sm:gap-8 sm:px-10 sm:py-16 lg:w-[1920px] lg:items-start lg:gap-[52px] lg:px-[80px] lg:py-[52px]">
          <div className="flex w-full flex-col gap-[8px] font-bold sm:gap-[13px] lg:w-[509px]">
            <p className="text-[12px] leading-[18px] tracking-[1.5978px] text-[#ED1D23] uppercase sm:text-[14px] sm:leading-[21.304px] lg:text-[16px]">
              our work
            </p>
            <h2 className="text-[28px] leading-[32px] whitespace-nowrap text-[#0F172A] sm:text-[52px] sm:leading-[1.05] sm:whitespace-normal lg:text-[66px] lg:leading-[60px]">
              Projects <span className="text-[#ED1D23]">Gallery</span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[1515.5px] lg:grid-rows-3 lg:gap-[25px]">
            {tiles.map((tile) => (
              <div
                key={tile.src}
                className={`relative aspect-[1672/941] overflow-hidden rounded-[16px] bg-[#D9D9D9] lg:aspect-auto lg:rounded-none ${tile.radiusClass}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 46vw, (min-width: 640px) 50vw, 58vw"
                  className={`object-cover ${tile.coverClass ?? ""}`}
                />
              </div>
            ))}
          </div>

          {/* tablet only, as in the previous layout */}
          <div className="hidden justify-center sm:flex lg:hidden">
            <a
              href={VIEW_ALL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-[8.809px] bg-[#C4161C] px-10 py-4 text-center text-[20px] font-extrabold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)]"
            >
              View All →
            </a>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
