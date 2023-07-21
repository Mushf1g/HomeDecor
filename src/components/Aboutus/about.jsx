import React, { useEffect } from 'react'
import "./about.css"
import aboutUs from "../../assets/images/aboutus.png"
import { useLocation } from 'react-router-dom'
import Aboutbtn from "../AboutBtn/aboutbtn"

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  const location = useLocation();
  return (
    <section className='about container'>
        <h3>ABOUT US</h3>
        {
          location.pathname == "/about"
          ?
          <div className='aboutContent'>
          <div className='aboutContentImg'>
              <img src={aboutUs} alt="" />
          </div>
          <div>
              <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. <br /> <br />
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.  <br /> <br />
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat et voluptates repudiandae sint et molestiae non 
              </p>
      
          </div>
      </div>
      :
      <div className='aboutContent'>
      <div className='aboutContentImg'>
          <img src={aboutUs} alt="" />
      </div>
      <div>
          <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. <br /> <br />
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <Aboutbtn/>
      </div>
  </div>
        }
    </section>
  )
}

export default About