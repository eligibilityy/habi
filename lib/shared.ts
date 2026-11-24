import { createGetUrl } from "fumadocs-core/source";

export const appName = "Habi";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";
export const siteUrl = "https://habi.yiliya.studio";

export const gitConfig = {
  user: "eligibilityy",
  repo: "habi",
  branch: "main",
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, "image.png"];

  return { segments, url: getImageUrl(segments, page.locale) };
}

export const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;
export const figmaUrl = "https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6";
