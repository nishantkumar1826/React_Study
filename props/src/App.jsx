// props :- read only poperties that are shred between components
//            A parent component can send data to a child component
//      <component key=value />
import Student from './Students.jsx'
function App(){
  return(
    <>
        <Student name="Nishant" age={21} isStudent={true}/>
    </>
  );
}

export default App

