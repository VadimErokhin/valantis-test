import { ReactNode } from "react";
import style from './style.module.scss'

interface LoadableContentProps {
  isLoading: boolean;
  children: ReactNode;
}

function LoadableContent(props: LoadableContentProps) {
  return ( 
    <div className={style.loadableContent}>
      {props.isLoading ? 
        <div className={style.loader}></div> :
        <div className={style.content}>{props.children}</div>
      }
    </div> 
  );
}

export default LoadableContent;