import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable({})
export class __name__DomainService {
  constructor(private commandBus: CommandBus) {}
}
