import Navbar from './navbar';
import Home from './Home';
import Experiences from './Experiences';
import {Projects} from './Projects';
import Contacts from './Contacts';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen pt-16" style={{background: "linear-gradient(#FDE2E4, #CFFFE5, #9c91e5)"}}>
      <Navbar />
      <Home/>
      <Experiences/>
      <Projects/>
      <Contacts/>
    </div>
  );
}
