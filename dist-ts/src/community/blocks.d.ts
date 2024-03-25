import * as React from 'react';
import type StackingGroup from '../stacking-group';
import type Image from '../image';
import type Tag from '../tag';
import type { RendersNullableElement } from '../utils/renders-element';
import type { ExclusifyUnion } from '../utils/utility-types';
interface RowBlockBaseProps {
    title?: string;
    'aria-label'?: string;
}
interface RowBlockWithDescription extends RowBlockBaseProps {
    description?: string;
}
interface RowBlockWithStackingGroup extends RowBlockBaseProps {
    stackingGroup?: RendersNullableElement<typeof StackingGroup>;
}
type RowBlockProps = ExclusifyUnion<RowBlockWithDescription | RowBlockWithStackingGroup>;
export declare const RowBlock: React.FC<RowBlockProps>;
interface SimpleBlockProps {
    image?: RendersNullableElement<typeof Image>;
    description?: string;
    'aria-label'?: string;
}
export declare const SimpleBlock: React.FC<SimpleBlockProps>;
interface InformationBlockProps {
    title?: string;
    description?: ReadonlyArray<string> | string;
    value?: string;
    secondaryValue?: string;
    valueColor?: string;
    'aria-label'?: string;
}
export declare const InformationBlock: React.FC<InformationBlockProps>;
interface HighlightedValueBlockProps {
    headline?: RendersNullableElement<typeof Tag>;
    mainHeading: {
        value: string;
        text: string;
    };
    secondHeading?: {
        value: string;
        text: string;
    };
    secondaryValue?: string;
    title?: string;
    description?: ReadonlyArray<string> | string;
    valueColor?: string;
    'aria-label'?: string;
}
export declare const HighlightedValueBlock: React.FC<HighlightedValueBlockProps>;
interface ValueBlockProps {
    title?: string;
    value?: string;
    description?: ReadonlyArray<string> | string;
    valueColor?: string;
    'aria-label'?: string;
}
export declare const ValueBlock: React.FC<ValueBlockProps>;
interface ProgressBlockProps {
    title?: string;
    stackingGroup?: RendersNullableElement<typeof StackingGroup>;
    progressPercent?: number;
    reverse?: boolean;
    heading: {
        value: string;
        valueColor?: string;
        text: string;
    };
    description?: string;
    'aria-label'?: string;
}
export declare const ProgressBlock: React.FC<ProgressBlockProps>;
export {};
