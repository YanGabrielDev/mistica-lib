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

const IconVoicemailLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.857 9.181A2.5 2.5 0 0 1 20 11.644a2.48 2.48 0 0 1-2.495 2.495h-6.25a2.485 2.485 0 0 1-2.5-2.499 2.485 2.485 0 0 1 2.5-2.499c1.391 0 2.499 1.104 2.499 2.5 0 .71-.288 1.319-.752 1.782h2.751a2.45 2.45 0 0 1-.752-1.783 2.5 2.5 0 0 1 2.144-2.463V6.282H5.715v11.436h7.503c.212 0 .356.144.356.356 0 .211-.14.355-.356.355H5.716v.356a2.48 2.48 0 0 0 2.5 2.5h6.433c1.392 0 2.5-1.104 2.5-2.5v-3.57c0-.212.14-.356.356-.356.212 0 .356.14.356.356v3.57A3.2 3.2 0 0 1 14.645 22h-6.43A3.2 3.2 0 0 1 5 18.785V5.215A3.2 3.2 0 0 1 8.215 2h6.426a3.2 3.2 0 0 1 3.216 3.215zM5.716 5.215v.356h11.429v-.356a2.48 2.48 0 0 0-2.5-2.5h-6.43a2.48 2.48 0 0 0-2.5 2.5m5.534 8.212c1 0 1.784-.783 1.784-1.783s-.784-1.783-1.784-1.783-1.783.784-1.783 1.783c0 1 .784 1.783 1.783 1.783m6.247-3.566c-1 0-1.784.784-1.784 1.783 0 1 .788 1.783 1.788 1.783s1.78-.783 1.78-1.783-.785-1.783-1.784-1.783"
            />
            <path fill={fillColor} d="M16.073 18.07a.716.716 0 1 1-1.431 0 .716.716 0 0 1 1.431 0" />
        </svg>
    );
};

export default IconVoicemailLight;
