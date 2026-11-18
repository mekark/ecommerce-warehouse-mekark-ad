import Image from "next/image";
import { ArrowLeftRight, Building2, Warehouse, type LucideIcon } from "lucide-react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

// Figma frame (node 10912:145) is laid out on a 1920px canvas
const DESIGN_WIDTH = 1920;

type Facility = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const FACILITIES: Facility[] = [
  {
    title: "National & Regional Fulfillment Centers (FCs)",
    description:
      "Large-format 1,00,000+ sq. ft. facilities with G+3 pick-tower mezzanines, battery charging rooms, and high-capacity HT electrical substations.",
    icon: Warehouse,
  },
  {
    title: "Automated Parcel Sortation Hubs",
    description:
      "Wide clear-span buildings with dual-side dock doors and column-free floor plates for linear shoe sorters and cross-belt loop sorters.",
    icon: ArrowLeftRight,
  },
  {
    title: "Omnichannel Retail Distribution Centers",
    description:
      "Hybrid storage and piece-picking hubs combining pallet racking with automated packaging lines.",
    icon: Building2,
  },
];

/**
 * One facility section for every screen size (previously three copies).
 * - phones: photo fades in behind the heading, items stacked with dividers
 * - 640px+: full-width photo on top, then heading and a 3-column list
 * - 1024px+: Figma frame (1920 wide, scaled): photo left, heading right, 3 columns below
 */
export default function FacilityConfigSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="relative w-full overflow-hidden bg-[#F9F6F7] pb-[40px] sm:pb-16 lg:h-[603px] lg:w-[1920px] lg:pb-0">
          {/* PHOTO */}
          <div className="absolute top-[-22.56vw] left-[-0.26vw] aspect-[698/378] w-[179vw] sm:top-0 sm:left-0 sm:aspect-[1672/940] sm:w-full lg:top-[-168px] lg:aspect-auto lg:h-[652px] lg:w-[1216px]">
            <Image
              src="/Images/facility/facility-bg.webp"
              alt="E-commerce fulfillment warehouse with loading docks and trucks"
              fill
              quality={75}
              sizes="(min-width: 1024px) 64vw, (min-width: 640px) 100vw, 116vw"
              className="object-cover"
            />
          </div>

          {/* CONTENT (the wrapper disappears at 1024px so its children can be placed on the Figma frame) */}
          <div className="relative mt-[55.13vw] flex flex-col gap-[20px] px-5 sm:mt-[56.22vw] sm:gap-10 sm:px-10 sm:pt-2 lg:contents">
            <div className="flex flex-col gap-[8px] font-bold sm:gap-[10px] lg:absolute lg:top-[72px] lg:left-[977px] lg:w-[863px]">
              <p className="text-[12px] leading-[16px] tracking-[1.5978px] text-[#ED1D23] uppercase sm:text-[14px] sm:leading-[18px] sm:tracking-[1.5px] lg:text-[16px] lg:leading-[21.304px] lg:tracking-[1.5978px]">
                {/* keep "We Deliver" together so the line never breaks before "Deliver" alone */}
                E-Commerce Facility Configurations{" "}
                <span className="whitespace-nowrap">We Deliver</span>
              </p>
              <h2 className="text-[28px] leading-[32px] font-extrabold text-[#0F172A] sm:text-[40px] sm:leading-[46px] sm:font-bold lg:text-[66px] lg:leading-[73.333px]">
                Tailored E-Commerce{" "}
                <span className="text-[#ED1D23]">
                  Logistics Warehouse Construction
                </span>
              </h2>
            </div>

            <ul className="flex flex-col gap-[16px] sm:grid sm:grid-cols-3 sm:gap-6 lg:absolute lg:top-[383px] lg:left-1/2 lg:flex lg:w-[1761px] lg:-translate-x-1/2 lg:flex-row lg:items-start lg:gap-[24px]">
              {FACILITIES.map(({ title, description, icon: Icon }, index) => {
                const last = index === FACILITIES.length - 1;

                return (
                  <li
                    key={title}
                    className={`flex items-start gap-[12px] pb-[16px] sm:flex-col sm:gap-[10px] sm:border-b-0 sm:pb-0 lg:h-[160px] lg:w-[571px] ${
                      index === 0 ? "pt-[16px] sm:pt-0" : ""
                    } ${
                      last
                        ? ""
                        : "border-b border-solid border-[#B5B5B5]/40 lg:border-r lg:border-[#D7D7D7]/60"
                    }`}
                  >
                    <Icon
                      aria-hidden
                      className="size-[24px] shrink-0 text-[#ED1D23] [stroke-width:2] sm:size-[36px] sm:[stroke-width:1.67] lg:size-[40px]"
                    />
                    <div className="flex min-w-0 flex-1 flex-col gap-[8px] sm:w-full sm:flex-none lg:gap-[12px]">
                      <h3 className="text-[20px] leading-[24px] font-bold text-black sm:font-semibold lg:text-[24px] lg:leading-[26px]">
                        {title}
                      </h3>
                      <p
                        className={`text-[14px] leading-[20px] font-normal text-[#6E6E6E] sm:text-[15px] sm:leading-[22px] lg:text-[18px] lg:leading-[24px] ${
                          last ? "" : "lg:max-w-[527px]"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
