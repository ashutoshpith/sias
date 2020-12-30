import { IEvent } from '@nestjs/cqrs';

export class __name__CreatedEvent implements IEvent {
  constructor(public payload: any) {}
}

export class __name__UpdatedEvent implements IEvent {
  constructor(public payload: any) {}
}
