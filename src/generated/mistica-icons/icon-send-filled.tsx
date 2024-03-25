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

const IconSendFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.328 2.217a.68.68 0 0 1 .998 0 .76.76 0 0 1 .194.62c-.005.025-4.945 18.893-4.945 18.893a.36.36 0 0 1-.311.27h-.027a.35.35 0 0 1-.321-.213l-3.866-8.79-.962 1.01a.67.67 0 0 1-.496.218.67.67 0 0 1-.497-.218.767.767 0 0 1 0-1.048zM2.685 7.892l7.378 3.574 8.264-8.675L2.743 7.195a.37.37 0 0 0-.262.327.37.37 0 0 0 .204.37"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.383 11.215 3.34 2.245a.82.82 0 0 0-1.168.908l1.866 8.782-1.835 8.924a.823.823 0 0 0 1.177.9l18.008-9.074a.82.82 0 0 0-.006-1.47"
                />
            </svg>
        );
    }
};

export default IconSendFilled;
