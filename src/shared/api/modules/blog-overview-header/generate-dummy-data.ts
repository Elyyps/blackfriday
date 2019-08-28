import { BlogOverviewHeaderModule } from "./blog-overview-header";
import { generate2BlogPostsDataBelgian, generate2BlogPostsDataDutch } from "@app/api/core/blog-post/endpoint";

export const generateBlogOverviewHeaderDummyDataBelgian = (): BlogOverviewHeaderModule => ({
  title: "Black Friday 2019 blog",
  blogPosts: generate2BlogPostsDataBelgian(),
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Alle blogs", url: "#" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "light"
  },
  name: "BlogOverviewHeaderModule",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  id: "0"
});
export const generateBlogOverviewHeaderDummyDataDutch = (): BlogOverviewHeaderModule => ({
  title: "Black Friday 2019 blog",
  blogPosts: generate2BlogPostsDataDutch(),
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Alle blogs", url: "#" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "light"
  },
  name: "BlogOverviewHeaderModule",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  id: "0"
});
