// con le classi devo prima IMPORTARE Component

import { Component } from "react";

// creo la classe e ci ESTENTDO Component

class ImageComponent extends Component {
  // prima del return devo inserire il METODO render()
  // render per le classi è OBBLIGATORIO
  render() {
    // con le class per chiamare una props
    // si deve usa il this.props
    return <img src={this.props.imageSrc} alt={this.props.imageAlt} />;
  }
}

// ESPORTO ImageComponent
export default ImageComponent;
