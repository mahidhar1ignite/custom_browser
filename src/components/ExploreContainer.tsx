import './ExploreContainer.css';

import { IonButton, IonCard, IonContent, IonIcon } from '@ionic/react';
import CustomBrowser from "./CustomBrowser";
import { arrowBack as arrowBackIcon, arrowForward as arrowForwardIcon, chatbubbleOutline, chatbubblesOutline, logoFacebook, logoGoogle, logoYoutube, menuOutline, menuSharp, musicalNote, newspaper, play} from "ionicons/icons";
import CustomToolbar from './CustomToolbar';
import { useLocation } from 'react-router';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser"
import { useRef } from 'react';



interface ContainerProps { }


const googleUrl = "https://www.google.com/search?igu=1"
//const url = "https://www.facebook.com/login"
const youtubeUrl="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
const newsUrl = "https://www.sueddeutsche.de/"
const url = "";


const Frame = (props: any) => {
  

  const BackButton = () => {
    return (
        <IonButton className="back-button" fill="clear" color="light" onClick={() => window.history.back()}>
            <IonIcon icon={arrowBackIcon} className="back-icon"></IonIcon>
            <div className="txt">Back</div>
        </IonButton>
    )
  }

  const ForwardButton = () => {
    return (
        <IonButton className="back-button" fill="clear" color="light" onClick={() => window.history.forward()}>
            <IonIcon icon={arrowForwardIcon} className="back-icon"></IonIcon>
            <div className="txt">Forward</div>
        </IonButton>
    )
  }


  return (
      <div>
          <div style={{display:"flex", flexDirection: "row", justifyContent: "center"}}>
            <BackButton />
            <ForwardButton />
            {/* <button onClick={() => window.history.back()}>Back</button>
            <button onClick={() => window.history.forward()}>Forward</button> */}

          </div>
          
          <iframe src={props.src} width={"100%"} height={"700px"} />
      </div>
  )
}




const websiteUrl: string = "https://www.google.com/"

const options: InAppBrowserOptions = {
  zoom: 'no',
  location: 'no',
  toolbar: 'yes',
  hidden: 'yes',
  hideurlbar: 'no',
}
// const browser = InAppBrowser.create(websiteUrl, '_self', options)
// browser?.on('loadstop').subscribe(event => {
//     browser.insertCSS({ code: "body{color: red; padding: 10mm;" });
//     console.log('loadstop DONE!')
// })

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const query = useQuery(); 
  const name = query.get("name")
  
  const browserFrameRef = useRef<any>(null)

  if(name === "internet1"){
    //console.log(browserFrameRef.current)
    //const browser = InAppBrowser.create(websiteUrl, "_self", options)
    //console.log(Object.keys(browser))
    //browserFrameRef.current = 

  }

  return (
    <div>
      {/* <strong>Ready to create an app?</strong> */}
      
      {/* <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
      
      {/* <CustomBrowser /> */}
      {name===null && (<div><CustomToolbar /><div style={{textAlign:"center", justifyContent: "center", fontSize: "5em"}}>Main Menu</div></div>)}
      {/* <p>The query string is {name} </p> */}
      {name==="facebook" && (<div><Frame src="" /><p>Facebook Login</p></div>)}
      {name==="google" && (<Frame src={googleUrl} />)}
      {name==="youtube" && (<div><Frame src={youtubeUrl}/><span>Youtube search bar</span><input /><p>Default Youtube playlist</p></div>)}
      {name==="newspaper" && <Frame src={newsUrl} /> }
      {name==="internet1" && <div ref={browserFrameRef}><Frame src="" /></div>}
      
    </div>
  );
};

export default ExploreContainer;


{/* <IonButton className="icon-group">
        <IonIcon icon={menuOutline} className="icon"></IonIcon>
        <IonIcon icon={musicalNote} className="icon"></IonIcon>
        <IonIcon icon={play} className="icon"></IonIcon>
      </IonButton> */}
