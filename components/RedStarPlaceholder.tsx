/**
 * Placeholder text with a red "*" for the phone forms. A native placeholder
 * can't be partly coloured, so the input's own placeholder is dropped and this
 * label is drawn over it (inside a `relative` wrapper) while the field is empty.
 */
export default function RedStarPlaceholder({
  text,
  show,
  left,
  top,
}: {
  text: string;
  show: boolean;
  /** Left padding of the field in px (the 1px border is added here). */
  left: number;
  /** Set for multi-line fields; otherwise the label is centred vertically. */
  top?: number;
}) {
  if (!show) return null;

  return (
    <span
      aria-hidden
      style={{ left: left + 1, ...(top !== undefined ? { top: top + 1 } : {}) }}
      className={`pointer-events-none absolute text-[12px] leading-[normal] text-[#757575] ${
        top === undefined ? "inset-y-0 flex items-center" : ""
      }`}
    >
      {text}
      <span className="text-[#ED1D23]">*</span>
    </span>
  );
}
