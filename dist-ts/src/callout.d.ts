import * as React from 'react';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { DataAttributes, RendersNullableElement } from './utils/types';
type Props = {
    title?: string;
    description: string;
    onClose?: () => void;
    icon?: React.ReactElement;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    children?: void;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
};
declare const Callout: React.FC<Props>;
export default Callout;
