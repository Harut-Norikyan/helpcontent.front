"use client"
import JsonComponent from "./components/JsonComponent"
import TextComponent from "./components/TextComponent"
import ImageComponent from "./components/ImageComponent";
import { AudioComponent } from "./components/AudioComponent";
import { VideoComponent } from "./components/VideoComponent";

export default function Home() {

  const scrollToCurrentDivPositionById = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div>
      <section className="service_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="img-container tab-content">
                <div className="img-box tab-pane fade show active" id="img1" role="tabpanel">
                  <img src={"/images/main-image.jpeg"} alt="main" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="detail-container nav nav-tabs" id="myTab" role="tablist">
                <div
                  className="detail-box active"
                  onClick={() => scrollToCurrentDivPositionById("json")}
                >
                  <h4>
                    {"{"} JSON {"}"}
                  </h4>
                </div>
                <div
                  className="detail-box"
                  onClick={() => scrollToCurrentDivPositionById("text")}
                >
                  <h4>
                    TEXT
                  </h4>
                </div>
                <div
                  className="detail-box"
                  onClick={() => scrollToCurrentDivPositionById("image")}
                >
                  <h4>
                    IMAGE
                  </h4>
                </div>
                <div
                  className="detail-box"
                  onClick={() => scrollToCurrentDivPositionById("audio")}
                >
                  <h4>
                    AUDIO
                  </h4>
                </div>
                <div
                  className="detail-box"
                  onClick={() => scrollToCurrentDivPositionById("video")}
                >
                  <h4>
                    VIDEO
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonComponent />
      <TextComponent />
      <ImageComponent />
      <AudioComponent />
      <VideoComponent />
    </div >
  )
}
