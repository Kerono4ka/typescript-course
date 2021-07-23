export class Store {
  private store: {
    [className: string]: any[];
  } = {};
  private static instance: Store;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Store();
    }
    return this.instance;
  }

  addObjToStore(obj: any) {
    const className = obj.constructor.name;
    this.store[className] = this.store[className]
      ? [...this.store[className], obj]
      : [obj];
  }

  getObjsFromStore(className: string) {
    return this.store[className];
  }
}
