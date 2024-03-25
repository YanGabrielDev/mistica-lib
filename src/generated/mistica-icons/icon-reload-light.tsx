'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconReloadLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14 7.495v-.85h2.744a7.15 7.15 0 0 0-11.894 5.35H4a8 8 0 0 1 13.345-5.952V3.3h.85v4.195zM9.995 16.495v.85H7.256a7.15 7.15 0 0 0 11.894-5.35H20a8 8 0 0 1-13.35 5.948v2.747H5.8v-4.195z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.586 17.96-2.155.322a10.25 10.25 0 0 0 2.122-6.28C21.554 6.484 17.272 2 12.003 2A9.2 9.2 0 0 0 6.9 3.545a.38.38 0 0 0-.112.52c.104.18.332.23.496.116a8.5 8.5 0 0 1 4.722-1.423c4.87-.009 8.828 4.145 8.828 9.24 0 2.215-.736 4.3-2.087 5.97l-.348-2.5c-.032-.204-.212-.347-.404-.322a.38.38 0 0 0-.308.423l.504 3.664 3.498-.528a.38.38 0 0 0 .308-.423c-.032-.213-.216-.36-.412-.322M17.407 20.304c0 .417-.322.754-.72.754s-.719-.337-.719-.754c0-.416.322-.753.72-.753s.72.337.72.753M12.002 21.246q1.364-.001 2.655-.422a.34.34 0 0 1 .435.246c.056.201-.047.415-.235.474a9.2 9.2 0 0 1-2.875.456c-5.27 0-9.551-4.484-9.551-10.002 0-2.315.755-4.522 2.13-6.293l-2.154.323c-.192.025-.372-.118-.404-.323a.38.38 0 0 1 .308-.423l3.494-.527.52 3.663a.38.38 0 0 1-.308.423h-.048a.363.363 0 0 1-.356-.322l-.348-2.5C3.905 7.69 3.17 9.783 3.17 11.998c0 5.095 3.958 9.248 8.832 9.248"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.501 2.206a.62.62 0 0 0-.647.112l-2.818 2.673a9.88 9.88 0 0 0-6.075-2.017c-4.958-.009-9.138 3.557-9.734 8.302-.597 4.746 2.585 9.171 7.4 10.3s9.748-1.392 11.482-5.871a.55.55 0 0 0-.336-.714.6.6 0 0 0-.445.01.57.57 0 0 0-.306.315c-1.308 3.358-4.703 5.529-8.42 5.383s-6.919-2.577-7.935-6.025c-1.02-3.45.372-7.143 3.45-9.154s7.152-1.893 10.099.297l-2.6 2.473a.54.54 0 0 0-.134.611c.09.21.302.347.538.347l5.916-.355a.57.57 0 0 0 .543-.524l.358-5.569a.57.57 0 0 0-.336-.594"
                />
            </svg>
        );
    }
};

export default IconReloadLight;