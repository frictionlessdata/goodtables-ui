/// <reference types="react" />
import { ISpec, IReportTable } from '../common';
export interface ITableProps {
    table: IReportTable;
    tableNumber: number;
    tablesCount: number;
    spec?: ISpec;
    skipHeaderIndex?: boolean;
}
export declare function Table(props: ITableProps): JSX.Element;
