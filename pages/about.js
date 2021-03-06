import React from "react";
import Navbar from "../components/navbar";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Author</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id="profile">
        <div className="flex items-center h-screen w-full justify-center mt-2">
          <div className="max-w-xs">
            <div className="bg-white shadow-xl rounded-lg py-3">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="/images/hassan.jpg"
                  alt="Hassan"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  Hassan Turi
                </h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>Photographer and story-writer</p>
                </div>
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Address
                      </td>
                      <td className="px-2 py-2">
                        Kurram district, Khyber Pakhtunkhwa
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Phone
                      </td>
                      <td className="px-2 py-2">+923046305769</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2">Sibth_turi@hotmail.com</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center my-3">
                  <a
                    className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p
          className="no-underline text-center"
          style={{ paddingLeft: "100px", paddingBottom: "20px", width: "80%" }}
        >
          I am a documentary photographer based in Kurram district, Khyber
          Pakhtunkhwa, and Islamabad. I have been covering protests and
          grassroots mobilizations for more than a decade in Islamabad and
          Rawalpindi informal settlements. I have covered social movements???
          protests throughout the country. I have worked with international
          Photographers and my work has been published in local newspapers and
          magazines. . In 2022 I won first prize in HRCP photo essay
          competition. My major work covers the countryside Pak - Afghan border
          region. My work has been published in the local newspapers and
          magazines..
          <br />
          <strong>My published work :</strong> <br />
          <strong>2014 Henrich Bol Stiftung.</strong>
          <br /> <strong>
            2015 Graphs of the Wrath: The Friday Times.
          </strong>{" "}
          <br />
          <strong> 2021 The Taking of Rawalpindi: Dawn.</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
