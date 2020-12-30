import { __name__Model } from './__name__(kebabCase).models';
import {
  Create__name__Input,
  Update__name__Input,
} from './__name__(kebabCase).inputs';

export class I__name__Repo {
  create(payload: Create__name__Input): Promise<__name__Model> {
    return;
  }

  update(payload: Update__name__Input): Promise<__name__Model> {
    return;
  }
}

export class __name__Repo implements I__name__Repo {
  update(payload: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  create(payload: Create__name__Input): Promise<__name__Model> {
    throw new Error('Method not implemented.');
  }
}

export const repos = [
  {
    provide: I__name__Repo.name,
    useClass: __name__Repo,
  },
];
