export interface BaseRequestParams<T> {
  action: Actions;
  params: T
}

export interface BaseResultResponse<T> {
  result: T[];
}

export interface PaginationParams {
  offset: number;
  limit: number;
}

export enum Actions {
  Filter = 'filter',
  GetIds = 'get_ids',
  GetItems='get_items',
  GetFields = "get_fields"
}

export interface FiltersParams {
  price?: number;
  product?: string;
  brand?: string; 
}