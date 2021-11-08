import React from 'react';
import styles from './style.module.scss'
import {useSelector} from "react-redux";
import {Container} from "../../helper/wrapper";

const InfoPanel = ({setShouldInfo, shouldInfo}) => {
        const data = useSelector((state) => state.weather.data)
        const error = useSelector((state) => state.weather)
        const date = new Date()
        const dateHours = date.getHours()

        console.log(dateHours)
        let bg;
        if (dateHours > 17) {
            bg = 'https://on-desktop.com/wps/2018Nature___Sundown_The_sunset_of_the_red_sun_on_the_sea_horizon_128605_.jpg'
        } else if (dateHours < 17) {
            bg = 'https://img.wallpapersafari.com/desktop/1680/1050/7/73/SDbksC.jpg'
        }

        return (
            <div className={`${styles.box} ${shouldInfo && styles.show}`} style={{
                backgroundImage: `url(${bg})`
            }}>
                <span className={styles.exit} onClick={() => setShouldInfo(false)}>X</span>
                <Container>
                    <div className={`${error.errorMessage ? styles.hidden : styles.boxItems}`}>
                        <p className={styles.city}>{data.name}</p>
                        <p className={styles.temp}>{Math.floor(data.main?.temp)} &#8451; </p>
                        <p className={styles.sky}>{data.weather && data.weather[0].description}</p>
                        <div className={styles.wind}>
                            <span>wind</span>
                            <span>|</span>
                            <span>{data.wind?.speed} km/h</span>
                        </div>
                    </div>

                    <div className={styles.error}>
                        {error.errorMessage !== null ? error.errorMessage : ''}
                    </div>

                </Container>
            </div>

        );
    }
;

export default InfoPanel;
