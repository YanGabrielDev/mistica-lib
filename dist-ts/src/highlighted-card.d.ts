import * as React from 'react';
import type { ButtonLink, NullableButtonElement } from './button';
import type { DataAttributes, RendersNullableElement, TrackingEvent } from './utils/types';
type TextProps = {
    title?: undefined;
    description: string;
} | {
    title: string;
    description?: undefined;
} | {
    title: string;
    description: string;
};
type CommonProps = TextProps & {
    title?: string;
    titleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    imageUrl?: string;
    imageFit?: 'fit' | 'fill' | 'fill-center';
    onClose?: () => void;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    isInverse?: boolean;
    children?: void;
    'aria-label'?: string;
    width?: string | number;
    dataAttributes?: DataAttributes;
};
type BasicProps = CommonProps & {
    button?: undefined;
    onPress?: undefined;
    to?: undefined;
    href?: undefined;
};
type ButtonProps = CommonProps & {
    button?: NullableButtonElement | RendersNullableElement<typeof ButtonLink>;
    onPress?: undefined;
    to?: undefined;
    href?: undefined;
};
type HrefProps = CommonProps & {
    href?: string;
    newTab?: boolean;
    onPress?: undefined;
    to?: undefined;
    button?: undefined;
    fullPageOnWebView?: undefined;
};
type ToProps = CommonProps & {
    to?: string;
    fullPageOnWebView?: boolean;
    href?: undefined;
    onPress?: undefined;
    button?: undefined;
    newTab?: undefined;
};
type OnPressProps = CommonProps & {
    onPress?: () => void;
    href?: undefined;
    to?: undefined;
    button?: undefined;
    newTab?: undefined;
    fullPageOnWebView?: undefined;
};
type Props = BasicProps | ButtonProps | HrefProps | ToProps | OnPressProps;
declare const HighlightedCard: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default HighlightedCard;
