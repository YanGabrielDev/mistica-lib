import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps, TrackingEvent } from './utils/types';
interface SimpleChipProps {
    children: string;
    Icon?: React.FC<IconProps>;
    id?: string;
    dataAttributes?: DataAttributes;
    badge?: boolean | number;
}
interface ClosableChipProps extends SimpleChipProps {
    onClose: () => void;
}
interface ToggleChipProps extends SimpleChipProps {
    active: boolean;
}
interface HrefChipProps extends SimpleChipProps {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    href: string;
    newTab?: boolean;
    active?: boolean;
}
interface ToChipProps extends SimpleChipProps {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    to: string;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    active?: boolean;
}
interface OnPressChipProps extends SimpleChipProps {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    onPress: () => void;
    active?: boolean;
}
type ClickableChipProps = ExclusifyUnion<HrefChipProps | ToChipProps | OnPressChipProps>;
type ChipProps = ExclusifyUnion<SimpleChipProps | ClosableChipProps | ToggleChipProps | ClickableChipProps>;
declare const Chip: React.FC<ChipProps>;
export default Chip;
