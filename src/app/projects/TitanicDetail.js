export default function EndResult(){
    return(
        <div className="mt-[50px] w-full bg-[#D61A69] h-[1000px]"> {/* Extra details specific to this project */}
            <h1 className="mt-[50px]">END RESULT</h1>
            <div>This is end result</div>
        </div>
    )
}
export function OtherDetails() {
    return (
      <div className="mt-4">
        <h4 className="text-blue-600 font-bold">Tech Stack</h4>
        <p className="text-sm">Next.js, Tailwind CSS, and TensorFlow.js</p>
      </div>
    );
  }