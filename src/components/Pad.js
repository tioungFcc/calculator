import React, {useState, useEffect} from "react"

export default function Pad(props){ 
    const {content, classr, displayContent, setDisplayContent, num1, setNum1, num2, setNum2, operand, setOperand} = props
    function handleClick(e){
        const pad=e.target
        const classSet=pad.classList
        if(classSet.contains("number")){
            if(displayContent==0){
                setDisplayContent(pad.textContent)
                !operand? setNum1(pad.textContent) : setNum2(pad.textContent)//works
            }else{
                setDisplayContent(prevState=>prevState+pad.textContent)
                !operand? setNum1(prevState=>prevState+pad.textContent) : setNum2(prevState=>prevState+pad.textContent)//works
            }    
            //!operand? setNum1(displayContent) : setNum1(displayContent)//does not work
        }
        if(classSet.contains("op")){
            setDisplayContent(0)
            if(classSet.contains("plus"))setOperand("plus")
            if(classSet.contains("minus"))setOperand("minus")
            if(classSet.contains("divide"))setOperand("divide")
            if(classSet.contains("multiply"))setOperand("multiply")
        }
        if(classSet.contains("equal")){
            if(operand=="plus")setDisplayContent(Number((parseFloat(num1)).toFixed(2))+Number((parseFloat(num2)).toFixed(2)))
            if(operand=="minus")setDisplayContent(Number((parseFloat(num1)).toFixed(2))-Number((parseFloat(num2)).toFixed(2)))
            if(operand=="divide")setDisplayContent( (Number((parseFloat(num1)).toFixed(2))/Number((parseFloat(num2)).toFixed(2))).toFixed(2) )
            if(operand=="multiply")setDisplayContent(Number((parseFloat(num1)).toFixed(2))*Number((parseFloat(num2)).toFixed(2)))
        }
        if(classSet.contains("ac")){
            setDisplayContent(0)
            setNum1(0)
            setNum2(0)
            setOperand("")
        }
    }
    // useEffect(()=>{
    //     console.log("Pad.js", num2)
    //     console.log(num1, typeof num1, num2, typeof num2)
    // })
    return(
        <div className={classr} onClick={handleClick}>
            {content}
        </div>
    )
}