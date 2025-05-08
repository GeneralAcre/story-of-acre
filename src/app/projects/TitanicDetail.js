export default function EndResult(){
    return(
        <div className="mt-4"> {/* Extra details specific to this project */}
        <h4 className="text-pink-600 font-bold">Prediction Accuracy</h4>
        <p className="text-sm">Achieved ~85% accuracy using cross-validation.</p>
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