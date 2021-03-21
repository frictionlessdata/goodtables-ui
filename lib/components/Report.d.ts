/// <reference types="react" />
import { IReport, ISpec } from '../common';
export interface IReportProps {
    report: IReport;
    spec?: ISpec;
    skipHeaderIndex?: boolean;
}
export declare function Report(props: IReportProps): JSX.Element;
