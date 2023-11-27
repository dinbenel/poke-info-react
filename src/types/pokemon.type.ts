export interface IPokemon {
  height: number;
  _id: string;
  moves: Move[];
  name: string;
  order: number;
  sprites: Sprites;
  stats: Stat[];
  types: IType[];
  weight: number;
}

export interface IType {
  _id: string;
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

export interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Move {
  move: Ability;
}

interface Ability {
  name: string;
  url: string;
}
