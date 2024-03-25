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

const IconSmartWifiFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.735 10.334c.213-.51.1-1.078-.292-1.479l-6.117-6.272c-.55-.565-1.586-.563-2.138 0L7.113 8.807h-2.39c-.826 0-1.448.225-1.902.687-.448.456-.666 1.078-.666 1.899v7.868c0 .84.221 1.468.672 1.919.448.445 1.07.664 1.9.664h3.912c.83 0 1.451-.216 1.897-.664.456-.451.675-1.078.675-1.919v-1.308h7.45c.807 0 1.463-.63 1.463-1.403v-5.334h.25a1.46 1.46 0 0 0 1.36-.882M9.998 19.261c0 .499-.104.843-.317 1.05-.207.21-.549.311-1.042.311H4.726c-.493 0-.835-.1-1.045-.31s-.313-.555-.313-1.054V11.39c0-.482.103-.824.316-1.04.216-.218.558-.324 1.042-.324H8.64c.493 0 .835.104 1.045.316s.314.558.314 1.05zM6.68 18.45c-.414 0-.663.252-.663.67q0 .306.17.487c.118.12.286.182.49.182a.67.67 0 0 0 .49-.182q.174-.179.174-.488c.003-.42-.243-.67-.66-.67m7.776-6.21c.493.014.983.33.983 1.017s-.487 1.002-.971 1.014c-.555-.006-1.048-.322-1.048-1.017s.49-1.011.975-1.014zM10.634 8.89c.053-.058 1.347-1.465 3.759-1.49.075-.005 2.322-.12 3.835 1.583a.407.407 0 0 1-.031.574l-.003.003a.4.4 0 0 1-.569-.034c-1.224-1.376-3.12-1.313-3.199-1.31h-.002c-2.068.022-3.146 1.173-3.19 1.223l-.004.003a.407.407 0 0 1-.597-.552m3.765.12h.01c.16-.002 1.876-.03 2.99 1.222a.407.407 0 0 1-.031.574.404.404 0 0 1-.572-.03c-.893-1.006-2.355-.964-2.375-.953-1.447.014-2.318.93-2.355.968v.001a.4.4 0 0 1-.567.031.405.405 0 0 1-.036-.574l.002-.003c.073-.077 1.136-1.216 2.934-1.235m-1.956 2.48a2.82 2.82 0 0 1 1.967-.832c.03-.003 1.235-.045 2.014.823a.41.41 0 0 1-.034.575.407.407 0 0 1-.571-.034c-.513-.574-1.379-.563-1.387-.552a2 2 0 0 0-1.386.566.407.407 0 0 1-.603-.546"
            />
        </svg>
    );
};

export default IconSmartWifiFilled;