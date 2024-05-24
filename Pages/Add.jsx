import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import "./Add.scss";


const Add = () => {

  const navigate = useNavigate()
  const [image, setImage] = useState(null)

    
  const { register,
          handleSubmit,
          formState: { errors } 
        }= useForm();

  const onSubmit = data => {

    axios.post("http://localhost:8080/users", {...data, photo: image})
    navigate('/')
  }

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