import { useEffect, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    
    fetch("http://localhost:8080/users")
    .then(res=>res.json())
    .then(data=>setData(data))

  }, [])
  

  return (
    <>
        <header>
            <div className="text">
              <h1>Wood & Cloth Sofa</h1>
              <p>Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
              <button>Buy now</button>
            </div>
            <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" />
        </header>

        <section style={{padding: '0 500px'}}>
          <h1>Awesome</h1>
          <h4>Shop</h4>
          <div style={{display: 'flex', flexWrap: 'wrap', padding: '0 80px', gap: '10px'}}>
            {
              data.map(item=>{
                return(
                  <div style={{width: '300px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} key={item.id}>
                    <Link style={{color: '#000', textDecoration: 'none'}} to={'/admin'}>
                    <img style={{width: '200px', height: '200px'}} src={item.photo} />
                    <h1>{item.name}</h1>
                    <span>{item.price}</span>
                    </Link>
                  </div>
                )
              })
            }
          </div>

        </section>
    </>
  )
}

export default Home