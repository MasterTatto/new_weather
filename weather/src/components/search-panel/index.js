import React, {useCallback, useEffect, useState} from 'react';
import styles from './style.module.scss'
import {useDispatch} from "react-redux";
import {setWeatherTC} from "../../redux/wether";
import {Container} from "../../helper/wrapper";
import {TextField} from "@mui/material";

const SearchPanel = ({setShouldInfo}) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    useEffect(() => {
        dispatch(setWeatherTC('Minsk'))
    }, [dispatch])

    const showInfo = useCallback((e) => {
        if (e.key === 'Enter') {
            dispatch(setWeatherTC(value))
            setValue('')
            setShouldInfo(true)
        }
    }, [setShouldInfo, value, dispatch])

    return (
        <div className={styles.wrapper}>
            <Container>

                <div className={styles.searchBox}>
                    <h1 className={styles.logo}>Weather</h1>
                    <TextField
                        id="standard-basic"
                        label="Search..."
                        variant="standard"
                        className={styles.root}
                        color="primary"
                        type="text" onChange={(e) => {
                        setValue(e.currentTarget.value)
                    }}
                        value={value}
                        onKeyPress={showInfo}/>
                </div>
            </Container>
        </div>
    )
};

export default SearchPanel;
