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

const IconTimeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 22C6.484 22 2 17.516 2 12S6.484 2 12 2s10 4.484 10 10a10 10 0 0 1-1.54 5.328.35.35 0 0 1-.492.112.35.35 0 0 1-.112-.492A9.2 9.2 0 0 0 21.288 12c0-5.116-4.16-9.288-9.288-9.288-5.116 0-9.288 4.172-9.288 9.288s4.16 9.288 9.288 9.288a9.2 9.2 0 0 0 4.948-1.432.356.356 0 1 1 .38.604A10 10 0 0 1 12 22"
                />
                <path
                    fill={fillColor}
                    d="M12 12.504 6.744 7.256a.36.36 0 0 1 0-.504.36.36 0 0 1 .504 0l4.744 4.744L14.6 8.888a.36.36 0 0 1 .504 0 .36.36 0 0 1 0 .504zM18.784 19.496a.712.712 0 1 0 0-1.424.712.712 0 0 0 0 1.424"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.997 2.155c6.22 0 9.848 3.14 9.848 9.848 0 6.707-3.628 9.842-9.848 9.842s-9.842-3.135-9.842-9.842 3.623-9.848 9.842-9.848m0 18.87c5.99 0 9.027-3.035 9.027-9.022 0-5.99-3.037-9.027-9.027-9.027-5.987 0-9.021 3.037-9.021 9.027 0 5.987 3.034 9.021 9.021 9.021m3.323-6.013L12.412 12.1l-.006-3.93a.41.41 0 0 0-.818 0v4.1c0 .11.045.214.12.292l3.032 3.029c.157.154.41.154.569 0a.41.41 0 0 0 .011-.58"
                />
            </svg>
        );
    }
};

export default IconTimeLight;
