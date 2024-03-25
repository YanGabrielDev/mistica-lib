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

const IconRatingLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.5 18.786V5.214c0-1.774-1.456-3.219-3.25-3.214h-6.5C6.956 2 5.5 3.44 5.5 5.214v13.572C5.5 20.56 6.956 22 8.75 22h6.5c1.794 0 3.25-1.44 3.25-3.214m-2.524-.004c.397 0 .721-.32.721-.713a.72.72 0 0 0-.721-.714.72.72 0 0 0-.721.714c0 .393.323.713.72.713M6.22 5.214c0-1.38 1.133-2.5 2.529-2.5h6.5c1.396 0 2.529 1.12 2.529 2.5v.356H6.22zm11.558 1.07v12.498c0 1.38-1.133 2.5-2.529 2.5h-6.5c-1.396 0-2.529-1.12-2.529-2.5v-.357h7.587c.198 0 .36-.16.36-.356a.36.36 0 0 0-.36-.357H6.22V6.283zm-1.3 4.895-2.07 1.802.564 2.788a.36.36 0 0 1-.144.361.37.37 0 0 1-.388.023L12 14.782l-2.446 1.367a.362.362 0 0 1-.531-.384l.564-2.789-2.071-1.801a.36.36 0 0 1-.107-.375.35.35 0 0 1 .305-.247l2.83-.292 1.118-2.538a.366.366 0 0 1 .666 0l1.119 2.538 2.83.292c.143.014.263.11.304.247a.34.34 0 0 1-.101.38m-3.314-.228a.36.36 0 0 1-.291-.21L12 8.757l-.874 1.979a.34.34 0 0 1-.291.21l-2.22.229 1.61 1.399a.36.36 0 0 1 .115.338l-.453 2.222 1.937-1.084a.35.35 0 0 1 .356 0l1.933 1.084-.453-2.222a.36.36 0 0 1 .115-.338l1.61-1.395z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.725 4.5c.703 0 1.275.555 1.275 1.235v12.53c0 .68-.572 1.235-1.275 1.235H3.275C2.572 19.503 2 18.948 2 18.268V5.738c0-.683.572-1.235 1.275-1.235 0-.003 17.45-.003 17.45-.003M2.834 5.738v2.04h18.332v-2.04a.435.435 0 0 0-.44-.427H3.274a.435.435 0 0 0-.441.427m18.332 12.527V8.587H2.834v9.68c0 .237.199.428.44.428l17.451-.003c.242 0 .441-.19.441-.427M5.676 6.603c.006.316.265.57.581.563.322 0 .58-.253.58-.563a.57.57 0 0 0-.58-.563.57.57 0 0 0-.58.563M8 7.166a.57.57 0 0 1-.58-.56v-.003c0-.31.258-.563.58-.563s.58.25.58.563c0 .31-.259.563-.58.563m-4.061-.563c.006.316.265.57.58.563.322 0 .581-.253.581-.563a.57.57 0 0 0-.58-.563.57.57 0 0 0-.581.563m9.118 6.77a.69.69 0 0 0-.19.578l.136.794-.692-.367a.69.69 0 0 0-.637.005l-.68.362.133-.794a.68.68 0 0 0-.187-.58l-.592-.584.796-.117a.69.69 0 0 0 .518-.373L12 11.61l.339.694a.7.7 0 0 0 .512.367l.8.117zm1.354-.837a.53.53 0 0 0-.424-.352l-1.027-.151q-.006-.001-.01-.006l-.001-.003-.464-.947a.53.53 0 0 0-.956 0l-.464.947-.002.003q-.004.005-.01.006l-1.035.15a.53.53 0 0 0-.425.353.53.53 0 0 0 .129.553l.748.736q.005.006.006.02l-.177 1.042a.53.53 0 0 0 .222.527c.086.062.19.093.299.093a.54.54 0 0 0 .25-.062l.928-.492v-.002l.001-.001H12l.003.001q0 .001.003.002l.925.492a.52.52 0 0 0 .549-.031.53.53 0 0 0 .222-.527l-.177-1.042q0-.014.006-.02l.751-.736a.53.53 0 0 0 .128-.553m4.485.837a.69.69 0 0 0-.185.578l.134.794-.692-.367a.69.69 0 0 0-.637.005l-.68.362.134-.794a.67.67 0 0 0-.188-.58l-.592-.584.797-.117a.69.69 0 0 0 .518-.373l.335-.688.34.694a.7.7 0 0 0 .511.367l.8.117zm1.358-.837a.53.53 0 0 0-.427-.352l-1.025-.151q-.006-.001-.009-.006l-.002-.003-.464-.947a.53.53 0 0 0-.956 0l-.464.947-.002.003q-.003.005-.01.006l-1.035.15a.53.53 0 0 0-.424.353.53.53 0 0 0 .128.553l.748.736q.005.006.006.02l-.176 1.042a.53.53 0 0 0 .222.527c.085.062.19.093.298.093a.55.55 0 0 0 .25-.062l.926-.492v-.003h.003l.005.003.928.492a.52.52 0 0 0 .55-.031.52.52 0 0 0 .221-.527l-.176-1.042q.001-.014.005-.02l.752-.736a.53.53 0 0 0 .128-.553m-13.037.837a.7.7 0 0 0-.193.578l.136.794-.691-.367a.69.69 0 0 0-.638.005l-.68.362.137-.794a.67.67 0 0 0-.188-.58l-.592-.584.797-.117a.69.69 0 0 0 .518-.373l.338-.688.34.694a.7.7 0 0 0 .511.367l.8.117zm1.355-.837a.53.53 0 0 0-.424-.352s-1.036-.151-1.03-.148q-.006-.001-.01-.007l-.002-.002-.464-.948a.53.53 0 0 0-.956 0l-.464.948q0 .001-.002.002-.003.006-.009.007l-1.036.15a.53.53 0 0 0-.424.353.53.53 0 0 0 .128.552l.749.737q.004.006.005.02l-.176 1.042a.531.531 0 0 0 .774.558l.928-.493v-.002h.005q.002.003.003.002l.925.493a.52.52 0 0 0 .55-.032.52.52 0 0 0 .221-.526l-.176-1.042q-.004-.014.006-.02l.75-.74a.53.53 0 0 0 .129-.552"
                />
            </svg>
        );
    }
};

export default IconRatingLight;
