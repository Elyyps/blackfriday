import { BlogOverviewModule } from "./blog-overview";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";

export const generateBlogOverviewDummyData = (): BlogOverviewModule => ({
  banner: "",
  items: [{ brands: [""], text: { title: "", url: "" }, icon: "" }],
  posts: generateBlogPostData(),
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "BlogOverviewModule"
});
