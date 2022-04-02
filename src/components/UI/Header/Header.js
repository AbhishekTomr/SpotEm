import styles from './Header.module.css'
import React from 'react';
let Header = (props) =>{
    return(
    <header className={styles.head}>
        <h1>SpotEm</h1>
    </header>
    )
}

export default Header;