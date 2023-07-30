import { myResume } from "../../utils/load_file";
import Certification from "./certification";
import JobsEducations from "./jobs_education";
import Me from "./me";

export default function About() {
  return (
    <div>
      <Me />
      <div className="mt-10 pt-10 border-t border-zinc-500"></div>

      <div
        className="flex flex-row flex-wrap justify-center
       space-x-4 mb-6"
      >
        {myResume.skills.map((x) => {
          return (
            <>
              <span className="text-sm  text-slate-300  ">{x}</span>
            </>
          );
        })}
      </div>

      <JobsEducations />

      <div className="mt-10 pt-10 border-t border-zinc-500"></div>

      <Certification />
    </div>
  );
}
