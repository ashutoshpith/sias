import { __name__Dto, __name__Entity } from '.';

export const queryResolvers = [
  {
    DTOClass: __name__Dto,
    EntityClass: __name__Entity,
    create: { disabled: true },
    update: { disabled: true },
    delete: { disabled: true },
  },
];
