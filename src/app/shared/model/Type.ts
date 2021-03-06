import { Pokemon } from './Pokemon';
export interface Type{
  id: number,
  name: string,
  pokemonsTypes: Pokemon[],
  pokemonsWeaknesses: Pokemon[]
}
