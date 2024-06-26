import * as React from 'react';
import { ButtonPrimary } from './button';
import type { ButtonSecondary, ButtonLink } from './button';
import type { DataAttributes, RendersNullableElement } from './utils/types';
interface BaseProps {
    title: string;
    button?: RendersNullableElement<typeof ButtonPrimary> | RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    description?: string;
    children?: void;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
}
interface ImageProps extends BaseProps {
    imageUrl: string;
    largeImageUrl?: undefined;
    icon?: undefined;
}
interface LargeImageProps extends BaseProps {
    largeImageUrl: string;
    imageUrl?: undefined;
    icon?: undefined;
}
interface IconProps extends BaseProps {
    icon: React.ReactElement;
    imageUrl?: undefined;
    largeImageUrl?: undefined;
}
type Props = IconProps | ImageProps | LargeImageProps;
declare const EmptyState: React.FC<Props>;
export default EmptyState;
