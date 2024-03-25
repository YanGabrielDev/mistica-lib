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

const IconHotelLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.838 12.022c0-9.053-7.505-9.815-9.432-9.86a22 22 0 0 0-.756-.01h-.177c-1.974.016-9.322.697-9.322 9.812 0 9.128 7.415 9.843 9.392 9.873q.152.004.309.003c.207 0 .414-.003.593-.005 1.88-.037 9.392-.74 9.392-9.813m-.821 0c0 8.196-6.574 8.953-8.588 8.99l-.578.008q-.146 0-.294-.003c-.86-.014-3.07-.174-5.014-1.398-2.37-1.496-3.571-4.07-3.571-7.655 0-3.583 1.188-6.149 3.535-7.625 1.927-1.21 4.118-1.359 4.972-1.367h.17q.369 0 .738.008c.86.023 3.067.202 5.022 1.429 2.392 1.501 3.608 4.064 3.608 7.613m-4.709 5.303-2.434.003v-4.49h-3.76v4.487H7.682V6.664h2.434v4.347h3.759V6.664h2.434zm.82-10.658a.82.82 0 0 0-.82-.821s-2.434 0-2.431-.003a.82.82 0 0 0-.821.82v3.528h-2.118V6.664a.82.82 0 0 0-.82-.82H7.683a.82.82 0 0 0-.82.82v10.664c0 .454.367.82.82.82h2.432a.82.82 0 0 0 .82-.82v-3.67h2.118v3.67c0 .454.367.82.82.82h2.435a.82.82 0 0 0 .82-.82z"
            />
        </svg>
    );
};

export default IconHotelLight;
