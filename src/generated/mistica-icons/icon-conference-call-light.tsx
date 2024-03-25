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

const IconConferenceCallLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.763 2H4.245c-.97 0-1.765.815-1.765 1.82v16.006c0 1 .79 1.82 1.765 1.82h11.284a.36.36 0 0 0 .352-.363c0-.2-.158-.363-.352-.363H4.245c-.582 0-1.056-.489-1.056-1.09V3.817c0-.6.474-1.09 1.056-1.09h15.518c.582 0 1.056.49 1.056 1.09V19.82c0 .6-.474 1.09-1.056 1.09a.36.36 0 0 0-.352.363c0 .2.158.363.352.363.97 0 1.765-.815 1.765-1.82V3.816C21.523 2.815 20.733 2 19.763 2m-8.111 17.458v-7.276H4.597a.36.36 0 0 1-.352-.364c0-.2.158-.363.352-.363h7.05V4.18c0-.2.158-.363.352-.363s.352.163.352.363v7.272h7.05c.195 0 .353.162.353.363s-.158.363-.352.363h-7.046v7.272c0 .2-.158.363-.352.363a.35.35 0 0 1-.352-.354m-5.575-2.137a2.21 2.21 0 0 1-.771-1.685c0-1.201.947-2.183 2.116-2.183 1.165 0 2.117.977 2.117 2.183 0 .675-.302 1.285-.771 1.685.835.317 1.385.931 1.475 1.732a.357.357 0 0 1-.311.4c-.19.028-.37-.12-.393-.32-.085-.788-.939-1.314-2.117-1.314s-2.03.526-2.116 1.313a.356.356 0 0 1-.353.321q-.02.001-.04-.004a.364.364 0 0 1-.312-.405c.09-.792.641-1.406 1.476-1.723m1.34-.233c.777 0 1.414-.651 1.414-1.452s-.632-1.457-1.413-1.457c-.776.004-1.408.656-1.408 1.457 0 .8.632 1.453 1.408 1.453m11.99 1.965a.357.357 0 0 1-.312.4.353.353 0 0 1-.388-.32c-.086-.788-.94-1.314-2.117-1.314s-2.031.526-2.117 1.313a.356.356 0 0 1-.352.321q-.02.001-.04-.004a.364.364 0 0 1-.312-.405c.09-.82.672-1.448 1.543-1.755a2.1 2.1 0 0 1-.735-1.607c0-1.15.907-2.08 2.017-2.08s2.018.935 2.018 2.08c0 .648-.29 1.23-.74 1.611.866.317 1.444.945 1.534 1.76m-2.813-2.006c.722 0 1.314-.61 1.314-1.355 0-.75-.592-1.355-1.314-1.355s-1.313.605-1.313 1.355.591 1.355 1.313 1.355M6.077 7.866a2.21 2.21 0 0 1-.771-1.685c0-1.202.947-2.184 2.116-2.184 1.165 0 2.117.978 2.117 2.184 0 .675-.302 1.285-.771 1.685.835.316 1.385.931 1.475 1.732a.364.364 0 0 1-.311.405.36.36 0 0 1-.393-.321c-.085-.787-.939-1.313-2.117-1.313s-2.03.526-2.116 1.313a.356.356 0 0 1-.353.32h-.04a.364.364 0 0 1-.312-.404c.09-.801.641-1.42 1.476-1.732m1.34-.233c.777 0 1.414-.652 1.414-1.452 0-.801-.632-1.458-1.413-1.458-.776.005-1.408.657-1.408 1.458s.632 1.452 1.408 1.452m7.828.233a2.21 2.21 0 0 1-.772-1.685c0-1.202.948-2.184 2.117-2.184 1.164 0 2.117.978 2.117 2.184 0 .675-.303 1.285-.772 1.685.835.316 1.385.931 1.476 1.732a.364.364 0 0 1-.312.405.357.357 0 0 1-.388-.321c-.086-.787-.939-1.313-2.117-1.313s-2.031.526-2.117 1.313a.356.356 0 0 1-.352.32h-.04a.364.364 0 0 1-.312-.404c.086-.801.637-1.42 1.472-1.732m1.34-.233c.776 0 1.413-.652 1.413-1.452 0-.801-.632-1.458-1.413-1.458-.776.005-1.408.657-1.408 1.458s.632 1.452 1.408 1.452m.357 13.64c0-.4.316-.726.704-.726s.704.326.704.727-.316.726-.704.726a.716.716 0 0 1-.704-.726"
            />
        </svg>
    );
};

export default IconConferenceCallLight;