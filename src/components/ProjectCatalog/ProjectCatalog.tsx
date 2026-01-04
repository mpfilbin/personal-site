import { type FC } from "react";
import ProjectCard from "@site/src/components/ProjectCard";

interface Project {
  name: string;
  repoUrl: string;
  description: string;
  license: string;
  type: string;
  language: string;
}
interface ProjectCatalogProps {
  projects: Project[];
}


const toTuple = (projects: Project[]) => Array.from(
  { length: Math.ceil(projects.length / 2) },
  (_, i) => projects.slice(i * 2, i * 2 + 2)
);

export const ProjectCatalog: FC<ProjectCatalogProps> = ({ projects }) => (
  <>
    {toTuple(projects).map((row, rowIndex) => (
      <div className="row margin-top--lg" key={`row-${rowIndex}`}>
        {row.map((p) => (
          <div className="col col--6" key={p.repoUrl}>
            <ProjectCard
              name={p.name}
              repoUrl={p.repoUrl}
              description={p.description}
              license={p.license}
              type={p.type}
              language={p.language}
            />
          </div>
        ))}
      </div>
    ))}
  </>
)