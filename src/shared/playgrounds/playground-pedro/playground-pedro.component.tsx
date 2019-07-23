/* tslint:disable */
import * as React from "react";

import { ShopSingleHeaderComponent } from "@app/modules/shop-single-header";
import { dummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";
import { PageProgressBarComponent } from "@app/core/page-progress-bar";
import styles from "./playground-pedro-component.module.scss";
import { SearchInputFieldComponent } from "@app/core/search-input-field";
export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");
  const handleNavigation = (e: any) => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setValue(scrolled * 100);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
  }, []);

  return (
    <div className={styles["playground-pk"]}>
      <div style={{ maxWidth: 300, margin: "auto" }}>
        <SearchInputFieldComponent
          onChange={(value: string) => {
            setText(value);
          }}
          value={text}
          placeholder="placeholder"
        />
      </div>
    </div>
  );
};

export { PlaygroundPedroComponent };
