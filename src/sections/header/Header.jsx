import Spline from '@splinetool/react-spline';
import data from './data';
import './header.css'
const Header = () => {


    return (
        <header id="header">
            <div className='container header__container'>
                <div className='header__profile'>
                    <Spline alt="Header Portrait"
                        spline scene="https://prod.spline.design/mIQleypwXfSfW9tu/scene.splinecode" />
                                </div>
                <h3>Med Taha Hamdi </h3>
                <p>
                    Hi there, I'm Med Taha Hamdi, a 22-year-old JavaScript Developper with a passion for coding and creating innovative solutions.
                    With my experience and skills, I'm able to make coding look easy!
                    When I'm not busy with work, you can usually find me experimenting in the kitchen, plotting to take over the world.
                    I'm constantly seeking new challenges,
                    and I'm excited to see what the future holds for my career in technology.
                    Who knows what I'll accomplish next, but one thing's for sure, it will be epic!
                </p>
                <div className='header__cta'>
                    <a href='#contact' className='btn primary'>Contact Me !</a>
                    <a href='#portfolio' className='btn light'>My work !</a>

                </div>
                <div className='header__socials'>
                    {
                        data.map(item => <a key={item.id} href={item.link} target="_blank"
                            rel="noopener noreferrer"> {item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header


