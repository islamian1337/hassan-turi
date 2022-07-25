import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Gallery = () => {
  const [imagesArray, setImagesArray] = useState([]);
  useEffect(() => {
    async function getaData() {
      const querySnapshot = await getDocs(collection(db, "photos"));
      setImagesArray(querySnapshot.docs.map((doc) => doc.data()));
    }
    console.log(imagesArray);
    getaData();
  }, []);
  return (
    <div>
      <Navbar />
      {imagesArray.length > 0 ? (
        <div className="grid-cols-2 space-y-2 bg-gray-100 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-auto">
          {imagesArray.map((url) => {
            return (
              <div className="w-full rounded" key={url.id}>
                <a href={url.imageURL}>
                  <img
                    src={url.imageURL}
                    alt="image"
                    className="object-cover w-auto h-[520px]"
                  />
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-center">
          Unable to connect to the server:( <br /> please check your internet
          connection and try again:)
        </h1>
      )}
    </div>
  );
};

export default Gallery;
