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

const IconShieldAntivirusLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.612 5.186v-.028a.432.432 0 0 0-.505-.398c-1.747.276-2.687-.352-3.775-1.078l-.018-.012c-1.058-.708-2.263-1.512-4.313-1.515h-.006c-2.05 0-3.252.804-4.314 1.515-1.095.732-2.044 1.359-3.798 1.09a.409.409 0 0 0-.496.398c-.002.274-.02 6.734.465 9.518.617 3.58 7.673 6.983 7.975 7.126.11.053.238.053.348 0 .3-.143 7.364-3.543 7.98-7.126.463-2.722.457-8.956.456-9.49m-.816.434c-.005 1.549-.053 6.62-.445 8.913-.496 2.883-6.269 5.9-7.356 6.443-1.081-.544-6.849-3.558-7.344-6.44-.4-2.294-.449-7.353-.454-8.91 1.798.142 2.88-.572 3.93-1.272l.004-.003c1.013-.677 2.057-1.375 3.864-1.375h.006c1.806.003 2.854.7 3.865 1.378 1.042.697 2.124 1.414 3.93 1.266m-7.798 9.54c1.538 0 1.98-.593 1.98-2.65 0-1.288-.193-1.982-.638-2.321-.292-.219-.731-.328-1.342-.328-.616 0-1.059.11-1.35.333-.443.342-.63 1.037-.63 2.317 0 2.056.442 2.65 1.98 2.65m-1.367-6.072c0 .073.006.131.014.185.37-.152.812-.233 1.353-.233.543 0 .989.081 1.359.233q.013-.08.014-.188c0-.392 0-.731-1.37-.731s-1.37.339-1.37.734m4.885 2.647c.224 0 .406.185.406.409v.759a.407.407 0 1 1-.812 0v-.35h-.316c-.003.664-.065 1.25-.21 1.745l.806.246c.18.056.297.227.286.415l-.059 1.143a.407.407 0 0 1-.406.39h-.023a.414.414 0 0 1-.386-.432l.045-.824-.605-.185c-.412.589-1.104.928-2.244.928-1.143 0-1.837-.342-2.246-.933l-.622.19.042.824a.41.41 0 0 1-.384.431h-.022a.407.407 0 0 1-.407-.39l-.058-1.142a.41.41 0 0 1 .288-.415l.826-.252c-.145-.495-.204-1.075-.207-1.74h-.316v.35a.407.407 0 1 1-.813 0v-.758c0-.227.182-.41.406-.41h.751c.037-.514.137-1.016.342-1.444l-.986-.303a.41.41 0 0 1-.289-.415L8.36 8.43a.406.406 0 1 1 .813.042l-.042.82.74.227a2 2 0 0 1-.051-.437c0-.975.577-1.336 1.185-1.473l-.07-.073a.41.41 0 0 1 0-.58.4.4 0 0 1 .568-.005l.378.378c.05.056.087.123.101.196h.009a.4.4 0 0 1 .1-.196l.37-.373a.4.4 0 0 1 .569-.005l.003.002.002.003c.16.16.16.42 0 .58l-.067.067c.617.13 1.216.488 1.216 1.48 0 .156-.02.293-.05.425l.711-.219-.042-.82a.41.41 0 0 1 .384-.432.4.4 0 0 1 .425.376v.01l.062 1.144a.41.41 0 0 1-.286.414l-.969.297c.208.429.306.933.345 1.448.002.009.753.009.753.009m-3.143-.44a.41.41 0 0 0-.406-.409.41.41 0 0 0-.406.412v2.84a.405.405 0 1 0 .812 0z"
            />
        </svg>
    );
};

export default IconShieldAntivirusLight;
