"use client";

import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { useState } from "react";
import { FAQ_ITEMS } from "@/components/faqData";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

function Items({
  items,
  openIndex,
  onToggle,
  fixedLayout,
}: {
  items: typeof FAQ_ITEMS;
  openIndex: number | null;
  onToggle: (index: number) => void;
  /** Desktop: replicate the fixed Figma widths. Otherwise flow naturally. */
  fixedLayout: boolean;
}) {
  return (
    <div className={`flex flex-col items-start ${fixedLayout ? "" : "w-full"}`}>
      {items.map((item, position) => {
        const index = FAQ_ITEMS.indexOf(item);
        const open = index === openIndex;

        return (
          <div
            key={item.question}
            className={`flex flex-col items-start border-b-[1.333px] border-solid border-[#E2E2E2] ${
              fixedLayout ? "w-[911.556px]" : "w-full"
            } ${position === 0 && (open || !fixedLayout)
                ? "pt-0"
                : fixedLayout
                  ? "pt-[32px]"
                  : "pt-5"} ${
              open && fixedLayout ? "pb-[19.667px]" : "pb-[33.333px]"
            }`}
          >
            <button
              type="button"
              onClick={() => onToggle(index)}
              aria-expanded={open}
              className={`flex w-full justify-between text-left ${
                open ? "items-center" : "items-start"
              } ${fixedLayout ? "gap-[13px]" : "gap-4"}`}
            >
              <span
                className={`min-w-0 flex-1 ${
                  open
                    ? "font-bold text-[#C4161C]"
                    : "font-semibold text-[#080808]"
                } ${
                  fixedLayout
                    ? "text-[21.333px] leading-[29.867px]"
                    : "text-[17px] leading-[26px] sm:text-[19px]"
                }`}
              >
                <span
                  className={`inline-block ${fixedLayout ? "w-[32px]" : "w-[26px]"}`}
                >
                  {index + 1}.
                </span>
                {item.question}
              </span>

              <span
                aria-hidden
                className={`flex size-[37.333px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal ${
                  open
                    ? "rotate-45 bg-[#C4161C] text-[#F5F5F5]"
                    : "bg-[#F0F0F0] text-[#9A9A9A]"
                }`}
              >
                +
              </span>
            </button>

            {open && (
              <p
                className={`font-medium text-[#5A5A5A] ${
                  fixedLayout
                    ? "mt-[21.667px] w-full max-h-[266px] overflow-hidden text-[18px] leading-[28px]"
                    : "mt-4 text-[15px] leading-[26px] sm:text-[17px]"
                }`}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-start gap-[6px]">
      <div className="flex items-center gap-[10.667px]">
        <span className="h-[2.667px] w-[26.667px] bg-[#C4161C]" />
        <span className="text-[14.667px] leading-[normal] font-extrabold tracking-[2.6667px] whitespace-nowrap text-[#C4161C] uppercase">
          FAQ
        </span>
      </div>
      <h2 className="text-[30px] leading-[normal] font-bold text-[#070506] sm:text-[38px] min-[1024px]:text-[46px]! min-[1024px]:whitespace-nowrap">
        Frequently Asked Questions.
      </h2>
    </div>
  );
}

/** Small "FAQ" pill shown above the left-hand heading. */
function Badge({ desktop = false }: { desktop?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-solid border-[rgba(237,32,36,0.2)] bg-[rgba(237,32,36,0.1)] ${
        desktop
          ? "gap-[8.485px] px-[13.788px] py-[7.425px]"
          : "gap-[6px] px-[11px] py-[5px]"
      }`}
    >
      <span
        className={`shrink-0 rounded-full bg-[#E40015] ${
          desktop ? "size-[8.485px]" : "size-[6px]"
        }`}
      />
      <span
        className={`font-bold text-[#5A5656] uppercase ${
          desktop
            ? "text-[15.333px] leading-[23.04px] tracking-[3.3787px]"
            : "text-[12px] leading-[18px] tracking-[2.6px]"
        }`}
      >
        faq
      </span>
    </span>
  );
}

function LeftIntro() {
  return (
    <div className="flex w-[531px] shrink-0 flex-col items-start gap-[28px] pt-[55px]">
      <div className="relative -top-[32px] flex w-full flex-col items-start gap-[24px]">
        <Badge desktop />
        <h2 className="w-full text-[64px] leading-[60.8px] font-extrabold tracking-[-2.56px] text-[#101116]">
          Frequently Asked
          <br />
          <span className="text-[#E60F1A]">Questions</span>
        </h2>
      </div>

      <div className="relative -top-[32px] h-[464px] w-[463px] shrink-0 overflow-hidden">
        <Image
          src="/Images/faq/faq-bg.webp"
          alt=""
          width={1247}
          height={1261}
          sizes="24vw"
          className="size-full object-contain"
        />
      </div>
    </div>
  );
}

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const visibleItems = FAQ_ITEMS;

  const toggleItem = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="relative flex w-[1920px] items-start bg-white pt-[95px] pr-[107px] pb-[40px] pl-[187px]">
            <LeftIntro />

            {/* faq list — 901px from left edge → 183px after 531px intro */}
            <div className="ml-[183px] flex flex-col items-start">
              <Items
                items={visibleItems}
                openIndex={openIndex}
                onToggle={toggleItem}
                fixedLayout
              />
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="flex flex-col gap-[24px] bg-[#F9F6F7] px-[20px] py-[32px] sm:hidden">
        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex flex-col items-start gap-[12px] py-[6px]">
            <Badge />
            <h2 className="w-full max-w-[320px] text-[28px] leading-[32px] font-extrabold tracking-[-0.5px] text-[#101116]">
              Frequently Asked
              <br />
              <span className="text-[#E60F1A]">Questions</span>
            </h2>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden">
            <Image
              src="/Images/faq/faq-bg.webp"
              alt=""
              width={1247}
              height={1261}
              sizes="90vw"
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-end gap-[12px]">
          {visibleItems.map((item) => {
            const index = FAQ_ITEMS.indexOf(item);
            const open = index === openIndex;

            return (
              <div
                key={item.question}
                className="flex w-full flex-col gap-[12px]"
              >
                <div className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-[12px] text-left"
                  >
                    <span
                      className={`flex min-w-0 flex-1 text-[16px] leading-[24px] ${
                        open
                          ? "font-semibold text-[#C4161C]"
                          : "font-medium text-[#080808]"
                      }`}
                    >
                      <span className="w-[24px] shrink-0">{index + 1}.</span>
                      <span className="min-w-0">{item.question}</span>
                    </span>

                    <span
                      aria-hidden
                      className={`flex size-[24px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal transition-transform duration-300 ${
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
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full pt-[10px] pl-[24px] text-[14px] leading-[20px] font-normal text-[#4B4D53]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-[#E2E2E2]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden">
          <Image
            src="/Images/faq/faq-bg.webp"
            alt=""
            width={1247}
            height={1261}
            sizes="(min-width: 640px) 420px, 100vw"
            className="size-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-8 px-5 pt-8 pb-12 sm:px-10 sm:pb-16">
          <Heading />

          <Items
            items={visibleItems}
            openIndex={openIndex}
            onToggle={toggleItem}
            fixedLayout={false}
          />
        </div>
      </div>
    </section>
  );
}
