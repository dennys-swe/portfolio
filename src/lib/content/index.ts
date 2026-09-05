import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "./types";
import { pt } from "./pt";
import { es } from "./es";
import { en } from "./en";

export const content: Record<Locale, SiteContent> = { pt, es, en };

export type { SiteContent, ProjectKey, ProjectCopy, ClientCaseCopy } from "./types";
export {
  profile,
  projectOrder,
  projectMeta,
  clientCaseStacks,
  stackGroupItems,
} from "./shared";
