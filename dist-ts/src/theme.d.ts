import * as React from 'react';
import type { RegionCode } from './utils/region-code';
import type { Locale } from './utils/locale';
import type { Skin, SkinName, TextPresetsConfig } from './skins/types';
import type { TrackingEvent } from './utils/types';
export type ThemeTexts = Readonly<typeof TEXTS_ES>;
declare const TEXTS_ES: {
    expirationDatePlaceholder: string;
    enablePasswordVisibility: string;
    disablePasswordVisibility: string;
    loading: string;
    linkOpensInNewTab: string;
    modalClose: string;
    dialogCancelButton: string;
    dialogAcceptButton: string;
    formFieldOptionalLabelSuffix: string;
    formFieldErrorIsMandatory: string;
    formCreditCardNumberLabel: string;
    formCreditCardExpirationLabel: string;
    formCreditCardCvvLabel: string;
    formCreditCardCvvError: string;
    formCreditCardCvvTooltipVisaMcButtonOpen: string;
    formCreditCardCvvTooltipVisaMcButtonClose: string;
    formCreditCardCvvTooltipVisaMc: string;
    formCreditCardCvvTooltipAmex: string;
    formCreditCardExpirationError: string;
    formCreditCardNumberError: string;
    formDateOutOfRangeError: string;
    formEmailError: string;
    formIbanError: string;
    closeButtonLabel: string;
    formSearchClear: string;
    menuLabelSuffix: string;
    openNavigationMenu: string;
    closeNavigationMenu: string;
    backNavigationBar: string;
    clearButton: string;
    carouselNextButton: string;
    carouselPrevButton: string;
    playIconButtonLabel: string;
    pauseIconButtonLabel: string;
    sheetConfirmButton: string;
    progressBarCompletedLabel: string;
    progressBarStepLabel: string;
    pinFieldInputLabel: string;
    counterRemoveLabel: string;
    counterIncreaseLabel: string;
    counterDecreaseLabel: string;
    counterQuantity: string;
    counterMinValue: string;
    counterMaxValue: string;
};
export declare const getTexts: (locale: Locale) => typeof TEXTS_ES;
export declare const NAVBAR_HEIGHT_MOBILE = 56;
export declare const NAVBAR_HEIGHT_DESKTOP = 80;
export declare const NAVBAR_HEIGHT_DESKTOP_LARGE: number;
export declare const dimensions: {
    headerMobileHeight: number;
    headerDesktopHeight: number;
};
type LinkComponent = React.ComponentType<{
    style?: React.CSSProperties;
    className?: string;
    'aria-label'?: string;
    disabled?: boolean;
    role?: string;
    'data-testid'?: string;
    'aria-checked'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-checked'];
    'aria-controls'?: string;
    'aria-expanded'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-expanded'];
    'aria-hidden'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-hidden'];
    'aria-selected'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-selected'];
    tabIndex?: number;
    innerRef?: React.RefObject<HTMLAnchorElement>;
    to: string | {
        pathname?: string;
        search?: string;
        state?: unknown;
        hash?: string;
        key?: string;
    };
    replace?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
}>;
export declare const getMisticaLinkComponent: (Link?: ThemeConfig['Link']) => LinkComponent;
export type ColorScheme = 'dark' | 'light' | 'auto';
export type EventFormat = 'universal-analytics' | 'google-analytics-4';
export type ThemeConfig = Readonly<{
    skin: Readonly<Skin>;
    colorScheme?: ColorScheme;
    i18n: Readonly<{
        locale: Locale;
        phoneNumberFormattingRegionCode: RegionCode;
    }>;
    platformOverrides?: Readonly<{
        platform?: 'ios' | 'android' | 'desktop';
        insideNovumNativeApp?: boolean;
        userAgent?: string;
    }>;
    texts?: Partial<ThemeTexts>;
    analytics?: Readonly<{
        logEvent: (trackingEvent: TrackingEvent) => Promise<void>;
        eventFormat?: EventFormat;
    }>;
    dimensions?: Readonly<{
        headerMobileHeight: number | 'mistica';
    }>;
    Link?: LinkComponent | {
        type: 'ReactRouter5' | 'ReactRouter6' | 'Next12' | 'Next13' | 'Next14';
        Component: React.ComponentType<any>;
    };
    useHrefDecorator?: () => (href: string) => string;
    useId?: () => string;
    enableTabFocus?: boolean;
}>;
export type Theme = {
    skinName: SkinName;
    i18n: {
        locale: Locale;
        phoneNumberFormattingRegionCode: RegionCode;
    };
    platformOverrides: {
        platform?: 'ios' | 'android' | 'desktop';
        insideNovumNativeApp?: boolean;
        userAgent?: string;
    };
    texts: ThemeTexts;
    analytics: {
        logEvent: (trackingEvent: TrackingEvent) => Promise<void>;
        eventFormat: EventFormat;
    };
    dimensions: {
        headerMobileHeight: number;
        headerDesktopHeight: number;
    };
    textPresets: TextPresetsConfig;
    Link: LinkComponent;
    isDarkMode: boolean;
    isIos: boolean;
    useHrefDecorator: () => (href: string) => string;
    useId?: () => string;
};
export {};
