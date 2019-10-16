import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
    <li className="listItem__wrapper">
        <img src={danAbramovImage} className="listItem__image" />
        <div>
            <h2 className="listItem__name">Kent C. Dodds</h2>
            <p className="listItem__description">Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS</p>
            <button className="listItem__button">visit twitter page</button>
        </div>
    </li>
);

export default ListItem;