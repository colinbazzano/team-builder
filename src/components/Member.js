import React from 'react';

const edit = e => {
    e.target.contentEditable = "true";
};

const Member = props => {
    return (
        <div className='member'>
            {props.memberList.map((person, index) => {
                return (
                    <div className='member' key={index}>
                        <h2 onClick={edit} >{person.name}</h2>
                        <p onClick={edit} >{person.email}</p>
                        <p>{person.role}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Member;