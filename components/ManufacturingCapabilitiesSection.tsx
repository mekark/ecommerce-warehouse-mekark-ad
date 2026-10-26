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

export default function ManufacturingCapabilitiesSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex w-[1920px] flex-col items-start gap-[50px] bg-[#F9F6F7] px-[80px] py-[52px]">
            <h2 className="w-[1012px] text-[66px] leading-[60px] font-bold text-[#0F172A]">
              {HEADING}
            </h2>

            <div className="flex w-full gap-[24px] overflow-clip rounded-[24px]">
              {PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative h-[489px] w-[571px] shrink-0 overflow-hidden rounded-[10px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={75}
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px): Figma node 10617:11071 */}
      <div className="flex flex-col gap-[21px] bg-white px-[20px] py-[32px] sm:hidden">
        <h2 className="text-[28px] leading-[normal] font-bold text-[#0F172A]">
          {HEADING}
        </h2>

        {/* stacked 200px photos; only the stack's outer corners are rounded */}
        <ul className="flex w-full flex-col gap-[14px] overflow-clip rounded-[12px]">
          {PHOTOS.map((photo) => (
            <li key={photo.src} className="relative h-[200px] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={70}
                sizes="(min-width: 640px) 1px, 58vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* TABLET (640px - 1023px): three columns */}
      <div className="hidden flex-col gap-[32px] py-16 sm:max-[1023px]:flex">
        <h2 className="px-10 text-[40px] leading-[46px] font-bold text-[#0F172A]">
          {HEADING}
        </h2>

        <ul className="grid grid-cols-3 gap-[16px] px-10">
          {PHOTOS.map((photo) => (
            <li
              key={photo.src}
              className="relative aspect-[571/489] overflow-hidden rounded-[16px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={70}
                sizes="(min-width: 1024px) 1px, (min-width: 640px) 31vw, 1px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
