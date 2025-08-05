interface Skill {
  name: string;
  icon: string;
}

interface SkillIconProps {
  skill: Skill;
}

function SkillIcon(props: SkillIconProps) {
  return (
    <div className="bg-[#fffff0] flex flex-col p-1 items-center gap-1 transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400 w-[100px] min-[1700px]:w-[120px] overflow-hidden">
      <img className="w-full" src={props.skill.icon} />
      {/*<span className="p-0.7 text-[0.7rem]">{props.skill.name}</span>*/}
    </div>
  );
}

export default SkillIcon;
