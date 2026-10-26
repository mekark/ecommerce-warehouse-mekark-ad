"use client";

import { useCallback, useState } from "react";

export function useEnquiryRedirect(delay = 280, resetDelay = 900) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToEnquiryForm = useCallback(() => {
    if (isRedirecting) return;

    setIsRedirecting(true);

    window.setTimeout(() => {
      // The bottom form is rendered once per breakpoint (the others are
      // display:none), so scroll to whichever copy is actually visible.
      const target = Array.from(
        document.querySelectorAll<HTMLElement>("[data-enquiry-form]"),
      ).find((el) => el.getClientRects().length > 0);

      target?.scrollIntoView({ behavior: "smooth", block: "center" });

      window.setTimeout(() => {
        setIsRedirecting(false);
      }, resetDelay);
    }, delay);
  }, [isRedirecting, delay, resetDelay]);

  return { isRedirecting, redirectToEnquiryForm };
}
