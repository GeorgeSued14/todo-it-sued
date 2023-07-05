import { ButtonHTMLAttributes, ReactNode } from "react";
import style from './index.module.scss'

interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default function DeleteTaskButton({ children, ...props }: ButtonPropTypes) {
  return <button className={style.button} {...props}>{children || 'X'}</button>;
}
