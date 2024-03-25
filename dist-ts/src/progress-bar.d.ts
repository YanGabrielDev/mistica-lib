import * as React from 'react';
import type { DataAttributes } from './utils/types';
type ProgressBarProps = {
    progressPercent: number;
    color?: string;
    children?: void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    dataAttributes?: DataAttributes;
    reverse?: boolean;
};
export declare const ProgressBar: React.FC<ProgressBarProps>;
type ProgressBarSteppedProps = {
    steps: number;
    currentStep?: number;
    color?: string;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};
export declare const ProgressBarStepped: React.FC<ProgressBarSteppedProps>;
export {};
