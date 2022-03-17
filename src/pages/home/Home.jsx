import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import List2 from "../../components/list/List2";
import List3 from "../../components/list/List3";
import Footer from "../../components/footer/index.jsx";
import List4 from "../../components/list/List4";
import List5 from "../../components/list/List5";
import List6 from "../../components/list/List6";
import List7 from "../../components/list/List7";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <List2/>
      <List3/>
      <List4/>
      <List5/>
      <List6/>
      <List7/>
      <Footer/>
    </div>
  );
};

export default Home;
