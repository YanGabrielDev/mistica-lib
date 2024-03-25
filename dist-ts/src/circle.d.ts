import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    backgroundColor?: string;
    backgroundImage?: string;
    size?: number | string;
    children?: React.ReactElement;
    border?: boolean | string;
    dataAttributes?: DataAttributes;
};
declare const Circle: React.FC<Props>;
export default Circle;
