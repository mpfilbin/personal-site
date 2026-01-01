import React from 'react';
import 'devicon';

interface DevIconProps {
    name: string,
    size?: string,
    colored?: boolean
    style?: Record<string, string>,
}

const LanguageIcon = (props: DevIconProps) => {
    let style: Record<string, string> = {
        fontSize: "5rem"
    };

    if (props.style) {
        style = props.style;
    }
    if (props.size) {
        style.fontSize = props.size;
    }

    let format = `devicon-${props.name}`;

    if (!style.colored) {
        format += " colored";
    }

    return (
            <i className={`${format}`} style={style}></i>
    );
}

export default LanguageIcon;

