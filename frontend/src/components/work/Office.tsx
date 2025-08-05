interface Work {
  name: string;
  position: string;
  date: string;
  image: string;
}

interface OfficeInterface {
  work: Work;
}

function Office(props: OfficeInterface) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3 max-[600px]:gap-5">
        <div>
          <div className={`text-xl text-[#156064] flex gap-2 items-center`}>
            <img src="location.svg" width={"20px"} />
            {props.work.name}
          </div>
          <div className="text-sm text-[#a3a29f] ml-[1.2rem]">
            {props.work.date}
          </div>
        </div>

        <div className="text-md ml-6 flex gap-2 max-[600px]:ml-0 py-1">
          <img className="w-[12px]" src="point.svg" />
          {props.work.position}
        </div>
      </div>

      <div className="w-[20%] flex items-center max-[600px]:hidden">
        <img src={props.work.image} />
      </div>
    </div>
  );
}

export default Office;
