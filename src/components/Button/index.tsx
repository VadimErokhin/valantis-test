import { ReactNode, useMemo } from "react";
import style from './style.module.scss'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  submit?: boolean; 
  reset?: boolean;
}

function Button(props: ButtonProps) {
  const type = useMemo(() => {
    if(props.submit) return 'submit';
    if(props.reset) return 'reset';
    return undefined
  },[props.submit, props.reset])
    
  return ( 
    <button type={type} onClick={props.onClick} className={style.btn}>{props.children}</button> 
  );
}

export default Button;