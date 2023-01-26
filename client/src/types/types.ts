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

export interface IPageProps {
  totalMilk: number,
  milkPerPage: number,
  paginate: Function,
}

