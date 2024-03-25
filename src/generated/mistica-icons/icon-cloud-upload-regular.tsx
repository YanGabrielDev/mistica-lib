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

const IconCloudUploadRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.079 3.39c.832 0 4.868.19 6.109 3.863 2.33.227 4.658 1.714 4.655 5.31 0 3.964-2.834 5.368-5.268 5.368l-1.855.008v1.83c0 .464-.37.845-.82.845h-3.796a.83.83 0 0 1-.82-.846v-1.804l-2.78.017c-2.103 0-4.344-1.174-4.344-4.462 0-2.583 1.384-3.647 2.456-4.087.185-5.75 5.407-6.042 6.463-6.042m5.498 13.297c.958 0 4.06-.3 4.062-4.123 0-3.591-2.74-4.056-3.916-4.09a.605.605 0 0 1-.563-.465c-.838-3.216-4.376-3.372-5.076-3.372-1.235 0-5.263.364-5.263 5.126l.008.1a.64.64 0 0 1-.442.617c-1.336.392-2.014 1.411-2.014 3.042 0 2.907 2.19 3.215 3.134 3.215l2.779-.016v-1.073H7.843a.82.82 0 0 1-.764-.516.88.88 0 0 1 .168-.921l4.221-4.465a.837.837 0 0 1 1.177 0l4.117 4.38c.224.242.297.606.168.922a.83.83 0 0 1-.756.516H14.73v1.131zm-3.064 2.683.011-4.204c.008-.473.378-.849.83-.849h.901l-3.199-3.406-3.305 3.49.91.009c.46 0 .83.383.83.848v4.112z"
            />
        </svg>
    );
};

export default IconCloudUploadRegular;