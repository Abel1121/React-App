import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navigationItem}><NavLink exact activeClassName={styles.navigationItemLinkActive} className={styles.navigationItemLink} to="/">Twitters</NavLink></li>
            <li className={styles.navigationItem}><NavLink activeClassName={styles.navigationItemLinkActive} className={styles.navigationItemLink} to="/Articles">Articles</NavLink></li>
            <li className={styles.navigationItem}><NavLink activeClassName={styles.navigationItemLinkActive} className={styles.navigationItemLink} to="/notes">Notes</NavLink></li>
        </ul>
    </nav>
)

export default HeaderNavigation;