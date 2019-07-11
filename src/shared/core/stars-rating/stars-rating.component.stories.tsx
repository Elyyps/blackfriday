import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { StarsRatingComponent } from "./stars-rating.component";
const numberStar = 5;
const rating = 1;

const notes = require("./stars-rating.md");

storiesOf("Stars-rating", module)
  .addDecorator(withA11y)
  .add("Basic implementation", () => <StarsRatingComponent numberStars={numberStar} rating={rating} />, {
    notes
  });
