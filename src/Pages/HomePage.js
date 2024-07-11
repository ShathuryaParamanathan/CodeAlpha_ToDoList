import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Contents from '../Components/Contents'
import AddTask from '../Components/AddTask'

const HomePage = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div>
        <NavBar title="Task Master"  addMode={addMode}  setAddMode={setAddMode} />
        {addMode ? <AddTask addMode={addMode} setAddMode={setAddMode} /> :<Contents />  }
        
    </div>
  )
}

export default HomePage