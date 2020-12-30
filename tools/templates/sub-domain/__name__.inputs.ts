import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

@InputType('__name__Input')
export class Create__name__Input {
  @IsString()
  @MaxLength(20)
  @Field()
  name!: string;
}

@InputType('__name__Input')
export class Update__name__Input {
  @IsString()
  @MaxLength(20)
  @Field()
  name!: string;
}
