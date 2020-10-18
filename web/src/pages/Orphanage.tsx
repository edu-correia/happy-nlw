import React, { useEffect, useState } from "react";
import { FiClock, FiInfo } from "react-icons/fi";
import { useParams } from 'react-router-dom';

import '../styles/pages/orphanage.css';
import SideBar from "../components/SideBar";
import api from "../services/api";
import MapVisualizer from "../components/Orphanage/MapVisualizer";
import MapVisualizerShimmer from "../shimmer/MapVisualizerShimmer";

interface Orphanage{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    url: string;
    id: number;
  }>
}

interface OrphanageParams{
  id: string;
}


function Orphanage() {
  const [varIsLoading, setVarIsLoading] = useState(true);
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const params = useParams<OrphanageParams>();
  const { id } = params;

  useEffect(() => {
    api.get(`orphanages/${id}`).then(res => {
      setOrphanage(res.data);
      console.log(res.data);
    });

    setTimeout(() => {
      setVarIsLoading(false);
    }, 1000);
  }, [id]);

  if (!orphanage)
    return <p>Carregando...</p>;

  return (
    <div id="page-orphanage">

      <SideBar />
      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  type="button"
                  className={activeImageIndex === index ? "active" : ""}
                  onClick={() => {
                    setActiveImageIndex(index);
                  } }>
                  <img src={image.url} alt={orphanage.name} />
                </button>
              );
            })}

          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              {!varIsLoading ? (
                <MapVisualizer
                  latitude={orphanage.latitude}
                  longitude={orphanage.longitude} />
              ) : (
                  <MapVisualizerShimmer />
                )}

              <footer>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                                    Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ?
                (<div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                      Atendemos <br />
                      fim de semana
                </div>)
                :
                (<div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#ff6690" />
                      Não atendemos <br />
                      fim de semana
                </div>)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Orphanage;