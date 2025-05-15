import About from "../About/About";
import NewProducts from "../NewProducts/NewProducts";
import TopProducts from "../TopProducts/TopProducts";
import Video from "../Video/Video";

const Main: React.FC = () => {
  return (
    <main>
      <NewProducts />
      <About />
      <TopProducts />
      <Video />
    </main>
  );
};

export default Main;
