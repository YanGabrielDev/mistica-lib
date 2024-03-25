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

const IconListFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2 4.693C2 3.482 2.965 2.5 4.144 2.5c1.184 0 2.144.982 2.144 2.193s-.96 2.193-2.144 2.193S2 5.904 2 4.693m5.714-1.099a.72.72 0 0 0-.713.73c0 .407.32.734.713.73h13.573a.72.72 0 0 0 .713-.73c0-.402-.32-.73-.713-.73zm0 7.674h13.573a.72.72 0 0 1 .713.73c0 .402-.32.73-.713.73H7.714a.72.72 0 0 1-.713-.73c0-.402.32-.73.713-.73m13.573 7.67H7.714a.72.72 0 0 0-.713.729c0 .402.32.73.713.73h13.573a.72.72 0 0 0 .713-.73.72.72 0 0 0-.713-.73M2 11.997c0-1.211.965-2.194 2.144-2.194 1.184 0 2.144.982 2.144 2.194 0 1.21-.96 2.193-2.144 2.193S2 13.209 2 11.998m2.144 5.116c-1.18 0-2.144.982-2.144 2.193S2.96 21.5 4.144 21.5s2.144-.982 2.144-2.193-.96-2.193-2.144-2.193"
            />
        </svg>
    );
};

export default IconListFilled;