import { useState } from 'react';
import NoProject from './components/NoProject';
import Sidebar from './components/Sidebar';
import ProjectForm from './components/ProjectForm';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './__models__/project.model';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState<Project | null>(null);

  const [projects, setProjects] = useState<Project[]>([]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSave = (project: Project) => {
    setProjects((prevProjects: Project[]) => [...prevProjects, project]);
    setShowForm(false);
  };

  const handleShowDetail = (project: Project) => {
    setShowDetail(project);
  };

  const handleClose = () => {
    setShowDetail(null);
  };

  return (
    <main className="flex h-screen w-screen pt-8">
      <Sidebar list={projects} onOpen={handleShowDetail} onShowProjectFrom={handleShowForm} />
      {!showForm && !showDetail && <NoProject onShowProjectFrom={handleShowForm} />}
      {showForm && <ProjectForm onCancel={handleCancel} onSave={handleSave} />}
      {showDetail && <ProjectDetail project={showDetail} onClose={handleClose} />}
    </main>
  );
};

export default App;
