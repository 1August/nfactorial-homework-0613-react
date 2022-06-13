import useState from 'react-usestateref'
import {useEffect} from "react"

import {format} from 'date-fns'

import css from '../static/css/header.module.css'
import logo from '../static/img/networkLogo.png'

const Header = () => {
    const [date, setDate, refDate] = useState(new Date())

    useEffect(() => {
        const date = format(new Date(), 'HH:mm - dd.MM.yyyy')
        setDate('' + date)
    }, [])

    return (
        <header>
            <div className={css.container + ' container'}>
                <div className={css.brand}>
                    <div className={css.logo}>
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#" className={'active'}>Home</a></li>
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={css.date}>
                    <h2>{'' + refDate.current}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header