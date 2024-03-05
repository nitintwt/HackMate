import { useState } from "react";

export const SkillsInput = () => {
  let [skills, setSkills] = useState([]);
  const [input , setInput]=useState('')

  const removeSkills = (indexx) => {
    setSkills((prevSkills) => prevSkills.filter((_, index) => index !== indexx));
    
  };

  const addskills = (e) => {
    if (e.key =='Enter'  && input.trim() !== '') {
      setSkills((prev)=> [...prev , input])
      setInput('')
      console.log(skills)
    }
  };

  return (
    <div className="tags-input w-full max-w-screen-md mx-auto">
      <ul id="tags" className="flex flex-wrap p-0 mt-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="tag flex items-center justify-center bg-gray text-white px-2 py-1 rounded mr-2 mb-2"
          >
            <span className="tag-title text-white">{skill}</span>
            <span
              className="tag-close-icon ml-2 text-blue-500 bg-white rounded-full cursor-pointer"
              onClick={() => removeSkills(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyUp={addskills}
        placeholder="Press enter to add tags"
        className="flex-1 border-none h-10 px-2 font-normal focus:outline-none"
      />
    </div>
  );
};
