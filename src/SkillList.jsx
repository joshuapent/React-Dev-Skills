import './App.css';
import SkillListItem from './SkillListItem'

function SkillList(props) {
    return (
      <div className="SkillList">
        <ul className='padding-0'>
          {props.skills.map((skill, idx) => (
            <SkillListItem skill={skill} key={idx + skill} index={idx}/>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SkillList;
