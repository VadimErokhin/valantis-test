import style from './style.module.scss'

interface CardProps {
  id: string;
  name: string;
  price: number;
  brand: string | null;
}

function Card(props: CardProps) {
  return (
  <div className={style.card}>
    <p className={style.id}><strong>ID Товара:</strong> {props.id}</p>
    <p className={style.name}><strong>Наименование:</strong> {props.name}</p>
    <p className={style.price}><strong>Цена:</strong>{props.price}р</p>
    <p className={!style.brand ? style.absent : style.brand}> <strong>Бренд:</strong> {props.brand}</p>
  </div>
)}

export default Card;