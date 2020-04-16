// Spec

export interface ISpec {
  version: string
  errors: { [code: string]: ISpecError }
}

export interface ISpecError {
  name: string
  type: string
  context: string
  weight: number
  message: string
  description: string
  labelStyles?: { [key: string]: any }
  tableStyles?: { [key: string]: any }
}

// Report

export interface IReport {
  time: number
  valid: boolean
  preset: string
  warnings: string[]
  tables: IReportTable[]
  'error-count': number
  'table-count': number
}

export interface IReportTable {
  time: number
  valid: boolean
  source: string
  scheme?: string
  format?: string
  encoding?: string
  schema?: string
  headers: string[]
  errors: IReportTableError[]
  'error-count': number
  'row-count': number
}

// TODO: for now, there is a mix undefined/null between goodtables@1/2 (in profiles also)
export interface IReportTableError {
  code: string
  message: string
  'row-number'?: number | null
  'column-number'?: number | null
  row?: any[] | null
}

// ErrorGroup

export interface IErrorGroup {
  code: string
  count: number
  headers: string[]
  messages: string[]
  rows: { [rowNumber: number]: IErrorGroupRow }
}

export interface IErrorGroupRow {
  values: any[]
  badcols: Set<number>
}

// Validate

export interface IValidate {
  (source: ISource, options: IOptions): Promise<IReport>
}
export interface IOptions {
  [key: string]: any
}
export type ISource = string | File
