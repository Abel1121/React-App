import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag : Tag, name, label, maxLength}) =>(
    <div className={styles.item}>
        <Tag type="text" id={name} name={name} placeholder=" " maxLength={maxLength} required />
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