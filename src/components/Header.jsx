import {Link} from "react-router-dom"
export function Header(){
    return(
        <nav className="navigation">
    <div className="nav-brand">Rekha Kumari Bheel</div>
    <ul className="list-non-bullet nav-pills">
      <li className="list-item-inline"> <Link className="link link-active" href="#hero">About</Link> </li>
      <li className="list-item-inline"> <Link className="link" href="#projects">Projects</Link> </li>
      <li className="list-item-inline"> <Link className="link" href="#technologies">Stack</Link></li>
    </ul>
  </nav>
    )
}
