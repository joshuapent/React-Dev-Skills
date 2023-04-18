import './App.css';
import './NewSkillForm.css'
import {useState} from 'react';

function NewSkillForm(props) {

    const [newSkill, setNewSkill] = useState({name: "", level: 3});

    function handleChange(evt) {
      setNewSkill({...newSkill, [evt.target.name]: evt.target.value})
    } 

    function handleAdd(evt) {
      evt.preventDefault()
      props.handleAddSkill(newSkill)
      setNewSkill({name: "", level: 3});

    }

    return (
      <div>
        <form className="NewSkillForm" onSubmit={handleAdd}>
            <label htmlFor="name">Skill</label>
            <input 
              name="name"
              type="text"
              placeholder="New Skill"
              value={newSkill.name}
              onChange={handleChange}
              required
              pattern=".{3,}"
            />
            <label htmlFor="level" value="">Level</label>
            <select name="level" id="" value={newSkill.level} onChange={handleChange}>
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