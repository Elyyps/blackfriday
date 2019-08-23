import * as React from "react";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { TextFieldComponent } from "@app/core";
import { validateEmail } from "@app/util";
import Paper from "@assets/icons/paper.svg";
import { ClickableComponent } from "../clickable";

import styles from "./newsletter-forms-component.module.scss";
export interface IContactFormValues {
  emailAddress: string;
  message: string;
  name: string;
}

interface IOtherProps {}

const InnerForm = (props: IOtherProps & FormikProps<IContactFormValues>) => {
  const { touched, errors } = props;
  const maxCharacter = 200;

  return (
    <Form>
      <div className="uk-grid" data-uk-margin>
        <div className="uk-width-1-2@s">
          <TextFieldComponent
            label="Naam"
            placeholder=""
            value={props.values.name}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="text"
            id="name"
            errorMessage={touched.name === true && errors.name}
          />
        </div>
        <div className="uk-width-1-2@s">
          <TextFieldComponent
            label="E-mailadres"
            placeholder=""
            value={props.values.emailAddress}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="email"
            id="emailAddress"
            errorMessage={touched.emailAddress === true && errors.emailAddress}
          />
        </div>
      </div>
      <div className={`${styles["newsletter-forms__text-field"]} "uk-margin-small-top"`}>
        <TextFieldComponent
          label="Bericht"
          placeholder=""
          value={props.values.message}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          type="text"
          id="message"
          maxCharacters={maxCharacter}
          isTextArea
          errorMessage={touched.message === true && errors.message}
        />
      </div>
      <div className="form-bottom uk-margin-small-top">
        <ClickableComponent iconStyle="filled" buttonType="submit" title={"Verzenden"} iconRight={Paper} />
      </div>
    </Form>
  );
};

interface IFormProps {
  onSubmit: (values: IContactFormValues) => void;
}

export const NewsletterFormComponent = withFormik<IFormProps, IContactFormValues>({
  mapPropsToValues: () => ({
    emailAddress: "",
    message: "",
    name: ""
  }),

  validate: (values: IContactFormValues) => {
    const errors: FormikErrors<IContactFormValues> = {};
    if (!values.name) {
      errors.name = "Vul uw naam in";
    }

    if (!values.emailAddress) {
      errors.emailAddress = "Vul uw e-mail adres in";
    } else if (!validateEmail(values.emailAddress)) {
      errors.emailAddress = "Geen valide e-mail adres";
    }
    if (!values.message) {
      errors.message = "Laat een bericht achter";
    }

    return errors;
  },

  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values);
  }
})(InnerForm);
