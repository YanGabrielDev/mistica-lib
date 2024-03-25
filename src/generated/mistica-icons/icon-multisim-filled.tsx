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

const IconMultisimFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m19.443 7.062-4.37-4.49A1.87 1.87 0 0 0 13.725 2H8.343c-.865 0-1.601.597-1.83 1.418h5.838a2.9 2.9 0 0 1 2.083.885l3.323 3.416c.557.573.86 1.333.86 2.146V20.21H20V8.444c0-.513-.203-1.017-.557-1.382"
            />
            <path
                fill={fillColor}
                d="m13.702 5.064 3.322 3.416c.355.364.553.86.553 1.381V22H4V6.45c0-1.078.853-1.959 1.905-1.959h6.45c.51 0 .989.204 1.347.573M6.61 19.333h8.346v-7.08c0-.641-.502-1.158-1.125-1.158H7.735c-.623 0-1.125.517-1.125 1.157z"
            />
            <path
                fill={fillColor}
                d="M13.83 12.164H7.736a.083.083 0 0 0-.082.084v6.008h6.26v-6.008a.086.086 0 0 0-.082-.084"
            />
        </svg>
    );
};

export default IconMultisimFilled;