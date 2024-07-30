import { NavLink } from 'react-router-dom'

export default function NavItem({title , to}) {
    return (
        <li>
            <NavLink to={to}>{title}</NavLink>
        </li>
    )
}