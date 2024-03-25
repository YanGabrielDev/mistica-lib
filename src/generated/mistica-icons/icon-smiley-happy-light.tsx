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

const IconSmileyHappyLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.838 11.997c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846s3.621 9.84 9.84 9.84 9.845-3.134 9.845-9.84m-9.846 9.02c-5.986 0-9.02-3.034-9.02-9.02 0-5.989 3.034-9.025 9.02-9.025 5.988 0 9.025 3.036 9.025 9.025 0 5.986-3.037 9.02-9.025 9.02m5.31-7.115a.411.411 0 0 1 .611.549c-.09.098-2.207 2.406-5.854 2.448q-.076.004-.151.003c-.726 0-3.799-.14-5.832-2.415a.412.412 0 0 1 .613-.546c2.017 2.258 5.314 2.143 5.347 2.137 3.23-.035 5.18-2.085 5.264-2.173zM9.008 10.44c-.327 0-.599-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.667.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068q0 .49-.277.775c-.188.19-.46.292-.788.292m5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.787-.292q.278-.285.278-.775c0-.667-.398-1.068-1.065-1.068s-1.064.4-1.064 1.068q0 .492.277.775"
            />
        </svg>
    );
};

export default IconSmileyHappyLight;