import ProjectCard from "../../components/common/projectCard"; // Make sure the path is correct
import ProjectData from "../Data/projectData"; // Make sure the path is correct

export default function MyProjectsSection() { // It's good practice to name your components
  return (
    <div className="flex flex-row p-10">
      {ProjectData.map((pro) => ( // Added 'index' for key, important for lists
        <ProjectCard
          key={pro.key}
          title={pro.title}
          image={pro.image}
          description={pro.description}
          website={pro.website}
          scope={pro.scope}
        />
      ))}
    </div>
  );
}