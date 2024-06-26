import * as React from 'react';
import type { DataAttributes } from './utils/types';
type RenderSwitch = (renderProps: {
    controlElement: React.ReactElement;
    labelId: string;
    checked: boolean;
    disabled: boolean;
}) => React.ReactNode;
type PropsRender = {
    name: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    render: RenderSwitch;
    children?: undefined;
    'aria-labelledby'?: string;
    dataAttributes?: DataAttributes;
};
type PropsChildren = {
    name: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    children?: React.ReactNode;
    render?: undefined;
    'aria-labelledby'?: string;
    dataAttributes?: DataAttributes;
};
declare const Switch: React.FC<PropsRender | PropsChildren>;
export default Switch;
