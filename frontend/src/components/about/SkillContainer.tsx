import SkillIcon from "./SkillIcon";

interface Skill {
  name: string;
  icon: string;
}

interface Category {
  title: string;
  skills: Array<Skill>;
}

interface SkillContainerProps {
  category: Category;
}

function SkillContainer(props: SkillContainerProps) {
  return (
    <div className="bg-[#156064] w-[fit-content] rounded-lg flex flex-col items-center">
      <div className="p-5 pb-3 text-[#fffff0] text-3xl">
        {props.category.title}
      </div>
      <div className="grid grid-rows-2 grid-flow-col p-5 pt-2 gap-2 max-[600px]:grid-cols-3 max-[600px]:grid-flow-row">
        {props.category.skills.map((skill) => (
          <SkillIcon skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillContainer;
