import { createHash } from "node:crypto";
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
  const publicPath = `/figma/${name}.png`;
  const file = path.join(process.cwd(), "public", "figma", `${name}.png`);
  const png = existsSync(file) ? readPng(file) : null;

  if (!png) {
    return (
      <div className="not-prose my-6 rounded-(--radius-card) border border-dashed border-border-subtle-01 px-6 py-10 text-center text-sm text-text-secondary">
        The Figma design will appear here.
        {process.env.NODE_ENV === "development" && (
          <span className="mt-1 block font-mono text-xs">
            Save the export as public{publicPath}
          </span>
        )}
      </div>
    );
  }

  // The version changes whenever the file does, so a new export skips
  // Next's image cache and the browser's.
  const src = `${publicPath}?v=${png.version}`;

  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className="not-prose my-6 block overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={png.width}
        height={png.height}
        sizes="(min-width: 768px) 720px, 100vw"
        className="h-auto w-full"
      />
      <span className="sr-only"> (opens the full-size image)</span>
    </a>
  );
}

function readPng(file: string) {
  const data = readFileSync(file);
  if (data.toString("ascii", 1, 4) !== "PNG") return null;
  return {
    // A PNG's width and height sit at bytes 16–23, in its IHDR chunk.
    width: data.readUInt32BE(16),
    height: data.readUInt32BE(20),
    version: createHash("sha1").update(data).digest("hex").slice(0, 8),
  };
}
