import React from 'react';
import styles from './styles.module.css';
import DevIcon from '@site/src/components/DevIcon';
import Pill from '@site/src/components/Pill';

export type LicenseType = 'MIT' | 'GPL' | 'Unlicensed' | string;
export type ProjectType = 'project' | 'experiment' | string;

interface ProjectCardProps {
    name: string;
    repoUrl: string; // full GitHub repo url e.g. https://github.com/owner/repo
    description: string;
    license?: LicenseType;
    type?: ProjectType;
    language?: string; // devicon language key, e.g. typescript, go, csharp, python
}

export default function ProjectCard({
                                        name,
                                        repoUrl,
                                        description,
                                        license,
                                        type = 'project',
                                        language
                                    }: ProjectCardProps) {
    const forkUrl = repoUrl.endsWith('/') ? `${repoUrl}fork` : `${repoUrl}/fork`;

    // Map some language names to devicon keys if necessary
    const deviconKey = (lang?: string) => {
        if (!lang) return null;
        const map: Record<string, string> = {
            typescript: 'typescript-plain',
            javascript: 'javascript-plain',
            python: 'python-plain',
            go: 'go-original-wordmark',
            rust: 'rust-original',
            csharp: 'csharp-plain',
            'c#': 'csharp-plain',
            java: 'java-plain',
            shell: 'bash-plain',
            ruby: 'ruby-plain',
        };
        return map[lang.toLowerCase()] || lang.toLowerCase();
    };

    const iconKey = deviconKey(language);

    // Helpers to map values to Pill variants
    const typeVariant = (t?: ProjectType) => (t === 'experiment' ? 'info' : 'success');
    const licenseVariant = (l?: LicenseType) => {
        if (!l) return 'secondary';
        if (l === 'MIT') return 'success';
        if (l === 'GPL') return 'warning';
        return 'secondary';
    };

    return (
        <article className={`${styles.card} card`} aria-labelledby={`project-${name.replace(/\s+/g, '-')}`}>
            <div className={styles.cardBody}>
                {/* Header: language icon (left) and project name */}
                <div className={styles.headerRow}>
                    <div className={styles.headerLeft}>
                        {iconKey && (
                            <DevIcon name={iconKey} size={"16pt"}/>
                        )}

                        <h3 id={`project-${name.replace(/\s+/g, '-')}`} className={styles.title}>
                            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="link">
                                {name}
                            </a>
                        </h3>
                    </div>

                    {/* keep headerRight area minimal; license badge moved to actions row */}
                </div>

                <p className={styles.description}>{description}</p>

                {/* Actions row: pills on the left, Fork button on the right (level with pills) */}
                <div className={styles.actionsRow}>
                    <div className={styles.pillsRow}>
                        {type && (
                            <Pill variant={typeVariant(type)}>
                                {type}
                            </Pill>
                        )}

                        <Pill variant={licenseVariant(license)}>
                            {license ?? 'Unlicensed'}
                        </Pill>
                    </div>

                    <div className={styles.actions}>
                        <a
                            href={forkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`button button--primary ${styles.forkButton}`}
                            aria-label={`Fork ${name} on GitHub`}
                        >
                            <DevIcon name="github-original" className={styles.buttonIcon} size={"16pt"} style={{ color: 'white' }} />
                            <span>Fork</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
