import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { FontWeight } from './skins/types';
import type { DataAttributes } from './utils/types';
export interface TextPresetProps {
    color?: string;
    decoration?: 'underline' | 'line-through' | 'inherit' | 'none';
    transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'inherit' | 'none';
    children?: React.ReactNode;
    truncate?: boolean | number;
    wordBreak?: boolean;
    hyphens?: 'auto' | 'manual' | 'none';
    textAlign?: 'center' | 'right';
    id?: string;
    as?: React.ComponentType<any> | string;
    role?: string;
    'aria-level'?: number;
    dataAttributes?: DataAttributes;
    forceMobileSizes?: boolean;
    textShadow?: string;
}
interface TextProps extends TextPresetProps {
    weight?: FontWeight;
    /** in pixels, will be converted to rem in runtime */
    size?: number;
    /** in pixels, will be converted to rem in runtime */
    mobileSize?: number;
    /** in pixels, will be converted to rem in runtime */
    desktopSize?: number;
    /** in pixels, will be converted to rem in runtime */
    lineHeight?: string | number;
    /** in pixels, will be converted to rem in runtime */
    mobileLineHeight?: string | number;
    /** in pixels, will be converted to rem in runtime */
    desktopLineHeight?: string | number;
    letterSpacing?: number;
    forzeMobileSize?: never;
}
export declare const Text: React.FC<TextProps>;
interface LightProps extends TextPresetProps {
    light: boolean;
}
interface MediumProps extends TextPresetProps {
    medium: boolean;
}
interface RegularProps extends TextPresetProps {
    regular: boolean;
}
interface RestrictedWeightTextProps<T> extends TextPresetProps {
    weight: T;
}
type RegularMediumProps = ExclusifyUnion<RegularProps | MediumProps | RestrictedWeightTextProps<'regular' | 'medium'>>;
type LightRegularMediumProps = ExclusifyUnion<LightProps | RegularProps | MediumProps | RestrictedWeightTextProps<'light' | 'regular' | 'medium'>>;
export declare const Text10: React.FC<TextPresetProps>;
export declare const Text9: React.FC<TextPresetProps>;
export declare const Text8: React.FC<TextPresetProps>;
export declare const Text7: React.FC<TextPresetProps>;
export declare const Text6: React.FC<TextPresetProps>;
export declare const Text5: React.FC<TextPresetProps>;
export declare const Text4: React.FC<LightRegularMediumProps>;
export declare const Text3: React.FC<LightRegularMediumProps>;
export declare const Text2: React.FC<RegularMediumProps>;
export declare const Text1: React.FC<RegularMediumProps>;
export default Text;
