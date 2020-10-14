import React from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import { FiPlus, FiArrowRight } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita!</p>
                </header>

                <footer>
                    <strong>Limeira</strong>
                    <span>São Paulo</span>
                </footer>

            </aside>

            <Map 
                center={[-22.597897,-47.3964264]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker 
                    position={[-22.597897,-47.3964264]}
                    icon={mapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight 
                                size={20}
                                color="fff"
                            />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus 
                    size={32}
                    color="#fff"
                />
            </Link>
        </div>
    );
}

export default OrphanagesMap;