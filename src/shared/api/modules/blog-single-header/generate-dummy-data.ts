import { BlogSingleHeaderModule } from "./blog-single-header";
import { generate2BlogPostsData } from "@app/api/core/blog-post/endpoint";

export const generateBlogOverviewHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019 blog",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/2.png",
  items: generate2BlogPostsData(),
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "Alle blogs", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "10px",
  id: "0",
  topMargin: "10px"
});
export const generateBlogSingleHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Vijf voorspellingen van Black Friday Nederland",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/2.png",
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "Alle blogs", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "10px",
  id: "0",
  topMargin: "10px"
});
