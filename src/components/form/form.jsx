import React from "react";

export const Form = ({ setData ,edit, id , close }) => {
  const [inputs, setInputs] = React.useState({ ism: "", familya: "" });
  const changeInput = (e) => {
    setInputs((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  
  const submit = (e) =>{
      e.preventDefault()
      
      if(edit){
        setData((p) => p.map((item) => item.id == id? {...inputs, id} : item ))
        close()
        return 
      }
    setData((p) => [...p , {...inputs , id: Date.now()  }]) 
    setInputs({ ism: "", familya: "" })}

  return (
    <>
      <form  onSubmit={submit}>
       <div>
       <input
          onChange={changeInput}
          type="text"
          name="ism"
          value={inputs.ism}
          placeholder="Ism"
        />
       </div>
        
       <div>
       <input
          onChange={changeInput}
          type="text"
          name="familya"
          value={inputs.familya}
          placeholder="Familya"
        />
       </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
