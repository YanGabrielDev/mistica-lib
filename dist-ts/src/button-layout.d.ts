import * as React from 'react';
import type { DataAttributes, RendersNullableElement } from './utils/types';
import type { NullableButtonElement, ButtonLink } from './button';
type MaybeButtonElement = NullableButtonElement | void | false;
type ButtonLayoutProps = {
    children?: MaybeButtonElement | [MaybeButtonElement, MaybeButtonElement];
    align?: 'center' | 'left' | 'right' | 'full-width';
    link?: RendersNullableElement<typeof ButtonLink>;
    withMargins?: boolean;
    dataAttributes?: DataAttributes;
};
declare const ButtonLayout: React.FC<ButtonLayoutProps>;
export default ButtonLayout;
