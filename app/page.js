"use client";

import Filter from "@/components/filter";
import Navbar from "@/components/navbar";
import Properties from "@/components/properties";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const prop = await axios.get(
        "https://reunion-backend-as7o.onrender.com/list-properties"
      );
      // console.log(prop.data);
      setProperties(prop.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Navbar />
      <Filter setProperties={setProperties} />
      <Properties properties={properties} />
    </div>
  );
}
