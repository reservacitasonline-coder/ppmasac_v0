const UNSPLASH_HOST = "https://images.unsplash.com";

/**
 * Builds a source URL for an Unsplash photo id.
 *
 * `width` caps the size of the file next/image downloads before it
 * re-encodes and resizes it for each breakpoint.
 */
export function unsplash(photoId: string, width = 1600): string {
  return `${UNSPLASH_HOST}/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}
