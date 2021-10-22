import { IonButton, IonIcon, IonRouterLink } from "@ionic/react"
import { arrowBack as arrowBackIcon, globeOutline, logoDesignernews, logoFacebook, logoGoogle, logoWhatsapp, logoYoutube, newspaper as logoNewspaper} from "ionicons/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomToolbar.css"; 

const logos = [
   
    {logo: logoFacebook, queryParam: "facebook"}, 
    {logo: logoYoutube, queryParam: "youtube"},  
    {logo: logoNewspaper, queryParam: "newspaper"},
    {logo: logoGoogle, queryParam: "google"},   
    {logo: globeOutline, queryParam: "internet1"},
     
]




const CustomToolbar = (props: any) => {
    

    

    return (
        <div className="toolbar">
            
            {
                logos.map((el, i) => (
                    <div className="icon-container" key={i}>
                        
                        <Link to={`?name=${el.queryParam}`} >
                            <IonIcon icon={el.logo} className="icon"></IonIcon>

                        </Link>
                    </div>

                ))
            }
            
        </div>
    )
}

export default CustomToolbar;