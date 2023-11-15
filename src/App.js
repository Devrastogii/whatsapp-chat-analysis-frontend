import { FileProvider } from "./components/FileContext";
import MainMenu from "./components/MainMenu";
import SideMenu from "./components/SideMenu";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <FileProvider>
    <section className="bg-[#171717] h-auto">
      <div className="flex pt-8">
        <div className="w-1/4 border-white border-[1px] border-l-0 border-b-0 border-t-0 h-auto">
            <SideMenu />
        </div>
        <div className="w-3/4">
          <MainMenu />
        </div>
      </div>
    </section>
    </FileProvider>
    </>
  );
}

export default App;
