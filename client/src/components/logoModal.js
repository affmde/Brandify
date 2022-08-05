import { Modal, Image } from "react-bootstrap"
import './logoModal.css';

export const LogoModal = (props) => {
    let name=props.info.name
    
    if(props.info.name){
        name= capitalizeFirstLetter(name);
        name= name.replace("_", " ")
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalLogo"
    >
      <Modal.Body>
        <Image alt={`${name} logo`} src={props.info.logoUrl} id="logo-modal-pic"></Image>
        <p id="logo-modal-name">
          {name}
        </p>
      </Modal.Body>
      
    </Modal>
    )
}