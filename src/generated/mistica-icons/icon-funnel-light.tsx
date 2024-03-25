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

const IconFunnelLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.594 15.408v4.919c0 .92-.712 1.673-1.591 1.673-.88 0-1.596-.749-1.596-1.668v-4.9L3.544 2.554a.4.4 0 0 1 .004-.37A.35.35 0 0 1 3.852 2h16.292c.127 0 .245.071.308.185a.38.38 0 0 1 0 .37l-3.989 7.284a.35.35 0 0 1-.485.137.387.387 0 0 1-.131-.507l3.685-6.73H4.455l6.618 12.408a.37.37 0 0 1 .046.18v5.005c0 .507.394.924.884.924.485 0 .883-.412.883-.924v-5a.35.35 0 0 1 .032-.152l.798-1.853a.346.346 0 0 1 .467-.185c.177.08.258.303.177.488zm1.59-3.043c.39 0 .708-.332.708-.74 0-.407-.317-.739-.707-.739s-.707.332-.707.74c0 .407.317.739.707.739"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 22c-.93 0-1.689-.749-1.689-1.668v-4.9L3.046 2.554A.376.376 0 0 1 3.372 2h17.256a.376.376 0 0 1 .326.555L13.689 15.43v4.9c0 .92-.758 1.669-1.689 1.669m-.984-6.853a.35.35 0 0 1 .048.18v5.005c0 .507.418.924.936.924a.93.93 0 0 0 .936-.924v-5.005a.35.35 0 0 1 .048-.18l7.005-12.408H4.011z"
                />
            </svg>
        );
    }
};

export default IconFunnelLight;
