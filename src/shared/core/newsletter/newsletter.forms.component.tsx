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

interface IContactFormErrorMessages {
  emailAddress: string;
  name: string;
  selectedItems: string;
}
export interface IContactFormValues {
  emailAddress: string;
  name: string;
  selectedItems: ISearchItem[];
}

interface IOtherProps {
  checkBoxItems: ISearchItem[];
}

const InnerForm = (props: IOtherProps & FormikProps<IContactFormValues>) => {
  const { touched, errors } = props;
  const [selectAll, setSelectAll] = React.useState(false);
  const maxCharacter = 200;

  const checkItemSelected = (id: number): boolean | undefined => {
    if (props.values.selectedItems.find(itemProps => itemProps.id === id)) return true;

    return false;
  };

  const areAllItemsSelected = (currentValues: ISearchItem[]) => {
    props.setFieldTouched("selectedItems");
    let areAllItemsSelectedResult = true;
    props.checkBoxItems.forEach(item => {
      const foundItem = currentValues.find(el => el.id === item.id);
      if (!foundItem) areAllItemsSelectedResult = false;
    });

    return areAllItemsSelectedResult;
  };

  const onCheckboxChange = (item: ISearchItem) => {
    props.setFieldTouched("selectedItems");
    let checkedItems = props.values.selectedItems;
    const checkItem = checkedItems.find(el => item.id === el.id);
    if (checkItem !== undefined) {
      checkedItems = checkedItems.filter(el => el.id !== item.id);
    } else {
      checkedItems.push(item);
    }
    props.setFieldValue("selectedItems", checkedItems);
    setSelectAll(areAllItemsSelected(checkedItems));
  };

  const toggleSelectAll = () => {
    if (areAllItemsSelected(props.values.selectedItems)) {
      setSelectAll(false);
      props.setFieldValue("selectedItems", []);
    } else {
      props.setFieldValue("selectedItems", props.checkBoxItems);
      setSelectAll(true);
    }
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
        <CheckboxComponent isChecked={selectAll} onClick={toggleSelectAll}>
          Alle onderwerpen
        </CheckboxComponent>
      </div>
      <div className={styles["newsletter-forms__checkboxes"]}>
        {props.checkBoxItems.map(item => {
          const isChecked = checkItemSelected(item.id);

          return (
            <CheckboxComponent
              onClick={() => {
                onCheckboxChange(item);
              }}
              isChecked={isChecked}
              key={item.id}
            >
              {item.text}
            </CheckboxComponent>
          );
        })}
      </div>

      <span className={styles["newsletter-forms__no-items-selected"]}>
        {touched.selectedItems !== undefined && errors.selectedItems}
      </span>

      <div className={styles["newsletter-forms__spam"]}>
        <span>Vergeet niet je inschrijving via je mail te bevestigen en controleer eventueel je spamfolder</span>
        <div className="form-bottom uk-margin-small-top">
          <ClickableComponent
            variant="primary-brand"
            iconStyle="filled"
            buttonType="submit"
            title={"Verzenden"}
            iconRight={Paper}
          />
        </div>
      </div>
    </Form>
  );
};

interface IFormProps {
  checkBoxItems: ISearchItem[];
  onSubmit: (values: IContactFormValues) => void;
}

export const NewsletterFormComponent = withFormik<IFormProps, IContactFormValues>({
  mapPropsToValues: () => ({
    emailAddress: "",
    name: "",
    selectedItems: []
  }),

  validate: (values: IContactFormValues) => {
    const errors: FormikErrors<IContactFormErrorMessages> = {};
    if (!values.name) {
      errors.name = "Vul uw naam in";
    }

    if (!values.emailAddress) {
      errors.emailAddress = "Vul uw e-mail adres in";
    } else if (!validateEmail(values.emailAddress)) {
      errors.emailAddress = "Geen valide e-mail adres";
    }

    if (values.selectedItems.length === 0) {
      errors.selectedItems = "Selecteer minstens één categorie";
    }

    return errors;
  },

  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values);
  }
})(InnerForm);
