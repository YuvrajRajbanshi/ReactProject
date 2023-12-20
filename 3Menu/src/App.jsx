import { useState } from "react";

import "./App.css";
import Menu from "./components/Menu/Menu";
import OurMenu from "./components/OurMenu/OurMenu";
import NavBar from "./components/NavBar/NavBar";
import Api from "./components/Api/Api";

function App() {
  const allCategories = ["all", ...new Set(Api.map((items) => items.category))];
  console.log(allCategories);
  const [menuItems, setmenuItems] = useState(Api);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setmenuItems(Api);
    }
    // const newItems = Api.filter((item) => {
    //   setmenuItems(newItems);
    // });
    const newItems = Api.filter((item) => item.category === category);
    setmenuItems(newItems);
  };

  return (
    <>
      <OurMenu />
      <NavBar categories={categories} filterItems={filterItems} />
      <div className=" flex gap-10 flex-wrap justify-center">
        {" "}
        <Menu Api={Api} />
      </div>
    </>
  );
}

export default App;
