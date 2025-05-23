import hero from "../assets/hero1.svg"
import { HashLink } from 'react-router-hash-link';
export function Hero(){
    return(
        <header>
             <section id="hero" className="hero text-center py-4 ">
           <img src={hero} alt="hero-img" className="hero-img" />
        <h1 className="hero-heading">Rekha Kumari Bheel</h1>
        <h2 className="hero-heading2 mb-3">A Full Stack Developer</h2>
        <HashLink className="link link-primary text-white " to="#projects">View My Work</HashLink>
        
      </section> 
        </header>
    )
}
