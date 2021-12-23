import React from "react";
import { ReactNode } from "react";

type SwitchProps = {
  expression: string;
  children: ReactNode[] | ReactNode;
};

export const Switch = ({
  expression,
  children,
}: SwitchProps): React.ReactElement | null => {
  if (!children || expression === null || typeof expression === "undefined") {
    return null;
  }

  let elements: ReactNode[] = [];
  const reactChildren = React.Children.toArray(children).sort((a, b) => {
    // sort `default` cases to the bottom of the stack
    // this ensures that all other clauses have had a chance to render
    // if none have rendered, we know we can render the default
    if (!React.isValidElement(a) || !React.isValidElement(b)) return 0;

    if (a.props.default) return -1;

    if (a.props.default) return -1;

    return 0;
  });

  for (let child of reactChildren) {
    if (!React.isValidElement(child)) continue;

    if (!child.props.clause && !child.props.default) continue;

    if (child.props.clause === expression) {
      elements.push(child);
    }

    if (child.props.default && elements.length === 0) {
      elements.push(child);
    }

    if (child.props.break) {
      break;
    }
  }

  return <>{elements}</>;
};
