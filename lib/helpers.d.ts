import { IReportTable, IErrorGroup } from './common';
export declare function getTableErrorGroups(table: IReportTable): {
    [code: string]: IErrorGroup;
};
export declare function removeBaseUrl(text: string): string;
export declare function splitFilePath(path: string): {
    name: string | undefined;
    base: string;
    sep: string;
};
