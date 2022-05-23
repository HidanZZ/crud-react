import React,{useState} from "react";
import Table from "./Table"
import Header from "./Header"
import {employeesData} from "../../data"
import Swal from "sweetalert2";
const Dashboard=()=>{

    const [employees, setEmployees] = useState(employeesData);
    const handleDelete=(id)=>{
        Swal.fire(
            {
                icon:'warning',
                title:'are you sure you want to delete this?',
                text:"you won't be able to revert this!",
                ShowCancelButton:true,
                confirmButtonText:'Yes, delete this',
                cancelButtonText:'No , cancel this'

            }
        ).then(res=>{
            if(res.value){
                const [employee]=employees.filter(x=>x.id===id)
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setEmployees(employees.filter(x=>x.id!==id))
            }
        })
    }
    return (
        <div className="container">
            
              <Header
            
              />
              <Table
                handleDelete={handleDelete}
                employees={employees}
               
              />
          
        </div>
      );
}

export default Dashboard;