import { Inject } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { I__name__Repo } from '../../__name__(kebabCase).repos';
import { Create__name__Command } from '../__name__(kebabCase).commands';

@CommandHandler(Create__name__Command)
export class Create__name__CommandHandler
  implements ICommandHandler<Create__name__Command> {
  constructor(
    @Inject(I__name__Repo.name) private repo: I__name__Repo,
    private publisher: EventPublisher,
  ) {}

  async execute(command: Create__name__Command): Promise<any> {
    const { payload } = command;
    const model = this.publisher.mergeObjectContext(
      await this.repo.create(payload),
    );
    model.create();
    model.commit();
  }
}
