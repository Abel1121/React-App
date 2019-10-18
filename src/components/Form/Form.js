import React from 'react';
import './Form.css';

const Form = ({ submitFn }) => (
    <div className="form__wrapper">
        <h2>Add new twitter account</h2>
        <form className="form__form" onSubmit={submitFn}>
            <div className="form__item">
                <input type="text" id="name" placeholder=" " name="name" maxLength="30" />
                <label htmlFor="name">Name</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input type="text" id="link" placeholder=" " name="link"/>
                <label htmlFor="link">Link</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input type="text" id="iamge" placeholder=" " name="image"/>
                <label htmlFor="image">Image</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <textarea type="text" id="description" placeholder=" " name="description" />
                <label htmlFor="description">Description</label>
                <div className="forms__item__bar"></div>
            </div>
            <button className="form__button" type="submit">add new item</button>
        </form>
    </div>
)
export default Form;