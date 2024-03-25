import * as React from 'react';
import type { DataAttributes } from './utils/types';
type VerticalSpace = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
type PropsChildren = {
    template?: undefined;
    children: React.ReactNode;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type PropsTemplate6_6 = {
    template: '6+6';
    left: React.ReactNode;
    right: React.ReactNode;
    children?: undefined;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type PropsTemplate8_4 = {
    template: '8+4';
    left: React.ReactNode;
    right: React.ReactNode;
    children?: undefined;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type PropsTemplate4_6 = {
    template: '4+6';
    left: React.ReactNode;
    right: React.ReactNode;
    children?: undefined;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type PropsTemplate5_4 = {
    template: '5+4';
    left: React.ReactNode;
    right: React.ReactNode;
    children?: undefined;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type PropsTemplate3_9 = {
    template: '3+9';
    left: React.ReactNode;
    right: React.ReactNode;
    children?: undefined;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type PropsTemplate10 = {
    template: '10';
    children: React.ReactNode;
    verticalSpace?: VerticalSpace;
    dataAttributes?: DataAttributes;
};
type Props = PropsChildren | PropsTemplate6_6 | PropsTemplate8_4 | PropsTemplate4_6 | PropsTemplate5_4 | PropsTemplate3_9 | PropsTemplate10;
declare const GridLayout: React.FC<Props>;
export default GridLayout;
