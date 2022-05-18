import React,{useState} from "react";
import Card from "./Cards";
import Sdata from "../DataList";
import Filter from "./filter";

const alltypeItem=["All",...new Set(Sdata.map((curEle)=>{
  return curEle.type;
}))]
console.log(alltypeItem);

function Call() {
  
const [items, setItem] = useState(Sdata);
const [catItem,setCatItem]=useState(alltypeItem);


const filtermenu = (type) => {

  if(type==="All"){
    setItem(Sdata);
    return;
  }
  const updateItems = Sdata.filter((curEle) => {
    return curEle.type === type;
  });
  setItem(updateItems);
};

  return (
    <>
      <Filter filtermenu={filtermenu} catItem={catItem} />
      <Card items={items} />
    </>
  );
}

export default Call;
