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

const IconEuroSymbolCircleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2C6.499 2 2 6.5 2 12s4.5 10 9.998 10a9.9 9.9 0 0 0 5.319-1.536c.18-.108.216-.324.108-.5-.108-.18-.324-.216-.5-.108a9.25 9.25 0 0 1-4.963 1.428c-5.071 0-9.246-4.176-9.246-9.284s4.175-9.284 9.282-9.284S21.284 6.892 21.284 12c0 1.752-.5 3.464-1.428 4.964-.108.18-.072.396.108.5.18.108.396.072.5-.108C21.464 15.748 22 13.892 22 12c-.004-5.5-4.503-10-10.002-10"
                />
                <path
                    fill={fillColor}
                    d="M19.497 18.784a.716.716 0 1 1-1.432 0 .716.716 0 0 1 1.431 0M7.535 13.428c-.212 0-.356-.14-.356-.356s.14-.356.388-.4h.784a4.4 4.4 0 0 1-.072-.716c0-.252.036-.5.072-.716h-.784c-.212 0-.356-.14-.356-.356 0-.212.14-.356.356-.356h.964c.608-1.676 2.18-2.856 4.035-2.856.752 0 1.5.176 2.143.572.18.104.252.32.144.5-.104.18-.32.252-.5.144a3.54 3.54 0 0 0-1.783-.5c-1.46 0-2.748.892-3.283 2.144h3.283c.212 0 .356.14.356.356 0 .212-.14.356-.356.356h-3.5l-.012.085c-.031.217-.06.411-.06.631 0 .252.037.5.073.716h3.499c.212 0 .356.14.356.356 0 .212-.14.356-.356.356H9.287a3.55 3.55 0 0 0 3.25 2.144c.64 0 1.249-.14 1.784-.464.177-.072.393-.036.5.144.072.176.036.392-.143.5a4.5 4.5 0 0 1-2.144.572c-1.856 0-3.427-1.212-4.035-2.856z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.992 2.151c6.442 0 9.845 3.406 9.845 9.846 0 6.437-3.403 9.84-9.845 9.84-6.437 0-9.84-3.403-9.84-9.84 0-6.44 3.403-9.846 9.84-9.846m0 18.866c5.988 0 9.022-3.034 9.022-9.02 0-5.989-3.034-9.022-9.022-9.022-5.986 0-9.02 3.036-9.02 9.022s3.036 9.02 9.02 9.02m4.523-4.216a.41.41 0 0 0-.535-.224c-.742.35-1.664.527-2.748.524-2.689 0-4.31-1.101-4.87-3.244h3.882a.412.412 0 0 0 0-.823h-4.05c-.04-.33-.07-.676-.07-1.045 0-.127.01-.245.021-.362q.01-.104.017-.21h4.087a.412.412 0 0 0 0-.823H8.255c.434-2.46 2.095-3.717 4.98-3.717 1.068 0 1.984.173 2.72.515a.407.407 0 0 0 .513-.188.41.41 0 0 0-.168-.557c-.846-.392-1.877-.591-3.065-.591-3.327 0-5.355 1.6-5.823 4.54H6.193a.412.412 0 0 0 0 .824h1.132q-.018.278-.02.572.004.524.062 1.044H6.193a.412.412 0 0 0 0 .824h1.303c.588 2.664 2.54 4.064 5.74 4.064 1.204 0 2.246-.204 3.095-.605a.41.41 0 0 0 .184-.518"
                />
            </svg>
        );
    }
};

export default IconEuroSymbolCircleLight;