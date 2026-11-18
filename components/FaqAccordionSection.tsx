"use client";

import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { useState } from "react";
import { FAQ_ITEMS } from "@/components/faqData";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

/** "FAQ" pill shown above the heading. */
function Badge() {
  return (
    <span className="inline-flex items-center gap-[6px] rounded-full border border-solid border-[rgba(237,32,36,0.2)] bg-[rgba(237,32,36,0.1)] px-[11px] py-[5px] lg:gap-[8.485px] lg:px-[13.788px] lg:py-[7.425px]">
      <span className="size-[6px] shrink-0 rounded-full bg-[#E40015] lg:size-[8.485px]" />
      <span className="text-[12px] leading-[18px] font-bold tracking-[2.6px] text-[#5A5656] uppercase lg:text-[15.333px] lg:leading-[23.04px] lg:tracking-[3.3787px]">
        faq
      </span>
    </span>
  );
}

/**
 * One FAQ section for every screen size (previously three separate copies).
 * Single column on phones/tablets; from 1024px a two-column layout matching the
 * Figma frame, scaled to the viewport. Every answer stays in the HTML (collapsed
 * with a CSS grid-rows transition) so it is crawlable.
 */
export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className={`${manrope.className} w-full bg-white`}>
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="relative flex w-full flex-col gap-6 bg-[#F9F6F7] px-5 py-8 sm:gap-8 sm:bg-white sm:px-10 sm:pb-16 lg:w-[1920px] lg:flex-row lg:items-start lg:gap-0 lg:pt-[95px] lg:pr-[107px] lg:pb-[40px] lg:pl-[187px]">
          {/* LEFT: badge, heading, illustration */}
          <div className="flex w-full flex-col gap-4 lg:w-[531px] lg:shrink-0 lg:gap-[28px] lg:pt-[55px]">
            <div className="flex flex-col items-start gap-3 py-[6px] lg:relative lg:-top-[32px] lg:gap-[24px] lg:py-0">
              <Badge />
              <h2 className="w-full max-w-[320px] text-[28px] leading-[32px] font-extrabold tracking-[-0.5px] text-[#101116] sm:max-w-none sm:text-[38px] sm:leading-[44px] lg:text-[64px] lg:leading-[60.8px] lg:tracking-[-2.56px]">
                Frequently Asked
                <br />
                <span className="text-[#E60F1A]">Questions</span>
              </h2>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden sm:max-w-[420px] lg:-top-[32px] lg:mx-0 lg:aspect-auto lg:h-[464px] lg:w-[463px] lg:max-w-none lg:shrink-0">
              <Image
                src="/Images/faq/faq-bg.webp"
                alt=""
                width={1247}
                height={1261}
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 420px, 90vw"
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT: accordion */}
          <div className="flex w-full flex-col items-start lg:ml-[183px] lg:w-[911.556px]">
            {FAQ_ITEMS.map((item, index) => {
              const open = index === openIndex;
              const first = index === 0;

              return (
                <div
                  key={item.question}
                  className={`flex w-full flex-col items-start border-b border-solid border-[#E2E2E2] pb-3 lg:border-b-[1.333px] ${
                    first ? "pt-0" : "pt-3"
                  } ${
                    first && open ? "lg:pt-0" : "lg:pt-[32px]"
                  } ${open ? "lg:pb-[19.667px]" : "lg:pb-[33.333px]"}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={open}
                    className={`flex w-full items-center justify-between gap-3 text-left lg:gap-[13px] ${
                      open ? "" : "lg:items-start"
                    }`}
                  >
                    <span
                      className={`flex min-w-0 flex-1 text-[16px] leading-[24px] sm:text-[19px] sm:leading-[26px] lg:text-[21.333px] lg:leading-[29.867px] ${
                        open
                          ? "font-semibold text-[#C4161C] lg:font-bold"
                          : "font-medium text-[#080808] lg:font-semibold"
                      }`}
                    >
                      <span className="w-[24px] shrink-0 sm:w-[26px] lg:w-[32px]">
                        {index + 1}.
                      </span>
                      <span className="min-w-0">{item.question}</span>
                    </span>

                    <span
                      aria-hidden
                      className={`flex size-[24px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal transition-transform duration-300 sm:size-[37.333px] ${
                        open
                          ? "rotate-45 bg-[#C4161C] text-[#F5F5F5]"
                          : "bg-[#F0F0F0] text-[#9A9A9A]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    aria-hidden={!open}
                    className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full pt-[10px] pl-[24px] text-[14px] leading-[20px] font-normal text-[#4B4D53] sm:pl-[26px] sm:text-[17px] sm:leading-[26px] lg:pt-[21.667px] lg:pl-0 lg:text-[18px] lg:leading-[28px] lg:font-medium lg:text-[#5A5A5A]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
