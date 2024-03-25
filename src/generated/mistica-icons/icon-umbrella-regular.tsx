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

const IconUmbrellaRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.496 6.012c1.205 1.23 1.989 2.863 2.328 4.846.075.417-.04.857-.314 1.205a1.57 1.57 0 0 1-1.196.557l-7.605-.02v7.003c0 .56.465 1.017 1.034 1.017.568 0 1.033-.457 1.033-1.017 0-.336.277-.61.62-.61.34 0 .618.274.618.61 0 1.235-1.02 2.241-2.271 2.241-1.236 0-2.247-.978-2.272-2.19q-.004-.021-.003-.042v-7.014l-7.762-.023a1.6 1.6 0 0 1-.815-.232 1.6 1.6 0 0 1-.361-.308c-.303-.37-.42-.813-.345-1.239.353-1.983 1.151-3.607 2.37-4.829 1.63-1.647 3.96-2.52 6.913-2.607v-.594c0-.336.277-.611.62-.611.34 0 .618.275.618.61v.595c2.905.128 5.185 1.014 6.79 2.652M3.544 11.306a.34.34 0 0 0 .168.045l1.795.006c.597-3.35 2.286-5.364 3.779-6.521-1.577.339-2.871 1-3.849 1.986-1.042 1.042-1.725 2.45-2.033 4.187a.3.3 0 0 0 .07.236c.028.03.053.05.066.059zm17.002-.016a.3.3 0 0 0 .06-.225c-.298-1.742-.97-3.156-1.998-4.207-.936-.955-2.165-1.608-3.658-1.97 1.414 1.141 2.947 3.127 3.549 6.502l1.812.006c.065 0 .16-.02.235-.107m-7.84-6.373v6.462l4.535.011c-.823-4.207-3.244-5.874-4.535-6.473m-1.24-.008c-1.298.633-3.906 2.389-4.704 6.453l4.703.014z"
            />
        </svg>
    );
};

export default IconUmbrellaRegular;