import Navbar from './navbar';
import Home from './Home';
import Experiences from './Experiences';
import Projects from './Projects';
import Contacts from './Contacts';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 pt-16">
      <Navbar />
      <Home/>
      <Experiences/>
      <Projects/>
      <Contacts/>
    </div>
  );
}
