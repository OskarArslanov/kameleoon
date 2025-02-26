import { FC, HTMLProps } from "react";
import cn from "classnames";
import s from "./page.module.css";
import { ArrowIcon } from "../../assets/icons/arrow-icon";

interface Props extends HTMLProps<HTMLDivElement> {
 withBackButton?: boolean;
}
export const Page: FC<Props> = (props) => {
 const { className, withBackButton, children, ...other } = props;

 return (
  <div className={cn(s.feature, className)} {...other}>
   {withBackButton && (
    <button className={s.back} onClick={() => window.history.back()}>
     <ArrowIcon />
     Back
    </button>
   )}
   {children}
  </div>
 );
};
