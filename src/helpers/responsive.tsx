import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useMediaQuery } from "react-responsive";

interface Props {
  children?: React.ReactNode;
}

export const SmallScreenOnly: React.FC = ({ children }: Props) => {
  const themeContext = useContext(ThemeContext);
  const isSmall = useMediaQuery({
    query: `(${themeContext.breakPoints.small})`,
  });
  return <>{isSmall && children}</>;
};

export const LargeScreenOnly: React.FC = ({ children }: Props) => {
  const themeContext = useContext(ThemeContext);
  const isLarge = useMediaQuery({
    query: `(${themeContext.breakPoints.large})`,
  });
  return <>{isLarge && children}</>;
};

export const useIsSmall = (): boolean => {
  const themeContext = useContext(ThemeContext);
  return useMediaQuery({ query: `(${themeContext.breakPoints.small})` });
};

export const useIsLarge = (): boolean => {
  const themeContext = useContext(ThemeContext);
  return useMediaQuery({ query: `(${themeContext.breakPoints.large})` });
};

export const useCheckMQ = (mq: string): boolean =>
  useMediaQuery({ query: `(${mq})` });
