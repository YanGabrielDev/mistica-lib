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

const IconAngelFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 5.307c.82 0 4.91-.08 4.91-1.654S12.82 2 12 2s-4.91.08-4.91 1.653c0 1.574 4.09 1.654 4.91 1.654m0-2.203c1.931 0 3.197.314 3.667.55-.47.234-1.736.549-3.667.549s-3.197-.315-3.667-.55c.47-.235 1.736-.55 3.667-.55M20 22v-.366c0-2.767-2.466-5.101-5.817-5.825a5.15 5.15 0 0 0 2.908-4.636c0-2.832-2.285-5.138-5.091-5.138S6.909 8.34 6.909 11.173a5.14 5.14 0 0 0 2.908 4.636C6.462 16.533 4 18.867 4 21.634V22z"
            />
        </svg>
    );
};

export default IconAngelFilled;