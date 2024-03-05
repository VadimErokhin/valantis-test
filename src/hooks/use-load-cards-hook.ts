import { useMemo, useState } from "react";
import { useBaseDataLoad } from "./use-base-data-load";
import { Actions, FiltersParams, PaginationParams } from "../services/api/types";
import { filterUniqueIds } from "../helpers";

interface GetItemsParams {
  ids: string[]
}

export interface ItemResponse {
  brand: null | string,
  id: string,
  price: number,
  product: string
}

export function useLoadCards() {
  const [data, setData] = useState<ItemResponse[]>([]);
  const itemsData = useBaseDataLoad<GetItemsParams, ItemResponse>(filterUniqueIds)
  const idsData = useBaseDataLoad<PaginationParams | FiltersParams, string>();

  async function loadData (params:PaginationParams | FiltersParams, action: Actions = Actions.GetIds) {
    const ids = await idsData.getData(action ,params);

    const cards = await itemsData.getData(Actions.GetItems, {ids})
    setData(cards)
  }

  const isLoading = useMemo(() => {
    return itemsData.isLoading || idsData.isLoading
  },[itemsData.isLoading, idsData.isLoading])

  return {
    data,
    isLoading, 
    getData: loadData,
  }
}