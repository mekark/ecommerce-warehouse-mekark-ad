import Image from "next/image";
import { inter, manrope } from "@/lib/fonts";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import HeroBlueprintForm from "@/components/HeroBlueprintForm";
import ScaledCanvas from "@/components/ScaledCanvas";
import BlueprintHeroMobile from "@/components/BlueprintHeroMobile";
import {
  FOCUS_AREAS,
  PHONE_NUMBER,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";
import { assetUrl } from "@/lib/assetPrefix";

// Client logos (each sits in a 90x40 chip): `scale` zooms logos whose artwork has
// extra padding inside the file; the rest use the default 34px height.
const CLIENT_LOGOS = [
  { name: "VWU", src: "/Images/hero/clients/vwu.webp", scale: 1 },
  { name: "Voltas", src: "/Images/hero/clients/voltas.webp", scale: 1.6 },
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
  { name: "Sanmar", src: "/Images/hero/clients/sanmar1.webp", scale: 1 },
  { name: "Sanmar Chemicals", src: "/Images/hero/clients/sanmar2.webp", scale: 1 },
  { name: "LA Freightlift", src: "/Images/hero/clients/laf.webp", scale: 1.2 },
  { name: "Komatsu", src: "/Images/hero/clients/komatsu.webp", scale: 1 },
] as const;

const STATS = [
  { value: "300", suffix: "+", label: "Projects", width: "w-[145.333px]" },
  {
    value: "18",
    suffix: "+",
    label: "years Experience",
    width: "w-[186.667px]",
  },
  { value: "40,000 ", suffix: "MT", label: "Annual Production", width: "" },
  {
    value: "175",
    suffix: "+",
    label: "Engineering Team",
    width: "w-[170.667px]",
  },
];

// Figma frame is 1920px wide; on desktop viewports the whole section is scaled to fit
const DESIGN_WIDTH = 1920;

export default function BlueprintHeroSection() {
  return (
    <>
      {/* PHONE (below 640px): Figma mobile frame */}
      <div className="sm:hidden">
        <BlueprintHeroMobile />
      </div>

      {/* TABLET + DESKTOP */}
      <div className="hidden sm:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <section
            className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] min-[1024px]:h-[1018px]`}
          >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 min-[1024px]:inset-auto min-[1024px]:top-[-60px] min-[1024px]:right-[-8.3%] min-[1024px]:h-[1080px] min-[1024px]:w-[94.44%] overflow-hidden">
              <Image
                src="/Images/hero/hero-bg-cold.webp"
                alt="Industrial warehouse interior"
                fill
                loading="lazy"
                fetchPriority="high"
                sizes="(min-width: 1024px) 95vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-[#060606]/80 min-[1024px]:bg-transparent min-[1024px]:bg-[linear-gradient(to_right,#060606_24.831%,rgba(6,6,6,0.8)_42.674%,rgba(6,6,6,0)_88.021%)]" />

            {/* NAVBAR */}
            <header className="relative z-20 flex w-full items-center justify-between px-5 py-[17px] sm:px-[80px] min-[1024px]:absolute min-[1024px]:top-0 min-[1024px]:left-0">
              <div className="relative h-[34px] w-[98px] shrink-0 sm:h-[46px] sm:w-[132px]">
                <Image
                  src="/Images/hero/logo-mekark.webp"
                  alt="Mekark"
                  fill
                  sizes="132px"
                  className="object-cover"
                />
              </div>

              <EnquiryFormButton className="flex items-center justify-center rounded-[8px] bg-[#C4161C] px-[16px] py-[8px] text-[14px] font-semibold leading-[normal] whitespace-pre text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] sm:px-[24px] sm:py-[10px] sm:text-[16px]">
                {"Get  Free Quote "}
              </EnquiryFormButton>
            </header>

            {/* CONTENT */}
            <div className="relative z-10 flex w-full flex-col gap-10 px-5 pt-6 pb-12 sm:px-[80px] min-[1024px]:h-full min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:justify-between min-[1024px]:gap-10 min-[1024px]:pt-0! min-[1024px]:pr-[130px]! min-[1024px]:pb-0">
              {/* LEFT COLUMN */}
              <div className="flex w-full min-w-0 flex-col items-start gap-[24px] min-[1024px]:mt-[118.5px] min-[1024px]:max-w-[891px] min-[1024px]:flex-1">
                {/* PILL */}
                <div className="flex max-w-full items-center gap-[10.667px] rounded-full border-[1.333px] border-solid border-white/20 px-[17.333px] py-[9.333px]">
                  <span className="size-[10.667px] shrink-0 rounded-full bg-[#E40015]" />
                  <p
                    className={`${inter.className} text-[11px] leading-[20px] font-medium text-white sm:text-[14px] sm:whitespace-nowrap`}
                  >
                    Ecommerce Fulfilment Warehouse Construction Company
                  </p>
                </div>

                {/* HEADING */}
                <div className="flex w-full flex-col items-start gap-[13px]">
                  <h2 className="w-full text-[32px] leading-[1.1] font-bold text-white sm:text-[48px] sm:leading-[48px] min-[1024px]:w-[891px] min-[1024px]:max-w-full">
                    Build Warehouses. Design to Delivery
                  </h2>
                  <p className="max-w-full bg-[#ED1D23] px-[5px] text-[24px] leading-[44px] font-bold text-white sm:max-[1023px]:text-[34px] sm:max-[1023px]:leading-[56px] min-[1024px]:text-[42px] min-[1024px]:leading-[56px]">
                    Construction - Ecommerce Hub – 150 days
                    <span className="align-top text-[20px] leading-[44px] font-normal sm:max-[1023px]:text-[26px] sm:max-[1023px]:leading-[56px] min-[1024px]:text-[30px] min-[1024px]:leading-[56px]">
                      *
                    </span>
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div className="flex w-full flex-col gap-[16px]">
                  <p className="w-full text-[16px] leading-[24px] font-normal text-[#A9A9A9] sm:text-[22px] sm:leading-[28px] min-[1024px]:whitespace-nowrap">
                    <span className="font-bold text-[#ED1D23]">MEKARK</span>
                    {" - Builds Every Structure You Want."}
                    <br />
                    {"All Ecommerce Hub Fulfilment Distribution Center Warehouse Constructions  – "}
                    <span className="font-bold text-white">ALL INDIA</span>
                  </p>

                  <p className="w-full text-[16px] leading-[24px] font-bold text-[#F3F3F3] sm:text-[22px] sm:leading-[28px]">
                    In-House PEB Manufacturing - Civil - PEB – MEP - Turnkey EPC.
                  </p>

                  {/* FOCUS AREAS */}
                  <div className="grid grid-cols-1 gap-x-[20px] gap-y-[16px] sm:inline-grid sm:grid-cols-[repeat(2,fit-content(100%))]">
                    {FOCUS_AREAS.map((item) => (
                      <div key={item} className="flex items-center gap-[8px]">
                        <Image
                          src={assetUrl("/Images/hero/dot.svg")}
                          alt=""
                          width={8}
                          height={8}
                          className="size-[8px] shrink-0"
                        />
                        <p className="text-[14px] leading-[20px] font-normal text-[#F7F7F7] sm:text-[18px] min-[1024px]:whitespace-nowrap">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRUSTED ACROSS INDIA */}
                <div className="relative h-[138px] w-full max-w-[847px] shrink-0 overflow-hidden rounded-[18px]">
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
                <div className="flex w-full flex-wrap items-center gap-x-[48px] gap-y-6 border-t-[0.667px] border-solid border-[#E2E2E2] pt-[16px] sm:h-[117.333px] sm:w-auto sm:flex-nowrap sm:pt-[0.667px]">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex shrink-0 flex-col items-start gap-[5.333px] whitespace-nowrap sm:h-[85.333px] ${stat.width}`}
                    >
                      <p className="text-[32px] leading-[normal] font-extrabold sm:text-[42px]">
                        <span className="text-white">{stat.value}</span>
                        <span className="text-[#C4161C]">{stat.suffix}</span>
                      </p>
                      <p className="text-[14px] leading-[normal] font-semibold text-[#9A9A9A] uppercase sm:text-[16px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-[16px] sm:gap-[30px]">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[55.333px] shrink-0 items-center justify-center gap-[9.623px] rounded-full bg-white px-[24.058px] py-[14.435px]"
                  >
                    <span className="text-[16px] leading-[24.058px] font-bold whitespace-nowrap text-[#E5091F]">
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
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex h-[55.333px] shrink-0 items-center justify-center gap-[9.623px] rounded-full border border-solid border-white px-[24.058px] py-[14.435px]"
                  >
                    <span className="text-[16px] leading-[24.058px] font-bold whitespace-nowrap text-white">
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

              {/* FORM CARD */}
              <HeroBlueprintForm />
            </div>
          </section>
        </ScaledCanvas>
      </div>
    </>
  );
}
