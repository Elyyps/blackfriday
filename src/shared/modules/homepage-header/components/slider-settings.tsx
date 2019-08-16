import * as React from "react";
import { BasicArrow } from "./basic-arrow.component";
import { Settings } from "react-slick";

export const getHomePageHeaderSetting = (
  slideToShow: number,
  nextArrow?: JSX.Element | undefined,
  prevArrow?: JSX.Element | undefined,
  className?: string
): Settings => {
  const scrollingSpeed = 500;

  return {
    className,
    nextArrow: <BasicArrow customArrow={nextArrow} />,
    prevArrow: <BasicArrow customArrow={prevArrow} prev={true} />,
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: slideToShow,
    speed: scrollingSpeed
  };
};
