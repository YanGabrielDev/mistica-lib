import * as React from 'react';
import type { ByBreakpoint, DataAttributes, TrackingEvent } from './utils/types';
import type { ExclusifyUnion } from './utils/utility-types';
type LogoType = 'isotype' | 'imagotype' | 'vertical';
type LogoPropsBase = {
    size?: ByBreakpoint<number>;
    type?: LogoType;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
};
type LogoToProps = LogoPropsBase & {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    to: string;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    'aria-label': string;
};
type LogoHrefProps = LogoPropsBase & {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    href: string;
    newTab?: boolean;
    'aria-label': string;
};
type LogoOnPressProps = LogoPropsBase & {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    onPress: () => void;
    'aria-label': string;
};
type LogoProps = ExclusifyUnion<LogoPropsBase | LogoToProps | LogoHrefProps | LogoOnPressProps>;
export declare const Logo: React.FC<LogoProps>;
export declare const MovistarLogo: React.FC<LogoProps>;
export declare const VivoLogo: React.FC<LogoProps>;
export declare const O2Logo: React.FC<LogoProps>;
export declare const TelefonicaLogo: React.FC<LogoProps>;
export declare const BlauLogo: React.FC<LogoProps>;
export declare const TuLogo: React.FC<LogoProps>;
export {};
