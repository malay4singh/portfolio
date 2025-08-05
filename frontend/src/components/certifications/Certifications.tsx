function Certifications() {
  const certifications = [
    {
      icon: "aws-csa.png",
      credentials:
        "https://www.credly.com/badges/f945e5d2-66a4-4c14-ab84-488ccc5ff5ed/public_url",
    },
    {
      icon: "az-104.png",
      credentials:
        "https://learn.microsoft.com/en-us/users/malaysingh-5700/credentials/8f6ea34a571762d5",
    },
  ];

  return (
    <div className="h-screen w-[90vw] flex items-center justify-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[1200px]:items-start max-[600px]:py-10 scrollable">
      <div className="w-[80%] flex flex-col gap-14 h-[75%] max-[600px]:h-fit max-[600px]:gap-10">
        <div className="flex flex-col gap-2">
          <div className={`text-3xl max-[600px]:text-center`}>
            Certifications
          </div>
          <div className={`text-sm text-[#a3a29f] max-[600px]:text-center`}>
            Click for credentials
          </div>
        </div>

        <div className="flex justify-around max-[600px]:flex-col max-[600px]:items-center">
          {certifications.map((certification) => (
            <a className="p-5" href={certification.credentials} target="_blank">
              <div className="w-[350px] max-[600px]:w-[150px] transition ease-in-out hover:scale-110 hover:cursor-pointer">
                <img src={certification.icon} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
