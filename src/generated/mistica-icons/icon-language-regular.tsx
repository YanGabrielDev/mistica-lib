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

const IconLanguageRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.254 5.96a5.795 5.795 0 0 0-5.79 5.79 5.795 5.795 0 0 0 5.79 5.79 5.795 5.795 0 0 0 5.79-5.79 5.795 5.795 0 0 0-5.79-5.79m4.686 5.254h-1.711c-.064-1.479-.393-2.764-.896-3.693a4.72 4.72 0 0 1 2.607 3.693m-5.222-3.957v3.957h-1.364c.096-1.918.7-3.41 1.364-3.957m0 5.029v3.957c-.664-.547-1.268-2.04-1.364-3.957zm1.072 3.957v-3.957h1.364c-.096 1.914-.7 3.41-1.364 3.957m0-5.029V7.257c.664.546 1.268 2.04 1.364 3.957zm-2.611-3.693c-.507.929-.832 2.214-.896 3.693H7.572a4.71 4.71 0 0 1 2.607-3.693m-2.61 4.765h1.71c.064 1.478.393 2.764.896 3.692a4.73 4.73 0 0 1-2.607-3.692m6.76 3.692c.507-.928.832-2.214.896-3.692h1.711a4.71 4.71 0 0 1-2.607 3.692"
            />
            <path
                fill={fillColor}
                d="M12.358 2.003c-5.318 0-9.644 4.325-9.644 9.643 0 1.375.283 2.7.843 3.943l-1.532 5.507a.714.714 0 0 0 .879.883l5.51-1.533a9.6 9.6 0 0 0 3.944.843c5.317 0 9.642-4.325 9.642-9.643s-4.325-9.643-9.642-9.643m0 17.858a8.16 8.16 0 0 1-3.572-.815.72.72 0 0 0-.504-.046l-4.539 1.26 1.26-4.542a.72.72 0 0 0-.046-.504 8.16 8.16 0 0 1-.814-3.571c0-4.529 3.686-8.215 8.215-8.215 4.528 0 8.214 3.686 8.214 8.215 0 4.528-3.682 8.218-8.214 8.218"
            />
        </svg>
    );
};

export default IconLanguageRegular;