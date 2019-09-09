import * as React from "react";
import styles from "./tooltip-component.module.scss";
export interface ITooltipComponentProps {
  children: any;
  duration?: number;
  isOpened?: boolean;
  parentElement: React.RefObject<HTMLButtonElement>;
  position?: "top" | "down" | "left" | "right";
}
const TooltipComponent = (props: ITooltipComponentProps) => {
  const [arrowX, setArrowX] = React.useState<number>(0);
  const [arrowY, setArrowY] = React.useState<number>(0);
  const [absolutePositionX, setAbsolutePositionX] = React.useState<number>(0);
  const [absolutePositionY, setAbsolutePositionY] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(0);
  const element = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (element && element.current) {
      const rect = element.current.getBoundingClientRect();
      const offSetY = 5;
      const halfSize = 2;
      setArrowX(rect.width / halfSize + rect.left - offSetY);
      setArrowY(rect.top - offSetY);
    }

    if (props.parentElement) {
      if (props.parentElement.current) {
        const rect = props.parentElement.current.getBoundingClientRect();
        setAbsolutePositionX(rect.left);
        const offSetY = 5;
        setAbsolutePositionY(rect.top + rect.height + offSetY);
        setWidth(rect.width);
      }
    }
  });
  const MAX_HEIGHT = 5000;

  return (
    <div
      ref={element}
      style={{
        maxHeight: props.isOpened ? MAX_HEIGHT : 0,
        left: absolutePositionX,
        top: absolutePositionY,
        width
      }}
      className={styles["tooltip"]}
      aria-hidden="true"
    >
      <div className={styles["tooltip__content"]}>
        <div className={styles["tooltip__message"]}>{props.children}</div>
        <div
          style={{ opacity: props.isOpened ? 1 : 0, top: arrowY, left: arrowX }}
          className={` ${styles["tooltip__arrow"]} ${props.position}`}
        />
      </div>
    </div>
  );
};

TooltipComponent.defaultProps = {
  position: "down",
  duration: 1500
};

export { TooltipComponent };
