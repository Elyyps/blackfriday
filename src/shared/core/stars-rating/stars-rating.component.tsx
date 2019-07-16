import * as React from "react";

import styles from "./stars-rating-component.module.scss";

import Star from "@assets/icons/star-filled.svg";
import HalfStar from "@assets/icons/star-half.svg";
import EmptyStar from "@assets/icons/star-empty.svg";

import { IconComponent } from "@app/core/";

export interface IStarsRatingComponentProps {
  numberOfStars: number;
  rating: number;
}

enum StarsType {
  empty = "EMPTY",
  full = "FULL",
  half = "HALF"
}

const StarsRatingComponent = (props: IStarsRatingComponentProps) => {
  const [stars, setStars] = React.useState<StarsType[]>([]);
  const rating = props.rating > props.numberOfStars ? 0 : props.rating;
  React.useEffect(() => {
    setStars(getListStars(props.numberOfStars, rating));
  }, []);

  return (
    <div className={styles["stars-rating"]}>
      {stars.map((star, i) => (
        <span
          key={i}
          className={`${styles["stars-rating__star"]} ${
            styles[star === StarsType.full || StarsType.half ? "full" : "empty"]
          }`}
        >
          <IconComponent
            icon={star === StarsType.full ? Star : star === StarsType.half ? HalfStar : EmptyStar}
            size="14px"
          />
        </span>
      ))}
    </div>
  );
};

export { StarsRatingComponent };

const getListSingleTypeStars = (numberStars: number, starsType: StarsType): StarsType[] => {
  const stars: StarsType[] = Array(numberStars);
  [...Array(Math.floor(numberStars))].map(e => stars.push(starsType));

  return stars;
};

const getListStars = (numberStars: number, rating: number): StarsType[] => {
  let starsList: StarsType[] = Array().concat(getListSingleTypeStars(Math.floor(rating), StarsType.full));

  if (rating % 1 !== 0) {
    starsList = starsList.concat(getListSingleTypeStars(1, StarsType.half));
  }
  starsList = starsList.concat(getListSingleTypeStars(Math.floor(numberStars - rating), StarsType.empty));

  return starsList;
};
