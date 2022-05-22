import React from 'react'

const Table= ({employees})=>{
    return (
        <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
            <tbody>
            </tbody>
        </table>
        </div>

    );
}
export default Table