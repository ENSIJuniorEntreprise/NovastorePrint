import P2 from "./clients/P2";
import NosChiffre from "./chiffre/NosChiffre";
import "./chiffre/chiffre.css";
import Fondateur from "./fondateur/lesFondateurs";
import Video from "../../components/Video";
import "./Presentation.css";
function Presentation() {
  
  localStorage.setItem("current","pres")
  

  return (
    <>
      <div className="main">
        <Video />
      </div>
      <div id="presentation">
        <NosChiffre />
        <Fondateur />
      </div>
      <P2 />
    </>
  );
}

export default Presentation;
