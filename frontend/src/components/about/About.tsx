import SkillContainer from "./SkillContainer";

function About() {
  const iconUrl = `https://github.com/devicons/devicon/raw/master/icons`;

  const categories = [
    {
      title: "Skills & Tools",
      skills: [
        {
          name: "Linux",
          icon: `${iconUrl}/linux/linux-original.svg`,
        },
        {
          name: "OTEL",
          icon: `${iconUrl}/opentelemetry/opentelemetry-original-wordmark.svg`,
        },
        {
          name: "Bash",
          icon: `${iconUrl}/bash/bash-original.svg`,
        },
        {
          name: "PowerShell",
          icon: `${iconUrl}/powershell/powershell-original.svg`,
        },
        {
          name: "Git",
          icon: `${iconUrl}/git/git-original-wordmark.svg`,
        },
        {
          name: "GitHub Actions",
          icon: `${iconUrl}/githubactions/githubactions-original-wordmark.svg`,
        },
        {
          name: "Docker",
          icon: `${iconUrl}/docker/docker-original-wordmark.svg`,
        },
        {
          name: "Kubernetes",
          icon: `${iconUrl}/kubernetes/kubernetes-original-wordmark.svg`,
        },
        {
          name: "AWS",
          icon: `${iconUrl}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
        },
        {
          name: "Azure",
          icon: `${iconUrl}/azure/azure-original-wordmark.svg`,
        },
        {
          name: "GCP",
          icon: `${iconUrl}/googlecloud/googlecloud-original-wordmark.svg`,
        },
        {
          name: "Terraform",
          icon: `${iconUrl}/terraform/terraform-original-wordmark.svg`,
        },
      ],
    },
  ];

  return (
    <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
      <div className="text-xs flex flex-col w-[80%]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-3xl max-[600px]:text-center">About Me</div>
            <div className="text-sm text-justify">
              I have a passion for customizing operating systems, especially
              Linux, and exploring hardware and security. Always eager to
              collaborate on innovative projects and contribute to impactful
              solutions. I love to pass my time reading sci-fi, playing my
              guitar and addictive video games.
            </div>
          </div>

          <div className="flex max-[600px]:flex-col max-[600px]:gap-4">
            <div className="w-full flex flex-col gap-3">
              {/*<div className="text-3xl">Skills</div>*/}

              <div className="h-[fit-content] w-full flex justify-around max-[600px]:justify-start max-[600px]:gap-5 max-[600px]:flex-col max-[600px]:items-center">
                {categories.map((category) => (
                  <SkillContainer category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
