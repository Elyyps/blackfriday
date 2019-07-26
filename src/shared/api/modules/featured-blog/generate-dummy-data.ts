import { FeaturedBlogModule } from "./featured-blog";
import { generate2BlogPostsData } from "@app/api/core/blog-post/endpoint";

export const generateFeaturedBlogDummyData = (): FeaturedBlogModule => ({
  title: "Ook interessant om te lezen",
  items: generate2BlogPostsData(),
  name: "FeaturedBlogModule",
  topMargin: "",
  bottomMargin: "",
  id: ""
});
