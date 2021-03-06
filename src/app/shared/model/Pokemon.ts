import {Type} from './Type'

export interface Pokemon{
  id: number,
  name: string,
  height: number,
  weight: number,
  gender: string,
  imgUrl: string,
  types: Type[],
  weaknesses: Type[],
  nextEvolution: Pokemon[],
  previusEvolution: Pokemon[]
}
