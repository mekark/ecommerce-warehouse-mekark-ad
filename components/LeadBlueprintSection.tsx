import Image from "next/image";
import type { ReactNode } from "react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";
import {
  BlueprintForm,
  MobileBlueprintForm,
} from "@/components/LeadBlueprintForms";
import { assetUrl } from "@/lib/assetPrefix";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 760;

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";
const PHONE_DISPLAY = "+91 97909 24754";

const INCLUDES = [
  "Layout recommendation for your industry",
  "Cost estimate range",
  "Project execution timeline",
  "PEB vs Conventional insights",
];

function Title() {
  return (
    <h2 className="text-[40px] leading-[1.05] font-extrabold tracking-[-1.5px] text-white sm:text-[52px] min-[1024px]:w-[712px] min-[1024px]:text-[66px]! min-[1024px]:leading-[65px]! min-[1024px]:tracking-[-2.6667px]!">
      Get Your <span className="text-[#ED2024]">Warehouse Project</span>{" "}
      Blueprint
    </h2>
  );
}

function Includes() {
  return (
    <ul className="flex w-full flex-col gap-[18.667px] pt-[12.147px]">
      {INCLUDES.map((item) => (
        <li key={item} className="flex w-full items-center gap-[16px]">
          <span className="flex size-[37.333px] shrink-0 items-center justify-center rounded-[18.667px] bg-[rgba(196,22,28,0.5)] text-[17.333px] leading-[normal] font-semibold text-[#F9F9F9]">
            ✓
          </span>
          <span className="text-[16px] leading-[normal] font-semibold text-white sm:text-[20px] min-[1024px]:whitespace-nowrap">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ContactCards() {
  const cardBase =
    "relative flex w-full items-center rounded-[29.333px] border-[1.333px] border-solid border-black/5 bg-[#212121]";

  return (
    <div className="flex w-full flex-col gap-[21.333px] min-[1024px]:w-[593px]">
      <a href={`tel:${PHONE_NUMBER}`} className={`${cardBase} h-[120px]`}>
        <span className="absolute top-1/2 left-[26.67px] flex size-[64px] -translate-y-1/2 items-center justify-center rounded-[24px] bg-[#CC000A]">
          <Image
            src={assetUrl("/Images/lead/phone.svg")}
            alt=""
            width={26}
            height={26}
            className="size-[26px]"
          />
        </span>

        <span className="absolute top-1/2 left-[112px] flex -translate-y-1/2 flex-col items-start">
          <span className="text-[16px] leading-[21.333px] font-bold text-[#A9A9A9] uppercase">
            Phone
          </span>
          <span className="text-[21.333px] leading-[32px] font-extrabold whitespace-nowrap text-white">
            {PHONE_DISPLAY}
          </span>
        </span>

        <Image
          src={assetUrl("/Images/lead/arrow.svg")}
          alt=""
          width={27}
          height={26}
          className="absolute top-[45.13px] right-[26.67px] h-[26px] w-[27px]"
        />
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className={`${cardBase} gap-[21.333px] p-[28px]`}
      >
        <span className="flex size-[64px] shrink-0 items-center justify-center rounded-[24px] bg-[#CC000A]">
          <Image
            src="/Images/lead/wa.webp"
            alt=""
            width={39}
            height={39}
            className="size-[38.667px] object-cover"
          />
        </span>

        <span className="text-[22px] leading-[27.46px] font-bold whitespace-nowrap text-white sm:text-[26px]">
          WhatsApp Us Now
        </span>

        <span className="flex flex-1 justify-end">
          <Image
            src={assetUrl("/Images/lead/arrow.svg")}
            alt=""
            width={27}
            height={26}
            className="h-[26px] w-[27px]"
          />
        </span>
      </a>
    </div>
  );
}

function MobileContactCard({
  href,
  external,
  icon,
  children,
}: {
  href: string;
  external?: boolean;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex w-full items-center gap-[16px] rounded-[20px] border border-solid border-black/5 bg-[#212121] px-[16px] py-[10px]"
    >
      <span className="flex size-[40px] shrink-0 flex-col items-center justify-center rounded-[8px] bg-[#CC000A]">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col items-start gap-[2px]">
        {children}
      </span>
      <span className="flex h-[28px] w-[24px] shrink-0 items-center justify-center">
        <Image
          src={assetUrl("/Images/lead/m-arrow.svg")}
          alt=""
          width={24}
          height={26}
          className="h-[26px] w-[24px]"
        />
      </span>
    </a>
  );
}

function Background() {
  return (
    <>
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/Images/lead/bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(158.4deg,rgba(10,10,10,0.8)_0%,rgba(10,10,10,0.3)_50%,rgba(237,32,36,0.4)_100%)]" />
    </>
  );
}

export default function LeadBlueprintSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-[#0A0A0A]"
            style={{ height: DESIGN_HEIGHT }}
          >
            <Background />

            <div className="absolute top-[calc(50%-0.77px)] left-[calc(50%-415.33px)] flex w-[593.333px] -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-[19.867px]">
              <div className="w-full pb-[0.92px]">
                <Title />
              </div>
              <Includes />
              <ContactCards />
            </div>

            <div className="absolute top-[calc(50%-0.5px)] left-[1068px] -translate-y-1/2">
              <BlueprintForm />
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="relative overflow-hidden bg-[#090909] sm:hidden">
        <div className="absolute top-0 left-0 h-[601px] w-full">
          <Image
            src="/Images/lead/m-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-0 left-0 h-[1108px] w-full bg-gradient-to-b from-transparent to-black to-[54.327%]" />
        <div className="absolute top-[-61px] left-[180px] size-[274px] rounded-full bg-[rgba(228,0,21,0.3)] opacity-[0.93] blur-[61.667px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center gap-[26px] px-[20px] pt-[56px] pb-[40px]">
          <div className="flex w-full flex-col gap-[12px] px-[20px]">
            <h2 className="text-[28px] leading-[34px] font-extrabold text-white">
              Get Your <span className="text-[#ED1D23]">Warehouse Project</span>{" "}
              Blueprint
            </h2>

            {INCLUDES.map((item) => (
              <div key={item} className="flex w-full items-center gap-[16px]">
                <span className="flex size-[20px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(196,22,28,0.5)] text-[9.286px] leading-[normal] font-semibold text-[#F9F9F9]">
                  ✓
                </span>
                <span className="text-[14px] leading-[normal] font-medium whitespace-nowrap text-[#F4F4F4]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <MobileContactCard
              href={`tel:${PHONE_NUMBER}`}
              icon={
                <Image
                  src={assetUrl("/Images/lead/m-phone.svg")}
                  alt=""
                  width={24}
                  height={24}
                  className="size-[24px]"
                />
              }
            >
              <span className="text-[10px] leading-[16px] font-bold whitespace-nowrap text-[#A9A9A9] uppercase">
                Call Now
              </span>
              <span className="w-full text-[14px] leading-[24px] font-extrabold text-white">
                {PHONE_DISPLAY}
              </span>
            </MobileContactCard>

            <MobileContactCard
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              external
              icon={
                <Image
                  src="/Images/lead/wa.webp"
                  alt=""
                  width={30}
                  height={30}
                  className="size-[30px] object-cover"
                />
              }
            >
              <span className="w-full text-[14px] leading-[24px] font-bold text-white">
                WhatsApp Us Now
              </span>
            </MobileContactCard>
          </div>

          <MobileBlueprintForm />
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative overflow-hidden bg-[#0A0A0A]">
          <Background />

          <div className="relative z-10 mx-auto flex max-w-[640px] flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-5">
              <Title />
              <Includes />
              <ContactCards />
            </div>

            <BlueprintForm />
          </div>
        </div>
      </div>
    </section>
  );
}
