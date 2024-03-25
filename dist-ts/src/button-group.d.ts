import * as React from 'react';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { DataAttributes, RendersNullableElement } from './utils/types';
export interface ButtonGroupProps {
    primaryButton?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    link?: RendersNullableElement<typeof ButtonLink>;
    dataAttributes?: DataAttributes;
}
declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
