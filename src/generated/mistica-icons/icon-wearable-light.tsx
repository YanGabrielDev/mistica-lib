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

const IconWearableLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.154 9.89q-.21.18-.568.18t-.568-.18Q7.8 9.702 7.8 9.368q0-.333.218-.521.21-.18.568-.18t.568.18q.219.188.218.521 0 .334-.218.522M8.586 12.702q.358 0 .568-.18.219-.188.218-.522 0-.333-.218-.521-.21-.18-.568-.18t-.568.18Q7.8 11.667 7.8 12t.218.521q.21.18.568.18M8.586 15.333q.358 0 .568-.18.219-.188.218-.521 0-.335-.218-.522-.21-.18-.568-.18t-.568.18q-.218.188-.218.522c0 .22.073.397.218.521q.21.18.568.18M11.533 15.333q.359 0 .569-.18.218-.188.217-.521.001-.335-.217-.522-.21-.18-.569-.18-.357 0-.568.18-.218.188-.218.522c0 .22.073.397.218.521q.21.18.568.18M12.102 12.521q-.21.18-.569.18-.357 0-.568-.18-.218-.188-.218-.521t.218-.521q.21-.18.568-.18.359 0 .569.18.218.188.217.521.001.333-.217.521M11.533 10.07q.359 0 .569-.18.218-.188.217-.522.001-.333-.217-.521-.21-.18-.569-.18-.357 0-.568.18-.218.188-.218.521 0 .334.218.522.21.18.568.18M15.049 15.153q-.21.18-.568.18-.359 0-.569-.18-.217-.188-.217-.521 0-.335.217-.522.21-.18.569-.18.357 0 .568.18.219.188.218.522c0 .22-.072.397-.218.521M14.48 12.702q.36 0 .569-.18.219-.188.218-.522 0-.333-.218-.521-.21-.18-.568-.18-.359 0-.569.18-.217.188-.217.521t.217.521q.21.18.569.18M15.049 9.89q-.21.18-.568.18-.359 0-.569-.18-.217-.188-.217-.522 0-.333.217-.521.21-.18.569-.18.357 0 .568.18.219.188.218.521 0 .334-.218.522"
            />
            <path
                fill={fillColor}
                d="M16.035 5.429c1.173.298 2.032 1.261 2.032 2.404q.344.105.561.36c.25.294.372.72.372 1.244 0 .523-.122.955-.372 1.245q-.216.254-.561.359v1.855q.344.105.561.36c.25.294.372.72.372 1.244 0 .523-.122.955-.372 1.245q-.216.254-.561.359v.063c0 1.174-.908 2.16-2.13 2.428l-.313 1.395C15.362 21.16 14.213 22 12.878 22h-2.876c-1.335 0-2.484-.841-2.746-2.01l-.323-1.446C5.81 18.218 5 17.277 5 16.167V7.833c0-1.143.859-2.106 2.032-2.404l.318-1.42C7.612 2.842 8.76 2 10.096 2h2.875c1.335 0 2.484.841 2.746 2.01zm-.783-.096-.267-1.193c-.192-.856-1.035-1.473-2.014-1.473h-2.876c-.978 0-1.821.617-2.013 1.473l-.267 1.193zm-7.53 13.333.267 1.194c.192.856 1.034 1.473 2.013 1.473h2.876c.979 0 1.821-.617 2.013-1.473l.268-1.193zM7.8 6c-1.134 0-2.053.82-2.053 1.833v8.334C5.747 17.179 6.666 18 7.8 18h7.467c1.134 0 2.053-.82 2.053-1.833V7.833C17.32 6.821 16.4 6 15.267 6z"
            />
        </svg>
    );
};

export default IconWearableLight;