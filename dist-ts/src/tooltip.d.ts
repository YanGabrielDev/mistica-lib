import * as React from 'react';
import type { DataAttributes, TrackingEvent } from './utils/types';
type Position = 'top' | 'bottom' | 'left' | 'right';
type Props = {
    children?: React.ReactNode;
    extra?: React.ReactNode;
    description?: string;
    target: React.ReactNode;
    title?: string;
    position?: Position;
    width?: number;
    delay?: boolean;
    dataAttributes?: DataAttributes;
    centerContent?: boolean;
    open?: boolean;
    /**
     * @deprecated This field is deprecated.
     */
    targetLabel?: string;
    /**
     * @deprecated This field is deprecated.
     */
    targetStyle?: React.CSSProperties;
    /**
     * @deprecated This field is deprecated.
     */
    unstable_offsetX?: number | string;
    /**
     * @deprecated This field is deprecated, use centerContent instead.
     */
    textCenter?: boolean;
};
type BaseTooltipProps = {
    content?: React.ReactNode;
    target: React.ReactNode;
    position?: Position;
    width?: number;
    delay?: boolean;
    dataAttributes?: DataAttributes;
    centerContent?: boolean;
    open?: boolean;
    hasPointerInteractionOnly?: boolean;
    onClose?: () => void;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
};
export declare const BaseTooltip: React.FC<BaseTooltipProps>;
declare const Tooltip: React.FC<Props>;
export default Tooltip;
