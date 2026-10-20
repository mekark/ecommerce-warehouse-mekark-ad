/**
 * Path under which this app's assets (and API) are served when it is proxied
 * from https://mekark.com/e-commerce-warehouse/. Must match `assetPrefix`
 * in next.config.ts and the `-static` rewrite in the main site's vercel.json.
 */
export const ASSET_PREFIX = "/e-commerce-warehouse-static";

/** Prefix a root-absolute public path (e.g. an unoptimized SVG or favicon). */
export function assetUrl(path: string) {
  return `${ASSET_PREFIX}${path}`;
}
