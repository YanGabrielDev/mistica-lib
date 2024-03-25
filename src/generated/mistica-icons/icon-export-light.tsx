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

const IconExportLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.838 2.201a.8.8 0 0 0-.185.126L5.755 8.222a.583.583 0 0 0 .824.823l4.897-4.91v12.08a.581.581 0 0 0 1.16 0V4.134l4.805 4.807a.583.583 0 0 0 .824-.824l-5.792-5.79a1 1 0 0 0-.196-.127.55.55 0 0 0-.44 0m10.007 14.86c0-.32-.26-.58-.58-.58a.577.577 0 0 0-.577.58v3.624H3.315V17.06a.581.581 0 0 0-1.16 0v4.205c0 .32.26.58.58.58h18.53c.32 0 .58-.26.58-.58z"
            />
        </svg>
    );
};

export default IconExportLight;
