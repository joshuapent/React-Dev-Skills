import './App.css';
import {useState} from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';


function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function handleAddSkill(newSkill) {
    setSkills((skills) => [...skills, newSkill])
  }

  return (
    <div className="App">
      <h1 className='teal-text'>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm handleAddSkill={handleAddSkill}/>
    </div>
  );
}

export default App;
