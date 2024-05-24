import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import "./Add.scss";


const Add = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [info, setInfo] = useState({})

    
  const { register,
          handleSubmit,
          formState: { errors } 
        }= useForm();

  useEffect(() => {
    axios.get("http://localhost:8080/users" +id)
    navigate('/')
      
  }, [])
    

  const base64 = (file) => {

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result)
    }
  }



  return (
    <div className='form'>
      <button onClick={()=>navigate('/')}>Home</button>

      <form style={{width: '500px', display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Image:
          <input type='file' {...register("photo", {required: true})} onInput={(e)=>base64(e.target.files[0])} />
          {errors.photo && <span>This field is required</span>}
          {image && <img src={image} style={{width: '100px', height: '100px'}}/>}
        </label>
        <label>
          Name:
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>

        <label>
          Price:
          <input type='number' {...register("price", { required: true })} />
          {errors.price && <span>This field is required</span>}
        </label>

        <input type="submit" />
      </form>
    </div>
  )
}

export default Add