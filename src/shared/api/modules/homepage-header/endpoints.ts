/* tslint:disable */
import { generateHomePageHeaderBelgian } from "./generate-dummy-data";
import { HomepageHeader } from "./homepage-header.module";

export const getHeaderpageHeader = (): HomepageHeader => generateHomePageHeaderBelgian();
