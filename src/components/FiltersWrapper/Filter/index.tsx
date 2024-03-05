import { HTMLInputTypeAttribute, ReactNode } from "react";
import style from "./style.module.scss"

interface FilterProps {
  children: ReactNode;
  value: string | number;
  name: string;
  type: HTMLInputTypeAttribute;
  // eslint-disable-next-line
  onInput: (value: any) => void;
}

export function Filter(props: FilterProps) {
  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>)  {
    const value = e.target.value;
    props.onInput(value);
  }

  return (
    <label>
      <p className={style.inputName}>{props.children}: </p>
      <input className={style.input} onInput={handleInputValue} value={props.value} name={props.name} type={props.type} />
    </label>
  );
}

export default Filter;
