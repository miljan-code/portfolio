import { useLoaderData } from 'react-router-dom';

const Project = () => {
  const projects = useLoaderData();

  console.log(projects);

  return <div>PROJECT !!!</div>;
};

export default Project;
