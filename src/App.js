
import { useState } from 'react';
import './App.css';
import Card from './card';
function App() { 
  // const arr =['ankit','Anshu','sajna','ayushi','gaya wali','divyanshi']; //1
  const [entry,setEntry] = useState([]); 
  // const [idx,setIdx]=useState(0);  //1
  // const addEntry =() =>{setEntry(initialArr=>[...initialArr,arr[idx]]);setIdx(idx+1);} //1
  const [name,setName] = useState('')
const changeTextHandler =(prop) =>{
  setName(prop.target.value);
}
const nameAdder =() =>{
  console.log(name);
  setEntry(initialArr=>[...initialArr,name]);
}
  return (
    <div className="parent">
      <div className="header" >
       Athletes
       <div>
       <input
       onChange={changeTextHandler}
       />
       <button style={{margin:20}} onClick={nameAdder}>submit </button>
       </div>
      </div>
      <div className="body">
         { entry.map(item => <Card  value={item} setEntry={setEntry}/> )}  
       {/* <div className='addButton' onClick={addEntry}> 
       <p style ={{alignSelf:'center' ,paddingBottom:15}}>+</p>
      </div>  */}
     
      </div>
    </div>
  );
}

export default App;
