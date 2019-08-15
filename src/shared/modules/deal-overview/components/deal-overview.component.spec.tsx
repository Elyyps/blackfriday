// import React from "react";
// import { shallowWithIntl } from "enzyme-react-intl";

// import { StoreOverview, getTotalHeight } from "@app/modules/store-overview/components/store-overview.component";
// import { generateStoreOverviewModule } from "@app/api/modules/store-overview/generate-dummy-data";
// import { ViewType } from "@app/stores/settings";
// /* tslint:disable */
// describe("[StoreOverview]", () => {
//   it("should render without crashing", () => {
//     const renderedComponent = shallowWithIntl(
//       <StoreOverview
//         brandFilterItems={[]}
//         categoryFilterItems={[]}
//         screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
//         sortBy=""
//         statusFilterItems={[]}
//         stores={[]}
//         totalResults={100}
//         storeOverviewModule={generateStoreOverviewModule()}
//         getStores={jest.fn()}
//         setBrandFilters={jest.fn()}
//         setCategoryFilters={jest.fn()}
//         setSortBy={jest.fn()}
//         setStatusFilters={jest.fn()}
//         clearAllFilters={jest.fn()}
//       />
//     );
//     expect(renderedComponent).toMatchSnapshot();
//   });

//   it("should get proper total height for many stores", () => {
//     const totalHeight = getTotalHeight(ViewType.DesktopFull, 200);
//     expect(totalHeight).toBe(11520);
//   });
//   it("should get proper total height for many stores mobile", () => {
//     const totalHeight = getTotalHeight(ViewType.Mobile, 200);
//     expect(totalHeight).toBe(33600);
//   });
//   it("should get proper total height for few stores", () => {
//     const totalHeight = getTotalHeight(ViewType.DesktopFull, 5);
//     expect(totalHeight).toBe(288);
//   });
//   it("should get proper total height for few stores mobile", () => {
//     const totalHeight = getTotalHeight(ViewType.Mobile, 5);
//     expect(totalHeight).toBe(840);
//   });
// });

// import React from "react";
// import { shallowWithIntl } from "enzyme-react-intl";

// import { StoreOverview, getTotalHeight } from "@app/modules/store-overview/components/store-overview.component";
// import { generateStoreOverviewModule } from "@app/api/modules/store-overview/generate-dummy-data";
// import { ViewType } from "@app/stores/settings";
/* tslint:disable */
describe("[StoreOverview]", () => {
  it("should render without crashing", () => {
    // const renderedComponent = shallowWithIntl(    );
    // expect(renderedComponent).toMatchSnapshot();
  });
});
