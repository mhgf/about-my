import { myResume } from "../../utils/load_file";
import { getMonths } from "../../utils/months";
import Card from "./card";
import LineItem from "./lineItem";

export default function Certification() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl text-slate-300">Cursos e Certificações</h1>
      <div className="flex flex-row flex-wrap gap-x-9 gap-y-4">
        {myResume.certifications.map((x) => {
          return (
            <>
              <Card
                link={x.Url}
                authority={x.Authority}
                startDate={x.StartedOn}
                title={x.Name}
                credencialId={x.LicenseNumber}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
