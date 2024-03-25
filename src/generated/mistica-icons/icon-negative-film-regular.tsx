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

const IconNegativeFilmRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.176 4.64c0-.808.656-1.464 1.464-1.464h2.066v3.53h-3.53zm0 3.242h3.53v3.53h-3.53zM2 4.64v14.72A2.64 2.64 0 0 0 4.64 22h14.72A2.64 2.64 0 0 0 22 19.36V4.64A2.64 2.64 0 0 0 19.36 2H4.64A2.64 2.64 0 0 0 2 4.64m18.824 2.066h-3.53v-3.53h2.066c.808 0 1.463.656 1.463 1.464zm-3.53 1.176h3.53v3.53h-3.53zm-1.176-4.706v8.236H7.882V3.176zm4.706 9.412v3.53h-3.53v-3.53zm0 4.706v2.066c0 .808-.656 1.463-1.464 1.463h-2.066v-3.529zm-4.706-4.706v8.236H7.882v-8.236zM3.176 17.294h3.53v3.53H4.64a1.463 1.463 0 0 1-1.464-1.464zm3.53-1.176h-3.53v-3.53h3.53z"
            />
        </svg>
    );
};

export default IconNegativeFilmRegular;