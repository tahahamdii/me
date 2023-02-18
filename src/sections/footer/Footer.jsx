import './footer.css'
const Footer  = () => {


  return(
    <section id='footer'>
        <footer>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-md-6 col-lg-3 about-footer">
                    <h3>Med Taha Hamdi </h3>
                    <ul>
                        <li><a href="tel:(010) 1234 4321"><i class="fas fa-phone fa-flip-horizontal"></i>+216 95 092 609</a></li>
                        <li><i class="fas fa-map-marker-alt"></i>
                            Tunis

                            
                        </li>
                        <li><i class="fas fa-map-marker-alt"></i>
                            Hamdi.taha@esprit.tn
                            
                            
                        </li>
                    </ul>
                    <a href="" class="btn red-btn">Contact Me</a>
                </div>
             

                <div class="col-md-6 col-lg-3 page-more-info">
                    <div class="footer-title">
                    </div>
              
                </div>
                <div class="col-md-6 col-lg-4 open-hours">
                    <div class="footer-title">

                    "Teamwork makes the dream work, but a vision becomes a nightmare when the leader has a big dream and a bad team." - John C. Maxwell<ul class="footer-social">
                            <li><a href="" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

                        </ul>
                    </div>
                    
                    <div class="footer-logo">

                    
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="row">
                <div class="col-sm-4">
                </div>
                <div class="col-sm-8">
                    <p>Made with love</p>
                </div>
            </div>
        </div>
    </div>
</footer>
    </section>
  )
}

export default Footer;