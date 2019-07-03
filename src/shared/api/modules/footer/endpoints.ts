import { generateBottomFooter, generateMiddleFooter, generateTopFooter } from "./generate-dummy-data";
import { Footer } from "./models/footer.module";

export const getFullfooter = (): Footer => ({
  bottomFooter: generateBottomFooter(),
  middleFooter: generateMiddleFooter(),
  topFooter: generateTopFooter()
});
