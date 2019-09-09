import * as React from "react";
import { withFormik, FormikProps, FormikErrors, Form, connect } from "formik";
import { TextFieldComponent } from "@app/core";
import { validateEmail } from "@app/util";
import Paper from "@assets/icons/paper.svg";
import { ClickableComponent } from "../clickable";

import styles from "./newsletter-forms-component.module.scss";
import { ISearchItem } from "@app/api/core/search-item";
import { getMockRouterProps } from "@app/util/get-mock-router-props";
import { CheckboxComponent } from "../checkbox";
import { NewsletterModule } from "@app/api/modules/newsletter/newsletter";
export interface IContactFormValues {
  emailAddress: string;
  name: string;
  selectedItems: ISearchItem[];
}

interface IOtherProps {
  selectedItems: ISearchItem[];
}

const InnerForm = (props: IOtherProps & FormikProps<IContactFormValues>) => {
  const { touched, errors } = props;
  const maxCharacter = 200;

  const chechItemSelected = (id: number): boolean | undefined => {
    if (props.values.selectedItems.find(itemProps => itemProps.id === id)) return true;

    return false;
  };

  const onChange = () => {
  
  };

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
        <h3>Graag ontvang ik de beste deals voor:</h3>
        <CheckboxComponent>Alle onderwerpen</CheckboxComponent>
        {/* <TextFieldComponent
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
        /> */}
      </div>
      <div className={styles["newsletter-forms__checkboxes"]}>
        {props.selectedItems.map(item => {
          const isChecked = chechItemSelected(item.id);

          return (
            <CheckboxComponent isChecked={isChecked} key={item.id}>
              {item.text}
            </CheckboxComponent>
          );
        })}
      </div>
      <div className={styles["newsletter-forms__spam"]}>
        <span>Vergeet niet je inschrijving via je mail te bevestigen en controleer eventueel je spamfolder</span>
        <div className="form-bottom uk-margin-small-top">
          <ClickableComponent variant="primary-brand" iconStyle="filled" buttonType="submit" title={"Verzenden"} iconRight={Paper} />
        </div>
      </div>
    </Form>
  );
};

interface IFormProps {
  onSubmit: (values: IContactFormValues) => void;
  selectedItems: ISearchItem[];
}

export const NewsletterFormComponent = withFormik<IFormProps, IContactFormValues>({
  mapPropsToValues: () => ({
    emailAddress: "",
    name: "",
    selectedItems: []
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
    // if (values.selectedItems.length === 0) {
    //   errors.message = "Laat een bericht achter";
    // }

    return errors;
  },

  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values);
  }
})(InnerForm);
