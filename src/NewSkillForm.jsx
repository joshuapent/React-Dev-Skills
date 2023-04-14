import './App.css';
import './NewSkillForm.css'
import {useState} from 'react';

function NewSkillForm(props) {

    const [newSkill, setNewSkill] = useState({name: "", level: 3});

    function handleChange(e) {
      setNewSkill(e.target.value)
    }

    function handleAdd(e) {
      e.preventDefault()
      props.handleAddSkill(newSkill)
      setNewSkill("");
    }

    return (
      <form className="NewSkillForm" onSubmit={handleAdd}>
          <label htmlFor="Skill">Skill</label>
          <input 
            type="text"
            placeholder="New Skill"
            value={newSkill}
            onChange={handleChange}
            required
            pattern=".{4,}"
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
    );
  }
  
  export default NewSkillForm;