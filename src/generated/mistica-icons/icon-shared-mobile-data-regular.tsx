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

const IconSharedMobileDataRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.026 14.804c0-.333-.19-.49-.487-.49-.294 0-.488.157-.488.49 0 .163.045.28.124.362.084.086.21.128.364.128s.28-.042.364-.128a.5.5 0 0 0 .123-.362M17.942 17.527c0-.333-.19-.49-.487-.49-.294 0-.488.154-.488.49 0 .162.045.28.124.361.084.087.21.13.364.13s.28-.043.364-.13a.5.5 0 0 0 .123-.361"
            />
            <path
                fill={fillColor}
                d="M8.743 16.905H4.337c-.714 0-1.24-.18-1.61-.543-.373-.373-.555-.902-.555-1.622V6.533c0-1.418.748-2.166 2.165-2.166H8.74c1.395 0 2.166.768 2.166 2.166v1.94l1.23-.002-.009-.574a.53.53 0 0 1 .148-.392.49.49 0 0 1 .345-.143c.115 0 .23.039.33.117l.512.383c.357-.504.959-.758 1.791-.758h4.403c.715 0 1.241.18 1.611.543.373.37.555.9.555 1.62v8.21c0 1.417-.748 2.165-2.166 2.165h-4.403c-1.395 0-2.165-.768-2.165-2.165v-1.888q0-.048.008-.093l-1.19.006-.011.622c-.006.297-.219.523-.5.523a.55.55 0 0 1-.33-.114l-.524-.391-.01.015c-.365.502-.95.748-1.788.748m.9-1.432-1.18-.879a.57.57 0 0 1-.235-.454c0-.176.084-.344.232-.453l1.44-1.078a.56.56 0 0 1-.115-.34v-1.053l-.462-.003h-.03a.66.66 0 0 1-.49-.224.68.68 0 0 1-.166-.501l.003-1.34a.67.67 0 0 1 .193-.475.65.65 0 0 1 .538-.2h.414v-1.94c0-.782-.263-1.045-1.045-1.045H4.337q-.598 0-.82.224-.223.223-.222.82v8.21c0 .802.244 1.045 1.045 1.045h4.403c.673 0 .827-.213.877-.283zm1.263-3.617.14-.105a.55.55 0 0 1 .33-.115c.132 0 .255.05.345.143a.54.54 0 0 1 .148.392l-.008.577 1.227.002v-.608l-.16.119a.55.55 0 0 1-.328.112c-.28 0-.495-.227-.498-.524l-.011-.622-1.185-.006zm3.302.895h.418a.676.676 0 0 1 .73.675l.004 1.339a.68.68 0 0 1-.166.501.65.65 0 0 1-.52.222l-.474.002a1 1 0 0 1 .008.099v1.888c0 .781.264 1.044 1.045 1.044h4.403q.598 0 .821-.224.222-.223.221-.82v-8.21c0-.802-.243-1.045-1.044-1.045h-4.4c-.678 0-.836.214-.895.312l1.177.88a.57.57 0 0 1 .232.455.57.57 0 0 1-.235.454l-1.415 1.052c.057.088.09.192.09.303zm-1.896-2.361a.623.623 0 0 1 .616.613l.003.21 1.81-1.347-1.762-1.32.002.146a.614.614 0 0 1-.613.622l-2.885.003-.006 1.059zm-3.056 3.75 1.81 1.348.002-.213a.624.624 0 0 1 .614-.61l2.834-.015-.002-1.059-2.886-.002a.613.613 0 0 1-.613-.622l.003-.146z"
            />
        </svg>
    );
};

export default IconSharedMobileDataRegular;