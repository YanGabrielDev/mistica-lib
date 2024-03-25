import * as React from 'react';
import type { DataAttributes, TrackingEvent } from './utils/types';
import type { Location } from 'history';
export type PressHandler = (event: React.MouseEvent<HTMLElement>) => void;
interface CommonProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    'aria-label'?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-checked'?: 'true' | 'false' | boolean;
    'aria-controls'?: string;
    'aria-expanded'?: 'true' | 'false' | boolean;
    'aria-haspopup'?: 'true' | 'false' | 'menu' | 'dialog' | boolean;
    'aria-hidden'?: 'true' | 'false' | boolean;
    'aria-selected'?: 'true' | 'false' | boolean;
    'aria-labelledby'?: string;
    'aria-live'?: 'polite' | 'off' | 'assertive';
    role?: string;
    type?: 'button' | 'submit';
    tabIndex?: number;
    as?: 'a';
    stopPropagation?: boolean;
}
export interface PropsHref extends CommonProps {
    href: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    to?: undefined;
    onPress?: undefined;
}
export interface PropsOnPress extends CommonProps {
    onPress: PressHandler;
    href?: undefined;
    to?: undefined;
    formId?: string;
}
export interface PropsTo extends CommonProps {
    to: string | Location;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    href?: undefined;
    onPress?: undefined;
}
export interface PropsMaybeHref extends CommonProps {
    maybe: true;
    href?: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    to?: undefined;
    onPress?: undefined;
}
export interface PropsMaybeTo extends CommonProps {
    maybe: true;
    to?: string | Location;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    href?: undefined;
    onPress?: undefined;
}
export interface PropsMaybeOnPress extends CommonProps {
    maybe: true;
    onPress?: PressHandler;
    href?: undefined;
    to?: undefined;
    formId?: string;
}
export type Props = PropsHref | PropsTo | PropsOnPress | PropsMaybeHref | PropsMaybeTo | PropsMaybeOnPress;
export type TouchableElement = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement;
declare const Touchable: React.ForwardRefExoticComponent<Props & React.RefAttributes<TouchableElement>>;
export declare const BaseTouchable: React.ForwardRefExoticComponent<(Props & {
    resetMargin?: boolean | undefined;
}) & React.RefAttributes<TouchableElement>>;
export default Touchable;
