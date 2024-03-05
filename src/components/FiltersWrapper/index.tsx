import { useState } from "react";
import Filter from "./Filter";
import Button from "../Button";
import { FiltersParams } from "../../services/api/types";
import style from "./style.module.scss"

interface FiltersWrapperProps {
  submitFilters: (params: FiltersParams) => void;
  resetFilters: () => void;
}

function FiltersWrapper(props: FiltersWrapperProps) {
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState('');
  const [brand, setBrand] = useState('');

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const result: FiltersParams = {};
    if(price) {
      result.price = Number(price);
    }
    if(product) {
      result.product = product;
    }
    if(brand) {
      result.brand = brand;
    }

    props.submitFilters(result)
  }

  function handleReset() {
    setPrice(0);
    setProduct('');
    setBrand('');
    props.resetFilters();
  }

  return ( 
  <form className={style.form} onSubmit={handleSubmit} onReset={handleReset}>
    <Filter value={price} name="Price" type="number" onInput={setPrice}>Цена</Filter>
    <Filter value={product} name="Product" type="text" onInput={setProduct}>Продукт</Filter>
    <Filter value={brand} name="Brand" type="text" onInput={setBrand}>Цена</Filter>
    <div className={style.btnsWrapper}>
      <Button submit>Применить</Button>
      <Button reset>Сбросить</Button>
    </div>
  </form> 
  );
}

export default FiltersWrapper;