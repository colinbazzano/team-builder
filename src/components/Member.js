import React from 'react';

const Member = props => {
    return (
        <div className='member'>
            {props.memberList.map((person, index) => {
                return (
                    <div className='member' key={index}>
                        <h1>{person.name}</h1>
                        <p>{person.email}</p>
                    </div>
                );
            })}
        </div>
    );

}

export default Member;