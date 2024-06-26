'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMultisaveLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.19 4.7a1.58 1.58 0 0 1-2.231 0 1.59 1.59 0 0 1 0-2.238 1.58 1.58 0 0 1 2.232 0 1.59 1.59 0 0 1 0 2.239m-6.311.93c0-.205.166-.372.37-.372h2.598a.371.371 0 0 1 0 .743H6.25a.37.37 0 0 1-.37-.372m5.51 12.393a.37.37 0 0 0-.096-.52l-.408-.285a5.2 5.2 0 0 0-1.373-.576 3.349 3.349 0 0 0-1.781-6.178 3.345 3.345 0 0 0-1.786 6.173c-1.848.476-3.035 1.71-3.035 3.315v1.676c0 .205.166.372.37.372.205 0 .37-.167.37-.372v-1.671c0-1.644 1.678-2.791 4.08-2.791 1.06 0 2.043.242 2.751.676l.39.271a.37.37 0 0 0 .517-.09m-6.251-4.206a2.6 2.6 0 0 1 2.598-2.605 2.6 2.6 0 0 1 2.598 2.605 2.6 2.6 0 0 1-2.598 2.605 2.605 2.605 0 0 1-2.598-2.605m13.731 1.486a3.35 3.35 0 0 1-1.567 2.834c.779.21 1.458.557 1.98 1.038a.37.37 0 0 1-.498.548c-.751-.69-1.905-1.071-3.254-1.071-2.327 0-4.08 1.28-4.08 2.976a.37.37 0 0 1-.37.372.37.37 0 0 1-.371-.372c0-1.638 1.24-2.962 3.068-3.481a3.345 3.345 0 0 1 1.753-6.192c1.843 0 3.339 1.5 3.339 3.348m-5.942 0a2.6 2.6 0 0 0 2.598 2.606 2.6 2.6 0 0 0 2.598-2.606 2.6 2.6 0 0 0-2.598-2.605 2.6 2.6 0 0 0-2.598 2.605M20.351 22a.743.743 0 0 0 0-1.486.743.743 0 0 0 0 1.486M10.48 2.99a.85.85 0 0 0-.247.591.83.83 0 0 0 .242.59.86.86 0 0 0 1.183 0 .83.83 0 0 0 .242-.59.83.83 0 0 0-1.42-.59m3.743 3.754a1.58 1.58 0 0 1 2.232 0 1.59 1.59 0 0 1 0 2.239c-.309.31-.712.462-1.116.462s-.807-.153-1.116-.462a1.593 1.593 0 0 1 0-2.239m1.705 1.71a.77.77 0 0 0 .237-.596.83.83 0 0 0-.242-.59.8.8 0 0 0-.589-.248.83.83 0 0 0-.589.248.847.847 0 0 0 0 1.186.837.837 0 0 0 1.183 0m.076-6.063-5.937 5.953a.37.37 0 0 0 .261.633.37.37 0 0 0 .261-.109l5.937-5.953a.37.37 0 0 0 0-.524.364.364 0 0 0-.522 0"
            />
        </svg>
    );
};

export default IconMultisaveLight;
