export interface IMilk {
  name: string,
  type: string,
  storage: number,
  id: string,
}

export interface IStoreProps {
  store : IMilk[]
}

export interface IMilkProps {
  milk: IMilk
}