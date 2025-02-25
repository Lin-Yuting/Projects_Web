import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        StudentID: 'A00835917',
        FirstName: 'Yuting',
        LastName: 'Lin',
        Age: 21,
        University: 'TEC',
        Carrer: 'ITC'
    });

    const { StudentID, FirstName, LastName, Age, University, Carrer } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target; 
        setFormState({...formState, [ name ]: value
        });

    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    

    return (
        <>
            <h1>Formulario Simple</h1><hr />
            <input type="text" className="form-control" placeholder="Student ID" name="StudentID"
                value={ StudentID }
                onChange={ onInputChange }
            />

            <input type="text" className="form-control mt-2" placeholder="First Name" name="FirstName"
                value={ FirstName }
                onChange={ onInputChange }
            />

            <input type="text" className="form-control mt-2" placeholder="Last Name" name="LastName"
                value={ LastName }
                onChange={ onInputChange }
            />

            <input type="Age" className="form-control mt-2" placeholder="Age" name="Age"
                value={ Age }
                onChange={ onInputChange }
            />

            <input type="text" className="form-control mt-2" placeholder="University" name="University"
                value={ University }
                onChange={ onInputChange }
            />

            <input type="text" className="form-control mt-2" placeholder="Carrer" name="Carrer"
                value={ Carrer }
                onChange={ onInputChange }
            />

            <button className = "btn btn-primary" onClick= { ()=> {console.log(StudentID, FirstName, LastName, 
                Age, University, Carrer)} }>Submit</button>

        </>
    )
}
