import React from 'react';

const Member = props => {
    return (
        <div className='member'>
            {props.memberList.map((person, index) => {
                return (
                    <div className='member' key={index}>
                        <h2>{person.name}</h2>
                        <p>{person.email}</p>
                        <p>{person.role}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Member;