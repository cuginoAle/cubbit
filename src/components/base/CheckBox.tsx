import React from "react";
import styled from "styled-components";
import { ReactComponent as Tick } from "assets/svgs/tick.svg";
import { useFormContext } from "react-hook-form";

const CheckBox = styled.div`
  width: 1.2em;
  height: 1.2em;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.palette.grey.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: none;
    path {
      fill: ${({ theme }) => theme.palette.grey.dark};
    }
  }
`;

const Wrapper = styled.label`
  .uiWrapper {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    font-size: 1.6rem;
    font-weight: 700;

    ${CheckBox} {
      flex-shrink: 0;
    }
  }

  .fieldLabel {
    margin-left: ${({ theme }) => theme.spacer * 2}px;
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
  }

  input:checked + ${CheckBox} {
    svg {
      display: block;
    }
  }

  &:focus-within {
    ${CheckBox} {
      box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.palette.primary}33;
    }
  }

  &.validationError {
    ${CheckBox} {
      border-color: ${({ theme }) => theme.validation.error};
    }
  }

  .validationErrorMessage {
    color: ${({ theme }) => theme.validation.error};
    margin: ${({ theme }) => theme.spacer / 2}px 0 0
      ${({ theme }) => theme.spacer * 4.5}px;
  }
`;

type Props = React.HTMLProps<HTMLInputElement> & {
  className?: string;
  children: React.ReactNode;
  validationError?: string;
  validationRules?: Record<string, unknown>;
};

const Component: React.FC<Props> = ({
  className,
  validationRules,
  validationError,
  name,
  children,
  ...rest
}: Props) => {
  const classes = ["CheckBox"];
  if (className) classes.push(className);
  if (validationError) classes.push("validationError");
  const { register } = useFormContext();

  return (
    <Wrapper className={classes.join(" ")}>
      <div className="uiWrapper">
        <input
          name={name}
          {...rest}
          type="checkbox"
          ref={register(validationRules)}
        />
        <CheckBox>
          <Tick />
        </CheckBox>
        {<span className="fieldLabel">{children}</span>}
      </div>
      {validationError && (
        <p className="validationErrorMessage">{validationError}</p>
      )}
    </Wrapper>
  );
};

Component.displayName = "CheckBox";

export default Component;
