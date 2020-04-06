export class Select {
  async select(select: string) {
    const query = `select * from table ${select}`;
    console.log({ query });
  }
}
