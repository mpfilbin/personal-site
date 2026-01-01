import React from 'react';
import styles from './styles.module.css';
import LanguageIcon from '@site/src/components/LanguageIcon';
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

export default function ProjectCard({name, repoUrl, description, license, type = 'project', language}: ProjectCardProps) {
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
    };
    return map[lang.toLowerCase()] || lang.toLowerCase();
  };

  const iconKey = deviconKey(language);

  // Helpers to map values to Pill variants
  const typeVariant = (t?: ProjectType) => (t === 'experiment' ? 'experiment' : 'project');
  const licenseVariant = (l?: LicenseType) => {
    if (!l) return 'secondary';
    if (l === 'MIT') return 'success';
    if (l === 'GPL') return 'warning';
    return 'secondary';
  };

  return (
    <article className={`${styles.card} card`} aria-labelledby={`project-${name.replace(/\s+/g,'-')}`}>
      <div className={styles.cardBody}>
        {/* Header: language icon (left) and project name */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            {iconKey && (
              <LanguageIcon name={iconKey} size={"16pt"} />
            )}

            <h3 id={`project-${name.replace(/\s+/g,'-')}`} className={styles.title}>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="link">
                {name}
              </a>
            </h3>
          </div>

npm          {/* keep headerRight area minimal; license badge moved to actions row */}
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
              className="button button--primary"
              aria-label={`Fork ${name} on GitHub`}
            >
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.7 7.7 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>

              <span>Fork</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
