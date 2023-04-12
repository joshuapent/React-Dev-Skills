import './App.css';
import './SkillListItem.css';

function SkillListItem({skill, index}) {
    return (
      <div className="SkillListItem">
        <li className='padding-0'>{skill.name}</li>
        <li className='level'>LEVEL {skill.level}</li>
      </div>
    );
  }
  
  export default SkillListItem;
