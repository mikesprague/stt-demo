import React, { useEffect, useState } from 'react';
import './App.scss';

export default function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const getRemoteData = async () => {
  //     const remoteData = await axios
  //       .get('https://icanhazdadjoke.com', {
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //       })
  //       .then((response) => response.data);
  //     setData(remoteData);
  //   };
  //   getRemoteData();
  // }, []);

  return (
    <>
    <div className="container max-w-screen-xl min-h-screen p-8 text-center page-wrapper">
      <h1 className="mt-4 mb-2 text-4xl font-bold">Browser Speech to Text Demo</h1>
      <div id="main" className="items-center p-4 mt-4 border-4 rounded-md opacity-75 bg-bluegray-900">
        <button className="p-3 text-base font-semibold text-blue-200 bg-lightblue-900" type="button" id="button">Start listening</button>
        <div id="result" className="mx-10 mt-8 border-2 border-cyan-300 bg-bluegray-200 text-cyan-700">press button above and speak</div>
        <p id="message" hidden aria-hidden="true">Sorry, your browser doesn't support speech recognition.</p>
      </div>
    </div>
    <div className="fixed min-w-full text-sm text-center bottom-2">
      <p>Copyright &copy; 2021 <a href="https://github.com/mikesprague">Michael Sprague</a></p>
    </div>
    </>
  );
}
