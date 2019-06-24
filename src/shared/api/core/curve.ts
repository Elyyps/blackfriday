import { Background } from "./background";
export class Curve {
  // inside the curve, pattern or color
  public curveBackground?: Background;

  // show the curve on the left or the right
  public decorCurveHorizontalAlignment?: "left" | "right";

  // show the curve at the top or the bottom
  public decorCurveVerticalAlignment?: "top" | "bottom" | "middle";
}
