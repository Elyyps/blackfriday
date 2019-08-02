import * as React from "react";
import style from "./expandable-panel-component.module.scss";
import classNames from "classnames";

interface IExpandablePanelComponentProps {
  callback?: (identifier?: string) => void;
  children?: JSX.Element;
  identifier?: string;
  mainContent: JSX.Element;
  opened?: boolean;
}

const ExpandablePanelComponent = (props: IExpandablePanelComponentProps) => {
  const invokeCallback = () => {
    if (props.callback) {
      props.callback(props.identifier);
    }
  };

  return (
    <React.Fragment>
      <div className={style["expandable-panel"]}>
        <div
          role="listitem"
          className={classNames(
            `${style["expandable-panel__block"]}`,
            props.opened && `${style["expandable-panel__block__open"]}`
          )}
        >
          <ul className={style["expandable-panel__list"]}>
            <li role="button" aria-label="expandButton" onClick={invokeCallback}>
              {props.mainContent}
              <div
                className={classNames(
                  `${style["expandable-panel__content"]}`,
                  !props.opened && `${style["expandable-panel__hidden"]}`
                )}
              >
                {props.children}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export { ExpandablePanelComponent };
