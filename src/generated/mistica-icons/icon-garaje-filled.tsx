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

const IconGarajeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.743 12.197c.207-.51.084-1.078-.325-1.479l-8.274-8.106c-.62-.608-1.673-.608-2.292 0l-8.274 8.106c-.41.4-.532.97-.322 1.482.232.566.81.933 1.47.933h.625v7.274c0 .79.703 1.434 1.569 1.434h.857v-9.033c0-.342.277-.617.616-.617h9.18c.34 0 .615.278.615.617v9.03h.77c.866 0 1.57-.641 1.57-1.434V13.13h.744c.662 0 1.239-.367 1.471-.933M8.009 15.452v-2.053h7.947v2.053zm0 1.204v2.054h7.947v-2.054zm0 3.135v2.05h7.95v-2.05z"
            />
        </svg>
    );
};

export default IconGarajeFilled;