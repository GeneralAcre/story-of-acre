import Titanic from './titanic';

export default function Projects() {
  return (
    <div >
        <header className="w-full text-[40px] sm:text-[45px] md:text-[60px] lg:text-[100px] xl:text-[140px] 
              leading-none tracking-wide font-bold mb-8 ">PROJECTS</header>

        <Titanic/> {/* Titanic Project*/}

        <div className="mb-[50px]"></div>


    </div>
  );
}