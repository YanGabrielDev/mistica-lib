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

const IconChemistryRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.691 21.203c.219-.39.202-.86-.067-1.283l-6.62-8.74V3.4h.783a.622.622 0 0 0 0-1.244H8.212a.63.63 0 0 0-.633.62.63.63 0 0 0 .63.62h.768v6.973a.4.4 0 0 0 0 .131v.678l-6.653 8.908a1.14 1.14 0 0 0-.017 1.168c.21.356.597.588 1.02.588h17.26c.465 0 .886-.25 1.104-.638m-11.574-9.451a.6.6 0 0 0 .126-.365v-.893q0-.012-.004-.025t-.004-.025q.001-.016.005-.034l.003-.017V3.396h3.496v7.991c0 .132.045.261.126.365l.32.428c-1.306.25-3.065.258-4.413.025zM3.515 20.6l5.44-7.294c.84.205 1.86.322 2.93.322 1.156 0 2.249-.131 3.126-.372l5.577 7.344zm11.944-2.627c0 1.115-.925 1.202-1.154 1.202h-.112c-.244-.003-1.157-.093-1.157-1.213s.902-1.202 1.145-1.205h.023a1 1 0 0 1 .092.003c.238.008 1.163.1 1.163 1.213m-1.14-2.04-.112-.002-.031.003c-.989.008-1.983.641-1.983 2.033 0 1.39.997 2.026 1.986 2.04h.14c.986-.017 1.983-.656 1.983-2.034 0-1.375-.997-2.014-1.983-2.04m-4.367.69H9.89c-.134-.003-.644-.05-.644-.675 0-.622.504-.67.638-.67h.065c.132.003.647.053.647.672 0 .622-.515.67-.644.673m1.487-.67c0-1.008-.762-1.484-1.468-1.501h-.095c-.709.005-1.47.476-1.47 1.499 0 1.016.761 1.49 1.473 1.5h.087c.708-.013 1.473-.486 1.473-1.498"
            />
        </svg>
    );
};

export default IconChemistryRegular;
