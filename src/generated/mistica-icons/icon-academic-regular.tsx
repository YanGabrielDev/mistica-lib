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

const IconAcademicRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.086 10.138v6.302c.73.4.851 2.252.32 2.7-.245.247-.491.247-.819.247H20.1c-.328 0-.737 0-1.065-.328q-.247-.246-.246-.737c0-.574.328-1.554.983-1.882v-5.157l-1.227.572v3.683a1.67 1.67 0 0 1-1.308 1.636c-1.227.246-3.028.737-4.336 1.801-.328.246-.737.409-1.146.409s-.818-.163-1.145-.409C9.3 17.911 7.5 17.42 6.273 17.174a1.67 1.67 0 0 1-1.308-1.636v-3.6l-1.8-.817c-.572-.247-.9-.821-.9-1.392 0-.656.325-1.146.9-1.393l7.937-3.6a1.6 1.6 0 0 1 1.227 0l7.939 3.6c.787.337.806 1.254.817 1.79zm-17.594-.41c0 .076.053.106.137.152l.02.011 7.938 3.6h.247l7.039-3.191H11.59a.56.56 0 0 1-.574-.572.56.56 0 0 1 .574-.57h7.448l-7.283-3.275h-.162L3.654 9.482c-.106.062-.162.165-.162.247m13.585 6.219c.166-.081.328-.246.328-.409l-.045-3.255-5.19 2.356-.006.003c-.163.08-.325.16-.569.16-.165 0-.411-.082-.574-.163l-4.91-2.21v3.109c0 .246.165.409.328.409 1.473.244 3.437.737 4.91 1.964a.75.75 0 0 0 .818 0c1.555-1.146 3.518-1.718 4.91-1.964m3.028 2.129h.49c0-.247-.08-.49-.243-.572-.084.082-.165.325-.247.572"
            />
        </svg>
    );
};

export default IconAcademicRegular;
