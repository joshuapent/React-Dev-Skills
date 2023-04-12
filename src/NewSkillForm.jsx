import './App.css';
import './NewSkillForm.css'

function NewSkillForm({handleAddSkill}) {
    return (
      <form action="" className="NewSkillForm">
          <label htmlFor="Skill">Skill</label>
          <input type="text"/>
          <label htmlFor="Level" value="">Level</label>
          <select name="Level" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
          <button>ADD SKILL</button>
      </form>
    );
  }
  
  export default NewSkillForm;