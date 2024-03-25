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

const IconChildFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.844 15.129c0-1.58-1.13-2.152-2.098-2.16v-.216l-.042-1.734c0-.087 0-.17-.012-.263-.137-2.135-.742-5.773-3.952-6.219-.063-.009-.11-.012-.167-.017l-.035-.002-.19-.017a8 8 0 0 0-1.014-.003h-1.387c.062-.143.101-.305.101-.498q0-.502-.274-.768-.268-.252-.757-.252c-.325 0-.582.084-.756.252-.185.174-.277.434-.277.768 0 .196.042.355.103.498H9.676a7 7 0 0 0-.53-.022c-3.89 0-4.723 2.725-4.89 5.843H2.753a.59.59 0 0 0-.594.585.59.59 0 0 0 .594.586h1.473l-.005 1.482c-.958.022-2.062.596-2.062 2.157 0 1.58 1.137 2.156 2.107 2.17h.165c.056 0 .14-.005.24-.017.553 2.04 1.771 3.737 4.471 3.737.185 0 .359-.008.49-.02h4.662l.092.005q.207.013.429.015c.182 0 .355-.008.487-.02h.216a.6.6 0 0 0 .207-.039c2.118-.288 3.1-1.963 3.566-3.683q.004 0 .01.002h.004q.169.021.263.02h.165c.975-.014 2.11-.59 2.11-2.17M8.07 10.316c.16-1.737.761-3.123 1.803-4.12a5 5 0 0 1 .566-.465l.098-.065 3.2-.003.1.068c.196.145.39.297.563.465 1.042.997 1.642 2.383 1.804 4.12h-1.193c-.149-1.4-.628-2.504-1.437-3.277-.395-.378-.888-.661-1.437-.885-.55.221-1.045.507-1.44.885-.81.776-1.286 1.877-1.437 3.277zm10.484 1.58v1.7a.4.4 0 0 0-.011.104c-.14 5.213-1.832 5.986-3.095 6.112a1 1 0 0 0-.084.014h-.101a7 7 0 0 1-.933-.003l-4.74.003a8 8 0 0 1-.448.017c-2.498 0-3.616-1.838-3.73-6.146a1 1 0 0 0-.012-.1l.008-2.107h13.12l.008.148q.005.074.007.154 0 .054.011.104m-8.944 3.79c.328 0 .594-.26.594-.585v-1.833a.59.59 0 0 0-.594-.585.59.59 0 0 0-.594.585V15.1a.59.59 0 0 0 .594.586m4.258 1.574a.58.58 0 0 1 0 .83c-.566.557-1.177.848-1.818.856h-.037c-.65 0-1.274-.288-1.851-.86a.58.58 0 0 1 0-.829.6.6 0 0 1 .84 0c.353.35.703.518 1.031.518.32-.005.656-.179.994-.515a.6.6 0 0 1 .84 0m.47-4.577a.59.59 0 0 1 .594.585V15.1a.59.59 0 0 1-.594.586.59.59 0 0 1-.593-.585v-1.833a.59.59 0 0 1 .593-.585m6.317 2.448c0 .653-.317.99-.938.997h-.13q-.017 0-.053-.002a16 16 0 0 0 .159-1.5q.006-.062.007-.128l.039-.353q.914.017.916.986m-16.247.997-.126.003c-.624-.008-.938-.344-.938-.997 0-.63.297-.955.871-.98l.028.344q.005.079.018.151.008.053.013.104c.03.454.081.916.154 1.373q-.01.002-.02.002"
            />
        </svg>
    );
};

export default IconChildFilled;
