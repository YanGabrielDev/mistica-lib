import * as React from 'react';
import type { IconButtonProps, ToggleIconButtonProps } from './icon-button';
import type { TouchableElement } from './touchable';
import type { DataAttributes, TrackingEvent } from './utils/types';
import type { ExclusifyUnion } from './utils/utility-types';
interface CommonProps {
    children?: void;
    headline?: string | React.ReactNode;
    title: string;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string | null;
    descriptionLinesMax?: number;
    detail?: string;
    asset?: React.ReactNode;
    badge?: boolean | number;
    role?: string;
    extra?: React.ReactNode;
    dataAttributes?: DataAttributes;
    disabled?: boolean;
    withChevron?: boolean;
}
type Right = (({ centerY }: {
    centerY: boolean;
}) => React.ReactNode) | React.ReactNode;
interface ContentProps extends CommonProps {
    isClickable?: boolean;
    type?: 'chevron' | 'basic' | 'custom' | 'control';
    right?: Right;
    /** This id is to link the title with the related control */
    labelId?: string;
}
export declare const Content: React.FC<ContentProps>;
type ControlProps = {
    name?: string;
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (checked: boolean) => void;
};
interface BasicRowContentProps extends CommonProps {
    right?: Right;
}
interface SwitchRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    switch: ControlProps | undefined;
}
interface CheckboxRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    checkbox: ControlProps | undefined;
}
interface RadioRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    radioValue: string;
}
interface IconButtonRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    iconButton: ExclusifyUnion<IconButtonProps | ToggleIconButtonProps> | undefined;
}
interface HrefRowContentProps extends CommonProps {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    href: string | undefined;
    newTab?: boolean;
    right?: Right;
}
interface ToRowContentProps extends CommonProps {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    to: string | undefined;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    right?: Right;
}
interface OnPressRowContentProps extends CommonProps {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    onPress: (() => void) | undefined;
    right?: Right;
}
type RowContentProps = ExclusifyUnion<BasicRowContentProps | SwitchRowContentProps | RadioRowContentProps | IconButtonRowContentProps | CheckboxRowContentProps | HrefRowContentProps | ToRowContentProps | OnPressRowContentProps>;
export declare const Row: React.ForwardRefExoticComponent<RowContentProps & React.RefAttributes<TouchableElement>>;
type RowListProps = {
    children: React.ReactNode;
    ariaLabelledby?: string;
    role?: string;
    /**
     * @deprecated This field is deprecated and it has no effect.
     */
    noLastDivider?: boolean;
    dataAttributes?: DataAttributes;
};
export declare const RowList: React.FC<RowListProps>;
interface CommonBoxedRowProps {
    isInverse?: boolean;
}
interface BasicBoxedRowProps extends BasicRowContentProps, CommonBoxedRowProps {
}
interface SwitchBoxedRowProps extends SwitchRowContentProps, CommonBoxedRowProps {
}
interface CheckboxBoxedRowProps extends CheckboxRowContentProps, CommonBoxedRowProps {
}
interface RadioBoxedRowProps extends RadioRowContentProps, CommonBoxedRowProps {
}
interface IconButtonBoxedRowProps extends IconButtonRowContentProps, CommonBoxedRowProps {
}
interface HrefBoxedRowProps extends HrefRowContentProps, CommonBoxedRowProps {
}
interface ToBoxedRowProps extends ToRowContentProps, CommonBoxedRowProps {
}
interface OnPressBoxedRowProps extends OnPressRowContentProps, CommonBoxedRowProps {
}
type BoxedRowProps = ExclusifyUnion<BasicBoxedRowProps | SwitchBoxedRowProps | RadioBoxedRowProps | IconButtonBoxedRowProps | CheckboxBoxedRowProps | HrefBoxedRowProps | ToBoxedRowProps | OnPressBoxedRowProps>;
export declare const BoxedRow: React.ForwardRefExoticComponent<BoxedRowProps & React.RefAttributes<HTMLDivElement>>;
type BoxedRowListProps = {
    children: React.ReactNode;
    ariaLabelledby?: string;
    role?: string;
    dataAttributes?: DataAttributes;
};
export declare const BoxedRowList: React.FC<BoxedRowListProps>;
export {};
