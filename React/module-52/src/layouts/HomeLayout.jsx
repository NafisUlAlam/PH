import Header from "./../components/Header";
import LatestNews from "./../components/LatestNews";
import Navbar from "./../components/Navbar";
import LeftNav from "./../components/LeftNav";
import RightNav from "./../components/RightNav";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto py-2 md:grid grid-cols-12 gap-2 ">
        <aside className="col-span-3">
          <LeftNav></LeftNav>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
