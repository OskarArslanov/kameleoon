import { FC, HTMLProps } from "react";
import cn from "classnames";
import s from "./page.module.css";

export const Page: FC<HTMLProps<HTMLDivElement>> = ({
 className,
 ...props
}) => {
 return <div className={cn(s.feature, className)} {...props} />;
};
