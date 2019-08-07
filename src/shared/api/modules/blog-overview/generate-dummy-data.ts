import { BlogOverviewModule } from "./blog-overview";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";
import { generateSidebarData } from "@app/api/core/sidebar/generate-dummy-data";

export const generateBlogOverviewDummyData = (): BlogOverviewModule => ({
  sidebar: generateSidebarData(),
  posts: generateBlogPostData(),
  bottomMargin: "40px",
  topMargin: "40px",
  id: "1",
  name: "BlogOverviewModule"
});
