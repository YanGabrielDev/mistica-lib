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

const IconFunnelRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.87 19.776c0 1.228.957 2.224 2.126 2.224s2.126-.996 2.126-2.224v-4.443l6.295-12.242a.77.77 0 0 0-.018-.73.7.7 0 0 0-.607-.361H4.21c-.25 0-.48.138-.607.36a.76.76 0 0 0-.018.73L9.87 15.334zm1.333-4.978L5.393 3.478H18.6l-5.81 11.319a.73.73 0 0 0-.087.35v4.633c0 .408-.317.74-.707.74s-.707-.332-.707-.74v-4.633a.8.8 0 0 0-.086-.35"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.255 19.776c0 1.228-1.012 2.224-2.25 2.224s-2.26-.996-2.26-2.224v-4.443L3.09 3.091a.72.72 0 0 1 .019-.73A.75.75 0 0 1 3.752 2h16.497a.75.75 0 0 1 .642.36c.14.223.144.503.02.73l-6.656 12.243zm4.74-16.297H5.005l6.152 11.319a.75.75 0 0 1 .09.35v4.633c0 .408.346.74.759.74a.745.745 0 0 0 .748-.74v-4.633a.75.75 0 0 1 .091-.35z"
                />
            </svg>
        );
    }
};

export default IconFunnelRegular;