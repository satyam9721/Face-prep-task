import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import MovieComponent from "./UserComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await axios.get(`https://randomuser.me/api/?page=${page}&results=${10}`)
   const data = res.data.results
    ;
    console.log("****userdata",data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    //taking the scroll position by below three line of code
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
     console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        //to load data when cursor is the end of error
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
    
      {loading && <Loading />}
    </>
  );
};

export default Home;
