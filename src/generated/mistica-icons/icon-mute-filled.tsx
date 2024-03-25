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

const IconMuteFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m15.696 14.987 5.666 5.89a.566.566 0 0 1 0 .78.516.516 0 0 1-.75 0L2.627 2.942a.566.566 0 0 1 0-.78.514.514 0 0 1 .75 0L7.754 6.72l7.413-4.486a.34.34 0 0 1 .352 0 .37.37 0 0 1 .176.319zm0 3.02L5.917 7.832l-.365.226H3a.36.36 0 0 0-.352.366v7.338a.36.36 0 0 0 .352.366h2.55l9.617 5.82a.34.34 0 0 0 .352.005.37.37 0 0 0 .176-.32z"
            />
        </svg>
    );
};

export default IconMuteFilled;
