import { bottomFooter, middleFooter, topFooter } from "./generate-dummy-data";
import { Footer } from "./models/footer.module";

export const getFullfooter = (): Footer => ({
  bottomFooter: bottomFooter(),
  middleFooter: middleFooter(),
  topFooter: topFooter()
});
