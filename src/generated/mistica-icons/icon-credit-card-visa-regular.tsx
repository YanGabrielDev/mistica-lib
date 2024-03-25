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

const IconCreditCardVisaRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.857 12.184h4.636c.397 0 .713.344.713.755 0 .42-.316.754-.713.754H4.857c-.397 0-.713-.335-.713-.754 0-.42.316-.755.713-.755M11.638 12.184h2.504c.389 0 .713.344.709.755 0 .42-.317.754-.713.754h-2.5c-.396 0-.712-.335-.712-.754 0-.42.316-.755.712-.755M19.135 12.184H16.28c-.396 0-.712.335-.712.755s.316.754.712.754h2.856c.396 0 .713-.335.713-.754 0-.411-.316-.755-.713-.755"
                />
                <path
                    fill={fillColor}
                    d="M4.144 5h15.704c1.18 0 2.144 1.017 2.152 2.272v9.456c0 1.25-.964 2.272-2.144 2.272H4.144C2.964 19 2 17.979 2 16.728V7.272C2 6.022 2.964 5 4.144 5m15.712 1.509H4.144c-.396 0-.72.343-.72.763v1.5h17.144V7.263c0-.41-.316-.754-.712-.754m-.008 10.974c.396 0 .72-.344.72-.755v-6.43H3.432v6.43c0 .411.316.755.712.755z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.841 8.22v2.991q0 .026-.009.049l-.008.035v6.272c0 .776-.638 1.406-1.428 1.406H3.595a1.42 1.42 0 0 1-1.429-1.406v-6.308l-.004-.016a.1.1 0 0 1-.007-.032V8.22q0-.015.006-.03l.005-.02V6.432a1.42 1.42 0 0 1 1.429-1.41h16.8c.788 0 1.43.63 1.43 1.407v1.706l.007.035q.009.023.01.049M3.595 6.21a.22.22 0 0 0-.224.222v1.193H20.62V6.433a.22.22 0 0 0-.221-.222zm16.8 11.574c.121 0 .222-.098.222-.218v-5.762H3.371v5.762c0 .123.1.221.224.218zm.225-7.168V8.813H3.37v1.804zm-1.986 4.252c0 .95-.61 1.16-1.123 1.169h-.137c-.115 0-.449-.028-.718-.219.107-.269.174-.58.174-.95 0-.375-.07-.691-.182-.963.263-.188.591-.213.712-.213h.14c.518.011 1.134.227 1.134 1.177m-3.972 1.169s-.143 0-.14.002c-.51-.008-1.12-.218-1.12-1.179 0-.96.599-1.165 1.103-1.168h.146c.518.011 1.134.227 1.134 1.177s-.61 1.16-1.123 1.168m5.017-1.166c0-1.59-1.16-2.182-2.149-2.204a1.4 1.4 0 0 0-.184 0c-.216 0-.83.045-1.35.428a2.37 2.37 0 0 0-1.32-.428q-.092-.004-.185-.003c-.986.008-2.14.588-2.14 2.196s1.16 2.193 2.151 2.207h.174a2.34 2.34 0 0 0 1.333-.428c.499.367 1.079.426 1.345.428h.174c.991-.016 2.15-.602 2.15-2.196"
                />
            </svg>
        );
    }
};

export default IconCreditCardVisaRegular;