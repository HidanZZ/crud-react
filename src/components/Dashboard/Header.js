import React from 'react'

const Header = ()=>{
    return (
        <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => console.log("add")}>Add Employee</button>
      </div>
    </header>
    );
}
export default Header