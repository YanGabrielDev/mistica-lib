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

const IconMoneyRiseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.328 6.244a.57.57 0 0 0 .513.334l1.387.011.002 2.23c-.002.504.401.914.905.92h1.752a.913.913 0 0 0 .904-.92l-.002-2.23 1.38-.011a.57.57 0 0 0 .514-.334.62.62 0 0 0-.101-.664l-3.127-3.21a.55.55 0 0 0-.507-.21c-.151.02-.286.095-.345.179l-3.2 3.272a.61.61 0 0 0-.075.633m-11.42.99c0-.236.188-.426.42-.426h.6l-.012-.142c-.012-.124-.024-.248-.024-.382q0-.065.009-.122.006-.047.008-.097h-.58a.426.426 0 0 1 0-.852h.664c.35-1.921 1.69-2.97 3.877-2.97.788 0 1.474.135 2.04.401.21.101.303.353.204.566a.42.42 0 0 1-.551.21l-.006-.002c-.454-.213-1.023-.323-1.687-.323-1.72 0-2.706.704-3.02 2.118h2.382c.232 0 .42.191.42.426a.423.423 0 0 1-.42.426H4.747l-.007.09a1 1 0 0 0-.007.129c0 .185.016.35.032.519l.001.007h2.468c.233 0 .42.19.42.426a.423.423 0 0 1-.42.426H4.92C5.304 8.875 6.28 9.47 7.87 9.47c.673 0 1.247-.112 1.704-.33a.42.42 0 0 1 .557.204c.101.213.009.465-.201.566-.57.275-1.264.412-2.062.412-2.065 0-3.365-.941-3.802-2.659h-.737a.427.427 0 0 1-.42-.429m15.104-4.108s2.539 2.606 2.536 2.606l-1.042.008a.58.58 0 0 0-.558.591l.003 2.491a.063.063 0 0 1-.064.064h-1.754a.066.066 0 0 1-.065-.067l-.003-2.476V6.34a.585.585 0 0 0-.568-.6l-1.029-.008zm2.222 17.623c-1.05.316-2.855.316-3.9.002-.23-.072-.77-.268-.77-.543v-1.185q.256.131.535.215c.594.183 1.37.284 2.19.284s1.598-.101 2.192-.284a3 3 0 0 0 .523-.218v1.188c0 .275-.54.47-.77.54m-5.51-.46c-.099.146-.354.334-.768.46-1.043.316-2.858.316-3.895 0-.437-.132-.692-.311-.779-.449v-1.32q.257.132.536.216c.594.185 1.372.284 2.19.284.819 0 1.597-.101 2.191-.284.18-.058.356-.128.524-.218zm-7.053.46c-1.042.319-2.857.319-3.897 0-.46-.143-.697-.323-.779-.449v-1.308q.257.131.536.216c.594.182 1.372.283 2.19.283.819 0 1.597-.101 2.191-.283q.298-.093.527-.21v1.291c-.1.149-.356.334-.768.46m-4.62-2.766c.101-.143.35-.288.715-.4 1.042-.314 2.858-.314 3.897.003.193.058.594.201.726.409-.065.095-.238.249-.72.397-1.034.317-2.86.317-3.897 0-.373-.114-.625-.263-.72-.409m7-2.765c1.038-.32 2.857-.32 3.902 0 .193.059.594.205.725.41-.07.097-.243.254-.722.4-1.043.316-2.858.316-3.897 0-.485-.149-.662-.305-.726-.404.095-.145.347-.294.717-.406m5.566-1.933c.073-.1.255-.252.717-.395 1.042-.317 2.858-.317 3.9 0 .193.059.594.204.726.409-.068.098-.241.252-.72.4-1.04.317-2.864.317-3.9 0-.376-.114-.633-.265-.723-.414m-.053 3.37q.256.131.538.216c.596.182 1.375.28 2.19.28.816 0 1.595-.098 2.191-.28a3 3 0 0 0 .524-.218v1.31c-.098.146-.353.334-.767.46-1.037.317-2.86.317-3.897 0-.437-.131-.693-.31-.78-.448zm0-2.356q.255.131.532.216c.597.182 1.373.283 2.194.286.818 0 1.597-.101 2.19-.283a3.4 3.4 0 0 0 .524-.21v1.291c-.098.146-.353.33-.764.457-1.045.316-2.858.316-3.9 0-.46-.14-.695-.322-.776-.448zM9.28 16.627q.256.131.535.216c.6.185 1.375.283 2.19.283.816 0 1.595-.1 2.191-.283q.275-.084.527-.21v1.292c-.081.12-.305.316-.767.456-1.037.317-2.86.317-3.897 0-.46-.14-.698-.32-.78-.448zm12.565-3.196c0-.429-.238-1.009-1.37-1.356-1.196-.364-3.188-.364-4.385-.003-.745.23-1.193.586-1.328 1.059a1.2 1.2 0 0 0-.039.3v1.185a3 3 0 0 0-.53-.216c-1.196-.364-3.193-.364-4.384 0q-1.124.345-1.328 1.06a1 1 0 0 0-.042.299v1.224a3 3 0 0 0-.532-.216c-1.194-.364-3.186-.364-4.382 0-.745.23-1.19.586-1.328 1.057l-.003.005q-.038.145-.039.297v2.365c0 .14.07.269.188.347.232.306.63.558 1.188.729.596.182 1.375.283 2.19.283.816 0 1.595-.101 2.191-.283.384-.115.698-.292.939-.496.238.199.555.372.964.496.6.182 1.375.283 2.19.283.816 0 1.592-.101 2.191-.283.345-.101.665-.27.939-.496.207.185.513.358.958.496.6.179 1.379.28 2.191.28.813 0 1.589-.101 2.191-.283 1.132-.348 1.37-.93 1.37-1.359z"
            />
        </svg>
    );
};

export default IconMoneyRiseLight;
