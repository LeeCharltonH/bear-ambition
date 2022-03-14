import styles from "./MapStyles.module.scss";
import { Loader } from "@googlemaps/js-api-loader";
import ContentSection from "../contentSection/contentSection";

function Map(props){

  const loader = new Loader({
    apiKey: "AIzaSyDs0Q-04QoqXvc2Jr16IXUeVS6dMMrLGkM",
    version: "weekly",
    libraries: ["places"]
  });
  
  const mapOptions = {
    center: {
      lat: 51.5862459,
      lng: -0.220009
    },
    zoom: 13,
    mapId: "b661851301fea83d",
    disableDefaultUI: true
  };

  loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    console.log("Caught");
  });

    return(
        <div id="map" className={styles.googleMap}>
            <ContentSection>
            {props.children}
            </ContentSection>
        </div>
    );
};

export default Map;