import { FC, HTMLProps } from "react";
import { SearchIcon } from "../../assets/icons/searchIcon";
import { Input } from "../../components/input/input";
import s from "./searchInput.module.css";
import cn from "classnames";

interface Props extends Omit<HTMLProps<HTMLDivElement>, "onChange"> {
 indicator?: string;
 onChange?: (value?: string) => void;
 value?: string;
 placeholder?: string;
}

export const SearchInput: FC<Props> = (props) => {
 const {
  indicator,
  className,
  onChange,
  value,
  placeholder = "What are you looking for?",
  ...other
 } = props;

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  onChange?.(e.target.value);
 };

 return (
  <div className={cn(s.feature, className)} {...other}>
   <button className={s.button}>
    <SearchIcon />
   </button>
   <Input
    onChange={handleChange}
    value={value}
    placeholder={placeholder}
    className={s.input}
    fullWidth
   />
   {indicator && <span className={s.indicator}>{indicator}</span>}
  </div>
 );
};
