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

const IconTrendDownRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.837 14.804-.429 3.481a.787.787 0 0 1-.787.687h-3.49a.787.787 0 0 1-.793-.78.79.79 0 0 1 .793-.778h1.882l-4.986-6.95-6.793 2.928a.82.82 0 0 1-1.016-.334L2.257 6.193A.777.777 0 0 1 2.55 5.13l.008-.005a.8.8 0 0 1 1.079.294l3.61 6.255L13.98 8.78a.8.8 0 0 1 .969.263l5.117 7.146.19-1.574a.803.803 0 0 1 .889-.686c.428.047.74.437.692.865z"
            />
        </svg>
    );
};

export default IconTrendDownRegular;