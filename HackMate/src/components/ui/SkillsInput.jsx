import { useState , useEffect} from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const SkillsInput = ({userSkills , setUserSkills}) => {
  const [input , setInput]=useState('')

  const removeSkills = (indexx) => {
    setUserSkills((prevSkills) => prevSkills.filter((_, index) => index !== indexx));
    
  };

  const addskills = (e) => {
    if (e.key =='Enter'  && input.trim() !== '') {
      setUserSkills((prev)=> [...prev , input])
      setInput('')
      //console.log(skills)
    }
  };
  

  return (
    <div className="tags-input w-full max-w-screen-md mx-auto">
      <ul id="tags" className="flex flex-wrap p-0 mt-2">
        {userSkills.map((skill, index) => (
          <li
              key={index}
              className="tag flex items-center justify-center bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2"
            >
              <Label>{skill}</Label>
              <span
                className="tag-close-icon ml-2 text-white  rounded-full cursor-pointer"
                onClick={() => removeSkills(index)}
              >
                x
              </span>
            </li>
        ))}
      </ul>
      <Input
        type="text"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyUp={addskills}
        placeholder="HTML"
        className="flex-1 border-none h-10 px-2 font-normal focus:outline-none"
      />
    </div>
  );
};
