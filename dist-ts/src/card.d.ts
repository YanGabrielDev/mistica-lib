import * as React from 'react';
import Tag from './tag';
import Image from './image';
import Video from './video';
import type { Variant } from './theme-variant-context';
import type { PressHandler } from './touchable';
import type { VideoElement, VideoSource } from './video';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps, RendersElement, RendersNullableElement, TrackingEvent } from './utils/types';
type BaseIconButtonAction = {
    Icon: React.FC<IconProps>;
    label: string;
};
type IconButtonAction = BaseIconButtonAction & ExclusifyUnion<{
    href: string;
    newTab?: boolean;
} | {
    to: string;
    fullPageOnWebView?: boolean;
    replace?: boolean;
} | {
    onPress: () => void;
}>;
type ToggleIconButtonAction = {
    checkedProps: BaseIconButtonAction;
    uncheckedProps: BaseIconButtonAction;
    onChange?: (checked: boolean) => void | undefined | Promise<void>;
    checked?: boolean;
    defaultChecked?: boolean;
};
export type CardAction = {
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
} & ExclusifyUnion<IconButtonAction | ToggleIconButtonAction>;
type CardActionsGroupProps = {
    actions?: Array<CardAction | React.ReactElement>;
    onClose?: () => void;
    padding?: number;
    type?: 'default' | 'inverse' | 'media';
};
export declare const CardActionIconButton: (props: CardAction) => JSX.Element;
export declare const CardActionsGroup: ({ actions, padding, onClose, type, }: CardActionsGroupProps) => JSX.Element;
export type AspectRatio = '1:1' | '16:9' | '7:10' | '9:10' | 'auto';
export declare const CardActionSpinner: ({ color }: IconProps) => React.ReactElement;
type TouchableProps = {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
} & ExclusifyUnion<{
    href: string | undefined;
    newTab?: boolean;
} | {
    to: string | undefined;
    fullPageOnWebView?: boolean;
} | {
    onPress: PressHandler | undefined;
}>;
type TouchableCard<T> = T & TouchableProps;
type MaybeTouchableCard<T> = ExclusifyUnion<TouchableCard<T> | T>;
interface MediaCardBaseProps {
    media: RendersElement<typeof Image> | RendersElement<typeof Video>;
    icon?: React.ReactElement;
    headline?: string | RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleLinesMax?: number;
    title?: string;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    actions?: Array<CardAction | React.ReactElement>;
    children?: void;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    onClose?: () => void;
}
type MediaCardProps = MediaCardBaseProps & ExclusifyUnion<TouchableProps | {
    button?: RendersNullableElement<typeof ButtonPrimary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
}>;
export declare const MediaCard: React.ForwardRefExoticComponent<MediaCardProps & React.RefAttributes<HTMLDivElement>>;
export declare const NakedCard: React.ForwardRefExoticComponent<MediaCardProps & React.RefAttributes<HTMLDivElement>>;
type SmallNakedCardProps = MaybeTouchableCard<{
    media: RendersElement<typeof Image> | RendersElement<typeof Video>;
    title?: string;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
}>;
export declare const SmallNakedCard: React.ForwardRefExoticComponent<SmallNakedCardProps & React.RefAttributes<HTMLDivElement>>;
interface DataCardBaseProps {
    /**
     * Typically a mistica-icons component element
     */
    icon?: React.ReactElement;
    headline?: string | RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleLinesMax?: number;
    title?: string;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    actions?: Array<CardAction | React.ReactElement>;
    aspectRatio?: AspectRatio | number;
    children?: void;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    onClose?: () => void;
}
type DataCardProps = DataCardBaseProps & ExclusifyUnion<TouchableProps | {
    button?: RendersNullableElement<typeof ButtonPrimary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
}>;
export declare const DataCard: React.ForwardRefExoticComponent<DataCardProps & React.RefAttributes<HTMLDivElement>>;
type SnapCardProps = MaybeTouchableCard<{
    icon?: React.ReactElement;
    title?: string;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    extra?: React.ReactNode;
    isInverse?: boolean;
    aspectRatio?: AspectRatio | number;
    children?: void;
}>;
export declare const SnapCard: React.ForwardRefExoticComponent<SnapCardProps & React.RefAttributes<HTMLDivElement>>;
interface CommonDisplayCardProps {
    /**
     * Typically a mistica-icons component element
     */
    icon?: React.ReactElement;
    actions?: Array<CardAction | React.ReactElement>;
    onClose?: () => void;
    dataAttributes?: DataAttributes;
    headline?: React.ReactComponentElement<typeof Tag>;
    pretitle?: string;
    pretitleLinesMax?: number;
    title: string;
    titleLinesMax?: number;
    children?: JSX.Element;
    description?: string;
    descriptionLinesMax?: number;
    'aria-label'?: string;
    aspectRatio?: AspectRatio | number;
}
type DisplayMediaCardBaseProps = {
    width?: number | string;
    height?: number | string;
};
type DisplayMediaCardWithImageProps = CommonDisplayCardProps & {
    backgroundImage: string;
};
type DisplayMediaCardWithVideoProps = Omit<CommonDisplayCardProps, 'actions' | 'onClose'> & {
    backgroundVideo: VideoSource;
    poster?: string;
    backgroundVideoRef?: React.RefObject<VideoElement>;
};
type DisplayMediaCardProps = DisplayMediaCardBaseProps & ExclusifyUnion<DisplayMediaCardWithImageProps | DisplayMediaCardWithVideoProps> & ExclusifyUnion<TouchableProps | {
    button?: React.ReactComponentElement<typeof ButtonPrimary>;
    secondaryButton?: React.ReactComponentElement<typeof ButtonSecondary>;
    buttonLink?: React.ReactComponentElement<typeof ButtonLink>;
}>;
type DisplayDataCardProps = CommonDisplayCardProps & {
    extra?: React.ReactNode;
    isInverse?: boolean;
} & ExclusifyUnion<TouchableProps | {
    button?: React.ReactComponentElement<typeof ButtonPrimary>;
    secondaryButton?: React.ReactComponentElement<typeof ButtonSecondary>;
    buttonLink?: React.ReactComponentElement<typeof ButtonLink>;
}>;
export declare const DisplayMediaCard: React.ForwardRefExoticComponent<DisplayMediaCardProps & React.RefAttributes<HTMLDivElement>>;
export declare const DisplayDataCard: React.ForwardRefExoticComponent<DisplayDataCardProps & React.RefAttributes<HTMLDivElement>>;
interface PosterCardBaseProps {
    ariaLabel?: string;
    aspectRatio?: AspectRatio | number;
    width?: number | string;
    height?: number | string;
    icon?: React.ReactElement;
    actions?: Array<CardAction | React.ReactElement>;
    onClose?: () => void;
    dataAttributes?: DataAttributes;
    headline?: string | RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleLinesMax?: number;
    title?: string;
    titleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
}
interface PosterCardWithImageProps extends PosterCardBaseProps {
    backgroundImage: string;
}
type PosterCardWithVideoProps = Omit<PosterCardBaseProps, 'actions' | 'onClose'> & {
    backgroundVideo: VideoSource;
    poster?: string;
    backgroundVideoRef?: React.RefObject<VideoElement>;
};
type PosterCardWithBackgroundColorProps = PosterCardBaseProps & {
    backgroundColor?: string;
} & ExclusifyUnion<{
    variant: Variant;
} | {
    isInverse: boolean;
}>;
type PosterCardProps = MaybeTouchableCard<ExclusifyUnion<PosterCardWithImageProps | PosterCardWithVideoProps | PosterCardWithBackgroundColorProps>>;
export declare const PosterCard: React.ForwardRefExoticComponent<PosterCardProps & React.RefAttributes<HTMLDivElement>>;
export {};
