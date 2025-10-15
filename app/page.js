"use client"
import JsonComponent from "./components/JsonComponent"
import TextComponent from "./components/TextComponent"
import ImageComponent from "./components/ImageComponent";
import AudioComponent from "./components/AudioComponent";
import VideoComponent from "./components/VideoComponent";
import FirstComponent from "./components/FirstComponent";

export default function Home() {



  return (
    <div>
      <FirstComponent />
      <JsonComponent />
      <TextComponent />
      <ImageComponent />
      <AudioComponent />
      <VideoComponent />
    </div >
  )
}
