export default function Card({value,setEntry}){
    const deleElement =() =>{

    }
    return (
        <div className='card'>
        {value}
        <div className="delete" onClick={deleElement()} >
-
        </div>
       </div>
    )
}