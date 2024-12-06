import Footer from "../components/Footer/Footer";
import Header, { headInt } from "../components/header/Header";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Contact() {
  const headTab: headInt = {
    headTitre: "GET IN TOUCH!",
    headContent: " ",
    headImg: "images/aboutusbg.jpg",
    size: "",
  };

  return (
    <>
      <div className="font-body bg-[#F5F5F5]">
        <Header
          headTitre={headTab.headTitre}
          headContent={headTab.headContent}
          headImg={headTab.headImg}
          size={headTab.size}
        />
        <div
          className="leaflet-map-container"
          
        >
          <MapContainer
            center={[51.503399, -0.119519]} // Coordonnées pour London Eye
            zoom={15}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.503399, -0.119519]}>
              <Popup>Lastminute.com London Eye</Popup>
            </Marker>
          </MapContainer>
        </div>

        <Footer />
      </div>
    </>
  );
}
