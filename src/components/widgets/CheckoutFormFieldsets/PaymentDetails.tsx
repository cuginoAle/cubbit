import React from "react";
import InputField from "components/base/InputField";
import { SameLine } from "components/base/FormFieldsWrapper";
import { useFormContext } from "react-hook-form";
import getValidationError from "helpers/validationErrors";

function isNotExpired(mmyy: string) {
  const [mm, yy] = mmyy.split("/");
  const now = new Date();
  const nowYY = now.getFullYear() % 1000;
  const nowMM = now.getMonth() + 1;
  return parseInt(yy) >= nowYY && parseInt(mm) >= nowMM;
}

const FieldSet: React.FC = () => {
  const { errors } = useFormContext();

  return (
    <>
      <InputField
        name="cardHolder"
        label="Card holder"
        validationRules={{
          required: true,
        }}
        validationError={
          errors.cardHolder
            ? getValidationError(errors.cardHolder.type)
            : undefined
        }
      />
      <InputField
        name="cardNumber"
        label="Credit / Debit card number"
        validationRules={{
          required: true,
          pattern:
            "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$)",
        }}
        validationError={
          errors.cardNumber
            ? getValidationError(errors.cardNumber.type)
            : undefined
        }
      />
      <SameLine>
        <InputField
          name="expiryDate"
          placeholder="MM/YY"
          label="Expiration date"
          validationRules={{
            required: true,
            pattern: /\d\d\/\d\d/,
            validate: {
              expired: (value: string) => isNotExpired(value),
            },
          }}
          validationError={
            errors.expiryDate
              ? getValidationError(errors.expiryDate.type)
              : undefined
          }
        />
        <InputField
          name="cvv"
          label="CVV"
          validationRules={{
            required: true,
            pattern: /\d\d\d/,
          }}
          validationError={
            errors.cvv ? getValidationError(errors.cvv.type) : undefined
          }
        />
      </SameLine>
    </>
  );
};
export default FieldSet;
