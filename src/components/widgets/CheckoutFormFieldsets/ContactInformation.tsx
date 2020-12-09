import React from "react";
import InputField from "components/base/InputField";
import { SameLine } from "components/base/FormFieldsWrapper";
import { useFormContext } from "react-hook-form";
import getValidationError from "helpers/validationErrors";

const FieldSet: React.FC = () => {
  const { errors } = useFormContext();

  return (
    <>
      <InputField
        name="email"
        label="Email"
        validationRules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        type="email"
        validationError={
          errors.email ? getValidationError(errors.email.type) : undefined
        }
      />
      <InputField
        name="phoneNum"
        label="Phone number"
        validationRules={{
          required: true,
        }}
        validationError={
          errors.phoneNum ? getValidationError(errors.phoneNum.type) : undefined
        }
      />
      <SameLine>
        <InputField
          name="firstName"
          label="First name"
          validationRules={{
            required: true,
          }}
          validationError={
            errors.firstName
              ? getValidationError(errors.firstName.type)
              : undefined
          }
        />
        <InputField
          name="lastName"
          label="Last name"
          validationRules={{
            required: true,
          }}
          validationError={
            errors.lastName
              ? getValidationError(errors.lastName.type)
              : undefined
          }
        />
      </SameLine>
    </>
  );
};

export default FieldSet;
