import { FC, HTMLProps } from "react";
import s from "./input.module.css";
import cn from "classnames";
import { SizeType } from "../../types/props";

interface Props extends Omit<HTMLProps<HTMLInputElement>, "size"> {
 fullWidth?: boolean;
 size?: SizeType;
}

export const Input: FC<Props> = (props) => {
 const { fullWidth, className, size = "md", ...other } = props;

 return (
  <input
   className={cn(className, s.component, fullWidth && s.fullWidth, s[size])}
   {...other}
  />
 );
};
