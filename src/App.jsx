// import React from 'react'
// import { useState } from 'react';
// const App = ()=> {
//   const shows = useState(false)
//   console.log(shows)
//   const show = false;  
//   const Test = (x , y)=>{
//     console.log(x , y);
    
//   }
//   return (
   
//     <div>
//       <h1>hello</h1>
//       {
//         show && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, cupiditate?</p> || <p>hello</p>
        
//       }
//       <button onClick={()=>{Test(10,20)}}>submit</button>
//     </div>
//   )
// }

// export default App


/// day2 continue ///////////////////


// import React from 'react'
// import { useState } from 'react'
// const App = ()=> {
//   const [show , setShow] = useState(true);
//   // const test = ()=>{
//   //   setShow(!show)
//   // }
//  return(
//   <div>
//     <h1 style={{
//       color : show ? ('red') : ('blue')
//     }}>Ram Ram</h1>
//     {
//       show &&    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, numquam!</p>
//     }

//     <button onClick={()=>setShow(!show)}>
//       {
//         show ? ('hide') : ('show')
//       }
//     </button>
//   </div>
//  )
// }

// export default App


// import React, { useState } from 'react'

// const App=()=> {
//   const [fontsize , setFontsize] = useState(40);
//   return (
//     <div>
//       <h1 style={{
//         fontSize : fontsize,
//         color : fontsize === 40 ? ('red') : ('blue')
        
//       }}>Ram Ram</h1>
//       <button onClick={()=>{
//         setFontsize(fontsize === 40 ? 100 : 40)
//       }}>
//         change
//       </button>
//     </div>
//   )
// }

// export default App


/// day3 ////

import React from 'react'
import { useState } from 'react'

const App = ()=> {
  const [show , setShow] = useState(true);
  const [colore , setColore] = useState('red');
  const [input , setInput] = useState("")
  const [fontSize , setFontsize] = useState(30);
  const [color , setColor] = useState("red")
  return (
    <div style={{
      minHeight : '100vh',
      background : '#ddd'
    }}>

      <div style={{
        background : 'white',
        padding : 40,
        width : '50%',
        margin : '0 auto '
      }}>

        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
          <h1 style={{
            padding : 0, 
            marginBottom:4
            }}
          >Ram Ram</h1>

          <p style={{padding : 0 , margin : 0}}>State managment React Application</p>
        </div>

        <div>
          <h2>Show and hide Application</h2>
         
         {
          show ?  <img src="https://th.bing.com/th/id/OIP.uAMBuQWIFE1x1Yjv3xIKcAHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain" width='90%' height='400' alt="" /> : show
         }

         
        </div>
        <button onClick={()=>setShow(!show)}  style={{
            padding : '10px 20px', 
            background : 'blue', 
            color : 'white' , 
            borderRadius : '5px', 
            fontWeight : 600 , 
            cursor : 'pointer', 
            marginTop : 10
            }}
          >
          {
            show ? 'Hide' : 'Show'
          }
        </button>


        <div>
          <h2>Toggle Background</h2>
         <div style={{
            width : '300px' , 
            height : '300px' , 
            backgroundColor : colore, 
            borderRadius : 10
            }}>
            
         </div>

         
        </div>
        <button onClick={()=>setColore(colore === "red" ? "blue" : "red")}  style={{
            padding : '10px 20px', 
            background : 'blue', 
            color : 'white' , 
            borderRadius : '5px', 
            fontWeight : 600 , 
            cursor : 'pointer', 
            marginTop : 10
            }}
          >
          {/* {
            show ? 'Hide' : 'Show'
          } */}

        {colore === "red" ? "Blue" : "Red"}
        </button>


        <h1>Live Preview</h1>

        <input onChange={(e)=>setInput(e.target.value)
        } type="text" placeholder='Type text here' style={{
          width : 300,
          padding :"10px",
        }}/>

        <h1>
          {input}
        </h1>


        <div>
          <h2>Font Increaser</h2>
          <p style={{
            fontSize : fontSize,
          }}>Ram Ram</p>
          <input type="range" min ="30" max="200" step = "1" onChange={(e)=> setFontsize(Number(e.target.value))}/>
        </div>


        <div>
          <h2>Color Chage App</h2>
          <input onChange={(e)=> setColor(e.target.value)}
            type="text" 
            placeholder='Enter Color nane'
            value = {color}
            style={{
              width : 300, 
              padding : "10px  20px"
              }}
          />
        </div>

        <div style={{
          width : 200,
          height : 200,
          background : color,
          marginTop : 20,
          borderRadius : 10
        }}/>
      </div>
      
    </div>
  )
}

export default App