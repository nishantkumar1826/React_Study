// Conditional rendering = allows you to control what get rendered
//                         in your application based on certain conditions
//                          (show, hide or change components)
import UserGreeting from './userGreeting.jsx';

function App(){
  return(
    <>
        <UserGreeting isLoggedIn={true} username="Nishant"/>
    </>
  );
}

export default App