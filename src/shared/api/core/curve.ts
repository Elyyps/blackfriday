import { Background } from "./background";
export class Curve {
  // show the curve at the top or the bottom
  public decorCurveVerticalAlignment?: "top" | "bottom" | "middle";

  // show the curve on the left or the right
  public decorCurveHorizontalAlignment?: "left" | "right";

  // inside the curve, pattern or color
  public curveBackground?: Background;
}
