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

const IconInternetDeviceLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.8 7.714c0-2.162-1.71-3.917-3.812-3.927C17.476 2.731 16.416 2 15.192 2H8.93C7.203 2 5.8 3.44 5.8 5.214v13.572C5.8 20.56 7.203 22 8.93 22h6.262c1.727 0 3.13-1.44 3.13-3.214v-5.714a.35.35 0 0 0-.347-.357.353.353 0 0 0-.348.357v5.714c0 1.38-1.09 2.5-2.435 2.5H8.93c-1.345 0-2.436-1.12-2.436-2.5v-.356h7.307c.192 0 .348-.16.348-.357a.353.353 0 0 0-.348-.356H6.495V6.288h7.917c-.169.443-.267.923-.267 1.426 0 2.167 1.719 3.927 3.825 3.927 2.107 0 3.83-1.76 3.83-3.927m-.717-.356h-1.55c-.035-1.015-.213-1.998-.53-2.675a3.2 3.2 0 0 1 2.08 2.675m0 .717c-.134 1.244-.966 2.277-2.08 2.675.317-.681.495-1.664.53-2.675zm-2.244-.717H17.11c.062-1.783.574-2.857.864-2.857s.801 1.078.864 2.857M6.495 5.218c0-1.38 1.09-2.5 2.436-2.5h6.26c.856 0 1.608.457 2.045 1.147a3.82 3.82 0 0 0-2.463 1.71H6.495zm8.367 2.857h1.55c.035 1.015.213 1.998.53 2.675a3.22 3.22 0 0 1-2.08-2.675m.005-.717c.133-1.244.966-2.277 2.08-2.675-.317.682-.5 1.664-.53 2.675zm3.972.717c-.063 1.783-.575 2.858-.864 2.858s-.802-1.08-.864-2.858zm-2.258 9.998a.705.705 0 0 0-.695-.713.705.705 0 0 0-.694.713c0 .393.311.713.694.713s.695-.32.695-.713"
            />
        </svg>
    );
};

export default IconInternetDeviceLight;