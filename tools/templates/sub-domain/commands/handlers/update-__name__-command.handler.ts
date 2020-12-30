import { Inject } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { I__name__Repo } from '../../__name__(kebabCase).repos';
import { Update__name__Command } from '../__name__(kebabCase).commands';

@CommandHandler(Update__name__Command)
export class Update__name__CommandHandler
  implements ICommandHandler<Update__name__Command> {
  constructor(
    @Inject(I__name__Repo.name) private repo: I__name__Repo,
    private publisher: EventPublisher,
  ) {}

  async execute(command: Update__name__Command): Promise<any> {
    const { payload } = command;
    const model = this.publisher.mergeObjectContext(
      await this.repo.Update(payload),
    );
    model.Update();
    model.commit();
  }
}
