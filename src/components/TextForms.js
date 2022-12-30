import React, {useState} from 'react'

export default function TextForms(props) {
    
    const upperCased=()=>{
        let newText = text.toUpperCase();
        settext(newText);
    }
    const lowerCassed=()=>{
        let newText = text.toLowerCase();
        settext(newText);
    }
    const clearText=()=>{
        let newtext = "";
        settext(newtext);
    }
    const reverseText=()=>{
        let bag = "";
        let alpha="abcdefghijklmnopqrstuvwxyz";
        let Alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(let i=0;i<text.length;i++)
        {
            for(let j=0;j<alpha.length;j++)
            {
                if(text[i]===alpha[j])
            {
                bag += text[i].toUpperCase();
            }    
                else if(text[i]===Alp[j])
                {
                bag+= text[i].toLowerCase();
                }
                else if(text[i]===" ")  
                bag+= " ";

            }
        }
        settext(bag);
    }
    const onChnaged=(event)=>{
        settext(event.target.value);
    }
    const [text, settext] = useState("");

    const [modeDes,setModeDes] = useState("Enable Dark Mode");
    const [myStyles, setMyStyles] = useState({
        backgroundColor : "white",
        color: "black",
    }
    );
    let modeClicked=()=>{
        if(myStyles.backgroundColor==="white")
        {
            setMyStyles({
                backgroundColor : "black",
                color: "white",
            })
            setModeDes("Enable Light Mode");
        }
        else{
        setMyStyles({
            backgroundColor : "white",
            color: "black",
        })
        setModeDes("Enable Dark Mode");
        }
    }

    let copyText = ()=>{
        let copy = document.getElementById("textArea");
        copy.select();
        navigator.clipboard.writeText(copy.value);
    }
    let removeSPace=()=>{
        let x = text;
        x.split("");
        let bag=x[0]
        for(let i=1;i<x.length;i++)
        {
            if(x[i]!==" ")
            {
                bag += x[i];
            }
            else if(x[i]===" " && x[i-1]!==" ")
            {
                bag += x[i];
            }
        }
        settext(bag);
    }
return (
    <>
    <div className="container" style={myStyles}>
    <h1 className="my-5" style={myStyles}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="textArea" rows="8" value={text} onChange={onChnaged} placeholder="Enter Your Text Here"></textarea>
    </div>
    <div className="container" style={myStyles}>
    <button type="button" className="btn btn-success mx-2 my-2" onClick={lowerCassed}>To Lower Case</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={upperCased}>To Upper Case</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={reverseText}>Reverse Case</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={modeClicked}>{modeDes}</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={removeSPace}>Remove Extra Space</button>

</div>
    </div>
    <div className="container my-3" style={myStyles}>
         <p>Number of characters : {text.length}</p>
         <p>Number of words : {text.split(" ").length}</p>
         <p>Preview: {text}</p>
    </div>
    </>
)
}
