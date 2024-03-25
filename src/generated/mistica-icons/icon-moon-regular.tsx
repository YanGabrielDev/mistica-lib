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

const IconMoonRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.682 2.412a.59.59 0 0 1-.27.69 6.956 6.956 0 1 0 9.487 9.487.59.59 0 0 1 1.098.348C21.515 18.022 17.233 22 12.021 22 6.487 22 2 17.513 2 11.98c0-5.212 3.978-9.494 9.064-9.976a.59.59 0 0 1 .618.409M8.76 3.757a8.85 8.85 0 0 0-5.581 8.222 8.84 8.84 0 0 0 8.842 8.842 8.85 8.85 0 0 0 8.221-5.58A8.135 8.135 0 0 1 8.76 3.757"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.565 11.973c0 7.16 4.88 9.79 9.457 9.868.293 0 .607 0 .86-.003 1.459-.025 6.386-.456 8.493-5.008a.617.617 0 0 0-.866-.793c-1.361.774-2.83.92-3.594.936-.196.006-.434.006-.647.006-1.518-.026-6.485-.586-6.485-6.818 0-4.6 2.645-6.13 4.863-6.603a.616.616 0 0 0-.02-1.207 11 11 0 0 0-1.795-.188l-.88-.008c-4.537.059-9.386 2.667-9.386 9.818m1.238 0c0-7.647 5.896-8.518 7.983-8.583-1.686 1.062-3.238 3.05-3.235 6.768 0 5.846 3.977 7.989 7.711 8.048.238 0 .496 0 .692-.009a9.6 9.6 0 0 0 2.322-.339c-2.067 2.457-5.33 2.726-6.42 2.745-.252.009-.552.009-.82.009-1.933-.031-8.233-.751-8.233-8.639"
                />
            </svg>
        );
    }
};

export default IconMoonRegular;