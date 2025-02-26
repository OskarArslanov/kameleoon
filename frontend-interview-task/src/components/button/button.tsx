import { FC, HTMLProps } from "react";
import s from "./button.module.css";
import { SizeType, VariantType } from "../../types/props";
import cn from "classnames";

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "size" | "type"> {
 size?: SizeType;
 fullWidth?: boolean;
 variant?: VariantType;
}

export const Button: FC<Props> = (props) => {
 const {
  size = "md",
  fullWidth,
  className,
  variant = "secondary",
  ...other
 } = props;

 return (
  <button
   className={cn(
    s.component,
    className,
    fullWidth && s.fullWidth,
    s[size],
    s[variant]
   )}
   type="button"
   {...other}
  />
 );
};
