import { ICommand } from '@nestjs/cqrs';
import {
  Create__name__Input,
  Update__name__Input,
} from '../__name__(kebabCase).inputs';

export class Create__name__Command implements ICommand {
  constructor(public payload: Create__name__Input) {}
}

export class Update__name__Command implements ICommand {
  constructor(public payload: Update__name__Input) {}
}
