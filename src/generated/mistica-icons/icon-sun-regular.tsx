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

const IconSunRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 19.204a.54.54 0 0 0-.538.538v1.72a.538.538 0 0 0 1.076 0v-1.72a.54.54 0 0 0-.538-.538M17.09 17.09c-.21.21-.21.55 0 .76l1.222 1.222a.538.538 0 0 0 .76-.76l-1.221-1.222a.54.54 0 0 0-.76 0M6.91 17.09c.21.21.21.55 0 .76l-1.222 1.222a.538.538 0 0 1-.76-.76l1.221-1.222c.21-.21.55-.21.76 0M19.204 12c0 .297.241.537.538.537h1.72a.538.538 0 0 0 0-1.075h-1.72a.54.54 0 0 0-.538.538M2 12c0-.297.24-.538.538-.538h1.72a.538.538 0 1 1 0 1.076h-1.72A.54.54 0 0 1 2 12M12 8.237a3.763 3.763 0 1 0 0 7.527 3.763 3.763 0 0 0 0-7.527M7.161 12a4.839 4.839 0 1 1 9.678 0 4.839 4.839 0 0 1-9.678 0M19.072 4.927c.21.21.21.55 0 .76L17.851 6.91a.538.538 0 1 1-.76-.76l1.221-1.222c.21-.21.55-.21.76 0M4.928 4.927c.21-.21.55-.21.76 0L6.91 6.15a.538.538 0 0 1-.76.76L4.927 5.687a.54.54 0 0 1 0-.76M12 2c.297 0 .537.24.537.538v1.72a.538.538 0 1 1-1.075 0v-1.72c0-.297.241-.538.538-.538"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.751 11.345h2.468c.34 0 .622.28.622.613 0 .34-.283.62-.622.62h-2.468q-.036-.002-.07-.014-.021-.007-.044-.012c-.068 1.74-.547 3.011-1.227 3.927l.037.023c.028.015.055.03.078.053l1.557 1.552c.25.238.25.636 0 .874a.57.57 0 0 1-.437.182.62.62 0 0 1-.44-.182l-1.557-1.552q-.023-.024-.034-.052l-.017-.03c-1.383 1.172-3.106 1.438-3.986 1.485q0 .007.005.009.004.003.004.008v2.375a.62.62 0 0 1-.622.62.615.615 0 0 1-.622-.62v-2.392c-.91-.056-2.569-.33-3.902-1.476a.3.3 0 0 0-.035.051l-.015.025-1.566 1.552a.6.6 0 0 1-.25.148.592.592 0 0 1-.77-.076.604.604 0 0 1 0-.874l1.706-1.7a.2.2 0 0 1 .04-.03q.016-.01.027-.02c-.655-.905-1.1-2.16-1.176-3.869a.2.2 0 0 0-.047.008q-.025.009-.051.01h-2.56a.625.625 0 0 1-.622-.62c0-.339.283-.619.622-.619h2.56q.037.002.07.014l.045.011c.115-1.7.63-2.921 1.325-3.787-.017-.017-.034-.026-.05-.035L6.7 7.53 4.978 5.813a.62.62 0 0 1 0-.874.615.615 0 0 1 .88 0L7.58 6.656a.1.1 0 0 1 .033.039q.007.015.017.025c1.316-1.022 2.882-1.26 3.745-1.31V2.78a.62.62 0 0 1 .622-.62c.339 0 .622.28.622.62v2.64c.846.06 2.437.314 3.77 1.353l.017-.029a.2.2 0 0 1 .025-.038l1.773-1.764a.615.615 0 0 1 .88 0c.249.24.249.627 0 .873l-1.773 1.768a.2.2 0 0 1-.04.03l-.02.012c.712.866 1.236 2.07 1.368 3.745l.034-.009q.044-.014.097-.016m-7.002 6.272h.563c1.535-.034 5.103-.62 5.103-5.471 0-4.852-3.596-5.462-5.137-5.504h-.588c-4.546.042-5.037 3.837-5.037 5.462 0 1.636.496 5.448 5.096 5.513"
                />
            </svg>
        );
    }
};

export default IconSunRegular;