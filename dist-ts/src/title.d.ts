import * as React from 'react';
import type { DataAttributes } from './utils/types';
export type TitleProps = {
    children: React.ReactNode;
    id?: string;
    right?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
};
export declare const Title1: ({ children, as, id, right, dataAttributes }: TitleProps) => React.ReactElement;
export declare const Title2: ({ children, as, id, right, dataAttributes }: TitleProps) => React.ReactElement;
export declare const Title3: ({ children, as, id, right, dataAttributes }: TitleProps) => React.ReactElement;
