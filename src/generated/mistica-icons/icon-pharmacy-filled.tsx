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

const IconPharmacyFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.127 12.069c1.042.61 1.745 1.753 1.835 2.986.081 1.132-.364 2.17-1.224 2.854-1.067.849-2.426 1.042-3.445 1.042a7.7 7.7 0 0 1-1.463-.134v.117c1.174.183 1.832 1.003 1.832 2.317a.59.59 0 0 1-.588.585h-3.532a.586.586 0 0 1-.588-.585c0-1.263.616-2.062 1.7-2.286v-4.677c-1.86-.171-3.289-1.079-4.014-2.474l-.052-.011a.3.3 0 0 1-.085-.025c-2.219-1.255-2.684-3.572-2.404-5.174.241-1.39 1.135-2.658 2.454-3.479 3.275-2.04 6.308-.255 6.437-.176h.002c.053.03 1.211.677 1.432 1.91.154.854-.17 1.734-.963 2.622a.6.6 0 0 1-.272.17c-.252.076-.684.065-1.07-.207-.482-.341-.776-.991-.871-1.938-.415-.202-1.434-.538-2.852.146-.557.271-.972.532-1.24 1.481-.096.35-.093.72.002 1.07h8.378c.322 0 .586.26.586.586l-.003.88a4.8 4.8 0 0 1-.485 2.07 3 3 0 0 1 .384.256q.053.041.11.074M6.257 6.806c-.163.946.013 2.213.87 3.179a5 5 0 0 1-.022-.409v-.784a3.25 3.25 0 0 1-.084-1.978c.361-1.272.98-1.79 1.862-2.216 2.498-1.211 4.183.025 4.281.097l.002.001a.58.58 0 0 1 .23.435c.042.79.219 1.204.378 1.341.404-.515.569-.988.493-1.406-.123-.689-.854-1.095-.86-1.098-.129-.075-2.582-1.498-5.232.154-1.037.647-1.734 1.625-1.919 2.684m9.43 10.888c.482-.118.961-.32 1.37-.645.779-.619.84-1.467.815-1.921-.064-.877-.56-1.69-1.297-2.118a3 3 0 0 1-.243-.165 1.6 1.6 0 0 0-.311-.185q-.186.21-.392.4c.736.415 1.54 1.127 1.54 2.188 0 1.101-.52 1.846-1.482 2.446M12.83 14.29v3.437c2.734-.893 3.238-1.538 3.241-2.476 0-.742-.972-1.283-1.496-1.473a5.1 5.1 0 0 1-1.745.512"
            />
        </svg>
    );
};

export default IconPharmacyFilled;
