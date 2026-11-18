import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

// Figma frame "2" (node 10533:9509) is laid out on a 1920px canvas
const DESIGN_WIDTH = 1920;

const PILLARS = [
  {
    title: "Heavy-Duty Multi-Tier Structural Mezzanines",
    description:
      "Maximize vertical cubic space. Our ecommerce fulfillment center construction integrates high-load structural steel mezzanines (500 kg/sq.m to 1,500 kg/sq.m) for multi-level shelving, packing stations, and office hubs.",
  },
  {
    title: "Suspended Conveyor & ESFR Roof Load Engineering",
    description:
      "Standard PEB roofs cannot hold suspended equipment. We engineer rafters with extra collateral dead-load capacity (30–50 kg/sq.m) to safely hang overhead conveyors, sorters, HVAC ducting, and ESFR fire sprinkler grids.",
  },
  {
    title: "Ultra-Flat Floors for Robotic AGVs & AMRs",
    description:
      "Automated guided vehicles require seamless, zero-joint surfaces. We deliver precision laser-screeded floors with anti-static and dust-proof hardeners.",
  },
  {
    title: "Separate Inbound & Rapid Outbound Dispatch Bays",
    description:
      "Our ecommerce distribution center construction layouts segregate bulk 40-ft container inbound docks from rapid-turnaround LCV/delivery van outbound bays to prevent yard bottlenecks during peak sale seasons.",
  },
  {
    title: "High-Workforce Welfare & Ventilation Design",
    description:
      "Fulfillment centers employ hundreds of pickers per shift. We integrate HVLS fans, forced ventilation louvers, acoustic insulation, and large ancillary blocks for cafeterias, lockers, and security check zones.",
  },
  {
    title: "Accelerated 150-Day Turnkey Delivery",
    description:
      "Launch before peak festive sale seasons. As a single-source fulfillment center construction company, our parallel civil and PEB workflow ensures guaranteed on-time commissioning.",
  },
];

const SUBTEXT =
  "E-commerce operations demand 24/7 uptime, thousands of workforce staff on shift, and heavy automation. As a specialized ecommerce warehouse contractor, we engineer buildings that accelerate order-to-dispatch cycles.";

/** Warehouse photo (Figma node 10813:3652) with the corner notch (part of the artwork) and the arrow mark sitting in it. */
function WarehouseImage({
  sizes,
  quality = 75,
}: {
  sizes: string;
  quality?: number;
}) {
  return (
    <div className="relative w-full">
      <Image
        src="/Images/why-corporates/ecommerce-warehouse-notch.webp"
        alt="Modern e-commerce warehouse with open dock bays, pallet racking and forklifts at sunset"
        width={1413}
        height={1113}
        quality={quality}
        sizes={sizes}
        className="h-auto w-full"
      />
      {/* arrow mark: 85x85 box at (937, 1.33) on the 1024x806.67 image */}
      <Image
        src="/Images/why-corporates/logo-arrow.png"
        alt=""
        width={340}
        height={340}
        sizes="(min-width: 1024px) 5vw, 9vw"
        className="absolute top-[0.165%] left-[91.5%] h-auto w-[8.3%]"
      />
    </div>
  );
}

/**
 * One "why choose us" section for every screen size (previously three copies).
 * Phones/tablets: heading, photo, then the pillar list stacked.
 * 1024px+: Figma frame (1920 wide, scaled): heading on top, photo pinned on the
 * left while the pillar list scrolls on the right.
 */
export default function WhyCorporatesSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="relative flex w-full flex-col gap-5 bg-white px-5 py-6 sm:gap-8 sm:px-0 sm:py-16 lg:block lg:w-[1920px] lg:pt-[70.67px] lg:pb-[60px]">
          {/* HEADING + INTRO (each desktop line is kept whole, as in the Figma two-line heading) */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:px-10 lg:ml-[106.67px] lg:w-[1016px] lg:gap-[16px] lg:px-0">
            <h2 className="text-[28px] leading-[32px] font-extrabold text-[#030303] sm:text-[40px] sm:leading-[1.15] sm:text-[#0A0A0A] lg:text-[54px] lg:leading-[60px] lg:whitespace-nowrap">
              Why Online Retail Giants Choose Us for{" "}
              <br className="hidden lg:block" />
              <span className="text-[25px] text-[#ED1D23] sm:text-[40px] lg:text-[54px] lg:whitespace-nowrap">
                <span className="whitespace-nowrap">E-Commerce</span> Warehouse
                Construction
              </span>
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#4A5565] sm:text-[16px] sm:leading-[26px] lg:w-[1016px] lg:text-[18px]">
              {SUBTEXT}
            </p>
          </div>

          {/* PHOTO + PILLARS (the wrapper disappears below 1024px so they stack in the column above) */}
          <div className="contents lg:mt-[28px] lg:flex lg:items-start">
            {/* image (x 0, y 294.67) stays pinned while the list scrolls */}
            <div className="sm:pr-10 lg:sticky lg:top-[60px] lg:mt-[8px] lg:w-[1024px] lg:shrink-0 lg:pr-0">
              <WarehouseImage sizes="(min-width: 1024px) 54vw, (min-width: 640px) 94vw, 65vw" />
            </div>

            <div className="sm:px-10 lg:ml-[118.67px] lg:w-[666.67px] lg:shrink-0 lg:px-0">
              <ol className="flex w-full flex-col gap-[2px] lg:gap-0">
                {PILLARS.map((pillar, index) => (
                  <li
                    key={pillar.title}
                    className="flex flex-col gap-[2px] lg:gap-0"
                  >
                    {index > 0 && (
                      <span
                        aria-hidden
                        className="ml-[48px] block h-px bg-[#E4E4E4] lg:my-[18px] lg:ml-0 lg:h-[1.333px] lg:w-[565.333px]"
                      />
                    )}
                    <div className="flex items-start gap-[12px] py-[12px] lg:flex-col lg:gap-0 lg:py-0">
                      <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full border border-solid border-[#FFE2E2] bg-[#FEF2F2] text-[14px] leading-[19.61px] font-bold text-[#ED2024] lg:h-[33.333px] lg:w-[90.625px] lg:justify-start lg:border-[0.98px] lg:pl-[16.67px] lg:leading-[19.608px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex min-w-0 flex-col gap-[6px] lg:gap-0">
                        <h3 className="text-[20px] leading-[22px] font-bold text-[#1A1A1A] lg:text-[24px] lg:leading-[42.667px]">
                          {pillar.title}
                        </h3>
                        <p className="text-[14px] leading-[20px] font-normal text-[#4A5565] lg:text-[16px] lg:leading-[26px]">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
