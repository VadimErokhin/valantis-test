import { md5 } from 'js-md5';
import { ItemResponse } from '../hooks/use-load-cards-hook';

function formateDate(number: number) {
  if(number < 10) {
    return `0${number}`
  }
  
  return number
}

export function getDate() {
  const date = new Date()
  return `${date.getUTCFullYear()}${formateDate(date.getUTCMonth() + 1)}${formateDate(date.getUTCDate())}`
}

export function convertPasswordMd5(password: string) {
  const date = getDate()
  return md5(`${password}_${date}`)
}

export function filterUniqueIds(arr: ItemResponse[]) {
  return arr.reduce((acc, item) => {
    const isAlreadyExist = Boolean(acc.find((i) => i.id === item.id))
    if(!isAlreadyExist) acc.push(item)
    return acc
  },[] as ItemResponse[])
}