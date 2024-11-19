import {Contact} from "@/interfaces/Contact";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"

export const contacts: Contact[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    contact: "Iglesia Cristiana de Pachuca",
    icon: <FontAwesomeIcon icon={faFacebook}/>,
    type: 1
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    contact: "Iglesia Cristiana de Pachuca",
    icon: <FontAwesomeIcon icon={faXTwitter}/>,
    type: 1
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    contact: "@iglesiacristianadepachuca",
    icon: <FontAwesomeIcon icon={faInstagram}/>,
    type: 1
  },
  // {
  //   name: "Correo",
  //   url: "mailto:globalmediamexico1@gmail.com",
  //   contact: "globalmediamexico1@gmail.com",
  //   icon: <FontAwesomeIcon icon={faEnvelope}/>,
  // },
  {
    name: "Pastor David Taboada García",
    url: "tel:+52 771 123 4567",
    contact: "+52 771 123 4567",
    icon: <FontAwesomeIcon icon={faPhone}/>,
    type: 2
  },
  {
    name: "Copastor ",
    url: "tel:+52 771 123 4567",
    contact: "+52 771 123 4567",
    icon: <FontAwesomeIcon icon={faPhone}/>,
    type: 2
  }
]