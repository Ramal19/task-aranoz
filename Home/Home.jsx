import { useEffect, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import './Home.scss'
import { FaHandPointRight } from 'react-icons/fa'

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    
    fetch("http://localhost:8080/users")
    .then(res=>res.json())
    .then(data=>setData(data))

  }, [data])
  

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

        <section className='sectionOne'>
          <div className="h1">
            <h1>Featured Category</h1>
          </div>
          <div className="grid">
            <div className="item1">
              <div className="text">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1>
                <span>hhhhhhh</span>
              </div>
              <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png" />
            </div>
            <div className="item2">
              <div className="text">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1>
              </div>
              <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" />
            </div>
            <div className="item3">
              <div className="text">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1>
              </div>
              <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png" />
            </div>
            <div className="item4">
              <div className="text">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1>
              </div>
              <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png" />
            </div>
          </div>
        </section>

        <section className='sectionTwo'>
          <div className="text">
            <h1>Awesome</h1>
            <span>Shop</span>
          </div>
          <div className='div' >
            {
              data.map(item=>{
                return(
                  <div className='dataContainer' key={item.id}>
                    <Link className='link' to={'/admin'}>
                    <img  src={item.photo} />
                    <h1>{item.name}</h1>
                    <span>$ {item.price}</span>
                    <Link className='link1' to={'/admin'}><FaHandPointRight />Click me</Link>
                    </Link>
                  </div>
                )
              })
            }
          </div>

        </section>

        <section className="sectionThree">
          <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png"/>
          <div className="text">
            <h1>Weekly Sale on 60% Off All Products</h1>
            <button>Buy Now</button>
          </div>
        </section>
    </>
  )
}

export default Home