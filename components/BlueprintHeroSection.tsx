import Image from "next/image";
import { inter, manrope } from "@/lib/fonts";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import HeroBlueprintForm from "@/components/HeroBlueprintForm";
import ScaledCanvas from "@/components/ScaledCanvas";
import {
  FOCUS_AREAS,
  PHONE_HREF,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";
import { assetUrl } from "@/lib/assetPrefix";

// Client logos (each sits in a 90x40 chip): `scale` zooms logos whose artwork has
// extra padding inside the file; the rest use the default 34px height.
const CLIENT_LOGOS = [
  { name: "VWU", src: "/Images/hero/clients/vwu.webp", scale: 1 },
  { name: "TVS", src: "/Images/hero/clients/tvs.webp", scale: 1.6 },
  { name: "Tata Electronics", src: "/Images/hero/clients/tata.webp", scale: 1.6 },
  { name: "Schwing Stetter", src: "/Images/hero/clients/stetter.webp", scale: 1.6 },
  { name: "SRF", src: "/Images/hero/clients/srf.webp", scale: 1.6 },
  { name: "Saveetha", src: "/Images/hero/clients/saveetha.webp", scale: 1.2 },
  { name: "Sarvam Safety", src: "/Images/hero/clients/sarvam.webp", scale: 1 },
  { name: "Reliance", src: "/Images/hero/clients/reliance.webp", scale: 1.2 },
  { name: "Orbittal", src: "/Images/hero/clients/orbittal.webp", scale: 1.2 },
  { name: "NS Instruments", src: "/Images/hero/clients/nsi.webp", scale: 1 },
  { name: "MRF", src: "/Images/hero/clients/mrf.webp", scale: 1 },
  { name: "L&T", src: "/Images/hero/clients/lt.webp", scale: 1 },
  { name: "LA Freightlift", src: "/Images/hero/clients/laf.webp", scale: 1.2 },
  { name: "Komatsu", src: "/Images/hero/clients/komatsu.webp", scale: 1 },
] as const;

// Phone-only "Trusted Across India" card: original four logos (w / h = logo box inside the 64x40 tile)
const MOBILE_LOGOS = [
  { name: "L&T", src: "/Images/hero/mobile-lt.webp", w: 64, h: (64 * 1132) / 2084 },
  { name: "CAT", src: "/Images/hero/mobile-cat.webp", w: 48, h: 48 },
  { name: "TVS", src: "/Images/hero/mobile-tvs.webp", w: 52, h: 53 },
  { name: "Tata", src: "/Images/hero/mobile-tata.webp", w: 32, h: 32 },
];

const STATS = [
  { value: "300", suffix: "+", label: "Projects", width: "sm:w-[145.333px]" },
  {
    value: "18",
    suffix: "+",
    label: "years Experience",
    width: "sm:w-[186.667px]",
  },
  { value: "40,000 ", suffix: "MT", label: "Annual Production", width: "" },
  {
    value: "250",
    suffix: "+",
    label: "Engineering Team",
    width: "sm:w-[170.667px]",
  },
];

// Figma frame is 1920px wide; on desktop viewports the whole section is scaled to fit
const DESIGN_WIDTH = 1920;

export default function BlueprintHeroSection() {
  // One section, one <h1>, one form. Layout switches purely with CSS:
  // single stacked column on phones, two columns (copy + form) from 1024px.
  return (
    <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
      <section
        className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] text-white max-sm:pt-[44px] min-[1024px]:h-[1018px]`}
      >
        {/* PHONE-ONLY DECORATIVE BACKDROP (sunset steel frame, fade, vignette) */}
        <div aria-hidden="true" className="pointer-events-none sm:hidden">
          <div className="absolute bottom-0 -inset-x-[8px] h-[1203px] blur-[2px]">
            <Image
              src="/Images/hero/m-bg-steel-sunset.webp"
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              quality={60}
              sizes="(min-width: 640px) 1px, 320px"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-0 top-[284px] bottom-0 bg-[rgba(15,15,15,0.4)]" />
          <div className="absolute top-0 left-1/2 h-[1690px] w-[1028px] -translate-x-1/2">
            <Image
              src="/Images/hero/m-fade.webp"
              alt=""
              fill
              loading="eager"
              quality={60}
              sizes="(min-width: 640px) 1px, 1028px"
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 -bottom-[43px] left-1/2 w-[1017px] -translate-x-1/2">
            <Image
              src={assetUrl("/Images/hero/m-radial.svg")}
              alt=""
              fill
              className="object-fill"
            />
          </div>
        </div>

        {/* HERO PHOTO: a 240px band under the headline on phones, full-bleed backdrop from 640px */}
        <div className="absolute inset-0 overflow-hidden bg-[#060606] max-sm:top-[103px] max-sm:bottom-auto max-sm:h-[240px] min-[1024px]:inset-auto min-[1024px]:left-auto min-[1024px]:top-[-60px] min-[1024px]:right-[-8.3%] min-[1024px]:h-[1080px] min-[1024px]:w-[94.44%]">
          <Image
            src="/Images/hero/hero-bg-cold.webp"
            alt="Industrial warehouse interior"
            fill
            loading="eager"
            fetchPriority="high"
            quality={70}
            sizes="(min-width: 1024px) 95vw, (min-width: 640px) 100vw, 63vw"
            className="object-cover object-bottom sm:object-center"
          />
          {/* phone-only edge fades on the photo band */}
          <div className="absolute inset-x-0 -top-px h-[105px] bg-[linear-gradient(175.242deg,#060606_21.88%,rgba(32,32,32,0.83)_53.892%,rgba(6,6,6,0)_89.049%)] sm:hidden" />
          <div className="absolute inset-x-0 bottom-px h-[32px] bg-[linear-gradient(180.821deg,rgba(30,30,30,0)_1.0095%,#1E1E1E_99.312%)] sm:hidden" />
        </div>

        {/* GRADIENT OVERLAY (tablet + desktop) */}
        <div className="absolute inset-0 hidden bg-[#060606]/80 sm:block min-[1024px]:bg-transparent min-[1024px]:bg-[linear-gradient(to_right,#060606_24.831%,rgba(6,6,6,0.8)_42.674%,rgba(6,6,6,0)_88.021%)]" />

        {/* NAVBAR */}
        <header className="relative z-20 flex h-[44px] max-sm:fixed max-sm:inset-x-0 max-sm:top-0 max-sm:z-50 max-sm:border-b max-sm:border-white/10 max-sm:bg-[#060606]/90 max-sm:backdrop-blur-md w-full items-center justify-between px-5 sm:h-auto sm:px-[80px] sm:py-[17px] min-[1024px]:absolute min-[1024px]:top-0 min-[1024px]:left-0">
          <div className="relative h-[28px] w-[80px] shrink-0 sm:h-[46px] sm:w-[132px]">
            <Image
              src="/Images/hero/logo-mekark.webp"
              alt="Mekark"
              fill
              sizes="(min-width: 640px) 132px, 80px"
              className="object-cover"
            />
          </div>

          <EnquiryFormButton className="flex items-center justify-center rounded-[8px] bg-[#C4161C] px-[12px] py-[6px] text-[12px] font-semibold leading-[normal] whitespace-pre text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] sm:px-[24px] sm:py-[10px] sm:text-[16px]">
            {"Request an Estimate"}
          </EnquiryFormButton>
        </header>

        {/* CONTENT: single grid; copy blocks stack on the left, the one form sits on the right at 1024px+ */}
        <div className="relative z-10 grid w-full grid-cols-1 gap-y-[13px] px-5 pt-[15px] pb-[24px] sm:gap-y-[24px] sm:px-[80px] sm:pt-6 sm:pb-12 min-[1024px]:h-full min-[1024px]:grid-cols-[minmax(0,1fr)_659px] min-[1024px]:grid-rows-[repeat(6,auto)_1fr] min-[1024px]:items-start min-[1024px]:gap-x-10 min-[1024px]:pt-0! min-[1024px]:pr-[130px]! min-[1024px]:pb-0!">
          {/* PILL */}
          <div className="flex max-w-full items-center gap-[8px] justify-self-start rounded-full border-[1px] border-solid border-white/20 px-[12px] py-[6px] sm:gap-[10.667px] sm:border-[1.333px] sm:px-[17.333px] sm:py-[9.333px] min-[1024px]:col-start-1 min-[1024px]:mt-[118.5px] min-[1024px]:max-w-[891px]">
            <span className="size-[8px] shrink-0 rounded-full bg-[#E40015] sm:size-[10.667px]" />
            <p
              className={`${inter.className} text-[10px] leading-[16px] font-medium text-white sm:text-[14px] sm:leading-[20px] sm:whitespace-nowrap`}
            >
              Engineered for Rapid Dispatch, Automation & High SKU Density
            </p>
          </div>

          {/* HEADING: the page's single <h1> */}
          <h1 className="mt-[15px] flex min-h-[226px] w-full flex-col items-start gap-[6px] text-[22px] leading-[24px] font-semibold text-white max-sm:max-w-[338px] sm:mt-0 sm:min-h-0 sm:gap-[13px] sm:text-[48px] sm:leading-[48px] sm:font-bold min-[1024px]:col-start-1 min-[1024px]:max-w-[891px]">
            <span className="block w-full">High-Throughput E-Commerce</span>
            <span className="block max-w-full min-[1024px]:whitespace-nowrap">
              Fulfillment Center Construction Company
            </span>
          </h1>

          {/* DESCRIPTION + FOCUS AREAS */}
          <div className="flex w-full flex-col gap-[10px] sm:gap-[16px] min-[1024px]:col-start-1 min-[1024px]:max-w-[891px]">
            <p className="w-full text-[13px] leading-[normal] font-normal text-[#F3F3F3] sm:text-[22px] sm:leading-[28px] sm:text-[#A9A9A9]">
              Purpose-built fulfillment infrastructure designed for multi-tier pick modules, automated conveyor systems, robotic AGVs, and rapid parcel sortation.
            </p>

            <ul className="flex w-full flex-col gap-[8px] sm:grid sm:gap-[16px] min-[1280px]:grid-cols-3 min-[1700px]:w-[calc(100%+100px)]">
              {FOCUS_AREAS.map((item) => (
                <li
                  key={item.title}
                  className="border-l-[3px] border-[#ED1D23] bg-white/5 py-[8px] pr-[12px] pl-[12px] sm:py-[10px] sm:pr-[16px] sm:pl-[14px]"
                >
                  <span className="block text-[12px] leading-[18px] text-white/70 sm:text-[16px] sm:leading-[24px] sm:text-[#F7F7F7]">
                    <span className="font-bold text-white">{item.title}</span>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* TRUSTED ACROSS INDIA */}
          {/* phones: the original four-logo card */}
          <div
            className="flex w-full flex-col items-start gap-[16px] rounded-[10px] px-[16px] py-[24px] sm:hidden"
            style={{
              backgroundImage:
                "linear-gradient(175.658deg, #08090A 1.2889%, #654528 91.175%)",
            }}
          >
            <p className="text-[14px] leading-[20px] font-semibold text-[#ED1D23] uppercase">
              Trusted Across India
            </p>
            <div className="flex w-full flex-nowrap items-start justify-between gap-x-[20px] max-[379px]:gap-x-2.5">
              {MOBILE_LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-[40px] max-w-[64px] min-w-0 flex-1 basis-0 items-center justify-center overflow-hidden rounded-[6px] bg-[#F9F6F7]"
                >
                  {logo.name === "Tata" ? (
                    <span className="relative size-8 shrink-0 overflow-hidden">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={96}
                        height={96}
                        sizes="96px"
                        className="absolute top-[-69.9%] left-[-100%] h-[301.97%] w-[300%] max-w-none"
                      />
                    </span>
                  ) : (
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={Math.round(logo.w)}
                      height={Math.round(logo.h)}
                      sizes="64px"
                      className="block shrink-0 object-cover"
                      style={{ width: logo.w, height: logo.h }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[138px] w-full max-w-[847px] shrink-0 overflow-hidden rounded-[18px] sm:block min-[1024px]:col-start-1">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0.179%,rgba(105,63,29,0.5)_99.821%)] backdrop-blur-[64px]" />

            <p className="absolute top-[30.33px] left-[24px] -translate-y-1/2 text-[14px] leading-[20px] font-semibold whitespace-nowrap text-[#FA7783] uppercase sm:left-[122px] sm:-translate-x-1/2">
              Trusted Across India
            </p>

            <div className="absolute top-[55px] right-[16px] left-[16px] h-[63px] overflow-hidden sm:right-auto sm:left-[32.17px] sm:w-[789px] sm:max-w-[calc(100%-64px)]">
              {/* Scrolling track: two identical sets for a seamless loop */}
              <div className="hero-logo-track absolute top-[calc(50%-0.5px)] left-0 flex w-max -translate-y-1/2 items-center gap-[50px] pr-[50px]">
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="relative h-[40px] w-[90px] shrink-0 rounded-[8px] bg-[#F9F6F7]"
                    aria-hidden={index >= CLIENT_LOGOS.length}
                  >
                    <Image
                      src={logo.src}
                      alt={index < CLIENT_LOGOS.length ? logo.name : ""}
                      width={120}
                      height={40}
                      className="pointer-events-none absolute top-1/2 left-1/2 h-[34px] w-auto max-w-[calc(100%-12px)] -translate-x-1/2 -translate-y-1/2 object-contain"
                      style={{
                        height: logo.scale === 1 ? 34 : 40,
                        scale: logo.scale === 1 ? undefined : logo.scale,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid w-full grid-cols-2 gap-[12px] sm:flex sm:h-[117.333px] sm:w-auto sm:flex-nowrap sm:items-center sm:gap-x-[48px] sm:gap-y-6 sm:border-t-[0.667px] sm:border-solid sm:border-[#E2E2E2] sm:pt-[0.667px] min-[1024px]:col-start-1">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`flex shrink-0 flex-col items-start justify-center gap-[4px] rounded-[10px] border border-solid border-white/[0.08] bg-[#1A1A1A] px-[20px] py-[12px] whitespace-nowrap sm:h-[85.333px] sm:justify-start sm:gap-[5.333px] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 ${stat.width}`}
              >
                <p className="text-[24px] leading-[normal] font-extrabold sm:text-[42px]">
                  <span className="text-white">{stat.value}</span>
                  <span className="text-[#C4161C]">{stat.suffix}</span>
                </p>
                <p className="text-[10px] leading-[normal] font-semibold text-[#9A9A9A] uppercase sm:text-[16px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* FORM: the only hero lead form. Right column on desktop, after the copy on mobile */}
          <HeroBlueprintForm className="mx-auto min-[1024px]:col-start-2 min-[1024px]:row-span-7 min-[1024px]:row-start-1 min-[1024px]:self-center" />

          {/* CTAs: after the form on phones, under the stats on desktop */}
          <div className="mx-auto flex w-full max-w-[311px] items-start justify-center gap-[14px] sm:mx-0 sm:max-w-none sm:items-center sm:justify-start sm:gap-[30px] min-[1024px]:col-start-1 min-[1024px]:row-start-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-[140px] shrink-0 items-center justify-center gap-[8px] rounded-full bg-white px-[20px] py-[14px] sm:h-[55.333px] sm:w-auto sm:gap-[9.623px] sm:px-[24.058px] sm:py-[14.435px]"
            >
              <span className="text-[14px] leading-[20px] font-bold whitespace-nowrap text-[#E5091F] sm:text-[16px] sm:leading-[24.058px]">
                WhatsApp
              </span>
              <Image
                src={assetUrl("/Images/hero/wa.svg")}
                alt=""
                width={18}
                height={18}
                className="size-[18px]"
              />
            </a>

            <a
              href={PHONE_HREF}
              className="flex w-[140px] shrink-0 items-center justify-center gap-[8px] rounded-full border border-solid border-white px-[20px] py-[14px] sm:h-[55.333px] sm:w-auto sm:gap-[9.623px] sm:px-[24.058px] sm:py-[14.435px]"
            >
              <span className="text-[14px] leading-[20px] font-bold whitespace-nowrap text-white sm:text-[16px] sm:leading-[24.058px]">
                Call Now
              </span>
              <Image
                src={assetUrl("/Images/hero/phone.svg")}
                alt=""
                width={18}
                height={18}
                className="size-[18px]"
              />
            </a>
          </div>
        </div>
      </section>
    </ScaledCanvas>
  );
}
