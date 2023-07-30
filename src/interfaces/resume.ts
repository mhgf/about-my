export interface MyResume {
  positions: Position[];
  certifications: Certification[];
  skills: string[];
  phones: Phone[];
  educations: Education[];
}

interface Position {
  CompanyName: string;
  Title: string;
  Description: string;
  Location: string;
  StartedOn: string;
  FinishedOn: string;
}

interface Certification {
  Name: string;
  Url: string;
  Authority: string;
  StartedOn: string;
  FinishedOn: string;
  LicenseNumber: string;
}

interface Phone {
  code: string;
  number: string;
}

interface Education {
  SchoolName: string;
  StartDate: number;
  EndDate: number;
  Notes: string;
  DegreeName: string;
  Activities: string;
}
