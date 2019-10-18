import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, href}) => (
    <>
    { href ? (
         <a href={href} rel="noopener noreferrer" target="_blank"  className={styles.button}>{children}</a>
    ) : (
        <button className={styles.button} type="submit">{children}</button>
    )
    }
    </>
);

export default Button;