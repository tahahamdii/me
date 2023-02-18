import AboutImage from '../../assets/tt.png'
import './about.css'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
const About = () => {


  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <div className="about_cards">
            <div className="about_cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about_card">
                    <span className=' about_card-icon'>{item.icon}</span>
                    <h5> {item.title} </h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
            </div></div>
          <p>
            Hi there, my name is Med Taha Hamdi and I'm 22 years old.
            I started my journey in engineering by attending a 2-year engineering preparatory school
            which paved the way for me to pursue my passion for software engineering.
            I am currently studying software engineering at Esprit University and thoroughly enjoying the learning experience.
          </p>
          <p>
            I have a strong proficiency in various programming languages such as JavaScript, PHP, HTML, TypeScript, C# and Java.
            In addition, I possess exceptional skills in 3D design rendering and video production.
            I enjoy using my creative talents to produce innovative and visually stunning designs and videos that are both entertaining and informative.
          </p>
          <a href={CV} className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About;

