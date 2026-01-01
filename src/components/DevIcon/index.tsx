import React from 'react';
import 'devicon';

export interface DevIconProps {
    name: string;
    size?: string;
    colored?: boolean;
    style?: React.CSSProperties;
}

const DevIcon = (props: DevIconProps) => {
    // Default style
    const style: React.CSSProperties = {
        fontSize: '5rem',
        ...(props.style || {}),
    };

    // Allow size override
    if (props.size) {
        style.fontSize = props.size;
    }

    // devicon expects a class like `devicon-typescript-plain` and optionally `colored`
    let className = `devicon-${props.name}`;

    // Default: add `colored` class unless explicitly disabled
    if (props.colored !== false) {
        className += ' colored';
    }

    return <i className={className} style={style} aria-hidden />;
};

export default DevIcon;

