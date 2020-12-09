import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDown } from "assets/svgs/arrowDown.svg";
import { useFormContext } from "react-hook-form";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .selectWrapper {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      position: absolute;
      right: ${({ theme }) => theme.spacer * 2}px;
      pointer-events: none;
    }
  }
  select {
    font-size: 1.6rem;
    padding: 0.8em;
    border: 1px solid ${({ theme }) => theme.palette.grey.lighter};
    border-radius: ${({ theme }) => theme.radius}px;
    width: 100%;
    background-color: white;
    -webkit-appearance: none;
    outline-color: ${({ theme }) => theme.palette.primary};
  }

  .fieldLabel {
    margin-left: 2px;
    margin-bottom: ${({ theme }) => theme.spacer / 2}px;
  }

  &.validationError {
    select {
      border-color: ${({ theme }) => theme.validation.error};
    }
  }

  .validationErrorMessage {
    color: ${({ theme }) => theme.validation.error};
    margin: ${({ theme }) => theme.spacer / 2}px 0 0 0;
    margin-left: 2px;
  }
`;

export type Props = {
  className?: string;
  name: string;
  label: string;
  validationError?: string;
  validationRules?: Record<string, unknown>;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
};

const Component: React.FC<Props> = ({
  className,
  label,
  name,
  options,
  validationError,
  validationRules,
  placeholder,
  ...rest
}: Props) => {
  const classes = ["DropDown"];
  if (className) classes.push(className);
  if (validationError) classes.push("validationError");

  const { register } = useFormContext();

  return (
    <Wrapper className={classes.join(" ")}>
      {label && <span className="fieldLabel">{label}</span>}
      <div className="selectWrapper">
        <select
          defaultValue=""
          name={name}
          {...rest}
          ref={register(validationRules)}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ArrowDown />
      </div>
      {validationError && (
        <p className="validationErrorMessage">{validationError}</p>
      )}
    </Wrapper>
  );
};

Component.displayName = "DropDown";

export default Component;
