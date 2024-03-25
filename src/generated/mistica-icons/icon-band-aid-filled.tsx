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

const IconBandAidFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.122 11.975c2.372 2.532 2.291 5.345-.258 7.89-1.314 1.317-2.697 1.976-4.081 1.976-1.378 0-2.76-.656-4.07-1.97l-.149-.142c-.126-.12-.249-.241-.355-.365l-.656-.655q-.008-.009-.018-.013l-.018-.012-5.364-5.362q-.006-.006-.01-.014l-.01-.014-.552-.551a5 5 0 0 1-.327-.322l-.138-.143c-1.274-1.275-1.935-2.62-1.96-3.995-.026-1.428.633-2.829 1.963-4.157 2.585-2.588 5.445-2.63 8.045-.112l1.134 1.135.01.005.01.006 5.364 5.361.004.006.007.011 1.241 1.238.058.06q.07.066.13.14M5.25 11.15l.165.17.036.038c.072.075.142.148.219.215l.053.053 5.897-5.894-.578-.577C10.088 4.23 9.147 3.768 8.2 3.768c-.977 0-1.955.496-2.95 1.49-1.01 1.008-1.512 2.017-1.495 2.994.017.947.52 1.922 1.496 2.897m13.678 1.893a1 1 0 0 0-.101-.1l-.093-.09-.627-.625-5.894 5.89.166.163c.094.109.17.181.242.25l.046.044.177.171c1.98 1.975 3.907 1.975 5.888-.008 1.921-1.922 1.985-3.784.196-5.695m-7.412-.689a.61.61 0 1 0 .863-.863.61.61 0 0 0-.863.863m-.54 1.922a.61.61 0 1 0 .863.863.61.61 0 0 0-.864-.863m3.391-3.392a.61.61 0 1 0 .864.862.61.61 0 0 0-.864-.862m-5.58 1.185a.61.61 0 1 0 .864.862.61.61 0 0 0-.863-.862m3.393-2.533a.61.61 0 0 0 .862-.862.61.61 0 0 0-.863.863"
            />
        </svg>
    );
};

export default IconBandAidFilled;