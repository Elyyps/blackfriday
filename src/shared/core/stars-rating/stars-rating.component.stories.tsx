import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { StarsRatingComponent } from "./stars-rating.component";

const notes = require("./stars-rating.md");
/* tslint:disable */
storiesOf("Stars Rating", module)
  .addDecorator(withA11y)
  .add("1 out of 5 implementation", () => <StarsRatingComponent numberOfStars={5} rating={1} />)
  .add("3 out of 5 implementation", () => <StarsRatingComponent numberOfStars={5} rating={3} />)
  .add("3.5 out of 5 implementation", () => <StarsRatingComponent numberOfStars={5} rating={3.5} />)
  .add("9 out of 10 implementation", () => <StarsRatingComponent numberOfStars={10} rating={9} />),
  {
    notes
  };
