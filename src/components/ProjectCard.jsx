import { Link } from "react-router-dom";

function ProjectCard () {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/PROJECT_ID_HERE`}>
        <h3>PROJECT_TITLE_HERE</h3>
      </Link>
      <p>PROJECT_DESCRIPTION_HERE</p>
    </div>
  );
}

export default ProjectCard;