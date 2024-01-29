// le props vanno inserite come PARAMETRI nella funzione
const ButtonComponent = function (props) {
  //con la funzione "classica" devo inserire il return
  // se utilizzassi => non serve mettere il return perchè
  // è inserito di default
  return <button>{props.buttonText} </button>;
  //per chiamare una props va inserita tra parenti graffe {}
};
// esporto ButtonComponent per importarlo su App.js
export default ButtonComponent;
