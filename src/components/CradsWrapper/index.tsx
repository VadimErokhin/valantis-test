import Card from '../Card';
import style from './style.module.scss'
import { ItemResponse } from '../../hooks/use-load-cards-hook';
import LoadableContent from '../LoadableContent';
import Button from '../Button';

interface CardWrapperProps {
  isLoading: boolean;
  data: ItemResponse[]
  page: number;
  setPage: (page: number) => void;
  isButtonsVisible: boolean;
}

function CardsWrapper({ isLoading, data, page, setPage, isButtonsVisible}: CardWrapperProps) {  
  
  function getNextPage() {
    setPage(page + 1);
  }

  function getPreviousPage() {
    setPage(page - 1);
  }

  return (
    <LoadableContent isLoading={isLoading}>
      <div className={style.wrapper}>
        {
          data.map((item) => (
            <Card key={item.id} id={item.id} price={item.price} brand={item.brand} name={item.product} />
          ))
        }
      </div>
      {isButtonsVisible && (
        <div className={style.btnsWrapper}>
          { page !== 1 && <Button onClick={getPreviousPage}>Предыдущая страница</Button>}
          <Button onClick={getNextPage}>Следующая страница</Button>
        </div>
      )}
    </LoadableContent > 

  )
}

export default CardsWrapper;



