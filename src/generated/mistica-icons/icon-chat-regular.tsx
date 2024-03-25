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

const IconChatRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12 14.512-.4-.296C7.38 11.12 7.344 8.728 7.372 8.284a2.656 2.656 0 0 1 2.652-2.616c.828 0 1.524.448 1.972.836.448-.388 1.144-.836 1.972-.836a2.65 2.65 0 0 1 2.652 2.616c.036.448 0 2.84-4.22 5.932zm-1.972-7.488c-.712 0-1.292.58-1.292 1.292l-.004.084S8.648 10.22 12 12.816c3.313-2.566 3.27-4.373 3.268-4.435V8.38l-.004-.068c0-.712-.58-1.292-1.292-1.292-.616 0-1.26.644-1.436.868L12 8.572l-.536-.68c-.188-.24-.824-.868-1.436-.868"
                />
                <path
                    fill={fillColor}
                    d="M2.68 3h18.64a.68.68 0 0 1 .68.68v12.644a.68.68 0 0 1-.68.68H10.528L6.512 21.44a.69.69 0 0 1-.748.18.675.675 0 0 1-.436-.632v-3.98H2.68a.68.68 0 0 1-.68-.68V3.68A.68.68 0 0 1 2.68 3m7.548 12.652H20.64V4.36H3.36v11.288h2.648a.68.68 0 0 1 .68.68v2.9l3.036-3.352a.67.67 0 0 1 .504-.224"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.364 2.5h-5.82c-2.006 0-3.635 1.703-3.635 3.799v.38H5.636C3.629 6.678 2 8.38 2 10.476v3.8c0 1.833 1.252 3.37 2.91 3.726v2.738a.76.76 0 0 0 .447.7.7.7 0 0 0 .796-.165L9.21 18.08h2.244c2.007 0 3.636-1.702 3.636-3.799v-.063l2.761 2.885c.14.146.326.223.512.223q.14 0 .28-.058a.76.76 0 0 0 .446-.7v-2.739c1.658-.355 2.91-1.887 2.91-3.726v-3.8c0-2.1-1.63-3.803-3.636-3.803m-4.73 11.781c0 1.255-.978 2.282-2.183 2.282H8.904a.7.7 0 0 0-.512.224l-2.03 2.12v-1.585c0-.419-.326-.76-.726-.76-1.201 0-2.183-1.02-2.183-2.28v-3.8c0-1.255.977-2.281 2.183-2.281h3.273v1.902c0 2.096 1.63 3.799 3.636 3.799h1.09zm4.73-1.897c-.4 0-.726.34-.726.76v1.585l-2.03-2.121a.72.72 0 0 0-.512-.224h-2.547c-1.2 0-2.183-1.021-2.183-2.281v-3.8c0-1.254.978-2.28 2.183-2.28h5.82c1.2 0 2.183 1.021 2.183 2.28v3.8h-.005c0 1.255-.977 2.281-2.183 2.281"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.965 8.769H6.032a.56.56 0 0 1-.56-.56c0-.308.252-.56.56-.56h11.933c.308 0 .56.252.56.56s-.252.56-.56.56M14.141 13.139h-8.11a.56.56 0 0 1-.56-.56c0-.309.253-.56.56-.56h8.11c.308 0 .56.251.56.56 0 .308-.252.56-.56.56"
                />
                <path
                    fill={fillColor}
                    d="M5.382 21.293c-.546 0-1.028-.465-1.028-.995v-2.336c-1.263-.258-2.188-1.384-2.188-2.773V5.542c0-1.56 1.278-2.83 2.846-2.83h13.983a2.84 2.84 0 0 1 2.843 2.83v9.65c0 1.56-1.274 2.829-2.843 2.829H8.452L6.25 20.839c-.341.454-.74.454-.868.454m-.373-17.46c-.95 0-1.722.768-1.722 1.709v9.65c0 .975.7 1.709 1.627 1.709.308 0 .56.252.56.56v2.552l2.264-2.894a.57.57 0 0 1 .442-.216h10.813c.95 0 1.722-.767 1.722-1.708V5.542c0-.944-.773-1.709-1.722-1.709z"
                />
            </svg>
        );
    }
};

export default IconChatRegular;
