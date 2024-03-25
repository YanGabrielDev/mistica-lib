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

const IconBarChartFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17 2h1a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M12 6h-1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M6 10H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2"
            />
        </svg>
    );
};

export default IconBarChartFilled;
