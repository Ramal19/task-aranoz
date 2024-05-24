import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Admin = () => {

    const [data, setData] = useState([]);
    const [inpValue, setInpVAlue] = useState("");
    const [cngValue, setCngValue] = useState("normal");

    useEffect(() => {
      
        fetch("http://localhost:8080/users").then(res=>res.json()).then(data=>setData(data))
    }, [data])

    const deleteData = (id)=>{

        axios.delete(`http://localhost:8080/users/${id}`)
    }
    
    const sortData = () => {

        if (cngValue == "asc") {
          
          return data.toSorted((a, b)=> a.price - b.price)
        }else if ( cngValue == "des"){
          return data.toSorted((a, b)=> b.price - a.price)
        }else{
          return [...data]
        }
      }

      
    let sortedData = sortData()

    const filterData = sortedData.filter((inf) => inf.name.toUpperCase().startsWith(inpValue.toUpperCase()))

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
      <input style={{padding: '10px', fontSize: '16px'}} type="text" onInput={(e)=>setInpVAlue(e.target.value)} />
      <select onChange={(e)=>setCngValue(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="asc">Artan sira ile</option>
        <option value="des">Azalan sira ile</option>
      </select>
    </div>
    <table border={2} style={{width: '80%'}}>
        <thead>
            <tr>
                <th style={{width: '10%'}}>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                filterData.map(item=>{

                    return(
                        <tr key={item.id}>
                            <td style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}><img style={{width: '100px', height: '100px'}} src={item.photo} /></td>
                            <td><h1>{item.name}</h1></td>
                            <td><span>{item.price}</span></td>
                            <td><button onClick={()=>deleteData(item.id)}>❌</button></td>
                            <td>
                              <button>
                                <Link to={'/edit/' }>Edit</Link>
                              </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default Admin