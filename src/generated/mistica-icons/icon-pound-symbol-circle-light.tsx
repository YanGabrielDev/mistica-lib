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

const IconPoundSymbolCircleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2C6.499 2 2 6.5 2 12s4.5 10 9.998 10a9.9 9.9 0 0 0 5.319-1.536c.18-.108.216-.324.108-.5-.108-.18-.324-.216-.5-.108a9.25 9.25 0 0 1-4.963 1.428c-5.071 0-9.246-4.176-9.246-9.284s4.175-9.284 9.282-9.284S21.284 6.892 21.284 12c0 1.752-.5 3.464-1.428 4.964-.108.18-.072.396.108.5s.396.072.5-.108C21.464 15.748 22 13.892 22 12c-.004-5.5-4.503-10-10.002-10"
                />
                <path
                    fill={fillColor}
                    d="M19.497 18.784a.716.716 0 1 1-1.432 0 .716.716 0 0 1 1.431 0M9.25 15.212c0-.212.14-.356.356-.356a.75.75 0 0 0 .748-.82v-1.892h-.716c-.211 0-.355-.14-.355-.356 0-.212.14-.356.355-.356h.72V9.648c0-1.14.82-1.964 1.964-1.964.572 0 .968.14 1.324.464.144.144.18.356.036.5s-.356.18-.5.036c-.216-.18-.428-.252-.824-.252-.752 0-1.252.5-1.252 1.252v1.784h1.784c.212 0 .356.14.356.356 0 .212-.14.356-.356.356h-1.784v1.892c0 .284-.072.568-.216.784h3.428c.212 0 .356.14.356.356 0 .212-.14.356-.356.356H9.606c-.211 0-.355-.14-.355-.356"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.995 2.155c6.443 0 9.846 3.406 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84 0-6.44 3.403-9.846 9.84-9.846m0 18.866c5.99 0 9.023-3.034 9.023-9.02 0-5.989-3.037-9.022-9.023-9.022S2.975 6.012 2.975 12c0 5.983 3.037 9.02 9.02 9.02m3.12-3.88a.206.206 0 0 0-.204-.204v-.003h-5.31c1.058-1.003 1.428-1.793 1.428-2.95 0-.574-.087-1.17-.266-1.778h2.42a.206.206 0 0 0 .204-.205v-.409a.206.206 0 0 0-.204-.205h-2.678c-.199-.633-.386-1.366-.386-2.103 0-1.602.87-2.381 2.658-2.381.546 0 1.238.073 1.947.207a.22.22 0 0 0 .17-.045.2.2 0 0 0 .073-.156v-.376a.21.21 0 0 0-.143-.196c-.72-.224-1.641-.302-2.21-.302-2.199 0-3.409 1.16-3.409 3.263 0 .812.188 1.585.379 2.157l-.936.064a.203.203 0 0 0-.19.205V12c0 .112.092.205.204.205H9.83c.207.658.303 1.207.303 1.764 0 .793-.188 1.468-1.126 2.373-.457.442-.647.627-.647.994a.74.74 0 0 0 .07.336c.036.07.106.112.184.112h6.297a.206.206 0 0 0 .205-.204z"
                />
            </svg>
        );
    }
};

export default IconPoundSymbolCircleLight;