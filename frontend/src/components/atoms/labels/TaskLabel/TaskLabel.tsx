import { LabelHTMLAttributes, ReactNode } from "react";
import "./index.module.scss";

interface LabelPropTypes extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function TaskLabel({ children, ...props }: LabelPropTypes) {
  return <label {...props}>{children}</label>;
}
