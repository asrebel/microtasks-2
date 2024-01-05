import React from 'react';

type NewComponentPropsType = {
    students: StudentType[]
}

type StudentType = {
    id: number;
    name: string;
    age: number;
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentsArray, index) => {
                return (
                    <li key={objectFromStudentsArray.id}>
                        <span>{objectFromStudentsArray.name} </span>
                        <span>{objectFromStudentsArray.age}</span>
                    </li>
                )
            })}

        </ul>
    );
};

