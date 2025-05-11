const PersonalInputsArray = [
  {
    type: "text",
    name: "FirstName",
    required: true,
  },
  {
    type: "text",
    name: "MiddleName",
    required: false,
  },
  {
    type: "text",
    name: "LastName",
    required: true,
  },
  { type: "email", name: "Email", required: true },
  { type: "number", name: "Number", required: true },
  { type: "text", name: "City", required: true },
  { type: "text", name: "State", required: true },
  { type: "text", name: "Zip", required: true },
  { type: "url", name: "Website", required: false },
  { type: "url", name: "GitHub", required: false },
  { type: "url", name: "LinkedIn", required: false },
];

const Education = [
  { type: "text", name: "Degree", required: true },
  { type: "text", name: "University", required: true },
  { type: "month", name: "Year", required: true },
  { type: "text", name: "CGPA", required: false },
  { type: "text", name: "EducationLocation", required: false },
  { type: "text", name: "EducationDescription", required: false },
];

const Experience = [
  { type: "text", name: "Company", required: true },
  { type: "text", name: "Position", required: true },
  { type: "month", name: "ExperienceStartDate", required: true },
  { type: "month", name: "ExperienceEndDate", required: false },
  { type: "text", name: "ExperienceLocation", required: false },
  { type: "text", name: "ExperienceDescription", required: false },
];

const Projects = [
  { type: "text", name: "ProjectName", required: true },
  { type: "month", name: "ProjectsstartDate", required: true },
  { type: "month", name: "ProjectsendDate", required: false },
  { type: "text", name: "ProjectDescription", required: true },
  { type: "text", name: "ProjectLink", required: false },
];

export { PersonalInputsArray, Education, Experience, Projects };
