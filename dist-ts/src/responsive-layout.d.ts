import * as React from 'react';
import type { Variant } from './theme-variant-context';
import type { DataAttributes } from './utils/types';
type Props = {
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
    isInverse?: boolean;
    variant?: Variant;
    backgroundColor?: string;
    dataAttributes?: DataAttributes;
};
export declare const InternalResponsiveLayout: React.FC<Props & {
    shouldExpandWhenNested?: boolean | 'desktop';
}>;
declare const ResponsiveLayout: React.FC<Props>;
export default ResponsiveLayout;
