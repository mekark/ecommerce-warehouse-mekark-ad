import { ReactNode } from "react";
import { QUOTE_FORM_ID } from "@/components/heroData";

type EnquiryFormButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

/**
 * "Request an Estimate" CTA. A plain anchor to the lead form section, so it
 * works before hydration and with JavaScript blocked. Smooth scrolling is
 * native CSS (see globals.css).
 */
export default function EnquiryFormButton({
  children,
  className = "",
  showArrow = false,
}: EnquiryFormButtonProps) {
  return (
    <a href={`#${QUOTE_FORM_ID}`} className={className}>
      {children}
      {showArrow && <span className="ml-3 text-[22px]">→</span>}
    </a>
  );
}
