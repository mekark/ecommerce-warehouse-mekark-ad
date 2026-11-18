import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";
import {
  BlueprintForm,
} from "@/components/LeadBlueprintForms";
import OfficesDirectory from "@/components/OfficesDirectory";
import { assetUrl } from "@/lib/assetPrefix";
import {
  PHONE_HREF,
  QUOTE_FORM_ID,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 900;

const PHONE_DISPLAY = "+91 97909 24754";

const INCLUDES = [
  "Layout recommendation for your industry",
  "Cost estimate range",
  "Project execution timeline",
  "PEB vs Conventional insights",
];

function Title() {
  return (
    <h2 className="text-[40px] leading-[1.05] font-extrabold tracking-[-1.5px] text-white sm:text-[52px] lg:w-[712px] lg:text-[66px]! lg:leading-[65px]! lg:tracking-[-2.6667px]!">
      Get Your <span className="text-[#ED2024]">Warehouse Project</span>{" "}
      Blueprint
    </h2>
  );
}

function Includes() {
  return (
    <ul className="grid w-full grid-cols-2 gap-2 pt-1 sm:gap-3 sm:pt-2 lg:gap-[14px]">
      {INCLUDES.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 rounded-[12px] border border-solid border-white/10 bg-white/[0.06] px-2.5 py-2 sm:gap-3 sm:rounded-[14px] sm:px-3.5 sm:py-2.5 backdrop-blur-[2px] lg:gap-3 lg:rounded-[16px] lg:px-3.5 lg:py-[14px]"
        >
          <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#C4161C] text-[10px] leading-none font-bold text-white sm:size-[24px] sm:text-[12px] lg:size-[30px] lg:text-[14px]">
            ✓
          </span>
          <span className="text-[12px] leading-[1.25] font-semibold text-white sm:text-[15px] sm:leading-[1.3] lg:text-[16px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ContactCard({
  href,
  external,
  eyebrow,
  title,
  titleClass,
  icon,
}: {
  href: string;
  external?: boolean;
  eyebrow?: string;
  title: string;
  titleClass: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex items-center gap-4 rounded-[20px] border border-solid border-black/5 bg-[#212121] px-4 py-2.5 sm:h-[84px] sm:min-w-[260px] sm:flex-1 sm:rounded-[22px] sm:px-5 sm:py-0 lg:h-[104px] lg:min-w-0 lg:rounded-[26px] lg:px-6"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#CC000A] sm:size-12 sm:rounded-[16px] lg:size-14 lg:rounded-[18px]">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5 sm:gap-0">
        {eyebrow && (
          <span className="text-[10px] leading-4 font-bold text-[#A9A9A9] uppercase sm:text-[13px] sm:leading-[18px] lg:text-[15px] lg:leading-[20px]">
            {eyebrow}
          </span>
        )}
        <span className={`text-white ${titleClass}`}>{title}</span>
      </span>
      <Image
        src={assetUrl("/Images/lead/arrow.svg")}
        alt=""
        width={27}
        height={26}
        className="ml-auto h-auto w-6 shrink-0 sm:w-5 lg:w-6"
      />
    </a>
  );
}

function ContactCards() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5 lg:flex-nowrap">
      <ContactCard
        href={PHONE_HREF}
        eyebrow="Call Now"
        title={PHONE_DISPLAY}
        titleClass="text-sm leading-6 font-extrabold sm:text-[17px] lg:text-[21px] lg:leading-7"
        icon={
          <Image
            src={assetUrl("/Images/lead/phone.svg")}
            alt=""
            width={27}
            height={27}
            className="size-5 lg:size-6"
          />
        }
      />
      <ContactCard
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        external
        title="WhatsApp Us Now"
        titleClass="text-sm leading-6 font-bold sm:text-[19px] lg:text-[23px] lg:leading-7"
        icon={
          <Image
            src="/Images/lead/wa.webp"
            alt=""
            width={39}
            height={39}
            className="size-[30px] lg:size-9"
          />
        }
      />
    </div>
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
    <section
      id={QUOTE_FORM_ID}
      className={`${manrope.className} w-full bg-white`}
    >
      {/* One responsive layout: stacked column below 1024px; on desktop the exact
          Figma frame, scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div
          className="relative overflow-hidden bg-[#0A0A0A] lg:w-[1920px]"
          style={{ "--h": DESIGN_HEIGHT } as CSSProperties}
        >
          <Background />

          <div className="relative z-10 mx-auto flex max-w-[640px] flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:static lg:mx-0 lg:block lg:h-[calc(var(--h)*1px)] lg:max-w-none lg:p-0">
            {/* Phone/tablet: title + checklist, then the form, then call/WhatsApp cards and
                offices (the left column is "contents" so its children can be reordered).
                Desktop: left column and form sit side by side in the Figma frame. */}
            <div className="contents lg:absolute lg:top-1/2 lg:left-[150px] lg:flex lg:w-[860px] lg:-translate-y-1/2 lg:flex-col lg:gap-[19.867px]">
              <div className="order-1 flex flex-col gap-5 lg:order-none lg:gap-[19.867px]">
                <Title />
                <Includes />
              </div>
              <div className="order-3 lg:order-none">
                <ContactCards />
              </div>
              <div className="order-4 lg:order-none">
                <OfficesDirectory />
              </div>
            </div>

            <div className="order-2 lg:absolute lg:top-1/2 lg:left-[1068px] lg:order-none lg:-translate-y-1/2">
              <BlueprintForm />
            </div>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
