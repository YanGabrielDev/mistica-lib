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

const IconOfficeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.8 21.994a.456.456 0 0 0 .446-.464c0-.256-.2-.465-.445-.465h-8.919V14.09H5.527v6.977H4.19V2.928h15.164v13.023c0 .256.2.465.446.465a.456.456 0 0 0 .445-.465V2.464c0-.256-.2-.464-.445-.464H3.745a.456.456 0 0 0-.445.464V22h3.123v-6.976h3.569v6.97zm-.89-3.256c0-.512.4-.928.89-.928.497 0 .891.416.891.928s-.4.929-.89.929c-.491 0-.891-.417-.891-.929m-6.246-4.649h5.355v3.72h-5.355zm4.459 2.792v-1.857h-3.569v1.857zM5.527 8.976v-3.72h5.355v3.72zm4.459-.928V6.19H6.417v1.857zm8.033.928h-5.355v-3.72h5.355zM13.56 6.185v1.857h3.569V6.185z"
            />
        </svg>
    );
};

export default IconOfficeLight;
