export class Person {
  getReturnDate(arg0: number) {
    throw new Error("Method not implemented.");
  }
  getBorrowDate(arg0: number) {
    throw new Error("Method not implemented.");
  }
  constructor(
    public readonly id: number,
    protected name: string
  ) {}

  getName(id: number): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
