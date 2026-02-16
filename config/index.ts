import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { SiteConfig } from "./types";

export type * from "./types";

export function loadSiteConfig(): SiteConfig {
  const filePath = path.join(process.cwd(), "config", "site.yaml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(fileContents) as SiteConfig;
  return data;
}
