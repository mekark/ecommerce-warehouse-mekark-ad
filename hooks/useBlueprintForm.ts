"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ASSET_PREFIX } from "@/lib/assetPrefix";
import { getPageSourceUrl } from "@/lib/sourceUrl";

// Routed through the asset prefix so it reaches this app (not the main site) on mekark.com.
const FORM_ENDPOINT = `${ASSET_PREFIX}/api/enquiry-form`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HAS_LETTER_REGEX = /\p{L}/u;

export const SQFT_OPTIONS = [
  "10,000 - 20,000",
  "20,000 - 30,000",
  "30,000 - 50,000",
  "50,000+",
];

export type BlueprintFormValues = {
  name: string;
  location: string;
  phoneNumber: string;
  email: string;
  industry: string;
  sqft: string;
  details: string;
};

export type BlueprintFormErrors = Partial<Record<keyof BlueprintFormValues, string>>;

const INITIAL_VALUES: BlueprintFormValues = {
  name: "",
  location: "",
  phoneNumber: "",
  email: "",
  industry: "",
  sqft: "",
  details: "",
};

/** State + submit logic for the "Request Your Project Blueprint" form. */
export function useBlueprintForm() {
  const [values, setValues] = useState<BlueprintFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<BlueprintFormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target;
    const value =
      name === "phoneNumber"
        ? e.target.value.replace(/\D/g, "").slice(0, 10)
        : e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next: BlueprintFormErrors = {};
    const phoneDigits = values.phoneNumber.replace(/\D/g, "");

    if (!values.name.trim()) {
      next.name = "This field is required.";
    } else if (!HAS_LETTER_REGEX.test(values.name)) {
      next.name = "Name cannot be only numbers.";
    }

    if (values.location.trim() && !HAS_LETTER_REGEX.test(values.location)) {
      next.location = "Location cannot be only numbers.";
    }

    if (!values.phoneNumber.trim()) {
      next.phoneNumber = "This field is required.";
    } else if (phoneDigits.length !== 10) {
      next.phoneNumber = "Mobile number must be 10 digits.";
    }

    if (values.email.trim() && !EMAIL_REGEX.test(values.email)) {
      next.email = "Enter valid email.";
    }

    if (!values.industry.trim()) next.industry = "This field is required.";
    if (!values.sqft) next.sqft = "This field is required.";
    if (!values.details.trim()) next.details = "This field is required.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatusMessage(null);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phoneNumber.trim(),
          location: values.location.trim(),
          industry: values.industry.trim(),
          sqf: values.sqft,
          message: values.details.trim(),
          sourceName: "Warehouse Division",
          sourceDomain:
            typeof window !== "undefined" ? window.location.hostname : "",
          sourceUrl: getPageSourceUrl(),
          pageUrl: getPageSourceUrl(),
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to submit form.");
      }

      setValues(INITIAL_VALUES);
      // Stay on the current host/path: /thank-you on the subdomain, /e-commerce-warehouse/thank-you on mekark.com.
      window.location.assign(`${window.location.pathname.replace(/\/$/, "")}/thank-you`);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    statusMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
