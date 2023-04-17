import './App.css';
import './NewSkillForm.css'
import {useState} from 'react';

function NewSkillForm(props) {

    const [newSkill, setNewSkill] = useState("");

    function handleChange(evt) {
      setNewSkill(evt.target.value)
    }

    function handleAdd(evt) {
      evt.preventDefault()
      props.handleAddSkill({level: evt.target.Level.value, name: evt.target.Skill.value})
      setNewSkill("");

    }

    return (
      <div>
        <form className="NewSkillForm" onSubmit={handleAdd}>
            <label htmlFor="Skill">Skill</label>
            <input 
              name="Skill"
              type="text"
              placeholder="New Skill"
              value={newSkill}
              onChange={handleChange}
              required
              pattern=".{3,}"
            />
            <label htmlFor="Level" value="">Level</label>
            <select name="Level" id="">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
      </div>
    );
  }
  
  export default NewSkillForm;