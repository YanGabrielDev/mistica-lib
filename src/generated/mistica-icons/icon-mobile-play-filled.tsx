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

const IconMobilePlayFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.895 3.105c.641.644.95 1.535.95 2.742v12.302c0 1.213-.317 2.115-.967 2.751-.642.636-1.544.941-2.762.941h-6.21c-1.219 0-2.118-.305-2.768-.933-.574-.571-.885-1.341-.95-2.364v-.546l-.055.004q-.028.004-.06.005c-3.742 0-5.918-1.874-5.918-5.872 0-4.005 2.177-5.88 5.919-5.88q.03.001.057.005l.05.004v-.417c0-1.19.307-2.076.957-2.726.65-.652 1.552-.966 2.768-.966h6.21c1.218 0 2.129.314 2.779.95m-8.101 9.03c0-3.185-1.502-4.672-4.717-4.672-3.208 0-4.7 1.487-4.7 4.672 0 3.177 1.492 4.664 4.7 4.664 3.215 0 4.717-1.487 4.717-4.664m-1.44-.526L6.648 8.917a.6.6 0 0 0-.608 0 .6.6 0 0 0-.305.52v5.385c0 .215.115.414.305.52a.6.6 0 0 0 .306.082q.16.002.305-.081l4.706-2.692a.6.6 0 0 0 .305-.524.61.61 0 0 0-.308-.518m-4.4 2.17v-3.296l2.879 1.647zm8.058 5.27c.325 0 .594-.098.779-.286q.273-.279.274-.76c0-.655-.395-1.047-1.053-1.047s-1.053.392-1.053 1.048c0 .316.092.574.274.759.185.188.454.285.78.285"
            />
        </svg>
    );
};

export default IconMobilePlayFilled;