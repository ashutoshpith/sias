import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { commandHandlers } from './commands/handlers';
import { eventHandlers } from './events/handlers';
import { repos } from '.';
import { __name__DomainService } from '.';
import { queryResolvers } from '.';
import { schemas } from '.';

@Module({
  imports: [
    CqrsModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryMongooseModule.forFeature([...schemas])],
      resolvers: [...queryResolvers],
    }),
  ],
  providers: [
    __name__DomainService,
    ...commandHandlers,
    ...eventHandlers,
    ...repos,
  ],
  exports: [__name__DomainService],
})
export class __name__DomainModule {}
