import React from "react";
import { shallow } from "enzyme";

import CardIcon from "@assets/icons/store.svg";
import { FilterItemRow } from "./filter-item-row.component";

describe("[arrow-panel]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FilterItemRow title="Productdeals" icon={CardIcon} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
