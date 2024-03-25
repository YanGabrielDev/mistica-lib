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

const IconFileErrorFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.12 7.53c.165.163.26.39.26.622V20.46a1.4 1.4 0 0 1-1.384 1.381H6c-.737 0-1.384-.644-1.384-1.38V3.535c0-.723.659-1.381 1.384-1.381h7.303c.226 0 .44.087.602.247zm-1.43.28-.002-.002h.003zm-.002-.002-4.062-3.995v1.773c0 .659.213 1.216.617 1.611.406.4.983.61 1.666.61zm-9.532 5.84a.58.58 0 0 0 .42-.176l.779-.793.778.793a.59.59 0 0 0 .84 0 .61.61 0 0 0 0-.855l-.778-.793.779-.792a.61.61 0 0 0 0-.855.59.59 0 0 0-.84 0l-.78.793-.778-.793a.59.59 0 0 0-.84 0 .61.61 0 0 0 0 .855l.778.793-.778.792a.61.61 0 0 0 0 .854.59.59 0 0 0 .42.177m8.235-3.47a.59.59 0 0 0-.84 0l-.779.792-.779-.793a.59.59 0 0 0-.84 0 .61.61 0 0 0 0 .855l.779.793-.779.792a.61.61 0 0 0 0 .854.59.59 0 0 0 .84 0l.78-.792.778.793a.59.59 0 0 0 .84 0 .61.61 0 0 0 0-.855l-.779-.793.78-.792a.616.616 0 0 0 0-.855m-2.17 4.865c-.858.006-1.72.569-1.72 1.83 0 .178 0 .601-.55.604h-.087c-.562-.014-.562-.434-.562-.613 0-1.23-.866-1.801-1.726-1.821h-.129c-.857.006-1.72.569-1.72 1.815a.6.6 0 0 0 .594.605.6.6 0 0 0 .594-.605c0-.18 0-.602.549-.605h.087c.563.014.563.434.563.613 0 1.23.865 1.802 1.725 1.821h.13c.856-.005 1.719-.568 1.719-1.829 0-.18 0-.602.546-.605h.087c.563.014.563.434.563.613a.6.6 0 0 0 .594.605.6.6 0 0 0 .594-.605c.003-1.232-.866-1.803-1.723-1.823z"
            />
        </svg>
    );
};

export default IconFileErrorFilled;