export interface ISpec {
  version: string
  errors: {
    [code: string]: {
      name: string
      type: string
      context: string
      weight: number
      message: string
      description: string
    }
  }
}
