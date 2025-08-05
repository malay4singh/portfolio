import Office from "./Office";

interface Work {
  name: string;
  position: string;
  date: string;
  image: string;
}

function WorkExperience() {
  const work: Array<Work> = [
    {
      name: "HashedIn by Deloitte",
      position: "DevOps Intern",
      date: "April 2025 - Present",
      image:
        "https://www.greatplacetowork.in/great/api/assets/uploads/4437/logo/logo.png",
    },
    {
      name: "National Informatics Centre",
      position: "MERN Stack Intern",
      date: "May 2024 - June 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/12/NIC_logo.svg",
    },
    {
      name: "iHUB DivyaSampark @ IIT Roorkee",
      position: "Cyber Security Intern",
      date: "June 2023 - July 2023",
      image: "",
    },
  ];

  return (
    <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
      <div className="text-xs flex flex-col w-[80%]">
        <div className="flex flex-col gap-10">
          <div className="text-3xl mb-2 max-[600px]:text-center">
            Work Experience
          </div>

          <div className="flex flex-col gap-6 pb-4">
            {work.map((office) => (
              <Office work={office} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
