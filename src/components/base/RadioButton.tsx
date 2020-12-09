import React from "react";
import styled from "styled-components";

const RadioBox = styled.div`
  width: 1.2em;
  height: 1.2em;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.palette.grey.normal};
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    display: block;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 100%;
    background-color: ${({ theme }) => theme.palette.white};
  }
`;

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  cursor: pointer;

  font-size: 1.6rem;
  font-weight: 700;
  .fieldLabel {
    margin-left: ${({ theme }) => theme.spacer * 2}px;
  }

  > input {
    position: absolute;
    opacity: 0;
    width: 0;
  }

  > input:checked + ${RadioBox} {
    &:after {
      background-color: ${({ theme }) => theme.palette.primary};
    }
  }

  &:focus-within {
    ${RadioBox} {
      box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.palette.primary}33;
    }
  }
`;

type Props = React.HTMLProps<HTMLInputElement> & {
  className?: string;
  children: React.ReactNode;
  validationError?: string;
};

const Component: React.FC<Props> = ({
  className,
  children,
  validationError,
  name,
  ...rest
}: Props) => {
  const classes = ["RadioButton"];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <input name={name} {...rest} type="radio" />
      <RadioBox />
      {<span className="fieldLabel">{children}</span>}
      {validationError && (
        <p className="validationErrorMessage">{validationError}</p>
      )}
    </Wrapper>
  );
};

Component.displayName = "RadioButton";

export default Component;
