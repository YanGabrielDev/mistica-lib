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

const IconCertificateRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.387 8.152v12.306c0 .75-.636 1.383-1.386 1.383H6.009c-.737 0-1.386-.647-1.386-1.384l.039-3.296-.04-7.972v-5.65c0-.726.662-1.384 1.387-1.384h7.3c.227 0 .448.092.608.252l5.21 5.123c.109.104.173.241.213.384a.6.6 0 0 1 .047.238m-1.384 12.474c.096 0 .191-.096.191-.169V9.024h-2.277c-.998 0-1.86-.33-2.493-.952-.639-.63-.978-1.487-.978-2.482V3.371H6.012c-.073 0-.185.109-.19.168v5.647l.039 7.977-.04 3.3c0 .05.098.16.19.16h11.993zM17.69 7.808l-.003-.003h.003zm-.003-.003-4.05-3.983v1.764c0 .659.212 1.213.613 1.608.406.4.983.61 1.664.61zm-2.661 9.91a.605.605 0 0 0-.77.356l-.241.664-1.16-2.563c.692-.079 1.263-.3 1.703-.673l1.112 2.457zm-3.588-1.568-1.174 2.59-.244-.663a.6.6 0 0 0-.767-.356l-.647.244 1.182-2.61c.412.422.969.683 1.65.795m.823-5.86c1.74 0 2.516.79 2.516 2.56 0 1.767-.776 2.557-2.516 2.557s-2.515-.787-2.515-2.557.776-2.56 2.515-2.56m4.334 7.776-1.451-3.208-.013-.019-.007-.009c.291-.512.45-1.165.45-1.977 0-2.294-1.22-3.37-3.313-3.37s-3.31 1.076-3.31 3.37c0 .689.12 1.257.333 1.73l-.022.029a.2.2 0 0 0-.04.059l-1.538 3.395a.61.61 0 0 0 .079.638c.142.18.375.26.647.196l.935-.35.37 1a.6.6 0 0 0 .53.325h.016a.6.6 0 0 0 .53-.353l1.35-2.983 1.35 2.983a.6.6 0 0 0 .53.353h.016c.221 0 .423-.123.55-.372l.35-.953.982.367a.6.6 0 0 0 .597-.213.61.61 0 0 0 .079-.638m-4.88-5.541a.35.35 0 0 0 .31-.204l.203-.572.268.577a.36.36 0 0 0 .258.19l.574.057-.428.442a.39.39 0 0 0-.098.314l.11.58-.46-.255a.33.33 0 0 0-.356-.017l-.003.003-.02.014q-.008.008-.02.014l-.436.288.1-.627a.38.38 0 0 0-.094-.311l-.451-.406zm-1.003.532.314.322-.07.47a.66.66 0 0 0 .263.653.63.63 0 0 0 .678.04l.373-.207.37.207a.63.63 0 0 0 .674-.04.68.68 0 0 0 .267-.655l-.076-.462.314-.325a.68.68 0 0 0 .154-.684.65.65 0 0 0-.516-.442l-.42-.064-.193-.415c-.219-.465-.947-.465-1.16 0l-.19.409-.42.064a.65.65 0 0 0-.516.446.68.68 0 0 0 .154.683"
            />
        </svg>
    );
};

export default IconCertificateRegular;