import { render } from './render';
import { Report } from './components/Report';
import { Form } from './components/Form';
import spec from './spec.json';
declare const _default: {
    render: typeof render;
    Report: typeof Report;
    Form: typeof Form;
    spec: {
        version: string;
        errors: {
            "io-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "http-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "source-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "scheme-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "format-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "encoding-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "blank-header": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "duplicate-header": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "blank-row": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "duplicate-row": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "extra-value": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "missing-value": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "schema-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "non-matching-header": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "extra-header": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "missing-header": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "type-or-format-error": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "required-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "pattern-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "unique-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "enumerable-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "minimum-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "maximum-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "minimum-length-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
            "maximum-length-constraint": {
                name: string;
                type: string;
                context: string;
                weight: number;
                message: string;
                description: string;
            };
        };
    };
};
export default _default;
export { render, Report, Form, spec };
