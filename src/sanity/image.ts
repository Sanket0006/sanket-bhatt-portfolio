import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type SanityFileAsset = {
  _key?: string;
  asset?: {
    _ref?: string;
    url?: string;
    originalFilename?: string;
  };
};

/** Resolves a Sanity file field to a direct downloadable URL (file fields carry the URL on `asset.url` when queried with `->`). */
export function fileUrl(file?: SanityFileAsset | null): string | null {
  return file?.asset?.url ?? null;
}
