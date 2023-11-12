import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
    <section className="bg-[#171717]">
      <div className="flex pt-8">
        <div className="w-1/4 border-white border-[1px] border-l-0 border-b-0 border-t-0 h-screen">
            <SideMenu />
        </div>
        <div className="w-3/4"></div>
      </div>
    </section>
    </>
  );
}

export default App;
