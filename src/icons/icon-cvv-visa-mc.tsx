import * as React from 'react';
import {vars} from '../skins/skin-contract.css';

type Props = {
    role?: string;
    size?: number | string;
    color?: string;
};

const IconCvvVisaMc: React.FC<Props> = ({role = 'presentation', size = 48, color}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" role={role} style={{flexShrink: 0}}>
            <g fill={color || vars.colors.brand}>
                <path
                    d="M2.571 0H45.43C46.849 0 48 1.075 48 2.4v27.2c0 1.325-1.151 2.4-2.571 2.4H2.57C1.151 32 0 30.925 0 29.6V2.4C0 1.075 1.151 0 2.571 0zm0 1.2c-.71 0-1.285.537-1.285 1.2v27.2c0 .663.575 1.2 1.285 1.2H45.43c.71 0 1.285-.537 1.285-1.2V2.4c0-.663-.575-1.2-1.285-1.2H2.57z"
                    transform="translate(0 8)"
                />
                <path
                    d="M0 7.2H48V12H0zM28.286 18.4H42c.473 0 .857.358.857.8v6.4c0 .442-.384.8-.857.8H28.286c-.474 0-.857-.358-.857-.8v-6.4c0-.442.383-.8.857-.8zm.268 1.05v5.9h13.178v-5.9H28.554z"
                    transform="translate(0 8)"
                />
                <path
                    d="M31.02 24v-2.693h-.045l-.89.572v-.659l.937-.602h.756V24h-.758zm2.577-2.37c0-.653.537-1.099 1.32-1.099.757 0 1.284.406 1.284.987 0 .368-.213.684-.841 1.235l-.693.617v.042h1.587V24H33.64v-.495l1.182-1.08c.51-.464.638-.64.638-.86 0-.272-.236-.464-.567-.464-.352 0-.593.215-.593.527v.014h-.703v-.012zm5.093.903v-.528h.442c.344 0 .578-.187.578-.464 0-.271-.226-.445-.58-.445-.352 0-.585.185-.605.478h-.7c.024-.64.534-1.043 1.325-1.043.743 0 1.278.38 1.278.912 0 .391-.263.696-.668.773v.043c.497.051.809.36.809.806 0 .593-.598 1.022-1.424 1.022-.809 0-1.356-.417-1.389-1.055h.726c.023.286.281.466.67.466.38 0 .643-.199.643-.487 0-.295-.248-.478-.655-.478h-.45z"
                    transform="translate(0 8)"
                />
            </g>
        </svg>
    );
};

export default IconCvvVisaMc;
