/// <reference types="react" />
import { ISource, IOptions, IValidate, IReport, ISpec } from '../common';
export interface IFormProps {
    source: ISource;
    options: IOptions;
    validate: IValidate;
    reportPromise?: Promise<IReport>;
    spec?: ISpec;
}
export declare function Form(props: IFormProps): JSX.Element;
