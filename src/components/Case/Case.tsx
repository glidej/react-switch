import { ReactNode } from "react";

type CaseProps = {
  clause?: string;
  break?: boolean;
  default?: boolean;
  children: ReactNode;
};

export const Case = ({ children }: CaseProps) => {
  return <>{children}</>;
};
