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

function Pillars({ desktop = false }: { desktop?: boolean }) {
  if (!desktop) {
    return (
      <ol className="flex w-full flex-col gap-[2px]">
        {PILLARS.map((pillar, index) => (
          <li key={pillar.title} className="flex flex-col gap-[2px]">
            {index > 0 && (
              <span aria-hidden className="ml-[48px] block h-px bg-[#E4E4E4]" />
            )}
            <div className="flex items-start gap-[12px] py-[12px]">
              <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full border border-solid border-[#FFE2E2] bg-[#FEF2F2] text-[14px] leading-[19.61px] font-bold text-[#ED2024]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-col gap-[6px]">
                <h3 className="text-[20px] leading-[22px] font-bold text-[#1A1A1A]">
                  {pillar.title}
                </h3>
                <p className="text-[14px] leading-[20px] font-normal text-[#4A5565]">
                  {pillar.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="flex w-full flex-col">
      {PILLARS.map((pillar, index) => (
        <li key={pillar.title} className="flex flex-col">
          {index > 0 && (
            <span
              aria-hidden
              className="my-[18px] block h-[1.333px] w-[565.333px] bg-[#E4E4E4]"
            />
          )}
          <div className="flex flex-col items-start">
            <span className="flex h-[33.333px] w-[90.625px] items-center rounded-full border-[0.98px] border-solid border-[#FFE2E2] bg-[#FEF2F2] pl-[16.67px] text-[14px] leading-[19.608px] font-bold text-[#ED2024]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[24px] leading-[42.667px] font-bold text-[#1A1A1A]">
              {pillar.title}
            </h3>
            <p className="text-[16px] leading-[26px] font-normal text-[#4A5565]">
              {pillar.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function WhyCorporatesSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="relative w-[1920px] bg-white pt-[70.67px] pb-[139px]">
            {/* heading at x 106.67; each line is kept whole, as in the Figma two-line heading */}
            <div className="ml-[106.67px] flex w-[1016px] flex-col gap-[16px]">
              <h2 className="text-[54px] leading-[60px] font-extrabold whitespace-nowrap text-[#0A0A0A]">
                Why Online Retail Giants Choose Us for
                <br />
                <span className="text-[#ED1D23]">
                  E-Commerce Warehouse Construction
                </span>
              </h2>
              <p className="w-[1016px] text-[18px] leading-[26px] font-normal text-[#4A5565]">
                {SUBTEXT}
              </p>
            </div>

            {/* image (x 0, y 294.67) stays pinned while the list (x 1142.67, y 286.67) scrolls */}
            <div className="mt-[28px] flex items-start">
              <div className="sticky top-[60px] mt-[8px] w-[1024px] shrink-0">
                <WarehouseImage sizes="54vw" />
              </div>
              <div className="ml-[118.67px] w-[666.67px] shrink-0">
                <Pillars desktop />
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px): Figma node 10578:14573 */}
      <div className="flex flex-col gap-[20px] px-5 py-6 sm:hidden">
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-[28px] leading-[32px] font-extrabold text-[#030303]">
            Why Online Retail Giants Choose Us for{" "}
            <span className="text-[25px] text-[#ED1D23]">
              <span className="whitespace-nowrap">E-Commerce</span> Warehouse
              Construction
            </span>
          </h2>
          <p className="text-[14px] leading-[20px] font-normal text-[#4A5565]">
            {SUBTEXT}
          </p>
        </div>

        <WarehouseImage
          sizes="(min-width: 640px) 1px, 65vw"
          quality={70}
        />

        <Pillars />
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden flex-col gap-8 py-16 sm:max-[1023px]:flex">
        <div className="flex flex-col gap-4 px-10">
          <h2 className="text-[40px] leading-[1.15] font-extrabold text-[#0A0A0A]">
            Why Online Retail Giants Choose Us for{" "}
            <span className="text-[#ED1D23]">
              <span className="whitespace-nowrap">E-Commerce</span> Warehouse
              Construction
            </span>
          </h2>
          <p className="text-[16px] leading-[26px] font-normal text-[#4A5565]">
            {SUBTEXT}
          </p>
        </div>

        <div className="pr-10">
          <WarehouseImage sizes="94vw" />
        </div>

        <div className="px-10">
          <Pillars />
        </div>
      </div>
    </section>
  );
}
