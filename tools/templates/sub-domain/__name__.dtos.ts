import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('__name__')
export class __name__Dto {
  @FilterableField(() => Int)
  id!: number;

  @FilterableField()
  name!: string;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
