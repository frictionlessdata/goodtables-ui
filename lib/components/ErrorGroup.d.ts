/// <reference types="react" />
import { ISpec, IErrorGroup } from '../common';
export interface IErrorGroupProps {
    errorGroup: IErrorGroup;
    spec?: ISpec;
    skipHeaderIndex?: boolean;
}
export declare function ErrorGroup(props: IErrorGroupProps): JSX.Element;
