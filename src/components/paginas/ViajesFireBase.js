import React, { useEffect, useState } from "react";
import './viajes.css';
import 'animate.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/Firebase-config";

 function Viajes(){
  const [Bariloche, setBariloche] = useState([]);
  const BarilocheCollectionRef = collection (db, Bariloche);

  const getBariloche = async () => {
    const querySnapshot = await getDocs(BarilocheCollectionRef);
    const docs = querySnapshot.docs.map((doc)=> doc.data());
    setBariloche(docs);
  };
  useEffect (()=> {
   getBariloche();
  }, []);

 return(
 <div className="Viajes">
    {Bariloche.map((Bariloche)=>{
     return <p>{Bariloche.titulo}</p>
   })}
 </div>
  )
};
export default Viajes;