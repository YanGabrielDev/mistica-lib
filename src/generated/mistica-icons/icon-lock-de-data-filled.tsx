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

const IconLockDeDataFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.89 5.5c-1.24-.35-1.996-.827-2.195-1.373V4.12l-.009-.01c.2-.546.956-1.033 2.188-1.38 1.308-.37 3.037-.575 4.871-.575s3.563.205 4.86.574c1.3.37 2.034.852 2.196 1.426 0 0-.008.008-.008.017-.219.53-.964.986-2.177 1.328-1.308.37-3.028.574-4.86.574-1.837.003-3.557-.205-4.865-.574m-.352 10.296c0-1.89-1.63-2.05-2.048-2.058l-.074-.002-.083-.001H7.29c-.429.005-2.023.146-2.023 2.05 0 1.908 1.608 2.056 2.037 2.062h.196c.409-.009 2.039-.154 2.039-2.05m-1.14 0c0 .294 0 .905-.922.922h-.16c-.913-.011-.913-.61-.913-.933 0-.322 0-.913.897-.921h.162c.936.022.936.638.936.932m1.58-5.344v.585l-4.9.003v-.608c0-2.084 1.438-2.409 2.292-2.417l.255.003h.017c.703.017 2.336.288 2.336 2.434M3.61 19.208c-.241-.252-.227-.636-.224-.678v-5.333c0-.325.075-.557.238-.706.21-.196.56-.238.728-.238q.034 0 .06.002h.038l6.143-.005q.605 0 .866.272c.238.25.218.63.215.678 0 0-.003 3.566 0 5.32 0 .321-.078.55-.238.702-.244.23-.664.263-.843.252l-6.137.003q-.589 0-.846-.269m7.59-8.151c1.065.182 2.275.283 3.553.283 1.832 0 3.56-.199 4.854-.572 1.288-.367 1.997-.921 2.235-1.344V5.477c-.479.359-1.129.647-1.958.88-1.392.395-3.218.61-5.137.61s-3.742-.215-5.137-.61c-.849-.233-1.51-.538-1.986-.897v1.348l-.266-.003c-1.614.014-3.502.975-3.502 3.627v.653a2.2 2.2 0 0 0-1.059.507c-.29.266-.638.76-.638 1.602l.003 5.291c-.006.093-.05.908.543 1.541.409.44.997.661 1.745.661l3.98-.003c.362.216.835.412 1.437.583 1.317.367 3.045.574 4.872.574 1.823 0 3.551-.207 4.86-.574 1.492-.42 2.246-.994 2.246-1.695v-3.54c-.507.367-1.174.68-1.958.896-1.384.395-3.21.61-5.137.61-.639 0-1.255-.033-1.857-.08v-.902c.596.05 1.213.086 1.857.086 1.835 0 3.563-.207 4.862-.574 1.289-.37 1.998-.924 2.236-1.347v-3.983c-.507.367-1.174.672-1.958.888-1.384.395-3.21.61-5.137.61-.72 0-1.418-.039-2.093-.098a1.8 1.8 0 0 0-.294-.428c-.297-.32-.689-.519-1.165-.611z"
            />
        </svg>
    );
};

export default IconLockDeDataFilled;