import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type PadSize = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
type Props = {
    width?: number | string;
    padding?: ByBreakpoint<PadSize>;
    paddingX?: ByBreakpoint<PadSize>;
    paddingY?: ByBreakpoint<PadSize>;
    paddingTop?: ByBreakpoint<PadSize>;
    paddingBottom?: ByBreakpoint<PadSize>;
    paddingLeft?: ByBreakpoint<PadSize>;
    paddingRight?: ByBreakpoint<PadSize>;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties | undefined;
    role?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
};
declare const Box: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Box;
