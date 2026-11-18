import { CSSProperties, ReactNode } from "react";

type ScaledCanvasProps = {
  /** Width of the Figma frame the children are laid out for. */
  designWidth: number;
  /** Kept for call-site compatibility; the CSS breakpoint is fixed at 1024px. */
  minWidth?: number;
  children: ReactNode;
};

/**
 * Lays children out at a fixed design width and scales the result to the
 * viewport, so desktop screens always show the Figma frame proportionally.
 * Below 1024px children render unscaled (they own their responsive layout).
 *
 * Scaling is pure CSS (`zoom: tan(atan2(100vw, designWidth))`, see globals.css),
 * so there is no JavaScript involved and the very first paint is already at the
 * final scale.
 */
export default function ScaledCanvas({
  designWidth,
  children,
}: ScaledCanvasProps) {
  return (
    <div
      className="scaled-canvas"
      style={{ "--dw": designWidth } as CSSProperties}
    >
      {children}
    </div>
  );
}
