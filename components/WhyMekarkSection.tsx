import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";
import WhyMekarkAccordion, {
  WhyMekarkMobileAccordion,
} from "@/components/WhyMekarkAccordion";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 866;

function Heading() {
  return (
    <div className="flex flex-col gap-[22px]">
      <h2 className="text-[34px] leading-[1.1] font-bold text-[#030303] sm:text-[48px] min-[1024px]:text-[66px]! min-[1024px]:leading-[69.333px]!">
        Why Top Industries
        <br />
        Choose Mekark
      </h2>
      <p className="text-[16px] leading-[28px] font-normal text-[#424242] min-[1024px]:text-[21.333px] min-[1024px]:leading-[28px]">
        India’s Leading Ecommerce Warehouse Construction
      </p>
    </div>
  );
}

export default function   WhyMekarkSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="group/why relative w-[1920px] overflow-hidden bg-white"
            style={{ height: DESIGN_HEIGHT }}
          >
            {/* scene */}
            <div className="absolute top-[-84px] left-0 h-[950.667px] w-[2101.333px] overflow-hidden">
              <Image
                src="/Images/why/scene.webp"
                alt="Mekark billboard on an industrial construction site"
                width={1868}
                height={842}
                sizes="106vw"
                className="absolute top-[3.7%] left-[-0.07%] h-[96.3%] w-[96.72%] max-w-none"
              />
            </div>

            {/* red panel */}
            <div className="absolute top-0 left-[1004px] h-[701.333px] w-[916px] bg-[#E60F1A]" />
            <div className="absolute top-[554.67px] left-[964px] h-[215px] w-[956px] bg-[#E60F1A]" />

            {/* white fade over the top of the red panel */}
            <div className="absolute top-[-2.67px] left-[1004px] h-[398.667px] w-[916px]">
              <Image
                src="/Images/why/overlay.webp"
                alt=""
                fill
                sizes="48vw"
                className="object-cover"
              />
            </div>

            {/* person cut-out */}
            <div className="absolute top-[-14.67px] left-[156px] h-[866.667px] w-[1757.333px] overflow-hidden">
              <Image
                src="/Images/why/man.webp"
                alt=""
                width={1867}
                height={842}
                sizes="100vw"
                className="absolute top-0 left-[-9.3%] h-full w-[109.35%] max-w-none"
              />
            </div>

            {/* heading */}
            <div className="absolute top-[49.33px] left-[1089.33px] w-[706.667px]">
              <Heading />
            </div>

            {/* accordion */}
            <div className="absolute top-[265.67px] left-[1071px] w-[750px]">
              <div className="flex justify-end">
                <WhyMekarkAccordion />
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="bg-[#F9F6F7] sm:hidden">
        <div className="relative h-[249px] w-full overflow-hidden">
          <div className="absolute top-[-13px] left-0 h-[262px] w-[638px] overflow-hidden">
            <Image
              src="/Images/why/scene.webp"
              alt="Mekark billboard on an industrial construction site"
              width={1868}
              height={842}
              sizes="617px"
              className="absolute top-[-0.11%] left-[-0.07%] h-[106.22%] w-[96.72%] max-w-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[20px] bg-gradient-to-b from-[#FFFDFD] from-[6.034%] to-[#E60F1A] to-[47.028%] px-[20px] pt-[20px] pb-[30px]">
          <div className="flex w-full flex-col gap-[12px]">
            <h2 className="text-[28px] leading-[34px] font-bold text-[#030303]">
              Why Top Industries
              <br />
              Choose Mekark
            </h2>
            <p className="text-[12px] leading-[19px] font-normal text-[#424242]">
              India’s Leading Ecommerce Warehouse Construction
            </p>
          </div>

          <WhyMekarkMobileAccordion />
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative h-[260px] w-full sm:h-[380px]">
          <Image
            src="/Images/why/scene.webp"
            alt="Mekark billboard on an industrial construction site"
            fill
            sizes="100vw"
            className="object-cover object-left"
          />
        </div>

        <div className="bg-[#E60F1A] px-5 py-10 sm:px-10 sm:py-14">
          <h2 className="text-[34px] leading-[1.1] font-bold text-white sm:text-[48px]">
            Why Top Industries Choose Mekark
          </h2>
          <p className="mt-3 text-[16px] leading-[28px] font-normal text-white/80">
            India’s Leading Ecommerce Warehouse Construction
          </p>

          <div className="mt-8">
            <WhyMekarkMobileAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
