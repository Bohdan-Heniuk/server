export const Roles = {
  Recruter: "Recruter",
  Candidate: "Candidate",
};

export const VACANCY_POPULATED_FIELDS = ["company", "creator"];
export const CHAT_POPULATED_FIELDS = ["recruiter", "candidate", "vacancy"];
export const MESSAGE_POPULATED_FIELDS = ["user"];

export const EnglishLevel = {
  NoEnlgish: "No English",
  Beginner: "Beginner/Elementary",
  PreIntermediate: "Pre-Intermediate",
  Intermediate: "Intermediate",
  UpperIntermediate: "Upper-Intermediate",
  Advanced: "Advanced/Fluent",
};

export const filters = {
  specialties: {
    technical: [
      "Frontend",
      "NodeJs",
      "Java",
      "Python",
      "PHP",
      "GoLang",
      "IOS",
      "Android",
      "C# / .NET",
      "C / C++ / Embedded",
      "Rust",
      "SalesForse",
      "QA Manual",
      "QA Automation",
      "Design / UI/UX 2D/3D Artist / Illustrator",
      "Project Manager",
      "Product Manager Architect / CTO",
      "DevOps",
      "Business Analyst",
      "Data Science",
      "Data Analyst",
      "Sysadmin",
      "Gamedev / Unity",
      "SQL / DBA",
      "Security Data Engineer",
      "Scrum Master / Agile Coach",
    ],

    nonTechnical: [
      "Marketing",
      "HR",
      "Recruiter",
      "Customer/Technical",
      "Support",
      "Sales",
      "SEO",
      "Technical Writing,",
      "Lead Generation",
    ],
  },
  experiences: [
    { text: "Без досвіду", value: 0 },
    { text: "1 рік", value: 1 },
    { text: "2 роки", value: 2 },
    { text: "3 роки", value: 3 },
    { text: "5 років", value: 5 },
  ],
};
