"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SQFT_OPTIONS } from "@/hooks/useBlueprintForm";

/**
 * Project Sq. Ft dropdown for the desktop forms: a custom listbox (white list,
 * rounded corners, red hover) in place of the native <select>, whose open list
 * can't be styled. `className` carries the field's box styling.
 */
export default function SqftListbox({
  id,
  value,
  onChange,
  className,
  placeholder = "Select Sq.ft Requirement",
  star = false,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  className: string;
  placeholder?: string;
  /** Show a red "*" after the placeholder while nothing is selected (phone forms). */
  star?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`relative w-full min-w-0 ${open ? "z-30" : ""}`}
    >
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        className={`${className} flex items-center justify-between gap-3 text-left`}
      >
        <span className="truncate">
          {value || (
            <span className="text-[#757575]">
              {placeholder}
              {star && <span className="text-[#ED1D23]">*</span>}
            </span>
          )}
        </span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#757575"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-50 w-full overflow-y-auto overscroll-contain rounded-[10px] border border-[#E5E5E5] bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.16)]"
        >
          {SQFT_OPTIONS.map((option) => {
            const isSelected = option === value;
            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                    isSelected
                      ? "bg-[#D90916] text-white"
                      : "text-black hover:bg-[#D90916] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
