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

const IconFileEncryptedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.107 7.216c0-1.124.347-1.712 1.26-1.712s1.26.586 1.26 1.712-.347 1.706-1.26 1.706-1.26-.583-1.26-1.706m1.804 0c0-.908-.154-1.208-.544-1.208s-.543.297-.543 1.208c0 .91.154 1.154.543 1.154.39 0 .544-.247.544-1.154M10.39 10.835c-.913 0-1.26.588-1.26 1.711s.347 1.706 1.26 1.706 1.26-.58 1.26-1.706-.347-1.711-1.26-1.711m.54 1.711c0 .908-.15 1.154-.543 1.154-.39 0-.544-.243-.544-1.154s.155-1.207.544-1.207c.39 0 .543.3.543 1.207M13.639 10.835c-.913 0-1.26.588-1.26 1.711s.347 1.706 1.26 1.706 1.26-.58 1.26-1.706-.347-1.711-1.26-1.711m.54 1.711c0 .908-.15 1.154-.543 1.154-.39 0-.543-.243-.543-1.154s.154-1.207.543-1.207c.39 0 .544.3.544 1.207M13.639 15.966c-.913 0-1.26.589-1.26 1.712s.347 1.706 1.26 1.706 1.26-.58 1.26-1.706-.347-1.712-1.26-1.712m.54 1.712c0 .907-.15 1.154-.543 1.154-.39 0-.543-.244-.543-1.154s.154-1.207.543-1.207c.39 0 .544.3.544 1.207M7.04 13.717h-.552v.487h1.694v-.484h-.465v-2.488c0-.24-.114-.322-.45-.322-.233 0-.56.028-.754.056v.46h.527zM9.558 8.406h.552V6.115h-.527v-.46c.193-.028.521-.056.753-.056.337 0 .451.082.451.323v2.487h.465v.485H9.558zM16.264 13.717h-.552v.487h1.695v-.484h-.465v-2.488c0-.24-.115-.322-.451-.322-.233 0-.56.028-.754.056v.46h.527zM15.712 18.838h.552v-2.292h-.527v-.46c.193-.027.521-.055.754-.055.336 0 .45.081.45.322v2.487h.466v.482h-1.695zM10.16 18.838h-.552v.484h1.695v-.482h-.465v-2.487c0-.241-.115-.322-.451-.322-.233 0-.56.028-.754.056v.46h.527zM6.569 18.838h.552v-2.292h-.527v-.46a6 6 0 0 1 .754-.055c.336 0 .45.081.45.322v2.487h.466v.482H6.569z"
            />
            <path
                fill={fillColor}
                d="M19.353 7.908q.034.077.034.162v12.563c0 .653-.558 1.204-1.219 1.204H5.843c-.65 0-1.218-.562-1.218-1.204V3.356c0-.63.583-1.205 1.218-1.205h7.502c.18 0 .356.073.482.2l5.355 5.232c.087.086.14.201.171.325m-.787 12.725V8.751h-2.543c-.972 0-1.81-.317-2.42-.916-.617-.603-.944-1.429-.944-2.384V2.978H5.84c-.185 0-.4.204-.4.378v17.277c0 .188.2.378.4.378h12.325c.207 0 .4-.185.4-.378M13.476 3.16V5.45c0 .728.241 1.347.695 1.79.457.445 1.098.683 1.852.683h2.33z"
            />
        </svg>
    );
};

export default IconFileEncryptedLight;
