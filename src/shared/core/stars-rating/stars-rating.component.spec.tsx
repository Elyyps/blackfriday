import React from "react";
import { shallow } from "enzyme";
import { StarsRatingComponent } from "./stars-rating.component";
const numberStar = 5;
const rating = 1;
describe("[StarsRating]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <StarsRatingComponent numberStars={numberStar} rating={rating} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
