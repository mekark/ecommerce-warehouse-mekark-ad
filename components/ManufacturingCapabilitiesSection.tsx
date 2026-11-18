import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

// Figma frame "Desktop" (node 10814:13854) is laid out on a 1920px canvas
const DESIGN_WIDTH = 1920;

const HEADING = "Our Manufacturing Capabilities";

const PHOTOS = [
  {
    src: "/Images/manufacturing/fabrication-yard.webp",
    alt: "Steel fabrication yard with built-up beams under overhead cranes",
    width: 617,
    height: 572,
  },
  {
    src: "/Images/manufacturing/beam-welding-line.webp",
    alt: "Automated beam welding line with roller conveyor",
    width: 616,
    height: 574,
  },
  {
    src: "/Images/manufacturing/fabrication-shop.webp",
    alt: "Welder working on steel members in a PEB fabrication shop",
    width: 622,
    height: 578,
  },
];

/**
 * One manufacturing section for every screen size (previously three copies).
 * Phones: stacked 200px photos. Tablet: three columns. 1024px+: Figma frame
 * (1920 wide, scaled) with three 571 x 489 photos in a row.
 */
export default function ManufacturingCapabilitiesSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="flex w-full flex-col gap-[21px] bg-white px-5 py-8 sm:gap-8 sm:bg-[#F9F6F7] sm:px-10 sm:py-16 lg:w-[1920px] lg:items-start lg:gap-[50px] lg:px-[80px] lg:py-[52px]">
          <h2 className="text-[28px] leading-[normal] font-bold text-[#0F172A] sm:text-[40px] sm:leading-[46px] lg:w-[1012px] lg:text-[66px] lg:leading-[60px]">
            {HEADING}
          </h2>

          {/* phones: only the stack's outer corners are rounded */}
          <ul className="flex w-full flex-col gap-[14px] overflow-clip rounded-[12px] sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:rounded-none lg:flex lg:flex-row lg:gap-[24px] lg:overflow-clip lg:rounded-[24px]">
            {PHOTOS.map((photo) => (
              <li
                key={photo.src}
                className="relative h-[200px] w-full overflow-hidden sm:aspect-[571/489] sm:h-auto sm:rounded-[16px] lg:aspect-auto lg:h-[489px] lg:w-[571px] lg:shrink-0 lg:rounded-[10px]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={75}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 31vw, 58vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </ScaledCanvas>
    </section>
  );
}
