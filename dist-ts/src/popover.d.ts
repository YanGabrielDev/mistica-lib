import * as React from 'react';
import type { TrackingEvent, DataAttributes } from './utils/types';
type Position = 'top' | 'bottom' | 'left' | 'right';
type Props = {
    description?: string;
    target: React.ReactNode;
    title?: string;
    asset?: React.ReactNode;
    onClose?: () => void;
    position?: Position;
    width?: number;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    open?: boolean;
    children?: React.ReactNode;
    extra?: React.ReactNode;
    dataAttributes?: DataAttributes;
    /**
     * @deprecated This field is deprecated, use open instead.
     */
    isVisible?: boolean;
};
declare const Popover: React.FC<Props>;
export default Popover;
