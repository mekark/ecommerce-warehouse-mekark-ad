import Image from "next/image";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import HeroMobileForm from "@/components/HeroMobileForm";
import {
  FOCUS_AREAS,
  PHONE_NUMBER,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";
import { manrope } from "@/lib/fonts";
import { assetUrl } from "@/lib/assetPrefix";

// The four client logos and their crops from the mobile Figma node
// (w / h = logo box inside the 64x40 tile, as in Figma).
const LOGOS = [
  { name: "L&T", src: "/Images/hero/mobile-lt.webp", w: 64, h: (64 * 1132) / 2084 },
  { name: "CAT", src: "/Images/hero/mobile-cat.webp", w: 48, h: 48 },
  { name: "TVS", src: "/Images/hero/mobile-tvs.webp", w: 52, h: 53 },
  { name: "Tata", src: "/Images/hero/mobile-tata.webp", w: 32, h: 32 },
] as const;

const STATS = [
  {
    value: "300",
    suffix: "+",
    label: "Projects",
    suffixClass: "text-[#C4161C]",
  },
  {
    value: "18",
    suffix: "+",
    label: "years Experience",
    suffixClass: "text-[#CC000A]",
  },
  {
    value: "40,000 ",
    suffix: "MT",
    label: "Annual Production",
    suffixClass: "text-[#C4161C]",
  },
  {
    value: "175",
    suffix: "+",
    label: "Engineering Team",
    suffixClass: "text-[#C4161C]",
  },
];

/** Phone-only hero, built from the 390px Figma mobile frame. */
export default function BlueprintHeroMobile() {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] text-white`}
    >
      {/* BACKGROUND: sunset steel frame (Figma "image 23": 390x1203, 2px blur, pinned to the bottom), dark overlay, fade-to-black, radial vignette */}
      <div className="pointer-events-none absolute bottom-0 -inset-x-[8px] h-[1203px] blur-[2px]">
        <Image
          src="/Images/hero/m-bg-steel-sunset.webp"
          alt=""
          fill
          // This tall background is the mobile LCP element, so load it up front
          loading="eager"
          fetchPriority="high"
          quality={60}
          // It sits under a dark overlay and a 2px blur, so ~1x resolution is enough:
          // 320px at 1.75 DPR resolves to the 560w candidate (see imageSizes in next.config)
          sizes="(min-width: 640px) 1px, 320px"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[284px] bottom-0 bg-[rgba(15,15,15,0.4)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[1690px] w-[1028px] -translate-x-1/2">
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
      <div className="pointer-events-none absolute top-0 -bottom-[43px] left-1/2 w-[1017px] -translate-x-1/2">
        <Image
          src={assetUrl("/Images/hero/m-radial.svg")}
          alt=""
          fill
          className="object-fill"
        />
      </div>

      <div className="relative z-10 flex w-full flex-col pb-[24px]">
        {/* NAVBAR (sits in the 44px strip above the Figma content) */}
        <header className="flex h-[44px] items-center justify-between px-5">
          <div className="relative h-[28px] w-[80px] shrink-0">
            <Image
              src="/Images/hero/logo-mekark.webp"
              alt="Mekark"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <EnquiryFormButton className="flex items-center justify-center rounded-[8px] bg-[#C4161C] px-[12px] py-[6px] text-[12px] leading-[normal] font-semibold whitespace-nowrap text-[#F5F5F5]">
            Request an Estimate
          </EnquiryFormButton>
        </header>

        {/* HEADLINE + IMAGE */}
        <div className="relative h-[299px] w-full">
          <div className="absolute top-[15px] left-5 flex max-w-[calc(100%-40px)] items-center gap-[8px] rounded-full border border-solid border-white/20 px-[12px] py-[6px]">
            <span className="size-[8px] shrink-0 rounded-full bg-[#E40015]" />
            <p className="text-[10px] leading-[16px] font-medium">
              Engineered for Rapid Dispatch, Automation & High SKU Density
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-[240px] w-full overflow-hidden bg-[#060606]">
            {/* desktop hero photo, anchored to the bottom of the box */}
            <div className="absolute inset-x-0 bottom-[-1px] h-[241px]">
              <Image
                src="/Images/hero/hero-bg-cold.webp"
                alt="Industrial warehouse interior"
                fill
                loading="eager"
                fetchPriority="high"
                quality={70}
                // ~1x resolution on phones (63vw at 1.75 DPR -> 460w candidate)
                sizes="(min-width: 640px) 1px, 63vw"
                className="object-cover object-bottom"
              />
              <div className="absolute inset-x-0 -top-px h-[105px] bg-[linear-gradient(175.242deg,#060606_21.88%,rgba(32,32,32,0.83)_53.892%,rgba(6,6,6,0)_89.049%)]" />
              <div className="absolute inset-x-0 bottom-px h-[32px] bg-[linear-gradient(180.821deg,rgba(30,30,30,0)_1.0095%,#1E1E1E_99.312%)]" />
            </div>

            <h2 className="absolute top-[26px] left-5 w-[338px] max-w-[calc(100%-40px)] -translate-y-1/2 text-[22px] leading-[24px] font-semibold">
              High-Throughput E-Commerce
            </h2>

            <div className="absolute top-[44px] left-0 w-[338px] max-w-[calc(100%-20px)] pl-5">
              <p className="text-[22px] leading-[24px] font-semibold">
                Fulfillment Center Construction Company
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[13px] px-5 pt-[12px]">
          {/* DESCRIPTION */}
          <div className="flex w-full flex-col gap-[10px]">
            <p className="w-full text-[13px] leading-[normal] font-normal text-[#F3F3F3]">
              Purpose-built fulfillment infrastructure designed for multi-tier pick modules, automated conveyor systems, robotic AGVs, and rapid parcel sortation.
            </p>

            <div className="flex w-full flex-col gap-[4px]">
              {/* FOCUS AREAS */}
              <ul className="flex w-full flex-col gap-[8px]">
                {FOCUS_AREAS.map((item) => (
                  <li
                    key={item.title}
                    className="border-l-[3px] border-[#ED1D23] bg-white/5 py-[8px] pr-[12px] pl-[12px]"
                  >
                    <span className="block text-[12px] leading-[18px] text-white/70">
                      <span className="font-bold text-white">{item.title}</span>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TRUSTED ACROSS INDIA */}
          <div
            className="flex w-full flex-col items-start gap-[16px] rounded-[10px] px-[16px] py-[24px]"
            style={{
              backgroundImage:
                "linear-gradient(175.658deg, #08090A 1.2889%, #654528 91.175%)",
            }}
          >
            <p className="text-[14px] leading-[20px] font-semibold text-[#ED1D23] uppercase">
              Trusted Across India
            </p>
            {/* One row always: tiles are 64px wide (Figma) but shrink on narrow phones.
                justify-between spreads them edge to edge (no empty space after the
                last logo); the gap is the minimum spacing and tightens below 380px. */}
            <div className="flex w-full flex-nowrap items-start justify-between gap-x-[20px] max-[379px]:gap-x-2.5">
              {LOGOS.map((logo) => (
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

          {/* STATS */}
          <div className="grid w-full grid-cols-2 gap-[12px]">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start justify-center gap-[4px] rounded-[10px] border border-solid border-white/[0.08] bg-[#1A1A1A] px-[20px] py-[12px] whitespace-nowrap"
              >
                <p className="text-[24px] leading-[normal] font-extrabold">
                  <span className="text-white">{stat.value}</span>
                  <span className={stat.suffixClass}>{stat.suffix}</span>
                </p>
                <p className="text-[10px] leading-[normal] font-semibold text-[#9A9A9A] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM + CTAs */}
        <div className="flex w-full flex-col items-center gap-[16px] px-[36px] py-[24px]">
          <HeroMobileForm />

          <div className="flex w-full max-w-[311px] items-start justify-center gap-[14px]">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-[140px] items-center justify-center gap-[8px] rounded-full bg-white px-[20px] py-[14px]"
            >
              <span className="text-[14px] leading-[20px] font-bold whitespace-nowrap text-[#E5091F]">
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
              className="flex w-[140px] items-center justify-center gap-[8px] rounded-full border border-solid border-white px-[20px] py-[14px]"
            >
              <span className="text-[14px] leading-[20px] font-bold whitespace-nowrap">
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
      </div>
    </section>
  );
}
