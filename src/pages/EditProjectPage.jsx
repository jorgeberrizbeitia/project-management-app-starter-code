import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // used for calling the API

function EditProjectPage() {

  const navigate = useNavigate()
  const { projectId } = useParams() // destructuring the project id from dynamic params (see App.jsx => /:projectId)
  
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  // const [ isLoading, setIsLoading ] = useState(true)

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    try {
      // call the API here to edit one project...
      
    } catch (error) {
      console.log(error)
      //todo proper error handling here 
    }
  };

  const deleteProject = async() => {
    try {
      // call the API here to delete one project...
      
    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }; 

  // if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>      
    </div>
  );
}

export default EditProjectPage;
