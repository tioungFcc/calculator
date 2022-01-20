import React from "react"
import Pad from "./Pad"

export default function Pads(props){
    const {displayContent, setDisplayContent, num1, setNum1, operand, setOperand, num2, setNum2} = props
    const bank=[
        {
            content: "+",
            classr:"flex pad op plus"
        },
        {
            content: "-",
            classr:"flex pad op minus"
        },
        {
            content: "/",
            classr:"flex pad op divide"
        },
        {
            content: "x",
            classr:"flex pad op multiply"
        },
        {
            content: "9",
            classr:"flex pad number nine"
        },
        {
            content: "8",
            classr:"flex pad number eight"
        },
        {
            content: "7",
            classr:"flex pad number seven"
        },
        {
            content: "6",
            classr:"flex pad number six"
        },
        {
            content: "5",
            classr:"flex pad number five"
        },
        {
            content: "4",
            classr:"flex pad number four"
        },
        {
            content: "3",
            classr:"flex pad number three"
        },
        {
            content: "2",
            classr:"flex pad number two"
        },
        {
            content: "1",
            classr:"flex pad number one"
        },
        {
            content: "0",
            classr:"flex pad number zero"
        },
        {
            content: ".",
            classr:"flex pad number dot"
        },
        {
            content: "equal",
            classr:"flex pad equal"
        },
        {
            content: "C",
            classr:"flex pad clear"
        },
        {
            content: "AC",
            classr:"flex pad ac"
        },
    ]
    const pads=bank.map(item=><Pad
        key={item.content}
        content={item.content}
        classr={item.classr}
        displayContent={displayContent}
        setDisplayContent={setDisplayContent}
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}
        operand={operand}
        setOperand={setOperand}
    />)
    return(
        <div className="pads">
            {pads}
        </div>
    )
}