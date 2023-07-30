import { myResume } from "../../utils/load_file";
import { getMonths } from "../../utils/months";
import LineItem from "./lineItem";

export default function JobsEducations() {
  const months = getMonths();
  const mountPositions = () => {
    return myResume.positions.map((position) => {
      const start = position.StartedOn.split(" ") as string[];
      const end = position.FinishedOn.split(" ");
      const month = months[start[0]] ?? start[0];

      const endMonth = end.length >= 2 ? months[end[0]] ?? end[0] : undefined;
      const endMonthFormat = endMonth ? `${endMonth} ${end[1]}` : undefined;
      return (
        <>
          <LineItem
            startDate={`${month} ${start[1]}`}
            endDate={endMonthFormat}
            title={position.Title}
            subTitle={position.CompanyName}
            description={position.Description}
          />
        </>
      );
    });
  };

  const mountEducation = () => {
    return myResume.educations.map((education) => {
      return (
        <>
          <LineItem
            startDate={education.StartDate.toString()}
            endDate={
              education.EndDate || education.EndDate !== 0
                ? education.EndDate.toString()
                : undefined
            }
            title={education.DegreeName}
            subTitle={education.SchoolName}
          />
        </>
      );
    });
  };
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <h1 className="text-4xl text-slate-300">Experiencias</h1>

        <div className="mt-5 px-3">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-5">
            {mountPositions()}
          </ol>
        </div>
      </div>
      <div className="basis-1/2">
        <h1 className="text-4xl text-slate-300">Educação</h1>

        <div className="mt-5 px-3">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-5">
            {mountEducation()}
          </ol>
        </div>
      </div>
    </div>
  );
}
