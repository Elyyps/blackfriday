import { BannerModule } from "./banner.module";
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";

export const generateDummyBannerModule = (): BannerModule => ({
  bannerComponentProps: generateDummyBannerComponentData(),
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "BannerModule"
});
