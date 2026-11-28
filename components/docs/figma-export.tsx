import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

type FigmaExportProps = {
  /** The file name in public/figma, without .png. Use the page's slug. */
  name: string;
  /** Describes the image, like "Mobile number input's Figma page". */
  alt: string;
};

/**
 * Shows a PNG export of a component's Figma page, saved as
 * public/figma/<name>.png. Until the file exists, it shows a placeholder.
 */
export function FigmaExport({ name, alt }: FigmaExportProps) {
  const src = `/figma/${name}.png`;
  const file = path.join(process.cwd(), "public", "figma", `${name}.png`);
  const size = existsSync(file) ? readPngSize(file) : null;

  if (!size) {
    return (
      <div className="not-prose my-6 rounded-(--radius-card) border border-dashed border-border-subtle-01 px-6 py-10 text-center text-sm text-text-secondary">
        The Figma design will appear here.
        {process.env.NODE_ENV === "development" && (
          <span className="mt-1 block font-mono text-xs">
            Save the export as public{src}
          </span>
        )}
      </div>
    );
  }

  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className="not-prose my-6 block overflow-hidden rounded-(--radius-card) border border-border-subtle-01"
    >
      <Image
        src={src}
        alt={alt}
        width={size.width}
        height={size.height}
        sizes="(min-width: 768px) 720px, 100vw"
        className="h-auto w-full"
      />
      <span className="sr-only"> (opens the full-size image)</span>
    </a>
  );
}

// A PNG's width and height sit at bytes 16–23, in its IHDR chunk.
function readPngSize(file: string) {
  const header = readFileSync(file).subarray(0, 24);
  const isPng = header.toString("ascii", 1, 4) === "PNG";
  if (!isPng) return null;
  return { width: header.readUInt32BE(16), height: header.readUInt32BE(20) };
}
