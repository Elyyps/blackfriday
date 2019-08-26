import { BannerModule } from "./banner.module";
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";

export const generateDummyBannerModule = (): BannerModule => ({
  bannerComponentProps: generateDummyBannerComponentData(),
  bottomPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  topPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "BannerModule"
});
