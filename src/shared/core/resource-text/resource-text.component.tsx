import * as React from "react";
import { FormattedMessage } from "react-intl";

export interface IResourceTextComponentProps {
  resourceKey: string;
  values?: any;
}

const ResourceTextComponent = (props: IResourceTextComponentProps) => (
  <FormattedMessage
    id={props.resourceKey}
    defaultMessage={props.resourceKey}
    description={`${props.resourceKey} description`}
    values={props.values}
  />
);

export { ResourceTextComponent };
