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

const IconHeadphonesLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.83 2.718c-4.774 0-8.658 4.004-8.658 8.928v4.781a2.99 2.99 0 0 1 2.425-1.211H6.98v6.78H5.597c-1.778 0-3.117-1.459-3.117-3.393l.002-.073v-.086l-.002-.019v-6.784C2.48 6.325 6.674 2 11.83 2c4.577 0 8.55 3.51 9.24 8.17a.35.35 0 0 1-.287.406.344.344 0 0 1-.395-.297c-.643-4.311-4.318-7.561-8.557-7.561M5.598 15.929c-1.383 0-2.425 1.152-2.425 2.679s1.042 2.679 2.425 2.679h.692v-5.358zM21.528 12.359c0 .394-.31.713-.692.713a.703.703 0 0 1-.692-.713c0-.394.31-.713.692-.713s.692.319.692.713M20.49 14.503c0-.197.155-.357.346-.357s.346.16.346.357v4.105c0 1.934-1.34 3.392-3.117 3.392H16.68v-6.784h1.384c1.002 0 1.862.462 2.425 1.211zm-3.117 6.784h.692c1.383 0 2.425-1.152 2.425-2.679s-1.042-2.679-2.425-2.679h-.692z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.835 11.28c-.056-7.532-4.34-9.129-7.939-9.129s-7.94 1.605-7.94 9.255C2.79 12.06 2.15 13.353 2.15 15.22c0 2.666 1.28 4.179 3.602 4.305h.376c1.566-.059 2.174-1.272 2.174-4.314s-.608-4.263-2.157-4.314h-.387c-.33.017-.658.07-.975.16.098-5.35 2.485-8.067 7.112-8.067s6.997 2.7 7.112 8.017a6 6 0 0 0-.745-.101h-.395c-1.565.059-2.182 1.272-2.182 4.322 0 2.148.311 3.344 1.042 3.93a9.1 9.1 0 0 1-3.798 1.196 1.08 1.08 0 0 0-1.14-.995 1.1 1.1 0 0 0-.908.286 1.15 1.15 0 0 0-.355.902c-.031.334.07.667.28.927.238.244.566.376.902.359a1.2 1.2 0 0 0 .927-.3q.143-.151.221-.35a9.5 9.5 0 0 0 4.815-1.672q.085.005.171 0h.4c2.323-.11 3.595-1.673 3.595-4.306 0-1.966-.706-3.313-2.003-3.924m-14.025.46h.294c.582 0 1.378.05 1.378 3.487 0 3.421-.814 3.453-1.451 3.479h-.239c-1.893-.11-2.82-1.247-2.82-3.487s.927-3.387 2.838-3.48m11.803 6.95c-.523-.093-1.084-.586-1.084-3.446 0-3.424.816-3.46 1.454-3.487h.244c1.893.092 2.812 1.229 2.812 3.478.003 2.25-.941 3.362-2.835 3.454z"
                />
            </svg>
        );
    }
};

export default IconHeadphonesLight;