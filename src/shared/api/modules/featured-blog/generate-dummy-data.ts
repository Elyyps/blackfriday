import { FeaturedBlogModule } from "./featured-blog";
import { generate2BlogPostsDataBelgian, generate2BlogPostsDataDutch } from "@app/api/core/blog-post/endpoint";

export const generateFeaturedBlogDummyDataBelgian = (): FeaturedBlogModule => ({
  title: "Ook interessant om te lezen",
  items: generate2BlogPostsDataBelgian(),
  name: "FeaturedBlogModule",
  id: "",
  bottomPadding: { desktopSpacing: 0, mobileSpacing: 0 },
  background: { backgroundColour: "#f7f7f7" }
});
export const generateFeaturedBlogDummyDataDutch = (): FeaturedBlogModule => ({
  title: "Ook interessant om te lezen",
  items: generate2BlogPostsDataDutch(),
  name: "FeaturedBlogModule",
  id: "",
  bottomPadding: { desktopSpacing: 0, mobileSpacing: 0 },
  background: { backgroundColour: "#f7f7f7" }
});
