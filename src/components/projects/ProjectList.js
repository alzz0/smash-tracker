import React from 'react';
import ProjectSummary from './ProjectSummary.js';
import { Link } from 'react-router-dom';
function ProjectList({ projects, auth }) {
  return (
    <div className='project-list seciton'>
      {projects &&
        projects.map(project => {
          return (
            <Link key={project.id} to={`/project/${project.id}`}>
              <ProjectSummary auth={auth} project={project} />
            </Link>
          );
        })}
    </div>
  );
}

export default ProjectList;
