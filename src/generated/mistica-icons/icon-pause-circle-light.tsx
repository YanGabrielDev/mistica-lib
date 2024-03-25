'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPauseCircleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10a9.97 9.97 0 0 0 5.334-1.545.36.36 0 0 0 .11-.493.36.36 0 0 0-.494-.11 9.25 9.25 0 0 1-4.95 1.43c-5.119 0-9.282-4.163-9.282-9.282S6.88 2.718 12 2.718s9.282 4.163 9.287 9.277a9.25 9.25 0 0 1-1.43 4.95.36.36 0 0 0 .11.494.36.36 0 0 0 .493-.11A10 10 0 0 0 22 12c0-5.512-4.488-10-10-10S2 6.484 2 12m16.787 6.07a.714.714 0 0 1 0 1.425.714.714 0 0 1 0-1.425M9.857 7.356a.357.357 0 0 0-.713 0v9.283a.357.357 0 0 0 .712.005zM14.5 7c.197 0 .357.16.357.356v9.287a.357.357 0 0 1-.713-.005V7.357c0-.196.16-.356.356-.356"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.998 16.423a.28.28 0 0 1-.28-.28V7.81a.28.28 0 0 1 .28-.28c.154 0 .28.126.28.28v8.333c0 .154-.126.28-.28.28M8.953 16.451a.28.28 0 0 1-.28-.28V7.838a.28.28 0 0 1 .28-.28.28.28 0 0 1 .28.28v8.333c0 .154-.126.28-.28.28"
                />
                <path
                    fill={fillColor}
                    d="M11.998 21.838c-6.435 0-9.838-3.4-9.838-9.838s3.4-9.84 9.838-9.84c3.14 0 5.574.812 7.238 2.417C20.96 6.241 21.838 8.74 21.838 12c.003 6.435-3.4 9.838-9.84 9.838m0-19.118C5.844 2.72 2.72 5.843 2.72 12c0 6.154 3.12 9.278 9.278 9.278 6.16 0 9.28-3.12 9.28-9.278.003-6.16-3.12-9.28-9.28-9.28"
                />
            </svg>
        );
    }
};

export default IconPauseCircleLight;