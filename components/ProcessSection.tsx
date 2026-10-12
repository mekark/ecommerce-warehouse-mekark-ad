import { manrope, spaceGrotesk } from "@/lib/fonts";
import {
  ClipboardCheck,
  DraftingCompass,
  Factory,
  HardHat,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import ScaledCanvas from "@/components/ScaledCanvas";

// Figma frame is 1707px of content + 80px padding on each side
const DESIGN_WIDTH = 1867;

type Step = {
  number: string;
  title: string;
  /** Phone layout uses a different title in Figma */
  mobileTitle?: string;
  description: string;
  icon: LucideIcon;
  /** Absolute left offset / width of the column in the Figma frame */
  left: number;
  width: number;
  descriptionColor: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Site & Feasibility Study",
    mobileTitle: "Site & Project Feasibility",
    description: "Soil testing, approvals, truck access, and budget checks.",
    icon: ClipboardCheck,
    left: -1,
    width: 270,
    descriptionColor: "text-[#64748B]",
  },
  {
    number: "02",
    title: "Layout & Engineering",
    description: "In-house structural design planned around receiving, racking, packing and dispatch flow.",
    icon: DraftingCompass,
    left: 298,
    width: 272,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description: "Precision-made columns, rafters, and purlins, made in-house.",
    icon: Factory,
    left: 598,
    width: 268,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "04",
    title: "On-Site Erection",
    description: "Quick structural assembly with minimal site disruption.",
    icon: HardHat,
    left: 894,
    width: 271,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "05",
    title: "Quality Checks",
    mobileTitle: "Quality Validation",
    description: "Inspection, installation & compliance checks.",
    icon: ShieldCheck,
    left: 1193,
    width: 271,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "06",
    title: "Handover & Support",
    description: "Snag clearance, documentation, and after-sales support.",
    icon: Truck,
    left: 1492,
    width: 270,
    descriptionColor: "text-[#9A9A9A]",
  },
];

function StepIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative z-10 flex h-[92px] w-[100px] shrink-0 items-center justify-center rounded-[18px] border-[0.917px] border-solid border-[#E4DFE0] bg-white">
      <Icon size={40} strokeWidth={2} className="text-[#ED1D23]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2 className="text-[34px] leading-[1.15] font-bold text-[#0F172A] min-[1024px]:w-[1597px] min-[1024px]:text-[66px] min-[1024px]:leading-[73.333px]">
        Our Turnkey{" "}
        <span className="text-[#ED1D23]">Ecommerce Warehouse Construction</span>
      </h2>
      <p className="text-[18px] leading-[20px] font-normal text-[#64748B] min-[1024px]:text-[24px]">
        As a fulfilment centre construction company, we follow a proven 6-step process to ensure on-time delivery.
      </p>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex flex-col items-start p-[80px]">
            <div className="flex w-[1707px] flex-col gap-[50px]">
              <Heading />

              <div className="flex w-full flex-col items-center justify-center gap-[50px]">
                <div className="relative h-[271px] w-full">
                  {/* connector line */}
                  <div className="absolute top-[47px] left-[72px] h-[1.333px] w-[1430px] bg-[#E4DFE0]" />

                  {STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="absolute top-0 flex flex-col items-start gap-[53px]"
                      style={{ left: step.left, width: step.width }}
                    >
                      <StepIcon icon={step.icon} />

                      <div className="flex w-full flex-col items-start gap-[12px]">
                        <p
                          className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#ED1D23]`}
                        >
                          {step.number}
                        </p>
                        <p className="w-full text-[21px] leading-[normal] font-bold text-[#080808]">
                          {step.title}
                        </p>
                        <p
                          className={`text-[18px] leading-[24px] font-normal ${step.descriptionColor}`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden px-10 py-16 sm:max-[1023px]:block">
        <Heading />

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {STEPS.map((step) => (
            <li key={step.number} className="flex flex-col items-start gap-6">
              <StepIcon icon={step.icon} />
              <div className="flex flex-col gap-3">
                <p
                  className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#ED1D23]`}
                >
                  {step.number}
                </p>
                <p className="text-[21px] leading-[normal] font-bold text-[#080808]">
                  {step.title}
                </p>
                <p
                  className={`text-[18px] leading-[24px] font-normal ${step.descriptionColor}`}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* MOBILE (below 640px): vertical timeline */}
      <div className="px-5 pt-8 pb-10 sm:hidden">
        <div className="mx-auto flex w-full max-w-[350px] flex-col items-center gap-[24px]">
          <div className="flex w-full max-w-[324px] flex-col gap-[12px]">
            <h2 className="text-[26px] leading-[34px] font-bold text-[#0F172A]">
              Our Turnkey{" "}
              <span className="text-[#ED1D23]">
                Ecommerce
                <br />
                Warehouse Construction
              </span>
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#64748B]">
              As a fulfilment centre construction company, we follow a proven 6-step process to ensure on-time delivery.
            </p>
          </div>

          <ol className="relative flex w-full flex-col gap-[26px]">
            {/* timeline rail, runs behind the numbered circles */}
            <span
              aria-hidden
              className="absolute top-[25px] bottom-[33px] left-[16px] w-px -translate-x-1/2 bg-[#BCBCBC]"
            />

            {STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className="relative flex items-center gap-[17px]"
                >
                  <span
                    className={`${spaceGrotesk.className} relative flex size-[33px] shrink-0 items-center justify-center rounded-full bg-[#F9F6F7] text-[14px] leading-[normal] font-bold text-[#080808]`}
                  >
                    {/* dashed ring: 8 dashes around the circle */}
                    <svg
                      aria-hidden
                      viewBox="0 0 33 33"
                      className="absolute inset-0 size-full"
                    >
                      <circle
                        cx="16.5"
                        cy="16.5"
                        r="16"
                        fill="none"
                        stroke="#BCBCBC"
                        strokeWidth="1"
                        pathLength="100"
                        strokeDasharray="7.5 5"
                      />
                    </svg>
                    {step.number}
                  </span>

                  <div className="flex min-w-0 items-center gap-[10px] rounded-[6px] bg-[#FFFCFC] py-[6px] pr-[9px] pl-[10px] drop-shadow-[-1px_1px_3px_rgba(30,30,30,0.1)]">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="shrink-0 text-[#ED1D23]"
                    />
                    <div className="flex min-w-0 flex-col gap-px">
                      <p className="text-[16px] leading-[normal] font-semibold text-[#0F172A]">
                        {step.mobileTitle ?? step.title}
                      </p>
                      <p className="text-[12px] leading-[20px] font-normal text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

        </div>
      </div>
    </section>
  );
}
