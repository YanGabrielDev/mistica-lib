import * as React from 'react';
export type SelectProps = {
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    id?: string;
    label: string;
    name: string;
    optional?: boolean;
    validate?: (value: string | void, rawValue: string | void) => string | void;
    onChangeValue?: (value: string) => void;
    onBlur?: (event: React.FocusEvent<any>) => void;
    options: ReadonlyArray<{
        readonly value: string;
        readonly text: string;
    }>;
    autoFocus?: boolean;
    value?: string;
    fullWidth?: boolean;
    native?: boolean;
    children?: void;
};
declare const Select: React.FC<SelectProps>;
export default Select;
