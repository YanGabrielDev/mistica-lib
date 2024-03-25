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

const IconArrowUpLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.498 21.644c0 .196.157.356.35.356s.349-.16.337-.352v-8.054h-4.91c-.535 0-.868-.364-1.01-.712-.133-.324-.149-.812.208-1.176l8.53-8.694 8.518 8.698c.358.368.342.844.208 1.176-.133.34-.474.712-1.008.712H14.81v5.545c0 .197.157.357.35.357s.349-.16.349-.357v-4.828h4.212c.722 0 1.374-.457 1.66-1.16.287-.697.145-1.45-.357-1.961L12.004 2l-9.021 9.194a1.8 1.8 0 0 0-.357 1.96c.286.708.938 1.16 1.66 1.16h4.212zM15.16 22a.706.706 0 0 0 .698-.712.706.706 0 0 0-.699-.712.706.706 0 0 0-.698.712c0 .393.312.712.698.712"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.508 21.431c.3.288.728.426 1.344.426l.043-.002.038-.001h6.219c.574.017 1.042-.134 1.353-.44q.451-.443.44-1.23v-6.899c0-.095.064-.173.145-.173l3.779-.006h.017c.409 0 .734-.204.874-.549.162-.4.022-.893-.356-1.255l-8.93-8.966q-.194-.204-.426-.205h-.003c-.173 0-.341.087-.515.264l-8.96 8.901c-.376.368-.497.802-.331 1.185.173.41.641.67 1.165.653l3.518-.022c.081 0 .146.078.146.173l-.003 6.908c.008.554.154.958.443 1.238m.411-.426c-.17-.165-.257-.434-.263-.82l.003-6.902a.75.75 0 0 0-.737-.762l-3.524.022H3.39c-.275.011-.53-.112-.608-.294-.087-.202.09-.42.205-.532l8.96-8.908.003-.003a.5.5 0 0 1 .087-.075l.003.002.008.009.006.006 8.938 8.974.003.004.003.002c.25.235.271.473.218.608-.05.117-.165.182-.327.182h-.014l-3.782.005a.75.75 0 0 0-.737.762v6.908q.007.535-.263.801c-.246.24-.639.28-.924.272H8.928c-.488.008-.818-.076-1.009-.26"
                />
            </svg>
        );
    }
};

export default IconArrowUpLight;
