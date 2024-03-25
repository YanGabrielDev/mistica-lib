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

const IconOutletRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.105 9.746a1.026 1.026 0 1 0 0 2.052 1.026 1.026 0 0 0 0-2.052M6.87 10.772a1.026 1.026 0 1 1 2.052 0 1.026 1.026 0 0 1-2.053 0M12 11.798a1.026 1.026 0 1 0 0 2.052 1.026 1.026 0 0 0 0-2.052"
            />
            <path
                fill={fillColor}
                d="M7.285 18.596h9.43a3.72 3.72 0 0 0 2.858-1.338l2.565-3.079a3.72 3.72 0 0 0 0-4.762l-2.565-3.079A3.72 3.72 0 0 0 16.715 5h-9.43a3.72 3.72 0 0 0-2.857 1.338L1.862 9.417a3.72 3.72 0 0 0 0 4.762l2.566 3.079a3.72 3.72 0 0 0 2.857 1.338m9.43-1.282h-9.43c-.723 0-1.41-.322-1.872-.877l-2.565-3.079a2.44 2.44 0 0 1 0-3.12L5.413 7.16a2.44 2.44 0 0 1 1.872-.877h9.43c.723 0 1.41.32 1.872.877l2.566 3.078a2.44 2.44 0 0 1 0 3.12l-2.566 3.079a2.44 2.44 0 0 1-1.872.877"
            />
        </svg>
    );
};

export default IconOutletRegular;
