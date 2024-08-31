import { useState } from "react";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import "./App.css";
import { LiveAudioVisualizer } from "react-audio-visualize";

function App() {
  const [micinput, setMicinput] = useState(false);

  const [mediaInput, setMediaInput] = useState();

  const handleClick = () => {
    if (micinput) {
      setMicinput(!micinput);
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.stop();
        setMediaInput(null);
      });
      setMediaInput();
    } else {
      setMicinput(!micinput);
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
          setMediaInput(mediaRecorder);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <button onClick={handleClick}>
          {mediaInput ? (
            <>
              <FaMicrophoneAlt
                className={`rounded-full shadow-md  ${
                  !micinput && `hover:shadow-emerald-500`
                } border p-10 transition-all duration-200 ${
                  micinput &&
                  `shadow-gray-500 transition-all duration-100 hover:shadow-red-700`
                }`}
                size={166}
              />
            </>
          ) : (
            <>
              <FaMicrophoneAltSlash
                className={`rounded-full shadow-md  ${
                  !micinput && `hover:shadow-emerald-500`
                } border p-10 transition-all duration-200 ${
                  micinput &&
                  `shadow-gray-500 transition-all duration-100 hover:shadow-red-700`
                }`}
                size={166}
              />
            </>
          )}
        </button>

        <div className={`${!mediaInput && `hidden`} absolute bottom-16`}>
          {mediaInput && (
            <>
              <LiveAudioVisualizer
                mediaRecorder={mediaInput}
                width={200}
                height={75}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
