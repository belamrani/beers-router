import {Subject} from 'rxjs/Subject';
export interface Beer {
  id: number;
  name: string;
  description: string;
  categoryId: number;
}

export interface Category {
  id: number;
  country: string;
  folder: string;
}

export interface AppState {
  categories: Category[];
  beers: Beer[];
}

export type Add = {
  type: 'add';
  categoryId: number;
  payload: { name: string; description: string; };
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
      folder: 'drank'
    },
    {
      id: 2,
      country: 'Germany',
      folder: 'drank'
    },
    {
      id: 3,
      country: 'Belgium',
      folder: 'to-try'
    },
    {
      id: 4,
      country: 'Germany',
      folder: 'to-try'
    }
  ],
  beers: [
    {
      id: 1,
      name: 'heineken',
      description: 'Bière simple',
      categoryId: 1
    },
    {
      id: 2,
      name: 'grimbergen',
      description: 'Bière bien simple',
      categoryId: 2
    },
    {
      id: 3,
      name: 'leffe',
      description: 'Bière très simple',
      categoryId: 1
    },
    {
      id: 4,
      name: 'test',
      description: 'Bière très simple',
      categoryId: 3
    },
    {
      id: 4,
      name: 'hoogardeen',
      description: 'Bière très simple',
      categoryId: 4
    },
  ]
}
