import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag : Tag, name, label, maxLength, ...props}) =>(
    <div className={styles.item}>
        <Tag className={Tag === 'textarea' ? styles.textarea : styles.input} type="text" id={name} name={name} placeholder=" " {...props} maxLength={maxLength} required />
        <label htmlFor={name}>{label}</label>
        <div className={styles.item__bar}></div>
    </div>
)

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.string
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 200,
}
export default Input;