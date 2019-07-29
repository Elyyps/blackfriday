import { BannerModule } from "./banner.module";
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";

export const generateDummyBannerModule = (): BannerModule => ({
  bannerComponentProps: generateDummyBannerComponentData(),
  bottomMargin: "0",
  topMargin: "0",
  bottomPadding: { desktopPadding: 72, mobilePadding: 48 },
  topPadding: { desktopPadding: 72, mobilePadding: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "BannerModule"
});
