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

const IconStormFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.082 2.155c.82 0 4.865.19 6.109 3.863 2.325.227 4.655 1.714 4.652 5.31 0 3.956-2.834 5.362-5.269 5.362l-.974.008-6.776 5.062a.36.36 0 0 1-.233.081.42.42 0 0 1-.252-.09.42.42 0 0 1-.112-.498l1.826-4.204-3.546-.28c-2.386-.143-4.347-1.194-4.347-4.485 0-2.583 1.378-3.647 2.45-4.09.194-5.748 5.407-6.039 6.472-6.039m-1.5 18.017 6.326-4.897c.095-.106.137-.266.095-.409a.42.42 0 0 0-.3-.29s-3.028-.603-3.061-.707c-.042-.131 1.778-4.711 1.778-4.711.065-.182 0-.4-.168-.507a.4.4 0 0 0-.507.075l-5.938 6.592a.41.41 0 0 0-.09.406c.04.14.149.246.289.282 0 0 2.994.664 3.062.706.02.016.005.045-.012.078a.3.3 0 0 0-.022.049z"
            />
        </svg>
    );
};

export default IconStormFilled;