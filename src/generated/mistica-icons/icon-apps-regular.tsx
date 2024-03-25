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

const IconAppsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.308 11.232h4.616a2.31 2.31 0 0 0 2.308-2.308V4.308A2.31 2.31 0 0 0 8.924 2H4.308A2.31 2.31 0 0 0 2 4.308v4.616a2.31 2.31 0 0 0 2.308 2.308M3.54 4.308c0-.42.348-.768.768-.768h4.616c.42 0 .768.348.768.768v4.616c0 .42-.348.768-.768.768H4.308a.773.773 0 0 1-.768-.768zm16.152 6.924h-4.616a2.31 2.31 0 0 1-2.308-2.308V4.308A2.31 2.31 0 0 1 15.076 2h4.616A2.31 2.31 0 0 1 22 4.308v4.616a2.31 2.31 0 0 1-2.308 2.308m-5.384-6.924v4.616c0 .42.348.768.768.768h4.616c.42 0 .768-.348.768-.768V4.308a.773.773 0 0 0-.768-.768h-4.616a.773.773 0 0 0-.768.768M8.924 22H4.308A2.31 2.31 0 0 1 2 19.692v-4.616a2.31 2.31 0 0 1 2.308-2.308h4.616a2.31 2.31 0 0 1 2.308 2.308v4.616A2.31 2.31 0 0 1 8.924 22M3.54 15.076v4.616c0 .42.348.768.768.768h4.616c.42 0 .768-.348.768-.768v-4.616a.773.773 0 0 0-.768-.768H4.308a.773.773 0 0 0-.768.768M19.692 22h-4.616a2.31 2.31 0 0 1-2.308-2.308v-4.616a2.31 2.31 0 0 1 2.308-2.308h4.616A2.31 2.31 0 0 1 22 15.076v4.616A2.31 2.31 0 0 1 19.692 22m-5.384-6.924v4.616c0 .42.348.768.768.768h4.616c.42 0 .768-.348.768-.768v-4.616a.773.773 0 0 0-.768-.768h-4.616a.773.773 0 0 0-.768.768"
            />
        </svg>
    );
};

export default IconAppsRegular;
