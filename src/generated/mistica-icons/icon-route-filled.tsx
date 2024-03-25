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

const IconRouteFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 5.452c.006-2.028-1.247-3.291-3.269-3.297h-.02c-.991 0-1.82.3-2.392.871-.577.574-.882 1.406-.885 2.406-.003 1.49 1.311 3.482 2.165 4.597a.2.2 0 0 1-.04-.006q-.024-.006-.052-.005a6 6 0 0 0-.316.039.61.61 0 0 0 .087 1.213q.042.002.086-.006c.106-.016.182-.024.211-.027h.005a.6.6 0 0 0 .56-.547l.037.041q.064.07.1.107a.604.604 0 0 0 .863 0c.375-.375 2.854-3.33 2.86-5.386m-3.227.493c-.51 0-.717-.21-.717-.723 0-.512.207-.72.717-.72.507 0 .717.208.717.72 0 .513-.207.723-.717.723m-9.1 15.09a.624.624 0 0 0-.656-.564c-.227.017-.412.03-.544.038l-.154.01c1.26-1.624 3.25-4.58 3.255-6.75.006-1.424-.414-2.603-1.218-3.412-.804-.81-1.978-1.241-3.398-1.244h-.022c-2.886 0-4.614 1.728-4.622 4.627-.009 2.98 3.66 7.401 4.185 7.925a.611.611 0 0 0 .863 0c.067-.07.193-.21.355-.4a.64.64 0 0 0 .614.475h.036l.15-.01c.14-.008.344-.02.595-.04a.61.61 0 0 0 .56-.655m5.285-9.219a.61.61 0 0 1-.193-1.19c.269-.09.54-.171.8-.239a.61.61 0 0 1 .314 1.182 10 10 0 0 0-.725.22.7.7 0 0 1-.196.027m-.955 3.193c-.123.314.03.67.344.793q.379.147.762.283a.607.607 0 0 0 .779-.367.61.61 0 0 0-.364-.781l-.146-.053q-.297-.106-.585-.22a.61.61 0 0 0-.79.345m3.977 2.432c.314.117.474.47.356.787-.115.305-.3.596-.546.865a.6.6 0 0 1-.445.197.61.61 0 0 1-.445-1.028q.21-.23.299-.465a.605.605 0 0 1 .781-.356m-2.207 1.588a.61.61 0 0 1 .815.283c.146.302.02.67-.283.818-.246.12-.51.232-.784.333a.61.61 0 0 1-.784-.358.615.615 0 0 1 .356-.788q.36-.134.68-.288m-3.25-6.168a.61.61 0 0 0 .858-.076c.112-.134.272-.269.47-.4a.61.61 0 0 0 .174-.846.61.61 0 0 0-.843-.174q-.451.296-.734.636a.61.61 0 0 0 .076.86m.65 2.235a.6.6 0 0 1-.386-.14 2.3 2.3 0 0 1-.658-.832.61.61 0 1 1 1.11-.504c.06.137.167.266.321.395.26.216.297.6.084.86a.61.61 0 0 1-.47.221m3.08.74c-.158.3-.043.67.257.823a2.3 2.3 0 0 1 .52.35c.119.11.27.166.418.166a.613.613 0 0 0 .417-1.056 3.5 3.5 0 0 0-.792-.544.61.61 0 0 0-.82.26m-4.903 4.372c.35-.039.644.182.692.516a.615.615 0 0 1-.512.694c-.278.042-.55.079-.807.11a.608.608 0 0 1-.678-.532.61.61 0 0 1 .53-.681q.376-.045.775-.107m3.028.003a.61.61 0 0 0-.74-.445q-.374.091-.75.17a.612.612 0 0 0 .247 1.2q.402-.085.8-.185a.61.61 0 0 0 .443-.74M6.796 14.29c-.742 0-1.047-.303-1.045-1.051 0-.745.303-1.05 1.045-1.05.745 0 1.048.302 1.048 1.05s-.303 1.05-1.048 1.05"
            />
        </svg>
    );
};

export default IconRouteFilled;