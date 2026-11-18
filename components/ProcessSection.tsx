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
  description: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Site & Soil Feasibility",
    description: "Geotechnical soil testing, earthwork grading, regulatory, and budget checks.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Civil & Structural Engineering",
    description: "BIM design for RCC foundations, mezzanine point loads, and PEB roof capacity.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Civil Foundations & PEB Fabrication",
    description: "On-site RCC footings, pedestals & plinth beams alongside factory steel fabrication.",
    icon: Factory,
  },
  {
    number: "04",
    title: "PEB Erection & Robotics Flooring",
    description: "Steel & mezzanine erection, laser-screeded super-flat flooring, and dock pits.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Floor Flatness & Structural QA",
    description: "RCC cube tests, laser floor-flatness validation, and statutory compliance checks.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Turnkey Handover",
    description: "Snag clearance, load stability certificates, documentation, and support.",
    icon: Truck,
  },
];

/**
 * One process section for every screen size (previously three copies).
 * - phones: light vertical timeline (Figma node 10533:10237)
 * - 640px+: dark section with the warehouse photo, 2-column step grid
 * - 1024px+: Figma frame (1920 wide, scaled), horizontal timeline
 */
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
      {/* taller tablet layout stretches the photo over all the text, so tone it down */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(33,33,33,0.55)_0%,rgba(33,33,33,0.85)_45%,#212121_100%)] sm:block lg:hidden"
      />

      {/* phone-only faded warehouse photo, fading out to the page colour from the top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[579px] w-[390px] -translate-x-1/2 opacity-25 sm:hidden"
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

      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="relative flex w-full justify-center px-5 pt-8 pb-10 sm:px-10 sm:py-16 lg:h-[620px] lg:w-[1920px] lg:items-center lg:p-0">
          <div className="flex w-full max-w-[390px] flex-col gap-6 sm:max-w-none sm:gap-10 lg:w-[1760px] lg:gap-[50px]">
            {/* HEADING */}
            <div className="flex flex-col gap-[6px] sm:gap-[16px]">
              <h2 className="text-[28px] leading-[34px] font-bold text-[#0F172A] max-sm:-mr-4 sm:text-[40px] sm:leading-[1.15] sm:text-white lg:text-[66px] lg:leading-[73.333px]">
                Our Turnkey{" "}
                <span className="text-[#ED1D23]">
                  Ecommerce
                  <br className="sm:hidden" />{" "}
                  <span className="tracking-[-0.03em] whitespace-nowrap sm:tracking-normal sm:whitespace-normal">
                    Warehouse Construction
                  </span>
                </span>
              </h2>
              <p
                className={`${inter.className} text-[14px] leading-[20px] font-normal text-[#64748B] sm:text-[18px] sm:leading-[26px] sm:text-[#A6A6A6] lg:text-[24px] lg:leading-[20px]`}
              >
                As a fulfilment centre construction company, we follow a proven 6-step process to ensure on-time delivery.
              </p>
            </div>

            {/* STEPS */}
            <ol className="relative flex w-full flex-col gap-[14px] sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:flex lg:flex-row lg:items-start lg:gap-[28px]">
              {/* desktop connector line through the step dots */}
              <span
                aria-hidden
                className="absolute top-[71.5px] left-[27px] hidden h-px w-[1477px] bg-[#474747] lg:block"
              />

              {STEPS.map((step, index) => {
                const Icon = step.icon;

                return (
                  <li
                    key={step.number}
                    className="relative flex items-start gap-[5px] sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-x-0 sm:gap-y-5 sm:border-t sm:border-solid sm:border-[#474747] sm:pt-5 lg:block lg:h-[279px] lg:w-[270px] lg:shrink-0 lg:border-t-0 lg:pt-0"
                  >
                    {/* phone: line down to the next step's icon */}
                    {index < STEPS.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute top-[16px] left-[16px] h-[calc(100%+14px)] w-px bg-[#BCBCBC] sm:hidden"
                      />
                    )}

                    {/* desktop: red dot on the line, with a short stem down towards the icon */}
                    <span
                      aria-hidden
                      className="absolute top-[64px] left-[11px] hidden size-[16px] rounded-full bg-[#ED1D23] lg:block"
                    />
                    <span
                      aria-hidden
                      className="absolute top-[80px] left-[19px] hidden h-[24px] w-px bg-[#474747] lg:block"
                    />

                    {/* ICON: white circle on phones, bare red icon from 640px */}
                    <span className="relative z-10 flex size-[33px] shrink-0 items-center justify-center rounded-full bg-white drop-shadow-[0px_1px_3px_rgba(30,30,30,0.25)] sm:size-auto sm:justify-self-start sm:rounded-none sm:bg-transparent sm:drop-shadow-none lg:absolute lg:top-[115px] lg:left-0">
                      <Icon
                        strokeWidth={2}
                        className="size-[18px] shrink-0 text-[#ED1D23] sm:size-[40px]"
                      />
                    </span>

                    {/* wrapper only groups number + text on phones; it disappears from 640px */}
                    <div className="flex min-w-0 items-start gap-[10px] px-[10px] py-[6px] sm:contents">
                      <span
                        className={`${spaceGrotesk.className} shrink-0 text-[16px] leading-[normal] font-bold text-[#ED1D23] sm:justify-self-end sm:text-[26px] sm:leading-[21.333px] sm:text-[#797979] lg:absolute lg:top-[20.33px] lg:left-[2px]`}
                      >
                        {step.number}
                      </span>

                      <div className="flex min-w-0 flex-col gap-px sm:col-span-2 sm:w-full sm:items-start sm:gap-[12px] lg:absolute lg:top-[175px] lg:left-0 lg:col-auto lg:w-[270px]">
                        <p className="text-[16px] leading-[normal] font-semibold text-[#0F172A] sm:text-[21px] sm:leading-[24px] sm:font-bold sm:text-white">
                          {step.title}
                        </p>
                        <p className="text-[12px] leading-[20px] font-normal text-[#64748B] sm:text-[18px] sm:leading-[22.667px] sm:text-[#949494]">
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
      </ScaledCanvas>
    </section>
  );
}
