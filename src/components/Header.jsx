import { HashLink } from 'react-router-hash-link';
export function Header(){
    return(
        <nav className="py-3 fixed-top">
          <div className='container '>
    <div className='fw-bold fs-5'><HashLink to="#hero" className='text-decoration-none text-black'><span className='text-success'>{"<>"}</span> Rekha Kumari Bheel</HashLink></div>
    </div>
    <hr />
  </nav>
    )
}
