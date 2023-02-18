import './services.css'
import data from './data.js';
import Card from '../../components/Card';
const Services = () => {


  return (
    <section id='services'><h2>Services</h2>
      <div className="container services_container">

        <div className="about_center">
          <div className="about_cardss">
            {
              data.map(item => (
                <Card key={item.id} className="about_services">
                  <span className=' about_services-icon'>{item.icon}</span>
                  <h5> {item.title} </h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;