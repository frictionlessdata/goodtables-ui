import { ISpec, IReportTable } from '../common';
export interface ITableProps {
    table: IReportTable;
    tableNumber: number;
    tablesCount: number;
    spec?: ISpec;
}
export declare function Table(props: ITableProps): any;
