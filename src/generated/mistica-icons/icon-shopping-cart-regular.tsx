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

const IconShoppingCartRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.598 3.362 8.21 17.09l10.332-2.384 2.524-8.412H6.778L5.648 2H2.976v1.362zM9.19 15.466l-2.055-7.81h12.098l-1.77 5.9zM9.775 18.8a1.6 1.6 0 1 1-.003 3.2 1.6 1.6 0 0 1 .003-3.2M16.215 18.8a1.6 1.6 0 1 1-.002 3.2 1.6 1.6 0 0 1 .002-3.2"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.972 17.294q.049-.005.104-.004a2.305 2.305 0 0 1 2.312 2.296 2.3 2.3 0 0 1-2.316 2.292c-1.276 0-2.316-1.024-2.316-2.292 0-.312.064-.612.18-.884H9.932c.116.272.18.572.18.884 0 1.264-1.04 2.292-2.316 2.292S5.48 20.854 5.48 19.586c0-1.036.688-1.908 1.64-2.196L3.708 4.062a.705.705 0 0 0-.68-.532h-.324a.705.705 0 0 1 0-1.408h.324c.968 0 1.812.656 2.052 1.596l.132.524H22l-2.652 10.576H7.916l.632 2.472h9.372l.026.002zm.276-3.88 1.94-7.764H5.572l1.984 7.764zm-9.804 6.784a.84.84 0 0 0 .26-.62c0-.484-.408-.88-.908-.88a.9.9 0 0 0-.644.268.87.87 0 0 0-.26.62c0 .484.408.88.908.88a.9.9 0 0 0 .644-.268m9.632.268a.9.9 0 0 0 .644-.268.83.83 0 0 0 .26-.62c0-.484-.408-.88-.908-.88a.9.9 0 0 0-.644.268.87.87 0 0 0-.26.62c0 .484.408.88.908.88"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.63 17.197h6.009c.829 0 1.532-.283 2.092-.843.53-.53.916-1.283 1.182-2.308.2-.77 1.44-4.983 1.902-6.535a.56.56 0 0 0-.538-.72H7.252a365 365 0 0 0-.44-2.535c-.218-1.219-1.37-2.101-2.736-2.101H2.723a.56.56 0 0 0-.56.56c0 .308.252.56.56.56h1.353c.812 0 1.512.505 1.633 1.177.182 1.017 1.501 8.689 1.636 9.54.162 1.029.546 1.832 1.137 2.39.569.532 1.31.815 2.148.815m-2.179-3.378c-.078-.507-.577-3.412-1.005-5.908h13.08c-.52 1.76-1.512 5.132-1.7 5.855-.535 2.073-1.504 2.31-2.187 2.31H10.63c-.557 0-1.02-.17-1.38-.51q-.615-.581-.799-1.747m2.18 8.022c-.502 0-.903-.143-1.194-.423q-.459-.442-.46-1.23.001-.786.46-1.229c.291-.28.695-.423 1.193-.423s.902.143 1.194.423q.458.442.459 1.23 0 .786-.46 1.23c-.29.28-.691.422-1.193.422m-.533-1.652c0 .409.123.532.532.532s.533-.123.533-.532-.127-.533-.533-.533c-.409 0-.532.124-.532.533m5.995 1.652q-.755-.002-1.194-.423-.459-.442-.46-1.23.001-.786.46-1.229c.292-.28.695-.423 1.194-.423.498 0 .901.143 1.193.423.302.294.46.706.46 1.23q-.001.786-.46 1.23-.44.421-1.193.422m-.533-1.652c0 .409.124.532.533.532s.532-.123.532-.532-.126-.533-.532-.533c-.41 0-.533.124-.533.533"
                />
            </svg>
        );
    }
};

export default IconShoppingCartRegular;