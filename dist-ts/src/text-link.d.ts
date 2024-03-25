import * as React from 'react';
import type { TrackingEvent, DataAttributes } from './utils/types';
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    classes?: {
        [className: string]: string;
    };
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
}
export interface HrefProps extends CommonProps {
    href: string;
    newTab?: boolean;
    onPress?: undefined;
    to?: undefined;
}
export interface ToProps extends CommonProps {
    to: string;
    fullPageOnWebView?: boolean;
    href?: undefined;
    onPress?: undefined;
}
export interface OnPressProps extends CommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void | boolean;
    href?: undefined;
    to?: undefined;
}
export type TextLinkProps = HrefProps | ToProps | OnPressProps;
declare const TextLink: React.FC<TextLinkProps>;
export default TextLink;
