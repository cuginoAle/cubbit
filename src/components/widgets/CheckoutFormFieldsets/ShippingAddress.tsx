import React from "react";
import InputField from "components/base/InputField";
import DropDown from "components/base/DropDown";
import countries from "helpers/europeanCountries";
import { useFormContext } from "react-hook-form";
import getValidationError from "helpers/validationErrors";

const countriesList = countries.map((c) => ({ label: c, value: c }));

type Props = {
  namePrefix?: string;
};
const FieldSet: React.FC<Props> = ({ namePrefix = "" }) => {
  const { errors } = useFormContext();
  return (
    <>
      <InputField
        name={namePrefix + "street"}
        label="Street address"
        validationRules={{
          required: true,
        }}
        validationError={
          errors[namePrefix + "street"]
            ? getValidationError(errors[namePrefix + "street"].type)
            : undefined
        }
      />
      <InputField
        name={namePrefix + "otherInfo"}
        label="Other info (optional)"
      />
      <InputField
        name={namePrefix + "postCode"}
        label="Post code"
        validationRules={{
          required: true,
        }}
        validationError={
          errors[namePrefix + "postCode"]
            ? getValidationError(errors[namePrefix + "postCode"].type)
            : undefined
        }
      />
      <DropDown
        name={namePrefix + "country"}
        label="Country"
        options={countriesList}
        placeholder="Select Country"
        validationRules={{
          required: true,
        }}
        validationError={
          errors[namePrefix + "country"]
            ? getValidationError(errors[namePrefix + "country"].type)
            : undefined
        }
      />
      <InputField
        name={namePrefix + "city"}
        label="City"
        validationRules={{
          required: true,
        }}
        validationError={
          errors[namePrefix + "city"]
            ? getValidationError(errors[namePrefix + "city"].type)
            : undefined
        }
      />
      <InputField
        name={namePrefix + "state"}
        label="State/Region/Province"
        validationRules={{
          required: true,
        }}
        validationError={
          errors[namePrefix + "state"]
            ? getValidationError(errors[namePrefix + "state"].type)
            : undefined
        }
      />
    </>
  );
};
export default FieldSet;
