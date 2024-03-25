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

const IconVoicemailRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.307 8.783c-1.508 0-2.73 1.28-2.73 2.86S9.8 14.5 11.307 14.5h5.963c1.508 0 2.73-1.28 2.73-2.859 0-1.328-.874-2.443-2.046-2.76v-3.31c0-1.968-1.531-3.572-3.41-3.572H8.41C6.531 2 5 3.604 5 5.571V18.43C5 20.396 6.53 22 8.41 22h6.134c1.879 0 3.41-1.604 3.41-3.571v-2.504c0-.396-.302-.712-.68-.712s-.68.316-.68.712v1.424H6.364V6.639h10.22v2.244c-1.176.316-2.046 1.431-2.046 2.76 0 .519.137 1.003.37 1.423h-1.252c.233-.42.37-.908.37-1.424 0-1.58-1.222-2.86-2.718-2.86m-1.37 2.86c0-.785.61-1.425 1.359-1.425.748 0 1.359.64 1.359 1.424s-.611 1.424-1.36 1.424c-.748 0-1.359-.64-1.359-1.424m4.607-8.22c1.012 0 1.856.777 2.016 1.788H6.39c.164-1.007 1.004-1.787 2.02-1.787zm0 17.15H8.41c-1.011 0-1.855-.776-2.016-1.788h10.163c-.164 1.008-1 1.787-2.012 1.787m2.719-10.355c.748 0 1.359.64 1.359 1.424s-.611 1.424-1.36 1.424c-.748 0-1.359-.64-1.359-1.424s.611-1.424 1.36-1.424"
            />
        </svg>
    );
};

export default IconVoicemailRegular;