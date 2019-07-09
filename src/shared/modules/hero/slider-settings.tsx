import * as React from "react";
import { getArrow } from "@app/constants/icons";
import { ImageComponent } from "@app/prep/modules-prep/core";

interface IBasicArrowProps {
  className?: string;
  customArrow?: JSX.Element | undefined;
  isPrevious?: boolean;
  onClick?: () => void;
}
const BasicArrow = (props: IBasicArrowProps) => {
  const { className, onClick, customArrow } = props;
  let result;
  if (customArrow === undefined) {
    result = (
      <button
        className={`${className}`}
        style={{ display: "block" }}
        onClick={onClick}
      >
        <ImageComponent src={getArrow(props.isPrevious)} alt="arrow" />
      </button>
    );
  } else {
    result = (
      <div
        className={className}
        onClick={onClick}
        role="button"
        aria-label="navigateButton"
      >
        {customArrow}
      </div>
    );
  }

  return result;
};
export const setRelatedProductsSlider = (
  setDraggable: (draggable: boolean) => void,
  setSlideToShow: (slideToShow: number) => number,
  nextArrow?: JSX.Element | undefined,
  prevArrow?: JSX.Element | undefined
) => {
  const breakpointShowTwoSlides = 959;
  const breakPointMobile = 750;
  const scrollingSpeed = 500;

  return {
    dots: false,
    infinite: false,
    nextArrow: <BasicArrow customArrow={nextArrow} />,
    prevArrow: <BasicArrow customArrow={prevArrow} isPrevious />,
    beforeChange: () => {
      setDraggable(true);
    },
    afterChange: () => {
      setDraggable(false);
    },
    responsive: [
      {
        breakpoint: breakpointShowTwoSlides,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: breakPointMobile,
        settings: "unslick"
      }
    ],
    draggable: true,
    slidesToScroll: 1,
    slidesToShow: setSlideToShow,
    speed: scrollingSpeed
  };
};
