import { BlogOverviewHeaderModule } from "./blog-overview-header";
import { generate2BlogPostsData } from "@app/api/core/blog-post/endpoint";

export const generateBlogOverviewHeaderDummyData = (): BlogOverviewHeaderModule => ({
  title: "Black Friday 2019 blog",
  blogPosts: generate2BlogPostsData(),
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Alle blogs", url: "#" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "light"
  },
  name: "BlogOverviewHeaderModule",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  id: "0"
});
