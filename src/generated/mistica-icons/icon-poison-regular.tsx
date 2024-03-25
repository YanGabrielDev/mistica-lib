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

const IconPoisonRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.733 6.72c1.185.583 1.83 1.768 1.83 3.398l-.01 7.924c0 2.381-1.408 3.804-3.764 3.804H9.223c-1.16 0-2.081-.325-2.745-.969-.689-.67-1.039-1.622-1.039-2.835v-7.924c0-1.213.35-2.165 1.048-2.835.21-.204.456-.367.72-.507a1.4 1.4 0 0 1-.029-.269V3.583c0-.784.636-1.42 1.418-1.42h6.742c.782 0 1.418.638 1.418 1.42v2.924c0 .073-.012.143-.023.213m-8.361-.215c0 .123.098.224.221.224h6.742c.124 0 .222-.101.222-.224V3.58a.22.22 0 0 0-.222-.221H8.593c-.12 0-.221.1-.221.221zm8.756 12.829H6.868c.109.266.252.498.44.683.433.42 1.075.633 1.912.633h5.57v-.003c1.204 0 1.98-.448 2.338-1.313m.163-9.998c-.157-.795-.575-1.333-1.25-1.602-.207.12-.448.196-.706.196H8.593c-.238 0-.462-.064-.658-.17-.236.1-.451.224-.625.389-.302.291-.496.697-.597 1.187zm-10.656 8.75q.002.024.003.049h10.714q0-.023.003-.045l.003-.045.008-7.507H6.632v7.504q0 .023.003.044M8.809 5.576a.598.598 0 1 0 1.193 0V4.533a.6.6 0 0 0-.597-.6.6.6 0 0 0-.596.6zm2.305.599a.6.6 0 0 1-.597-.6V4.534a.598.598 0 1 1 1.193 0v1.042c0 .33-.265.599-.596.599m1.11-.6a.598.598 0 1 0 1.193 0V4.534a.6.6 0 0 0-.597-.6.6.6 0 0 0-.597.6zm2.302.6a.6.6 0 0 1-.597-.6V4.534a.6.6 0 0 1 .597-.6c.33 0 .596.269.596.6v1.042c.003.33-.266.599-.596.599m-.07 7.905c0-2.188-1.647-2.462-2.353-2.48-.081-.002-.168-.002-.25-.002h-.014c-.694.003-2.313.252-2.313 2.465 0 .997.33 1.703.977 2.104l.19.117v.432q0 .221.096.305c.073.067.196.098.359.098h1.694c.115 0 .266-.017.353-.095.079-.07.093-.208.093-.308v-.435l.187-.114c.65-.404.98-1.107.98-2.087M12.128 10.8c.515.012 3.126.224 3.126 3.278 0 1.431-.596 2.215-1.168 2.638 0 .482-.193.757-.356.9-.218.198-.518.302-.888.302h-1.694c-.373 0-.673-.104-.891-.305-.16-.14-.359-.418-.359-.894-.571-.42-1.168-1.207-1.168-2.655 0-3.093 2.589-3.264 3.107-3.266a.7.7 0 0 1 .21-.004q.039.005.081.006m-.835 4.152c.104 0 .205-.04.283-.118a.4.4 0 0 0 0-.566l-.232-.232.232-.233a.404.404 0 0 0 0-.566.396.396 0 0 0-.563 0l-.232.233-.233-.233a.396.396 0 0 0-.563 0 .404.404 0 0 0 0 .566l.233.233-.233.232a.404.404 0 0 0 0 .566.396.396 0 0 0 .563 0l.233-.232.232.232a.4.4 0 0 0 .28.118m2.502-.916.232.232a.404.404 0 0 1 0 .566.396.396 0 0 1-.563 0l-.232-.232-.233.232a.396.396 0 0 1-.563 0 .404.404 0 0 1 0-.566l.233-.232-.233-.233a.404.404 0 0 1 0-.566.396.396 0 0 1 .563 0l.233.233.232-.233a.396.396 0 0 1 .563 0 .404.404 0 0 1 0 .566zm-1.11 1.655-.12-.283a.395.395 0 0 0-.518-.213.2.2 0 0 0-.054.035l-.016.013-.017-.013a.2.2 0 0 0-.053-.035.396.396 0 0 0-.521.213l-.12.283a.4.4 0 0 0 .363.555.39.39 0 0 0 .345-.219.39.39 0 0 0 .501.188.4.4 0 0 0 .21-.524"
            />
        </svg>
    );
};

export default IconPoisonRegular;