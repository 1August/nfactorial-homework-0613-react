import css from '../static/css/main.module.css'

import {clouds, fox, mountains, person, water} from './Images'

const Main = () => {
    return (
        <main>
            <div className={'container-fluid'}>
                <div className={css.gallery}>
                    <div className={css.img}>
                        <img src={mountains} alt="Photo"/>
                        <h3>Hey</h3>
                    </div>
                    <div className={css.img}>
                        <img src={water} alt="Photo"/>
                        <h3>Let's</h3>
                    </div>
                    <div className={css.img}>
                        <img src={person} alt="Photo"/>
                        <h3>Give</h3>
                    </div>
                    <div className={css.img}>
                        <img src={fox} alt="Photo"/>
                        <h3>All</h3>
                    </div>
                    <div className={css.img}>
                        <img src={clouds} alt="Photo"/>
                        <h3>You can</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main