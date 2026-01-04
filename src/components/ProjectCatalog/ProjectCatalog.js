"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCatalog = void 0;
var ProjectCard_1 = require("@site/src/components/ProjectCard");
var toTuple = function (projects) { return Array.from({ length: Math.ceil(projects.length / 2) }, function (_, i) { return projects.slice(i * 2, i * 2 + 2); }); };
var ProjectCatalog = function (_a) {
    var projects = _a.projects;
    return (<>
    {toTuple(projects).map(function (row, rowIndex) { return (<div className="row margin-top--lg" key={"row-".concat(rowIndex)}>
        {row.map(function (p) { return (<div className="col col--6" key={p.repoUrl}>
            <ProjectCard_1.default name={p.name} repoUrl={p.repoUrl} description={p.description} license={p.license} type={p.type} language={p.language}/>
          </div>); })}
      </div>); })}
  </>);
};
exports.ProjectCatalog = ProjectCatalog;
