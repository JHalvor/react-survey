import { useState } from "react";

import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

export default function Form({ submitForm }) {
    const initialState = {
        color: "",
        "spend-time": [],
        review: "",
        username: "",
        email: ""
    };

    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
        if (Array.isArray(formData[name])) {
            const arr = formData[name]
            if (arr.includes(value)) {
                arr.splice(arr.indexOf(value), 1)
            } else {
                arr.push(value)
            }
            setFormData({ ...formData, [name]: arr })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submitForm(formData)
        setFormData(initialState)
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtons handleChange={handleChange} formData={formData}/>
        </div>
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes handleChange={handleChange} formData={formData}/>
        </div>
        <label>What else have you got to say about your rubber duck?
            <textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={formData.review}>
            </textarea>
        </label>
        <label>Put your name here (if you feel like it):
            <input
                type="text"
                name="username"
                onChange={handleChange}
                value={formData.username}/>
        </label>
        <label>Leave us your email pretty please??
            <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}/>
        </label>
        <input 
            className="form__submit"
            type="submit"
            value="Submit Survey!"/>
      </form>
  );
}
