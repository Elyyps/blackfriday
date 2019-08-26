/* tslint:disable */
import { generateHomePageHeader } from "./generate-dummy-data";
import { HomepageHeader } from "./homepage-header.module";

export const getHeaderpageHeader = (): HomepageHeader => generateHomePageHeader();
