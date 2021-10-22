import "./CustomBrowser.css";
//import { Browser } from '@capacitor/browser';
import CustomToolbar from "./CustomToolbar";

import {useEffect, useRef} from "react"
import { Container } from "react-dom";
import { IonButton, IonIcon } from "@ionic/react";

import { arrowBack as arrowBackIcon} from "ionicons/icons";

interface ContainerProps { }

//const openCapacitorSite = async () => {
//  await Browser.open({ url: 'http://capacitorjs.com/' });
//};





    
const url = "https://www.sueddeutsche.de/wirtschaft/sondierung-berlin-regierung-wirtschaft-1.5445001?reduced=true"
//const url = "https://www.ignitesol.com"
//const url = "https://www.google.com/search?igu=1"

const demos = {
    link: `<iframe src=${url} width="80%" height="600px" font-size="0px"></iframe>`
};
  

const Iframe = (props: any) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
        
      />
    );
}

const Frame = (props: any) => {
    return (
        <div>
            <iframe src={props.src} width={props.width} height={props.height} />
        </div>
    )
}

// const CustomToolbar = (props: any) => {
//     return (
//         <div>
//             <IonButton>
//                 <IonIcon icon={arrowBackIcon}></IonIcon>
//                 <div className="txt">Back</div>
//             </IonButton>
//         </div>
//     )
// }

const CustomBrowser: React.FC<ContainerProps> = () => {

    
    // useEffect(() => {
    //     browserRef.current = window.location.origin
    // }, [])
    let browserRef = useRef(null);
    return (
        <div>
            <CustomToolbar />
            {/* <Iframe iframe={demos["link"]} />, */}
            <Frame src={url} width="100%" height="600px" />
           
        </div>   
    )
}

export default CustomBrowser;