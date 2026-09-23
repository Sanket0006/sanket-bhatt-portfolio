import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

let _client: SanityClient | null = null;

/** Lazily-created client — only constructed once real project credentials exist. */
export function getClient(): SanityClient | null {
  if (!sanityConfigured) return null;
  if (!_client) {
    _client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    });
  }
  return _client;
}
