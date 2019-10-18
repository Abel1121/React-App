import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';

const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => { 
    
    const Imagetag = image ? "img" : "div";
    
    return (
    <li className={styles.wrapper}>
        <Imagetag src={image} className={image ? styles.image : styles.imageNone} alt={name} />
        <div>
            <h2>{name}</h2>
            <p className={styles.description}>{description}</p>
           <Button href={twitterLink}>visit twitter page</Button>
        </div>
    </li>
);
}
ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
}
ListItem.defaultProps = {
    image: null,
    description: 'One of the React creators',
}

export default ListItem; 