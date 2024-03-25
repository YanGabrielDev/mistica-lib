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

const IconShareFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.625 3.003c.589.014 2.875.246 2.875 3.005 0 2.765-2.29 2.98-2.863 2.99L17.46 9h-.098c-.435-.007-1.738-.123-2.426-1.24l-5.557 3.242c.077.291.121.624.121 1.006 0 .376-.042.704-.117.992l5.544 3.233c.68-1.12 1.977-1.23 2.414-1.233h.06c.077 0 .156 0 .224.003.589.014 2.875.246 2.875 3.005 0 2.765-2.29 2.98-2.863 2.99L17.46 21h-.098c-.602-.01-2.862-.227-2.862-3.01q0-.288.03-.54L8.8 14.107c-.722.793-1.796.884-2.163.891L6.46 15h-.097c-.603-.01-2.863-.227-2.863-3.01C3.5 9.213 5.738 9.006 6.341 9h.06c.077 0 .156 0 .224.003.376.009 1.444.107 2.167.895l5.741-3.35a5 5 0 0 1-.033-.557c0-2.78 2.238-2.986 2.841-2.991h.06c.077 0 .156 0 .224.003"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18 14.856a3.5 3.5 0 0 0-2.741 1.328L9.38 13.032a3.608 3.608 0 0 0-.036-2.176L15.247 7.8a3.5 3.5 0 0 0 2.75 1.344c1.943 0 3.527-1.604 3.527-3.572S19.944 2 18 2s-3.527 1.604-3.527 3.572c0 .332.051.652.13.956l-5.973 3.1a3.47 3.47 0 0 0-2.623-1.2C4.064 8.428 2.48 10.032 2.48 12s1.584 3.572 3.527 3.572a3.51 3.51 0 0 0 2.702-1.28l5.902 3.164a3.6 3.6 0 0 0-.138.972C14.473 20.396 16.057 22 18 22s3.528-1.604 3.528-3.572-1.584-3.572-3.528-3.572"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.172 11.998c0-6.72 3.594-9.823 9.826-9.823 6.23 0 9.827 3.103 9.827 9.823s-3.594 9.827-9.827 9.827c-6.232 0-9.826-3.107-9.826-9.827m8.431.608q.052-.284.053-.608c0-.213-.016-.412-.064-.596l2.647-1.325q.08.107.174.204c.42.431 1.033.658 1.776.658.742 0 1.355-.226 1.776-.658.414-.423.624-1.011.624-1.75 0-.77-.227-1.379-.675-1.805-.415-.394-1.014-.605-1.723-.605-.708 0-1.305.21-1.722.605-.448.426-.675 1.034-.675 1.804q.001.264.036.502l-2.692 1.344a2 2 0 0 0-.165-.179c-.415-.395-1.014-.605-1.723-.605-.708 0-1.305.21-1.722.605-.449.426-.675 1.034-.675 1.804 0 .737.21 1.328.624 1.75.42.432 1.034.659 1.776.659s1.356-.227 1.776-.658q.06-.06.11-.124l2.694 1.348a3 3 0 0 0-.037.495c0 .737.21 1.328.625 1.751.42.432 1.034.659 1.776.659s1.356-.227 1.776-.659c.415-.423.625-1.011.625-1.75 0-.77-.227-1.379-.675-1.804-.415-.395-1.014-.605-1.723-.605s-1.305.21-1.723.605c-.084.078-.16.168-.23.26z"
                />
            </svg>
        );
    }
};

export default IconShareFilled;
