import * as React from 'react';
import { vars } from './skins/skin-contract.css';
import type { DataAttributes } from './utils/types';
type Props = {
    children: React.ReactNode;
    isInverse?: boolean;
    className?: string;
    role?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    width?: number | string;
    height?: number | string;
    minHeight?: number | string;
};
type InternalProps = {
    borderRadius?: typeof vars.borderRadii.container | typeof vars.borderRadii.legacyDisplay;
    desktopOnly?: boolean;
    background?: string;
};
export declare const InternalBoxed: React.ForwardRefExoticComponent<Props & InternalProps & React.RefAttributes<HTMLDivElement>>;
export declare const Boxed: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
