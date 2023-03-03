import React, { useEffect, useState } from "react";
import './viajes.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/Firebase-config";

 function ViajesBariloche(){
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
    {Bariloche.map((lugar,index)=>{
     return <p key={index}>{lugar.titulo}</p>
   })}
 </div>
  )
};
export default ViajesBariloche;