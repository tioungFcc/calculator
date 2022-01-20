import React, {useState, useEffect} from "react"
import Display from "./Display"
import Pads from "./Pads"

export default function App(){
    const [displayContent, setDisplayContent] =useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operand, setOperand] = useState("")
    // useEffect(()=>{
    //     console.log("App.js", operand, num1, num2, typeof num1, typeof num2)
    // })
    return(
        <div className="app">
            <Display displayContent={displayContent}/>
            <Pads 
                displayContent={displayContent} 
                setDisplayContent={setDisplayContent}
                num1={num1}
                setNum1={setNum1}
                num2={num2}
                setNum2={setNum2}
                operand={operand}
                setOperand={setOperand}
            />
        </div>
    )
}