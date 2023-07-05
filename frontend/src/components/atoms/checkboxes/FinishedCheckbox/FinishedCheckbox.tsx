import { InputHTMLAttributes } from "react";
import "./index.module.scss";

export default function FinishedCheckbox(
  props: InputHTMLAttributes<HTMLInputElement>
){
  return <input type="checkbox" {...props} />;
}
