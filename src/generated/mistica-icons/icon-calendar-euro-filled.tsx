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

const IconCalendarEuroFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.787 6.283v-3.57a.714.714 0 0 0-1.426 0v3.57a.714.714 0 0 0 1.426 0m11.07-2.144C21.04 4.14 22 5.1 22 6.283v3.214H2V6.283C2 5.1 2.96 4.14 4.144 4.14h2.143v2.144a1.787 1.787 0 1 0 3.574 0V4.14h4.287v2.144a1.787 1.787 0 1 0 3.574 0V4.14zm-3.213-1.426v3.57a.714.714 0 0 1-1.426 0v-3.57a.714.714 0 0 1 1.425 0M22 10.572V22H2V10.572zm-11.909 4.987a2.851 2.851 0 0 1 4.23-1.93.53.53 0 0 0 .732-.196.537.537 0 0 0-.197-.731 3.9 3.9 0 0 0-1.965-.53 3.93 3.93 0 0 0-3.885 3.391h-.575a.533.533 0 0 0-.535.535c0 .297.237.535.535.535h.575a3.93 3.93 0 0 0 3.885 3.392c.686 0 1.367-.183 1.966-.53a.536.536 0 0 0-.535-.928 2.85 2.85 0 0 1-4.232-1.938h2.984a.533.533 0 0 0 .535-.535.533.533 0 0 0-.535-.535z"
            />
        </svg>
    );
};

export default IconCalendarEuroFilled;