import React from "react";
import { shallow } from "enzyme";
import { FeaturedShopsComponent } from "./featured-shops.component";

describe("[FeaturedShops]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <FeaturedShopsComponent
        shops={[
          {
            timeLeftBar: { text: "", value: 0 },
            content: "",
            title: "",
            button: { title: "", url: "" },
            seeMore: { title: "", url: "" }
          },
          {
            timeLeftBar: { text: "", value: 0 },
            content: "",
            title: "",
            button: { title: "", url: "" },
            seeMore: { title: "", url: "" }
          },
          {
            timeLeftBar: { text: "", value: 0 },
            content: "",
            title: "",
            button: { title: "", url: "" },
            seeMore: { title: "", url: "" }
          },

          {
            timeLeftBar: { text: "", value: 0 },
            content: "",
            title: "",
            button: { title: "", url: "" },
            seeMore: { title: "", url: "" }
          }
        ]}
        title=""
        seeMoreCard={{ link: { title: "", url: "" }, icon: "", title: "Meer info" }}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
