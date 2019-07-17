import React, { useState } from "react";
import styles from "./mobile-filter-component.module.scss";
import { ArrowPanelComponent } from "../arrow-panel";
import classNames from "classnames";
import { IconComponent } from "../icon";
import ChevronDown from "@assets/icons/chevron-down.svg";
import Search from "@assets/icons/search.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import HandPointing from "@assets/icons/hand-pointing.svg";
import ChevronLeft from "@assets/icons/chevron-left.svg";
import Cross from "@assets/icons/cross.svg";
import { Button } from "../button";
import { Checkbox } from "@app/api/core/checkbox";
import { CheckboxComponent } from "../checkbox/checkbox.component";

interface ILocalCheckBoxes {
  checked: boolean;
  title: string;
}

export interface IMobileFilterComponentProps {
  brands: string[];
  categories: string[];
  onClose: () => void;
  sortBy: string[];
  status: string[];
}

const MobileFilterComponent = (props: IMobileFilterComponentProps) => {
  const postFrom = 15;
  const ObjectKeys: any = {};
  const connectClass = "uk-switcher-list";
  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };
  const [checkedItems, setCheckedItems] = useState(ObjectKeys);
  const [textLabel, setTextLabel] = useState("");
  const [prevIcon, setPrevIcon] = useState(false);
  const [filterContent, setFilterContent] = useState(false);
  const [filterSort, setfilterSort] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState<ILocalCheckBoxes[]>();

  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [checkedStatus, setCheckedStatus] = useState([]);
  const [currentSortBy, setCurrentSortBy] = useState("");

  const initialTitle = "Filters";
  const [currentTitle, setCurrentTitle] = useState(initialTitle);

  const handleClickClear = (e: any) => {
    e.preventDefault();
  };
  const filterSortChange = (e: any) => {
    setfilterSort(!filterSort);
  };
  const handleClick = (e: any) => {
    {
      e.target.innerText ? setTextLabel(e.target.innerText) : setTextLabel("");
    }
    setPrevIcon(!prevIcon);
  };
  const handleClickLAbel = () => {
    setFilterContent(!filterContent);
  };

  const { brands, categories, sortBy, status } = props;

  const openBrandsPage = () => {
    setCurrentTitle("Brands");
    const brandCheckBoxes: ILocalCheckBoxes[] = [];
    brands.forEach(item => {
      const checked = checkedBrands.find(brand => item === brand);
      brandCheckBoxes.push({
        title: item,
        checked: checked ? checked : false
      });
    });
    setCheckBoxes(brandCheckBoxes);
  };
  const openStatusPage = () => {
    setCurrentTitle("Status");
    const statusCheckBoxes: ILocalCheckBoxes[] = [];
    status.forEach(item => {
      const checked = checkedStatus.find(brand => item === brand);
      statusCheckBoxes.push({
        title: item,
        checked: checked ? checked : false
      });
    });
    setCheckBoxes(statusCheckBoxes);
  };
  const openCategoriesPage = () => {
    setCurrentTitle("Categories");
    const categoriesCheckBoxes: ILocalCheckBoxes[] = [];
    categories.forEach(item => {
      const checked = checkedStatus.find(brand => item === brand);
      categoriesCheckBoxes.push({
        title: item,
        checked: checked ? checked : false
      });
    });
    setCheckBoxes(categoriesCheckBoxes);
  };

  return (
    <div className={styles["mobile-filter"]}>
      <div className={styles["mobile-filter__header"]}>
        <span role="button" className={styles["mobile-filter__header__nav-button"]} onClick={handleClickLAbel}>
          {prevIcon ? (
            <IconComponent icon={ChevronLeft} size={"7px"} />
          ) : (
            <div role="button" onClick={() => setCheckBoxes(null)}>
              <IconComponent strokeColor="#fff" icon={Cross} size={"12px"} />
            </div>
          )}
        </span>

        <>
          <span className={styles["mobile-filter__header__title"]}>
            <span>{currentTitle}</span>
            {currentTitle === initialTitle && <IconComponent icon={HandPointing} size={"16px"} />}
          </span>
        </>
        {brands.length > 0 || categories.length > 0 || sortBy || status.length > 0 ? (
          <a role="button" className={styles["mobile-filter__header__clear"]} onClick={handleClickClear}>
            Wis alle filters
          </a>
        ) : (
          <div />
        )}
      </div>
      {!checkBoxes ? (
        <>
          <ArrowPanelComponent
            key={0}
            onClick={() => {
              openBrandsPage();
            }}
            title="Sorteren"
          />
          <ArrowPanelComponent
            onClick={() => {
              openStatusPage();
            }}
            key={1}
            brands={["Nu geldig"," Bijna verlopen"]}
            title="Status"
          />
          <ArrowPanelComponent
            onClick={() => {
              openCategoriesPage();
            }}
            key={2}
            title="Categorie"
          />
          <ArrowPanelComponent
            onClick={() => {
              openBrandsPage();
            }}
            key={3}
            brands={["Nike"," Adidas"," New Balance"]}
            title="Merk"
          />
        </>
      ) : (
        <div className={styles["mobile-filter__list"]}>
          <div className={styles["mobile-filter__list__header"]}>
            <></>
          </div>

          {checkBoxes.map((item: any, key: number) => (
            <div key={key} className={styles["mobile-filter__list__item"]}>
              <CheckboxComponent title={item.title} isChecked={item.checked} />
            </div>
          ))}
        </div>
      )}
      <div className={styles["mobile-filter__footer"]}>
        <Button variant="secondary-inverted" fullWidth title="Toon 123 Winkels" />
      </div>
    </div>
  );
};

export { MobileFilterComponent };
