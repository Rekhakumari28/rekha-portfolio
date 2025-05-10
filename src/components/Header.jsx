import { HashLink } from 'react-router-hash-link';
export function Header(){
    return(
        <nav className="navigation">
    <div className="nav-brand">Rekha Kumari Bheel</div>
    <ul className="list-non-bullet nav-pills">
      <li className="list-item-inline"> <HashLink className="link link-active" to="#hero">About</HashLink> </li>
      <li className="list-item-inline"> <HashLink className="link" to="#projects">Projects</HashLink> </li>
      <li className="list-item-inline"> <HashLink className="link" to="#technologies">Stack</HashLink></li>
    </ul>
  </nav>
    )
}
