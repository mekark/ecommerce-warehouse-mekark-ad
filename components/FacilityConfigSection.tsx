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

const EYEBROW = "E-Commerce Facility Configurations We Deliver";

export default function FacilityConfigSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="relative flex h-[603px] w-[1920px] flex-col items-center gap-[20px] overflow-hidden bg-[#F9F6F7] pb-[60px]">
            <div className="relative h-[363px] w-full shrink-0">
              <div className="absolute top-[-168px] left-0 h-[652px] w-[1216px]">
                <Image
                  src="/Images/facility/facility-bg.webp"
                  alt="E-commerce fulfillment warehouse with loading docks and trucks"
                  fill
                  quality={75}
                  sizes="64vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[72px] left-[977px] flex w-[863px] flex-col gap-[10px] font-bold">
                <p className="text-[16px] leading-[21.304px] tracking-[1.5978px] text-[#ED1D23] uppercase">
                  {EYEBROW}
                </p>
                <h2 className="text-[66px] leading-[73.333px] text-[#0F172A]">
                  Tailored E-Commerce{" "}
                  <span className="text-[#ED1D23]">
                    Logistics Warehouse Construction
                  </span>
                </h2>
              </div>
            </div>

            <ul className="relative flex shrink-0 items-start gap-[24px]">
              {FACILITIES.map(({ title, description, icon: Icon }, index) => (
                <li
                  key={title}
                  className={`flex h-[160px] w-[571px] flex-col items-start gap-[10px] ${
                    index < FACILITIES.length - 1
                      ? "border-r border-solid border-[#D7D7D7]/60"
                      : ""
                  }`}
                >
                  <Icon
                    size={40}
                    strokeWidth={1.67}
                    className="text-[#ED1D23]"
                    aria-hidden
                  />
                  <div className="flex w-full flex-col gap-[12px]">
                    <h3 className="text-[24px] leading-[26px] font-semibold text-black">
                      {title}
                    </h3>
                    <p
                      className={`text-[18px] leading-[24px] font-normal text-[#6E6E6E] ${
                        index < FACILITIES.length - 1 ? "max-w-[527px]" : ""
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px): Figma node 10912:88, laid out on a 390px frame (vw = px / 3.9) */}
      <div className="relative overflow-hidden pb-[40px] sm:hidden">
        {/* photo box: 698x378 at (-1, -88), fading into the background behind the heading */}
        <div className="absolute top-[-22.56vw] left-[-0.26vw] aspect-[698/378] w-[179vw]">
          <Image
            src="/Images/facility/facility-bg.webp"
            alt="E-commerce fulfillment warehouse with loading docks and trucks"
            fill
            quality={70}
            sizes="(min-width: 640px) 1px, 116vw"
            className="object-cover"
          />
        </div>

        <div className="relative mt-[55.13vw] flex flex-col gap-[20px] px-5">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] leading-[16px] font-bold tracking-[1.5978px] text-[#ED1D23] uppercase">
              {/* keep "We Deliver" together so the line never breaks before "Deliver" alone */}
              E-Commerce Facility Configurations{" "}
              <span className="whitespace-nowrap">We Deliver</span>
            </p>
            <h2 className="text-[28px] leading-[32px] font-extrabold text-[#0F172A]">
              Tailored E-Commerce{" "}
              <span className="text-[#ED1D23]">
                Logistics Warehouse Construction
              </span>
            </h2>
          </div>

          <ul className="flex flex-col gap-[16px]">
            {FACILITIES.map(({ title, description, icon: Icon }, index) => (
              <li
                key={title}
                className={`flex items-start gap-[12px] pb-[16px] ${
                  index === 0 ? "pt-[16px]" : ""
                } ${
                  index < FACILITIES.length - 1
                    ? "border-b border-solid border-[#B5B5B5]/40"
                    : ""
                }`}
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                  className="shrink-0 text-[#ED1D23]"
                  aria-hidden
                />
                <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
                  <h3 className="text-[20px] leading-[24px] font-bold text-black">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[20px] font-normal text-[#6E6E6E]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden flex-col sm:max-[1023px]:flex">
        <div className="relative aspect-[1672/940] w-full overflow-hidden">
          <Image
            src="/Images/facility/facility-bg.webp"
            alt="E-commerce fulfillment warehouse with loading docks and trucks"
            fill
            quality={70}
            sizes="(min-width: 1024px) 1px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-10 px-10 pt-2 pb-16">
          <div className="flex flex-col gap-[10px] font-bold">
            <p className="text-[12px] leading-[18px] tracking-[1.5px] text-[#ED1D23] uppercase sm:text-[14px]">
              {EYEBROW}
            </p>
            <h2 className="text-[28px] leading-[32px] text-[#0F172A] sm:text-[40px] sm:leading-[46px]">
              Tailored E-Commerce{" "}
              <span className="text-[#ED1D23]">
                Logistics Warehouse Construction
              </span>
            </h2>
          </div>

          <ul className="flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-6">
            {FACILITIES.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex flex-col items-start gap-[10px] border-b border-solid border-[#D7D7D7] pb-6 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0"
              >
                <Icon
                  size={36}
                  strokeWidth={1.67}
                  className="text-[#ED1D23]"
                  aria-hidden
                />
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[20px] leading-[24px] font-semibold text-black">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[20px] font-normal text-[#6E6E6E] sm:text-[15px] sm:leading-[22px]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
