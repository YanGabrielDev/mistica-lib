import * as React from 'react';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { DataAttributes, RendersNullableElement } from './utils/types';
interface CommonProps {
    title: string;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    description?: string;
    children?: void;
    'aria-label'?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
}
interface IconProps extends CommonProps {
    icon: React.ReactElement;
    imageUrl?: undefined;
}
interface ImageProps extends CommonProps {
    imageUrl: string;
    icon?: undefined;
}
type Props = IconProps | ImageProps;
declare const EmptyStateCard: React.FC<Props>;
export default EmptyStateCard;
