import * as React from 'react';
import { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps, RendersNullableElement, TrackingEvent } from './utils/types';
type SheetProps = {
    onClose?: () => void;
    dataAttributes?: DataAttributes;
    children: React.ReactNode | ((renderParams: {
        closeModal: () => void;
        modalTitleId: string;
    }) => React.ReactNode);
};
declare const Sheet: React.ForwardRefExoticComponent<SheetProps & React.RefAttributes<HTMLDivElement>>;
type SheetBodyProps = {
    title?: string;
    subtitle?: string;
    description?: string | Array<string>;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    link?: RendersNullableElement<typeof ButtonLink>;
    modalTitleId: string;
    children?: React.ReactNode;
};
export declare const SheetBody: ({ title, subtitle, description, modalTitleId, button, secondaryButton, link, children, }: SheetBodyProps) => JSX.Element;
type RadioListSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | Array<string>;
    items: Array<{
        id: string;
        title?: string;
        description?: string;
        asset?: React.ReactNode;
    }>;
    selectedId?: string;
    onClose?: () => void;
    onSelect?: (id: string) => void;
    dataAttributes?: DataAttributes;
    button?: {
        text: string;
    };
};
export declare const RadioListSheet: React.ForwardRefExoticComponent<RadioListSheetProps & React.RefAttributes<HTMLDivElement>>;
type ActionsListSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | Array<string>;
    items: Array<{
        id: string;
        title: string;
        style?: 'normal' | 'destructive';
        icon?: ExclusifyUnion<{
            Icon: React.ComponentType<IconProps>;
        } | {
            url: string;
            urlDark?: string;
        }>;
    }>;
    onClose?: () => void;
    onSelect?: (id: string) => void;
    dataAttributes?: DataAttributes;
};
export declare const ActionsListSheet: React.ForwardRefExoticComponent<ActionsListSheetProps & React.RefAttributes<HTMLDivElement>>;
type InfoSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | Array<string>;
    items: Array<{
        id?: string;
        title: string;
        description?: string;
        icon: ExclusifyUnion<{
            type: 'regular' | 'small';
            Icon: React.ComponentType<IconProps>;
        } | {
            type: 'regular' | 'small';
            url: string;
            urlDark?: string;
        } | {
            type: 'bullet';
        }>;
    }>;
    onClose?: () => void;
    dataAttributes?: DataAttributes;
};
export declare const InfoSheet: React.ForwardRefExoticComponent<InfoSheetProps & React.RefAttributes<HTMLDivElement>>;
type PressedButton = 'PRIMARY' | 'SECONDARY' | 'LINK';
type ButtonProps = {
    text: string;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
};
type ActionsSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | Array<string>;
    button: ButtonProps;
    secondaryButton?: ButtonProps;
    buttonLink?: ButtonProps & {
        withChevron?: boolean;
    };
    onClose?: () => void;
    onPressButton?: (pressedButton: PressedButton) => void;
    dataAttributes?: DataAttributes;
};
export declare const ActionsSheet: React.ForwardRefExoticComponent<ActionsSheetProps & React.RefAttributes<HTMLDivElement>>;
export default Sheet;
