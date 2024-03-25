import * as React from 'react';
import type { PressHandler } from '../touchable';
import type { ExclusifyUnion } from '../utils/utility-types';
import type { CardAction } from '../card';
import type StackingGroup from '../stacking-group';
import type Image from '../image';
import type { ButtonPrimary, ButtonLink } from '../button';
import type { DataAttributes } from '../utils/types';
import type { RendersNullableElement } from '../utils/renders-element';
import type Tag from '../tag';
import type { HighlightedValueBlock, InformationBlock, ProgressBlock, RowBlock, SimpleBlock, ValueBlock } from './blocks';
type TouchableProps = ExclusifyUnion<{
    href: string | undefined;
} | {
    to: string | undefined;
} | {
    onPress: PressHandler | undefined;
}>;
type TouchableCard<T> = T & TouchableProps;
type MaybeTouchableCard<T> = ExclusifyUnion<TouchableCard<T> | T>;
type AllowedExtra = typeof StackingGroup | typeof HighlightedValueBlock | typeof InformationBlock | typeof ProgressBlock | typeof RowBlock | typeof SimpleBlock | typeof ValueBlock;
type TextAs = 'h1' | 'h2' | 'h3' | 'h4';
type AdvancedDataCardProps = MaybeTouchableCard<{
    stackingGroup?: RendersNullableElement<typeof StackingGroup>;
    headline?: RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleLinesMax?: number;
    pretitleAs?: TextAs;
    title?: string;
    titleLinesMax?: number;
    titleAs?: TextAs;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: Array<RendersNullableElement<AllowedExtra>>;
    extraDividerPadding?: 8 | 24;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    footerImage?: RendersNullableElement<typeof Image>;
    footerText?: string;
    footerTextLinesMax?: number;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    dataAttributes?: DataAttributes;
    actions?: Array<CardAction | React.ReactElement>;
    'aria-label'?: string;
    onClose?: () => void;
}>;
export declare const AdvancedDataCard: React.ForwardRefExoticComponent<AdvancedDataCardProps & React.RefAttributes<HTMLDivElement>>;
export default AdvancedDataCard;
