import React, { useState } from 'react';

const Form = props => {
   
    const [member, setMember] = useState({
      name: '',
      email: '',
      role: ''
    });

   

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', role: ''})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
            name='name'
            id='name'
            type='text'
            placeholder='Name'
            />
            <label htmlFor='email'>Email</label>
            <input 
            name='email'
            id='email'
            type='text'
            placeholder='Email'
            />
            <label htmlFor='role'>Role</label>
            <select name="role">
                <option selected value="1">Role</option>
                <option value="2">Second Value</option>
                <option value="3">Third Value</option>
            </select>
            <button type="submit">Add Member</button>

        </form>
    );
}

export default Form;