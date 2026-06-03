import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"; // used for calling the API

import AddTask from "../components/AddTask"; // for rendering Task Add Form
import TaskCard from "../components/TaskCard"; // for rendering Task List

function ProjectDetailsPage () {

  const { projectId } = useParams() // destructuring the project id from dynamic params (see App.jsx => /:projectId)

  const [ project, setProject ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {

      // call the API here to receive project details...

      setIsLoading(false) // render the component once the data finished loading

    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }

  if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here
  
  return (
    <div className="ProjectDetailsPage">

      <div>
        <h1>PROJECT_NAME</h1>
        <p>PROJECT_DESCRIPTION</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}

      {/* example of a single TaskCard being rendered */}
      {/* <TaskCard /> */}

      {/* ... form for adding a new Task should be rendered here    */}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/PROJECT_ID_HERE`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;
