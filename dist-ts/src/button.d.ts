import * as React from 'react';
import type { TouchableElement } from './touchable';
import type { DataAttributes, IconProps, RendersElement, RendersNullableElement, TrackingEvent } from './utils/types';
import type { Location } from 'history';
interface CommonProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    small?: boolean;
    showSpinner?: boolean;
    loadingText?: string;
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-controls'?: string;
    'aria-expanded'?: 'true' | 'false' | boolean;
    'aria-haspopup'?: 'true' | 'false' | 'menu' | 'dialog' | boolean;
    tabIndex?: number;
    StartIcon?: React.FC<IconProps>;
    EndIcon?: React.FC<IconProps>;
}
export interface ToButtonProps extends CommonProps {
    to: string | Location;
    fullPageOnWebView?: boolean;
    submit?: undefined;
    fake?: undefined;
    onPress?: undefined;
    href?: undefined;
}
export interface OnPressButtonProps extends CommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void | undefined | Promise<void>;
    submit?: undefined;
    fake?: undefined;
    to?: undefined;
    href?: undefined;
}
export interface HrefButtonProps extends CommonProps {
    href: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    submit?: undefined;
    fake?: undefined;
    onPress?: undefined;
    to?: undefined;
}
export interface FakeButtonProps extends CommonProps {
    fake: true;
    submit?: undefined;
    onPress?: undefined;
    to?: undefined;
    href?: undefined;
}
export interface SubmitButtonProps extends CommonProps {
    submit: true;
    to?: undefined;
    fake?: undefined;
    onPress?: undefined;
    href?: undefined;
}
export type ButtonProps = FakeButtonProps | SubmitButtonProps | ToButtonProps | OnPressButtonProps | HrefButtonProps;
interface ButtonLinkCommonProps {
    children: React.ReactNode;
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    /**
     * @deprecated This field is deprecated, please use bleedLeft instead.
     */
    aligned?: boolean;
    showSpinner?: boolean;
    loadingText?: string;
    StartIcon?: React.FC<IconProps>;
    EndIcon?: React.FC<IconProps>;
    bleedLeft?: boolean;
    bleedRight?: boolean;
    bleedY?: boolean;
    'aria-label'?: string;
    'aria-controls'?: string;
    'aria-expanded'?: 'true' | 'false' | boolean;
    'aria-haspopup'?: 'true' | 'false' | 'menu' | 'dialog' | boolean;
}
interface ButtonLinkOnPressProps extends ButtonLinkCommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void | undefined | Promise<void>;
    to?: undefined;
    href?: undefined;
}
interface ButtonLinkHrefProps extends ButtonLinkCommonProps {
    href: string;
    newTab?: boolean;
    onPress?: undefined;
    to?: undefined;
}
interface ButtonLinkToProps extends ButtonLinkCommonProps {
    to: string;
    fullPageOnWebView?: boolean;
    onPress?: undefined;
    href?: undefined;
}
export type ButtonLinkProps = ButtonLinkOnPressProps | ButtonLinkHrefProps | ButtonLinkToProps;
export declare const ButtonLink: React.ForwardRefExoticComponent<(ButtonLinkProps & {
    withChevron?: boolean | undefined;
}) & React.RefAttributes<TouchableElement>>;
export declare const ButtonLinkDanger: React.ForwardRefExoticComponent<ButtonLinkProps & React.RefAttributes<TouchableElement>>;
export declare const ButtonPrimary: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableElement>>;
export declare const ButtonSecondary: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableElement>>;
export declare const ButtonDanger: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableElement>>;
export type ButtonElement = RendersElement<typeof ButtonPrimary> | RendersElement<typeof ButtonSecondary> | RendersElement<typeof ButtonDanger>;
export type NullableButtonElement = RendersNullableElement<typeof ButtonPrimary> | RendersNullableElement<typeof ButtonSecondary> | RendersNullableElement<typeof ButtonDanger>;
export {};
