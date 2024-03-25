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

const IconAlertFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.536 4.14c.646-1.134 2.281-1.134 2.927 0l8.003 14.054a1.684 1.684 0 0 1-1.463 2.517H3.996a1.684 1.684 0 0 1-1.463-2.517zm.814 5.626v4.25a.625.625 0 0 0 1.25 0v-4.25a.625.625 0 1 0-1.25 0m.625 7.365a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.892 19.877 12.656 3.375A.8.8 0 0 0 12 3c-.256 0-.545.149-.656.374L2.108 19.877a.7.7 0 0 0 0 .75c.145.225.363.374.62.374h18.545a.7.7 0 0 0 .619-.375c.144-.22.144-.484 0-.748M11.455 9.227c0-.297.256-.561.545-.561s.545.264.545.561v5.776c0 .298-.256.562-.545.562s-.545-.264-.545-.562zm-.363 8.44c0-.522.4-.935.908-.935.507 0 .908.413.908.936s-.4.936-.908.936c-.507 0-.908-.413-.908-.936"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22.886 22.628a.8.8 0 0 0 .019-.79L12.582 1.452C12.438 1.17 12.178 1 11.887 1c-.292 0-.552.172-.693.456L1.091 21.837a.8.8 0 0 0 .025.788c.145.231.41.375.709.375h20.353a.82.82 0 0 0 .708-.372m-11.507-3.317c0-.393.226-.619.62-.619.395 0 .621.226.621.62 0 .393-.229.618-.62.618-.392 0-.62-.225-.62-.619m1.25-2.363c0 .341-.275.616-.617.616a.616.616 0 0 1-.617-.616V8.34c0-.341.276-.616.617-.616.342 0 .617.275.617.616z"
                />
            </svg>
        );
    }
};

export default IconAlertFilled;