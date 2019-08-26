import { BlogOverviewModule } from "./blog-overview";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";
import { generateSidebarData } from "@app/api/core/sidebar/generate-dummy-data";

export const generateBlogOverviewDummyData = (): BlogOverviewModule => ({
  sidebar: generateSidebarData(),
  posts: generateBlogPostData(),
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 40 },
  topMargin: { mobileSpacing: 24, desktopSpacing: 40 },
  id: "1",
  name: "BlogOverviewModule"
});
