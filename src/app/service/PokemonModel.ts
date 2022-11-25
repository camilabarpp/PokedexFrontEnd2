
export interface Pokemon {
    results: Result[];
  }
  
  export interface Result {
    name: string;
    url: string;
    status: SpecificPokemon
  }
  
  export interface SpecificPokemon {
    id: string;
    name: string;
    sprites: Sprites;
    types: Types[];
    stats: Stat[];
  }
  
  export interface Sprites {
    other: Other;
  }
  
  export interface Other {
    dreamWorld: DreamWorld;
  }
  
  export interface DreamWorld {
    frontDefault: string;
  }
  
  export interface Stat {
    baseStat: string;
  }
  
  export interface Types {
    type: Type;
  }
  
  export interface Type {
    name: string;
  }