import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes } from './utils/types';
interface BaseSliderProps {
    disabled?: boolean;
    value?: number;
    defaultValue?: number;
    onChangeValue?: (value: number) => void;
    tooltip?: boolean;
    dataAttributes?: DataAttributes;
    name: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    id?: string;
    /**
     * @deprecated This field is deprecated, please use step or values instead.
     */
    steps?: number | Array<number>;
    /**
     * @deprecated This field is deprecated.
     */
    getStepArrayIndex?: (value: number) => void;
}
interface SliderWithValuesProps {
    values: Array<number>;
}
interface SliderWithStepProps {
    step?: number;
    min?: number;
    max?: number;
}
type SliderProps = BaseSliderProps & ExclusifyUnion<SliderWithStepProps | SliderWithValuesProps>;
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
export default Slider;
