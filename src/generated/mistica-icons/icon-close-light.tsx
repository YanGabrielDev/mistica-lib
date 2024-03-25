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

const IconCloseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.653 17.141a.364.364 0 0 1-.514.514L12 12.511 5.62 18.893a.363.363 0 1 1-.514-.514l6.379-6.382L5.112 5.62a.364.364 0 0 1 .513-.514l6.373 6.377 6.374-6.377a.363.363 0 1 1 .513.514l-6.373 6.377zM18.455 19a.545.545 0 1 0 0-1.09.545.545 0 0 0 0 1.09"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12.569 12 5.31-5.319a.384.384 0 0 0 .017-.543l-.017-.017a.384.384 0 0 0-.543-.017q-.01.008-.017.017L12 11.431l-5.319-5.31a.384.384 0 0 0-.543-.017l-.017.017a.384.384 0 0 0-.017.543q.008.01.017.017L11.431 12l-5.31 5.319a.383.383 0 0 0-.017.543l.017.017a.38.38 0 0 0 .28.12.38.38 0 0 0 .28-.12L12 12.569l5.319 5.31a.383.383 0 0 0 .543.017l.017-.017a.384.384 0 0 0 .017-.543l-.017-.017z"
                />
            </svg>
        );
    }
};

export default IconCloseLight;
