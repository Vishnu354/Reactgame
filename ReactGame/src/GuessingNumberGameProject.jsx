import React from "react";
import { useEffect } from "react";
import "./GuessNumber.css"
//import GuessNumbergame2 from "./GuessNumbergame2";
import { useState } from "react";

function GuessNumbergame()
{
    
   
    const[attempt,setAttempt]=useState(1);
    const[name,setName]=useState("");
    let username;
    
    //Function For entering Username 

    function Name()
    {
       username=prompt("Enter the username");
       setName(username);
    }

   

    
 
    //Math function for generqating 4 digit OTP
     
    

    
     let randonNum=Math.floor(Math.random()*(9000)+1000);
         
     let result=randonNum.toString();
     let arr12=result.split('');




    
   

    //Random value
    
   
   console.log(result);

   
    //Function For entering user value 

    function Submit1()
    {
        //user entered value
        let temp=document.querySelector("#user1").value;
        let arr13=temp.split('');
        let arr14=[];
        setAttempt(attempt+1)



        for(let i in arr12)
        {
            for(let j in arr13)
            {
                if(arr12[i].includes(arr13[i]))
                    {
                        arr14.push("+");
                        break;
    
                    }

                    else if(arr12[i].includes(arr13[j]))
                    {
                        arr14.push("-");
                        break;

                    }
                    else{

                    }
                    //console.log(arr14.join(""));
                    

            }
           
               
               
               
                

            
           
     
             }
             
              console.log(arr14.join(""));

              if(arr14.join("")=="++++")
              {
                console.log(`You have completed in ${attempt} Attempts`);
              }
             
            
             
        }
       
    
    
    
    
    
   
 
   
    return(
        <>  
       
        <body id="body1">
        <h1 id="heading1">Welcome to the world of Number Guesses </h1>
        <button onClick={Name} class="btn1">Start New Game</button>
        
        <h1>{name}</h1>
        <div id="container">

            <label>Enter Your Guess Here: </label>
            <input type="number" id="user1"  ></input>
        </div>
        {/* <GuessNumbergame2 propsdata={attempt}></GuessNumbergame2> */}
        <button onClick={Submit1} id="btn2">Submit</button>
       

        </body>
        </>
       
    )

}

export default GuessNumbergame;
