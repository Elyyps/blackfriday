import { BlogOverviewModule } from "./blog-overview";
import { generateBlogPostDataBelgian, generateBlogPostDataDutch } from "@app/api/core/blog-post/endpoint";
import { generateSidebarData } from "@app/api/core/sidebar/generate-dummy-data";

export const generateBlogOverviewDummyDataBelgian = (): BlogOverviewModule => ({
  sidebar: generateSidebarData(),
  posts: generateBlogPostDataBelgian(),
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 40 },
  topMargin: { mobileSpacing: 24, desktopSpacing: 40 },
  id: "1",
  name: "BlogOverviewModule"
});
export const generateBlogOverviewDummyDataDutch = (): BlogOverviewModule => ({
  sidebar: generateSidebarData(),
  posts: generateBlogPostDataDutch(),
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 40 },
  topMargin: { mobileSpacing: 24, desktopSpacing: 40 },
  id: "1",
  name: "BlogOverviewModule"
});
