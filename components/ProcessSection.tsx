import Image from "next/image";
import { inter, manrope, spaceGrotesk } from "@/lib/fonts";
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

// Figma frame "3" (node 10533:9256): 1920 x 620, 1760px of content centred
const DESIGN_WIDTH = 1920;

type Step = {
  number: string;
  title: string;
  /** Phone layout uses a different title in Figma */
  mobileTitle?: string;
  description: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Site & Feasibility Study",
    mobileTitle: "Site & Project Feasibility",
    description: "Soil testing, approvals, truck access, and budget checks.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Layout & Engineering",
    description: "In-house structural design planned around receiving, racking, packing and dispatch flow.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description: "Precision-made columns, rafters, and purlins, made in-house.",
    icon: Factory,
  },
  {
    number: "04",
    title: "On-Site Erection",
    description: "Quick structural assembly with minimal site disruption.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Quality Checks",
    mobileTitle: "Quality Validation",
    description: "Inspection, installation & compliance checks.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Handover & Support",
    description: "Snag clearance, documentation, and after-sales support.",
    icon: Truck,
  },
];

function Heading({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2
        className={`font-bold text-white ${
          compact
            ? "text-[26px] leading-[34px] sm:text-[40px] sm:leading-[1.15]"
            : "text-[66px] leading-[73.333px]"
        }`}
      >
        Our Turnkey{" "}
        <span className="text-[#ED1D23]">Ecommerce Warehouse Construction</span>
      </h2>
      <p
        className={`${inter.className} font-normal text-[#A6A6A6] ${
          compact
            ? "text-[14px] leading-[20px] sm:text-[18px] sm:leading-[26px]"
            : "text-[24px] leading-[20px]"
        }`}
      >
        As a fulfilment centre construction company, we follow a proven 6-step process to ensure on-time delivery.
      </p>
    </div>
  );
}

function StepText({ step }: { step: Step }) {
  return (
    <div className="flex w-full flex-col items-start gap-[12px]">
      <p className="w-full text-[21px] leading-[24px] font-bold text-white">
        {step.title}
      </p>
      <p className="text-[18px] leading-[22.667px] font-normal text-[#949494]">
        {step.description}
      </p>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden bg-[#EEEEEE] sm:bg-[#212121]`}
    >
      {/* warehouse photo fading in from the top right (Figma's luminance mask, pre-baked) */}
      <Image
        src="/Images/process/process-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="hidden object-cover object-right-top sm:block"
      />
      {/* taller phone/tablet layouts stretch the photo over all the text, so tone it down */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,33,33,0.55)_0%,rgba(33,33,33,0.85)_45%,#212121_100%)] hidden sm:block min-[1024px]:hidden"
      />

      {/* DESKTOP: Figma frame, scaled to the viewport */}
      <div className="relative hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex h-[620px] w-[1920px] items-center justify-center">
            <div className="flex w-[1760px] flex-col gap-[50px]">
              <Heading />

              <ol className="relative flex items-start gap-[28px]">
                {/* connector line through the step dots */}
                <span
                  aria-hidden
                  className="absolute top-[71.5px] left-[27px] h-px w-[1477px] bg-[#474747]"
                />

                {STEPS.map((step) => {
                  const Icon = step.icon;

                  return (
                    <li
                      key={step.number}
                      className="relative h-[279px] w-[270px] shrink-0"
                    >
                      <p
                        className={`${spaceGrotesk.className} absolute top-[20.33px] left-[2px] text-[26px] leading-[21.333px] font-bold text-[#797979]`}
                      >
                        {step.number}
                      </p>
                      {/* red dot on the line, with a short stem down towards the icon */}
                      <span
                        aria-hidden
                        className="absolute top-[64px] left-[11px] size-[16px] rounded-full bg-[#ED1D23]"
                      />
                      <span
                        aria-hidden
                        className="absolute top-[80px] left-[19px] h-[24px] w-px bg-[#474747]"
                      />

                      <div className="absolute top-[115px] left-0 flex w-[270px] flex-col items-start gap-[20px]">
                        <Icon
                          size={40}
                          strokeWidth={2}
                          className="shrink-0 text-[#ED1D23]"
                        />
                        <StepText step={step} />
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="relative hidden px-10 py-16 sm:max-[1023px]:block">
        <Heading compact />

        <ol className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="flex flex-col items-start gap-5 border-t border-solid border-[#474747] pt-5"
              >
                <div className="flex w-full items-center justify-between">
                  <Icon size={40} strokeWidth={2} className="text-[#ED1D23]" />
                  <p
                    className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#797979]`}
                  >
                    {step.number}
                  </p>
                </div>
                <StepText step={step} />
              </li>
            );
          })}
        </ol>
      </div>

      {/* MOBILE (below 640px): light timeline, Figma node 10533:10237 */}
      <div className="relative sm:hidden">
        {/* faded warehouse photo, fading out to the page colour from the top right */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-[579px] w-[390px] -translate-x-1/2 opacity-25"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Images/process/process-bg-mobile.webp"
              alt=""
              width={1360}
              height={453}
              sizes="1360px"
              className="absolute top-[0.06%] left-[-124.17%] h-[78.26%] w-[348.57%] max-w-none"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(454px_401px_at_362px_23px,rgba(0,0,0,0)_0%,rgba(63,63,63,0.28)_19%,rgba(95,95,95,0.42)_29%,rgba(126,126,126,0.56)_38%,rgba(168,168,168,0.75)_60%,rgba(203,203,203,0.83)_71%,rgba(238,238,238,0.91)_83%,#EEEEEE_100%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[390px] flex-col gap-[24px] px-5 pt-8 pb-10">
          <div className="flex flex-col gap-[6px]">
            <h2 className="-mr-4 text-[28px] leading-[34px] font-bold text-[#0F172A]">
              Our Turnkey{" "}
              <span className="text-[#ED1D23]">
                Ecommerce
                <br />
                <span className="tracking-[-0.03em] whitespace-nowrap">
                  Warehouse Construction
                </span>
              </span>
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#64748B]">
              As a fulfilment centre construction company, we follow a proven 6-step process to ensure on-time delivery.
            </p>
          </div>

          <ol className="flex w-full flex-col gap-[14px]">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={step.number} className="relative flex items-start gap-[5px]">
                  {/* line down to the next step's icon */}
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-[16px] left-[16px] h-[calc(100%+14px)] w-px bg-[#BCBCBC]"
                    />
                  )}
                  <span className="relative z-10 flex size-[33px] shrink-0 items-center justify-center rounded-full bg-white drop-shadow-[0px_1px_3px_rgba(30,30,30,0.25)]">
                    <Icon size={18} strokeWidth={2} className="text-[#ED1D23]" />
                  </span>

                  <div className="flex min-w-0 items-start gap-[10px] px-[10px] py-[6px]">
                    <span
                      className={`${spaceGrotesk.className} shrink-0 text-[16px] leading-[normal] font-bold text-[#ED1D23]`}
                    >
                      {step.number}
                    </span>
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
