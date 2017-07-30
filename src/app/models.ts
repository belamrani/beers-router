import {Subject} from 'rxjs/Subject';
export interface Beer {
  id: number;
  name: string;
  list: string;
  description: string;
  picture?: string;
  categoryId: number;
}

export interface Category {
  id: number;
  country: string;
  picture: string;
}

export interface AppState {
  categories: Category[];
  beers: Beer[];
}

export type Add = {
  type: 'add';
  categoryId: number;
  payload: { name: string; description: string; list: string; };
  onSuccess: Function;
};

export type Action = Add;

export class Actions extends Subject<Action> {
}

export const initialState: AppState = {
  categories: [
    {
      id: 1,
      country: 'Belgium',
      picture: 'assets/belgium.png'
    },
    {
      id: 2,
      country: 'Germany',
      picture: 'assets/germany.png'
    }
  ],
  beers: [
    {
      id: 1,
      name: 'Gulden Draak',
      description: `La Gulden Draak est une bière de haute fermentation. Elle a une couleur brune-rubis très à
      foncée et une mousse crémeuse. Son arôme est malté et l'on distingue des notes de raisins.
      Elle possède un goût très doux dans lequel on décèle des touches caramélisées, fruitées et épicées.
      Son volume d'alcool est de 10,5%.`,
      list: 'drank',
      picture: 'assets/gulden-drak.jpeg',
      categoryId: 1
    },
    {
      id: 2,
      name: 'Pater Lieven triple',
      description: `Digne représentante des bières triples de Belgique, la Pater Lieven triple est une
      belle blonde à la robe dorée qui se couvre d'une énorme tête de mousse compacte.
      De ce chapeau blanc parviennent au nez des arômes de levure et de houblon avec de notes de levain,
      de fruits et d'herbe. Elle offre au palais une entrée de bouche fruitée et relativement sucrée
      qui cohabite rapidement avec une belle amertume qui va perdurer tout au long de la dégustation.
      Une bière relativement bien équilibrée qui constitue une entrée en matière plus que réussie pour
      les néophytes désireux de découvrir les bières belges dites « triple » !`,
      list: 'drank',
      picture: 'assets/pater-lieven.jpeg',
      categoryId: 1
    },
    {
      id: 3,
      name: 'leffe',
      description: 'Bière très simple',
      list: 'to-try',
      categoryId: 1
    },
    {
      id: 4,
      name: 'test',
      description: 'Bière très simple',
      list: 'drank',
      categoryId: 2
    },
    {
      id: 4,
      name: 'hoogardeen',
      description: 'Bière très simple',
      list: 'to-try',
      categoryId: 2
    },
  ]
}
