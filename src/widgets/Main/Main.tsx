import About from "../About/About";
import NewProducts from "../NewProducts/NewProducts";
import Options from "../Options/Options";
import TopProducts from "../TopProducts/TopProducts";
const Main: React.FC = () => {
  return (
    <main>
      <NewProducts />
      <About />
      <TopProducts />
      <Options />
    </main>
  );
};

export default Main;
