import './index.css';
import Control from './components/Control';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  // const [setRole] = useState('dev');
  
  // console.log('we are about to list the employees');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Nyamekye",
        role: "Developer",
        img: "/images/young.jpg",
      },
      {
        id: 2,
        name: "Angie",
        role: "UI/UX",
        img: "/images/woman.jpg",
      },
      {
        id: 3,
        name: "Hassan",
        role: "CEO",
        img: "/images/glasses.jpg",
      },
      {
        id: 4,
        name: "Racheal",
        role: "Quality Assurance",
        img: "/images/pretty.jpg",
      },
      {
        id: 5,
        name: "James",
        role: "Developer",
        img: "/images/white.jpg",
      },
      {
        id: 6,
        name: "Saliu",
        role: "Developer",
        img: "/images/curly.jpg",
      },
      {
        id: 7,
        name: "Derrick",
        role: "Quality Assurance",
        img: "/images/black.jpg",
      },
      {
        id: 8,
        name: "Fred",
        role: "Developer",
        img: "/images/happy.jpg",
      },
      {
        id: 9,
        name: "Eric",
        role: "Developer",
        img: "/images/guy.jpg",
      },
      {
        id: 10,
        name: "Shadarack",
        role: "Developer",
        img: "/images/portrait.jpg",
      },
      {
        id: 11,
        name: "Dennis",
        role: "Developer",
        img: "/images/senior.jpg",
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name:newName, role: newRole };
      }

      return employee;

    });
    setEmployees(updatedEmployees);
  }
  const showEmployees = (true);
  return (
  
    <div className="App bg-zinc-100">
      <div className='m-2 py-8 text-purple-700 px-8 justify-center rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <h2>Admin Control Portal</h2>
      </div>
      <div className="m-4 text-slate-700 space-y-2 sm:py-4 sm:flex sm:items-center justify-items-center sm:space-y-0 sm:space-x-6"> 
      <p>Update employee credentials by clicking on the update button of the employee.</p>
      </div>
      {/* {console.log('inside the return')} */}
      {showEmployees ? (
        <>
        {/* <input 
          type='text'
          onChange={(e) => {
            // console.log(e.target.value);
            setRole(e.target.value);
          }}
        /> */}

        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            console.log(uuidv4());
            return (
              <Control 
                key={employee.id}
                id={employee.id}
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
                updateEmployee={updateEmployee}
              />
            )
          })}
          
          
        </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
    
  );
}

export default App;
