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

const IconCasinoFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.855 8.484c1.311 1.266 1.978 3.14 1.978 5.566s-.667 4.294-1.98 5.558c-1.258 1.21-3.079 1.823-5.41 1.823s-4.148-.614-5.4-1.826c-.672-.647-1.168-1.457-1.499-2.423-1.395-.258-2.546-.804-3.417-1.647-1.305-1.258-1.966-3.13-1.966-5.555 0-2.426.66-4.3 1.966-5.563C5.382 3.196 7.2 2.58 9.53 2.58c2.328 0 4.149.616 5.41 1.834.672.647 1.17 1.457 1.5 2.415 1.393.263 2.544.812 3.415 1.655m-9.697-3.252c.98.081 1.798.353 2.442.815l1.082-1.08c-.883-.67-2.065-1.046-3.524-1.127zM3.42 9.372h1.39c.078-.98.336-1.804.79-2.45L4.527 5.845C3.872 6.73 3.5 7.91 3.42 9.372m6.115 4.143q.05 0 .094-.006.044-.004.09-.005c.264-.009.513-.025.743-.062q.266-.042.502-.109c.492-.14.902-.353 1.212-.65.474-.457.754-1.131.852-1.997a6 6 0 0 0 .045-.703c0-.176-.015-.338-.03-.5l-.007-.063c-.047-.53-.162-.983-.344-1.37a2.5 2.5 0 0 0-.521-.776c-.112-.11-.25-.199-.387-.288-.563-.362-1.313-.552-2.257-.552-1.174 0-2.062.283-2.636.84-.594.574-.897 1.488-.897 2.709s.3 2.131.894 2.703c.046.044.1.081.153.118q.047.032.093.067.488.361 1.194.518l.088.02q.087.022.18.039c.298.036.6.067.939.067m7.557 3.232c.594-.574.897-1.481.897-2.703 0-1.22-.303-2.131-.9-2.708-.05-.049-.111-.09-.17-.13l-.068-.047a8.6 8.6 0 0 1-.465 2.112c-.33.894-.812 1.653-1.45 2.266a5.7 5.7 0 0 1-1.149.846 6.9 6.9 0 0 1-1.602.647c.56.362 1.31.552 2.26.552 1.18 0 2.07-.28 2.647-.835m2.359 1.44c.664-.876 1.04-2.053 1.12-3.51h-1.389c-.081.975-.347 1.793-.804 2.435zm-5.616.594c-.97-.078-1.785-.342-2.426-.793l-1.081 1.082c.88.652 2.056 1.022 3.507 1.1zm-4.916-4.07q-.09-.007-.184-.011c-.093-.005-.186-.009-.27-.022q-.04-.006-.077-.018l-.055-.013a5 5 0 0 1-1.207-.373q-.023-.01-.042-.02a4 4 0 0 1-.591-.336l-1.081 1.084c.504.376 1.109.653 1.804.838q.604.164 1.302.23l.138.012q.13.013.263.021zm5.35-4.1q-.04.47-.137.89a4.4 4.4 0 0 1-.667 1.543l.465.465.608.611q.227-.303.409-.653c.21-.403.38-.846.501-1.341.11-.46.18-.955.21-1.493v-.023zm2.507-2.432q.12.745.134 1.585.327.152.608.35l1.079-1.078c-.508-.386-1.12-.667-1.821-.857m-6.283 3.67c.272-.286.454-.51.65-.802l.028-.041.056-.085c.11-.17.193-.341.277-.512.11-.213.193-.426.258-.639q.016-.056.038-.108c.017-.047.035-.093.046-.139.1-.422.056-.809-.101-1.131a1.3 1.3 0 0 0-.316-.432 1.5 1.5 0 0 0-.827-.333l-.042-.007-.036-.007a1.86 1.86 0 0 0-.986.238 1.83 1.83 0 0 0-.989-.238 1.5 1.5 0 0 0-.902.35c-.415.356-.569.927-.417 1.563.098.412.283.832.535 1.25l.042.075q.019.037.042.076c.232.364.428.608.74.93l.008.008q.01.008.016.014c.05.05.163.16.266.236a1.2 1.2 0 0 0 .583.218l.079.003.056-.003a1 1 0 0 0 .16-.025q.02-.004.039-.011l.025-.009c.134-.036.263-.092.378-.176.112-.082.246-.216.294-.264"
            />
        </svg>
    );
};

export default IconCasinoFilled;