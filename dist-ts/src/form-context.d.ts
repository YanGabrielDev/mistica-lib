import * as React from 'react';
export type FormStatus = 'filling' | 'sending';
export type FormErrors = {
    [name: string]: string | undefined;
};
export type FieldValidator = (value: any, rawValue: string) => string | undefined;
export type FieldRegistration = {
    input?: HTMLInputElement | HTMLSelectElement | null;
    validator?: FieldValidator;
    focusableElement?: HTMLDivElement | HTMLSelectElement | null;
};
type Context = {
    rawValues: {
        [name: string]: any;
    };
    setRawValue: (param: {
        readonly name: string;
        readonly value: any;
    }) => void;
    values: {
        [name: string]: any;
    };
    setValue: (param: {
        readonly name: string;
        readonly value: any;
    }) => void;
    formStatus: FormStatus;
    register: (name: string, ref: FieldRegistration) => void;
    formErrors: FormErrors;
    setFormError: (param: {
        readonly name: string;
        readonly error?: string;
    }) => void;
    jumpToNext: (currentName: string) => void;
    submit: () => void;
    validate: () => FormErrors;
    formId: string;
};
export declare const FormContext: React.Context<Context>;
export declare const useForm: () => Context;
export declare const useControlProps: <T>({ name, value, defaultValue, onChange, disabled, }: {
    name: string;
    value: T | undefined;
    defaultValue: T | undefined;
    onChange: ((value: T) => void) | undefined;
    disabled?: boolean | undefined;
}) => {
    name: string;
    value?: T | undefined;
    defaultValue?: T | undefined;
    onChange: (value: T) => void;
    focusableRef: (focusableElement: HTMLDivElement | null) => void;
    disabled: boolean | undefined;
};
export declare const useFieldProps: ({ name, value, defaultValue, processValue, helperText, optional, error, disabled, onBlur, validate, onChange, onChangeValue, }: {
    name: string;
    value?: string | undefined;
    defaultValue?: string | undefined;
    processValue: (value: string) => unknown;
    helperText?: string | undefined;
    optional?: boolean | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    onBlur?: React.FocusEventHandler<Element> | undefined;
    validate?: ((value: any, rawValue: string) => string | undefined) | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onChangeValue?: ((value: any, rawValue: string) => void) | undefined;
}) => {
    value?: string | undefined;
    defaultValue?: string | undefined;
    name: string;
    helperText?: string | undefined;
    required: boolean;
    error: boolean;
    disabled: boolean;
    onBlur: React.FocusEventHandler;
    inputRef: (field: HTMLInputElement | null) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export {};
