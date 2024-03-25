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

const IconAntennaFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.41 2.337c.95.961 1.431 2.35 1.431 4.135 0 1.781-.482 3.17-1.431 4.129a.593.593 0 0 1-.871-.017.665.665 0 0 1 .017-.913c.697-.706 1.053-1.782 1.053-3.2 0-1.42-.356-2.498-1.053-3.207a.665.665 0 0 1-.014-.913.593.593 0 0 1 .868-.014M4.444 9.671a.67.67 0 0 1 .016.915.6.6 0 0 1-.874.014c-.95-.958-1.431-2.347-1.431-4.128S2.637 3.3 3.586 2.337a.597.597 0 0 1 .874.017.665.665 0 0 1-.014.913c-.697.709-1.053 1.787-1.053 3.205-.003 1.417.353 2.493 1.05 3.199m14.96 8.756a.633.633 0 0 0-.619-.647v.002h-1.372L13.878 7.85q.317-.545.319-1.376c0-.759-.199-1.344-.594-1.742-.378-.38-.924-.574-1.622-.574-.697 0-1.24.193-1.619.574-.389.395-.588.98-.588 1.74q.001.832.317 1.375L6.556 17.78H5.228c-.342 0-.62.291-.62.647v2.77c0 .359.278.647.62.647h13.557c.342 0 .62-.291.62-.647zM11.22 5.657c.17-.174.51-.21.761-.213.252 0 .591.036.765.212.176.18.213.541.213.813s-.037.633-.213.807c-.176.176-.513.212-.767.212-.208 0-.58-.028-.762-.21-.174-.176-.21-.537-.21-.81 0-.27.036-.632.213-.812m.103 9.44.664-1.88.675 1.88zm-.457 1.293h2.255l.499 1.39h-.868l-.177.002-.176-.002H11.6l-.187.002-.196-.002h-.84zm7.303 4.16H5.847v-1.479h5.37c.067 0 .19-.003.19-.003s.126.003.193.003h.799c.061 0 .173-.003.173-.003s.118.003.18.003h5.417zM6.388 9.211c.12.123.274.182.428.182a.63.63 0 0 0 .448-.196.67.67 0 0 0-.017-.913c-.386-.39-.582-1-.582-1.815s.196-1.426.582-1.818a.665.665 0 0 0 .014-.913.6.6 0 0 0-.873-.017c-.64.644-.961 1.569-.961 2.745 0 1.18.322 2.104.96 2.745m10.333-.927a.667.667 0 0 0-.017.913.62.62 0 0 0 .443.199.6.6 0 0 0 .431-.18c.636-.644.96-1.565.96-2.744 0-1.177-.321-2.101-.96-2.745a.597.597 0 0 0-.874.014.67.67 0 0 0 .017.915c.386.39.582 1.003.582 1.816 0 .812-.196 1.423-.582 1.812"
            />
        </svg>
    );
};

export default IconAntennaFilled;
