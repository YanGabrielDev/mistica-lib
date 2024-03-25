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

const IconCloverRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.902 21.843c-1.648 0-3.53-.76-5.213-2.11l-.065-.056a11.7 11.7 0 0 1-2.899-3.417c-.062.53-.17 1.025-.353 1.428-.633 1.426-1.63 2.337-2.728 2.5q-.163.024-.35.024c-.569 0-1.297-.199-2.042-.947-1.306-.176-1.902-.809-2.174-1.324-.499-.947-.297-2.25.557-3.569.477-.745 1.418-1.476 2.41-2.098q-.275.01-.544.011c-1.003 0-1.98-.104-2.695-.395-1.493-.605-2.45-1.554-2.619-2.602-.092-.569.009-1.412.967-2.28.187-1.244.851-1.81 1.392-2.07.994-.476 2.358-.28 3.745.532.784.454 1.546 1.35 2.199 2.294-.042-1.129.039-2.28.4-3.084.636-1.426 1.63-2.336 2.728-2.499.597-.09 1.485.009 2.393.925 1.308.18 1.902.812 2.173 1.328.499.946.294 2.249-.56 3.568-.476.745-1.414 1.476-2.406 2.095 1.182-.039 2.39.04 3.235.384 1.499.605 2.454 1.555 2.622 2.603.093.568-.011 1.411-.966 2.28-.188 1.243-.852 1.812-1.392 2.07-.359.17-.765.255-1.202.255-.779 0-1.658-.267-2.543-.788a4.3 4.3 0 0 1-.653-.481 10.5 10.5 0 0 0 2.123 2.324l.07.054c1.485 1.193 3.129 1.863 4.462 1.823a.67.67 0 0 1 .757.224l.01.017.012.017a.59.59 0 0 1-.185.815.9.9 0 0 1-.443.143 6 6 0 0 1-.224.006m-7.09-18.457c-.63.095-1.3.773-1.745 1.773-.56 1.25-.25 3.908.005 5.213 1.266-.557 3.72-1.854 4.46-3.011.6-.927.792-1.84.507-2.387-.208-.392-.678-.624-1.4-.686l-.261-.022-.168-.188q-.629-.703-1.244-.703-.077.001-.154.011m-8.504 7.38c1.31.536 4.1.242 5.465-.002-.583-1.207-1.944-3.546-3.157-4.252-.675-.398-1.342-.608-1.88-.608-.235 0-.448.042-.622.126-.411.196-.655.644-.72 1.334l-.022.246-.199.163c-.549.448-.793.896-.723 1.33.099.602.81 1.241 1.858 1.664m5.885 6.446c.563-1.249.252-3.91-.006-5.213-1.266.558-3.72 1.855-4.462 3.012-.6.924-.793 1.837-.507 2.383.207.395.678.625 1.4.687l.261.022.168.188c.47.526.947.756 1.4.692.63-.093 1.3-.77 1.746-1.77m6.759-5.61c-1.308-.535-4.098-.238-5.47 0 .582 1.21 1.943 3.549 3.156 4.255.972.574 1.933.756 2.502.484.414-.199.655-.647.72-1.333l.025-.25.198-.16c.552-.447.796-.896.726-1.333-.095-.602-.81-1.24-1.857-1.663"
            />
        </svg>
    );
};

export default IconCloverRegular;