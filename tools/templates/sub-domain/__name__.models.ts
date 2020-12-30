import { AggregateRoot } from '@nestjs/cqrs';
import { __name__CreatedEvent, __name__UpdatedEvent } from '.';

export interface __name__ModelState {
  name: string;
}

export class __name__Model extends AggregateRoot {
  protected state: __name__ModelState = {} as any;

  constructor() {
    super();
  }

  get name() {
    return this.state.name;
  }

  create() {
    this.apply(new __name__CreatedEvent(this.state));
  }

  update() {
    this.apply(new __name__UpdatedEvent(this.state));
  }
}
