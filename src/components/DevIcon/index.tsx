import { CSSProperties } from 'react';
import clsx from 'clsx';
import 'devicon';

export interface DevIconProps {
    name: string;
    size?: string;
    colored?: boolean;
    style?: CSSProperties;
    className?: string;
    title?: string;
}

function DevIcon({
    name,
    size,
    colored = true,
    style,
    className,
    title,
}: DevIconProps) {
    const iconStyle: CSSProperties = {
        fontSize: size ?? '5rem',
        ...style,
    };

    const iconClassName = clsx(
        `devicon-${name}`,
        colored && 'colored',
        className
    );

    return title ? (
        <span role="img" aria-label={title} title={title}>
            <i
                className={iconClassName}
                style={iconStyle}
                aria-hidden="true"
            />
        </span>
    ) : (
        <i
            className={iconClassName}
            style={iconStyle}
            aria-hidden="true"
        />
    );
}

export default DevIcon;

