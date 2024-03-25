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

const IconHandUpRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.389 9.732q.348-.117.773-.118c1.255 0 2.036.79 2.039 2.062v6.997c0 .972-.272 1.745-.81 2.303-.54.557-1.378.865-2.361.865H9.243c-.782 0-1.126-.742-1.272-1.059a180 180 0 0 0-1.17-2.396l-.04-.08a416 416 0 0 1-2.748-5.647c-.4-.854-.24-1.742.41-2.263.33-.266.727-.398 1.13-.398.42 0 .85.146 1.208.432.367.29.672.694 1.011 1.271-.002-1.896 0-5.739 0-6.99v-.438c.087-1.348.863-2.118 2.13-2.118 1.316 0 2.134.83 2.134 2.162V7.22q.312-.089.683-.09c1.003 0 1.703.502 1.944 1.354.23-.079.493-.118.776-.118 1.008 0 1.711.51 1.95 1.367m1.128 10.381c.311-.322.463-.793.463-1.44h.008v-7.005c0-.589-.238-.83-.818-.83q-.224 0-.39.057a1.2 1.2 0 0 1-.957-.085 1.22 1.22 0 0 1-.603-.753c-.042-.154-.131-.468-.773-.468q-.226.001-.395.056a1.2 1.2 0 0 1-.955-.081 1.23 1.23 0 0 1-.602-.748c-.04-.137-.132-.462-.77-.462q-.201.001-.356.045a1.21 1.21 0 0 1-1.067-.202 1.24 1.24 0 0 1-.485-.983V4.312c0-.653-.274-.93-.916-.93-.527 0-.86.16-.91.963v7.35a1.23 1.23 0 0 1-1.219 1.233c-.432 0-.832-.23-1.05-.602-.283-.482-.499-.762-.717-.936a.73.73 0 0 0-.451-.165.6.6 0 0 0-.373.129c-.28.224-.137.613-.064.77.666 1.426 1.798 3.726 2.708 5.574l.028.056a223 223 0 0 1 1.222 2.505c.03.07.123.271.199.347h7.753c.644 0 1.185-.18 1.49-.493"
            />
        </svg>
    );
};

export default IconHandUpRegular;