import React, { useState } from 'react';

const Form = props => {
   
    const [member, setMember] = useState({
      name: '',
      email: '',
      role: ''
    });
    const changeHandler = (event) => {
        setMember({...member, [event.target.name]: event.target.value})
    }
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
            onChange={changeHandler}
            value={member.name}
            required
            />
            <label htmlFor='email'>Email</label>
            <input 
            name='email'
            id='email'
            type='text'
            placeholder='Email'
            onChange={changeHandler}
            value={member.email}
            required
            />
            <label htmlFor='role'>Role</label>
            <select onChange={changeHandler} name="role" required >
                <option value=''>Select Your Role</option>
                <option value={member.role1}>Frontend Engineer</option>
                <option value={member.role2}>Backend Engineer</option>
                <option value={member.role3}>Data Scientist</option>
                <option value={member.role4}>CSS Specialist</option>
                <option value={member.role5}>React God</option>
                <option value={member.role6}>Designer</option>
            </select>
            <button type="submit">Add Member</button>
        </form>
    );
}

export default Form;