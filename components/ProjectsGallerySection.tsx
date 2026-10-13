import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

const VIEW_ALL_HREF = "https://www.mekark.com/projects/completed-projects";

type Tile = {
  src: string;
  alt: string;
  /** Rounded corner of the tile in the Figma grid (only outer-style corners are rounded) */
  radiusClass: string;
  /** Tailwind classes positioning the <img> inside the tile (Figma crop) */
  imageClass: string;
};

// 2 x 3 grid, left-to-right / top-to-bottom, as laid out in the Figma frame
const TILES: Tile[] = [
  {
    src: "/Images/gallery/p1.webp",
    alt: "Modern PEB warehouse with striped glazed facade",
    radiusClass: "rounded-tl-[32px]",
    imageClass: "absolute top-0 left-[0.02%] h-[101.74%] w-[101.65%] max-w-none",
  },
  {
    src: "/Images/gallery/p2.webp",
    alt: "Aerial view of a large white warehouse with loading docks",
    radiusClass: "rounded-tr-[32px]",
    imageClass: "absolute top-[-2.5%] left-[-5.01%] size-[104.97%] max-w-none",
  },
  {
    src: "/Images/gallery/p3.webp",
    alt: "Warehouse with brown glazed entrance",
    radiusClass: "rounded-bl-[32px]",
    imageClass:
      "absolute top-[-2.25%] left-[-11.16%] h-[119.15%] w-[119.17%] max-w-none",
  },
  {
    src: "/Images/gallery/p4.webp",
    alt: "Blue PEB warehouse on an industrial estate",
    radiusClass: "rounded-br-[32px]",
    imageClass: "absolute inset-0 size-full max-w-none object-cover",
  },
  {
    src: "/Images/gallery/p5.webp",
    alt: "Aerial view of a white PEB industrial warehouse",
    radiusClass: "rounded-bl-[32px]",
    imageClass:
      "absolute top-[-16.65%] left-[-3.05%] h-[116.64%] w-[116.44%] max-w-none",
  },
  {
    src: "/Images/gallery/p6.webp",
    alt: "Steel warehouse with blue trim and loading bays",
    radiusClass: "rounded-br-[32px]",
    imageClass:
      "absolute top-[-10.66%] left-[-10.82%] h-[110.75%] w-[110.81%] max-w-none",
  },
];

function Heading() {
  return (
    <div className="flex flex-col items-start gap-[14px]">
      <div className="flex w-full flex-col gap-[13px] font-bold min-[1024px]:w-[509px]">
        <p className="text-[14px] leading-[21.304px] tracking-[1.5978px] text-[#ED1D23] uppercase min-[1024px]:text-[16px]">
          our work
        </p>
        <h2 className="text-[40px] leading-[1.05] text-[#0F172A] sm:text-[52px] min-[1024px]:text-[66px]! min-[1024px]:leading-[60px]!">
          Projects <span className="text-[#ED1D23]">Gallery</span>
        </h2>
      </div>
      <p className="text-[16px] leading-[26px] font-medium text-[#64748B] sm:text-[20px] min-[1024px]:text-[24px]! min-[1024px]:leading-[36px]! min-[1024px]:whitespace-nowrap">
      Our Completed Projects Across India .
      </p>
    </div>
  );
}

function ViewAllButton({ className }: { className: string }) {
  return (
    <a
      href={VIEW_ALL_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center bg-[#C4161C] text-center font-extrabold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] ${className}`}
    >
      View All →
    </a>
  );
}

export default function ProjectsGallerySection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex w-[1920px] flex-col items-start gap-[52px] bg-[#F9F6F7] px-[80px] py-[52px]">
            <Heading />

            <div className="grid h-[1515.5px] w-full grid-cols-2 grid-rows-3 gap-[25px]">
              {TILES.map((tile) => (
                <div
                  key={tile.src}
                  className={`relative overflow-hidden bg-[#D9D9D9] ${tile.radiusClass}`}
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    width={1672}
                    height={941}
                    sizes="46vw"
                    className={tile.imageClass}
                  />
                </div>
              ))}
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="flex flex-col gap-[24px] px-[20px] py-[32px] sm:hidden">
        <div className="flex w-full flex-col gap-[12px]">
          <div className="flex w-full flex-col gap-[8px] font-bold">
            <p className="text-[12px] leading-[18px] tracking-[1.5978px] text-[#ED1D23] uppercase">
              our work
            </p>
            <h2 className="text-[28px] leading-[32px] whitespace-nowrap text-[#0F172A]">
              Projects <span className="text-[#ED1D23]">Gallery</span>
            </h2>
          </div>
          <p className="w-[307px] max-w-full text-[14px] leading-[20px] font-medium text-[#64748B]">
          Our Completed Projects Across India .
          </p>
        </div>

        <div className="flex w-full flex-col gap-[16px]">
          {TILES.map((tile) => (
            <div
              key={tile.src}
              className="relative aspect-[1672/941] w-full overflow-hidden rounded-[16px] bg-[#D9D9D9]"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden px-10 py-16 sm:max-[1023px]:block">
        <Heading />

        <div className="mt-8 grid grid-cols-2 gap-4">
          {TILES.map((tile) => (
            <div
              key={tile.src}
              className="relative aspect-[1672/941] overflow-hidden rounded-[16px] bg-[#D9D9D9]"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="50vw"
                  className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ViewAllButton className="rounded-[8.809px] px-10 py-4 text-[20px]" />
        </div>
      </div>
    </section>
  );
}
