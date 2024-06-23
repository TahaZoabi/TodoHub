import { NotebookTabs } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="h-20 bg-background flex items-center ">
      <NotebookTabs className="ml-8 mr-1 text-primary size-5 sm:size-6" />
      <h1 className="text-3xl text-primary sm:text-4xl ">To-Do Hub</h1>
    </nav>
  );
};

export default Navbar;
