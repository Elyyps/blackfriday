import * as React from "react";

import styles from "./stars-rating-component.module.scss";
import Star from "@assets/icons/star-filled.svg";
import HalfStar from "@assets/icons/half-star-color.svg";
import { IconComponent } from "@app/core/";

export interface IStarsRatingComponentProps {
  numberOfStars?: number;
  rating: number;
  showRating?: boolean;
  voteTrigger?: () => void;
}

enum StarsType {
  empty = "EMPTY",
  full = "FULL",
  half = "HALF"
}
const defaultStars = 5;
const StarsRatingComponent = (props: IStarsRatingComponentProps) => {
  const { showRating, voteTrigger } = props;
  const [stars, setStars] = React.useState<StarsType[]>([]);
  const [currentHoverStar, setCurrentHoverStar] = React.useState<number>(-1);
  const totalStars = props.numberOfStars || defaultStars;
  const rating = props.rating > totalStars ? 0 : props.rating;
  const defineStars = () => {
    const finalStarsArray: StarsType[] = [];
    const integerPart = Math.trunc(rating);
    const hasHalfStar = rating - integerPart > 0;
    const emptyStars = totalStars - ((hasHalfStar ? 1 : 0) + integerPart);
    [...Array(Math.floor(integerPart))].map(e => finalStarsArray.push(StarsType.full));
    if (hasHalfStar) finalStarsArray.push(StarsType.half);
    [...Array(Math.floor(emptyStars))].map(e => finalStarsArray.push(StarsType.empty));
    setStars(finalStarsArray);
  };
  React.useEffect(() => {
    defineStars();
  }, []);

  return (
    <div
      style={{ cursor: voteTrigger ? "pointer" : "default" }}
      onClick={() => {
        if (voteTrigger) voteTrigger();
      }}
      role="button"
      onMouseLeave={() => setCurrentHoverStar(-1)}
      className={styles["stars-rating"]}
    >
      {showRating && <span className={styles["stars-rating__label"]}>{rating}</span>}
      {stars.map((star, i) => (
        <span
          onMouseOver={() => setCurrentHoverStar(i)}
          key={i}
          role="button"
          className={`${voteTrigger &&
            (currentHoverStar >= 0
              ? currentHoverStar >= i
                ? styles["stars-rating__hovered"]
                : styles["stars-rating__hovered-empty"]
              : "")} ${styles["stars-rating__star"]} ${
            styles[star === StarsType.full ? "full" : star === StarsType.half ? "half" : "empty"]
          }`}
        >
          <IconComponent
            icon={
              voteTrigger && currentHoverStar >= 0
                ? Star
                : star === StarsType.full
                ? Star
                : star === StarsType.half
                ? HalfStar
                : Star
            }
            size="14px"
          />
        </span>
      ))}
    </div>
  );
};

export { StarsRatingComponent };
