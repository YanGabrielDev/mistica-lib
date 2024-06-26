import * as React from 'react';
import type NavigationBreadcrumbs from './navigation-breadcrumbs';
import type { ButtonPrimary, ButtonSecondary } from './button';
import type { DataAttributes, RendersElement, RendersNullableElement } from './utils/types';
import type { TextPresetProps } from './text';
type OverridableTextProps = {
    color?: TextPresetProps['color'];
    decoration?: TextPresetProps['decoration'];
    truncate?: TextPresetProps['truncate'];
};
type RichText = string | ({
    text: string;
} & OverridableTextProps);
type HeaderProps = {
    pretitle?: RichText;
    title?: string;
    description?: string;
    small?: boolean;
    dataAttributes?: DataAttributes;
    /**
     * @deprecated This field is deprecated, please use the extra slot in the HeaderLayout component instead.
     */
    preamount?: RichText;
    /**
     * @deprecated This field is deprecated, please use the extra slot in the HeaderLayout component instead.
     */
    amount?: string;
    /**
     * @deprecated This field is deprecated, please use the extra slot in the HeaderLayout component instead.
     */
    button?: RendersNullableElement<typeof ButtonPrimary>;
    /**
     * @deprecated This field is deprecated, please use the extra slot in the HeaderLayout component instead.
     */
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    /**
     * @deprecated This field is deprecated, please use the extra slot in the HeaderLayout component instead.
     */
    subtitle?: RichText;
    /**
     * @deprecated This field is deprecated, please use the extra slot in the HeaderLayout component instead.
     */
    isErrorAmount?: boolean;
};
export declare const Header: React.FC<HeaderProps>;
type MainSectionHeaderProps = {
    title: string;
    description?: string;
    button?: RendersNullableElement<typeof ButtonPrimary> | RendersNullableElement<typeof ButtonSecondary>;
};
export declare const MainSectionHeader: React.FC<MainSectionHeaderProps>;
type HeaderLayoutProps = {
    isInverse?: boolean;
    breadcrumbs?: RendersNullableElement<typeof NavigationBreadcrumbs>;
    /**
     * Intentionally not forced to RendersElement<typeof Header> to allow skeletons for example
     * The header is optional in order to allow webviews to delegate the header visualization to the surrounding native app.
     */
    header?: React.ReactNode;
    extra?: React.ReactNode;
    sideBySideExtraOnDesktop?: boolean;
    children?: void;
    dataAttributes?: DataAttributes;
    bleed?: boolean;
    noPaddingY?: boolean;
};
export declare const HeaderLayout: React.FC<HeaderLayoutProps>;
type MainSectionHeaderLayoutProps = {
    isInverse?: boolean;
    children: RendersElement<typeof MainSectionHeader>;
    dataAttributes?: DataAttributes;
};
export declare const MainSectionHeaderLayout: React.FC<MainSectionHeaderLayoutProps>;
export {};
