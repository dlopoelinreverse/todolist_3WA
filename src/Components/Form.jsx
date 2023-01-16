import React, { useState } from 'react'

export default function Form() {
  

    // const [textValue, setTextValue] = useState("");
    // const [longTextValue, setLongTextValue] = useState("");
    // const [selectValue, setSelectValue] = useState("")

    const [inputs, setInputs] = useState({
        textInput: "",
        longTextInput: "",
        selectInput: ""
    })

    const handleInputChange = (e) => {
        let {target} = e;
        let {name, value} = target;
        // computetd properties
        // obj[prop] = "ca marche quand même avec un tiret"

        setInputs( prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    
  return (
    <form>
        <fieldset>
            <label htmlFor="textInput">Texte : </label>
            <input type="text" id='textInput' value={inputs.textInput} onChange={handleInputChange}/> 
        </fieldset>
        <fieldset>
            <label htmlFor="longTextInput">Un truc :  </label>
            <textarea name="longTextInput" id="longTextInput" cols="30" rows="10" value={inputs.longTextInput} onChange={handleInputChange}></textarea> 
        </fieldset>
        <fieldset>
            <label htmlFor="selectInput">Plusieurs options : </label>
            <select name="selectInput"  id="selectInput" value={inputs.selectInput} onChange={handleInputChange}> 
            {/* contrairement au HTML on ne donne pas l'attribu select a l'option mais au select directement */}
                <option value="" disabled>Choissisez un fruit</option>
                <option value="mango">Mangue</option>
                <option value="coconut">Noix de coco</option>
                <option value="lime">Citron vert</option>
                <option value="strawberry">Fraise</option>
            </select>
        </fieldset>
    </form>
  )
}
