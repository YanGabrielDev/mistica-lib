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

const IconTruckRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m22 12.607-6.848-6.971h-2.796v-.362C12.356 3.47 10.916 2 9.14 2H2.716A.727.727 0 0 0 2 2.729c0 .399.32.729.716.729h6.428c.984 0 1.784.814 1.784 1.816V18.36H2.716a.72.72 0 0 0-.716.729c0 .403.32.729.716.729h10.9C14.06 21.088 15.248 22 16.644 22s2.588-.912 3.028-2.182H22zm-5.356 7.935c-.984 0-1.784-.814-1.784-1.816 0-1.001.8-1.816 1.784-1.816s1.784.815 1.784 1.816-.8 1.816-1.784 1.816m3.192-2.182c-.18-1.633-1.544-2.907-3.192-2.907s-3.016 1.274-3.192 2.907H12.36V7.094h2.2l6.012 6.12v5.146z"
                />
                <path
                    fill={fillColor}
                    d="M2.716 14.362h5.716a.72.72 0 0 0 .716-.73.72.72 0 0 0-.716-.728H2.716a.72.72 0 0 0-.716.729c0 .403.32.729.716.729M5.216 10.726h-2.5A.72.72 0 0 1 2 10c0-.403.32-.729.716-.733h2.5c.396 0 .716.326.716.729s-.32.729-.716.729"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.308 7.455c.37.53 2.555 3.557 2.83 3.924.249.325.708.944.705 1.67v2.97c0 .534-.224 1.072-.61 1.48-.392.413-.916.645-1.423.645h-.869c-.193 1.54-1.255 2.468-2.854 2.468-1.608 0-2.67-.927-2.863-2.468h-3.93c-.193 1.54-1.255 2.468-2.854 2.468-1.608 0-2.672-.927-2.871-2.468-.782-.014-1.41-.675-1.41-1.487V4.878c0-.82.642-1.49 1.432-1.49l10.622.008c.787 0 1.432.661 1.432 1.482v1.616l.82-.008h.009c.708 0 1.425.384 1.834.969m-9.03 9.437h3.963c.154-.846.563-1.49 1.199-1.885V4.878a.23.23 0 0 0-.227-.227L3.591 4.643a.23.23 0 0 0-.224.235V16.66c.003.126.101.226.227.232.258-1.445 1.294-2.308 2.846-2.308 1.543 0 2.58.863 2.838 2.308m11.364-.871v-2.96c0-.312-.283-.696-.451-.922a579 579 0 0 1-2.863-3.958 1.14 1.14 0 0 0-.854-.443l-.827.008v6.86a4 4 0 0 1 .443-.025c1.543 0 2.58.863 2.837 2.308h.886c.184 0 .403-.098.571-.274a.9.9 0 0 0 .258-.594m-4.555 3.339c1.118 0 1.69-.594 1.69-1.76 0-1.17-.572-1.764-1.69-1.764-1.126 0-1.697.594-1.697 1.768 0 1.162.571 1.756 1.697 1.756m-9.65 0c1.118 0 1.69-.594 1.69-1.756 0-1.171-.572-1.765-1.69-1.765-1.126 0-1.697.594-1.697 1.765 0 1.162.571 1.756 1.697 1.756"
                />
            </svg>
        );
    }
};

export default IconTruckRegular;