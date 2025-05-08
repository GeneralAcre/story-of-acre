import SectionHeader from '../Components/Info';
import ProjectModal from '../Components/ProjectCard';

export default function ProjectCard() {
  return (
    <div className="p-6">
      {/* Consistent header */}
      <SectionHeader label="PROJECT NAME" />

      {/* Project block */}
      <div className="bg-[#D61A69] text-white text-[28px] sm:text-[36px] font-bold leading-[40px] ml-0 sm:ml-[60px] inline-flex flex-col p-4">
        <p>TITANIC</p>
        <p>SURVIVAL</p>
        <p>PREDICTION</p>
      </div>

      {/* Modal */}
      <ProjectModal
        year="2025"
        name="TITANIC SURVIVAL PREDICTION"
        role="Design & Coding"
        timeline="February - April 2025"
        description="This website was created to predict Titanic’s survival rate. To analyze what type of person is most likely to survive the Titanic."
        overview="For a very long time, I have enjoyed watching Titanic. Its story astounded me. I occasionally consider what kind of person would have the best chance of surviving if they were on the Titanic. I therefore made the decision to create a website that predicts survival chance using data from Kaggle."
      />
    </div>
  );
}