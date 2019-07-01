import * as React from "react";

import styles from "./stars-rating-component.module.scss";

import Star from "@assets/icons/star-filled.svg";
import HalfStar from "@assets/icons/star-half.svg";
import EmptyStar from "@assets/icons/star-empty.svg";

import { IconComponent } from "@app/core/";

export interface IStarsRatingComponentProps {
  numberStars: number;
  rating: number;
}

enum StarsType {
  empty = "EMPTY",
  full = "FULL",
  half = "HALF"
}

const StarsRatingComponent = (props: IStarsRatingComponentProps) => {
  const [stars, setStars] = React.useState<StarsType[]>([]);

  React.useEffect(() => {
    let starsList: StarsType[] = stars.concat(
      getStars(Math.floor(props.rating), StarsType.full)
    );

    if (props.rating % 1 !== 0) {
      starsList = starsList.concat(getStars(1, StarsType.half));
    }
    starsList = starsList.concat(
      getStars(Math.floor(props.numberStars - props.rating), StarsType.empty)
    );

    setStars(starsList);
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
            icon={
              star === StarsType.full
                ? Star
                : star === StarsType.half
                ? HalfStar
                : EmptyStar
            }
            size="14px"
          />
        </span>
      ))}
    </div>
  );
};

export { StarsRatingComponent };

const getStars = (numberStars: number, starsType: StarsType): StarsType[] => {
  const stars: StarsType[] = Array(numberStars);
  [...Array(Math.floor(numberStars))].map((e, i) => stars.push(starsType));

  return stars;
};
