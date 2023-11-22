const template = document.createElement("template");
template.innerHTML = `
<style>
  * {
    transition: 600ms ease-in-out;
  }
  #chatbox-container {
    font-family: "Quicksilver", sans-serif;
    z-index: 2;

    height: 100%;
    width: 100%
    
    background-color: transparent;

    position: relative;
    perspective: 600px;

    margin: 0.6rem 0.85rem;

    transform: translate(calc(100% + clamp(300px, 60%, 600px) - 1rem)), 0)
  }

  #chatbox-container[data-open="false"] {
    translate: calc(-100% - 1rem) 0;
  }
  
  #chatbox-container[data-open="true"] {
    translate: 0 0;
  }
  #chatbox-container[data-open="true"] > #chatbox {
    transform: rotate3d(0, 0, 0, 90deg);
  }
  
    #chatbox-container[data-open="false"] > #chatbox {
      transform: rotate3d(0, -1, 0, 90deg);
    }

  #chatbox-tab {
    font-family: "Audiowide", cursive;
    content: "Chat";
    color: hsl(
      var(--yellow-hue) 
      var(--yellow-sat) 
      var(--yellow-lit) 
    );
    background-color: hsl(0 0% 14%);

    position: absolute;
    rotate: 90deg;
    top: 50%;
    left: calc(100% - 0.98rem);

    padding: 0.6rem 0.85rem;

    /* border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem; */
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: -0.5rem;
    border-bottom-left-radius: -0.5rem;
    border: 0.1rem solid hsl(
      var(--yellow-hue) 
      var(--yellow-sat) 
      var(--yellow-lit) 
    );
    border-bottom-color: hsl(0 0% 14%);

    cursor: pointer;
  }

  #chatbox-tab:hover {
    background-color: hsl(
      var(--yellow-hue)
      var(--yellow-sat)
      var(--yellow-lit)
    );
    color: hsl(0 0% 14%);
  }

  #chatbox {
    perspective: 1000px;
    transform-style: preserve-3d;
    transform-origin: 100% 0 0;
    backface-visibility: hidden;    
    width: 100%;
    height: 100%;
    color: hsl(
      var(--yellow-hue) 
      var(--yellow-sat) 
      var(--yellow-lit) 
    );
    background-color: hsl(0 0% 14%);
    border-radius: 0.5rem;
    border: 0.1rem solid hsl(
      var(--yellow-hue)
      var(--yellow-sat)
      var(--yellow-lit)
    );
    padding: 0.6rem 0.85rem;
  }

</style>
<div id="chatbox-container" data-open="false">
<div id="chatbox">Testing</div>
<div id="chatbox-tab">chat</div>
</div>
`;

class Chatbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "css/style.css");

    this.shadowRoot.append(linkElem);
    this.chatboxContainer = this.shadowRoot.querySelector("#chatbox-container");
    console.log(this.chatboxContainer);
    this.chatboxTab = this.shadowRoot.querySelector("#chatbox-tab");

    this.chatboxTab.addEventListener("click", () => {
      this.toggleOpen();
    });
  }

  toggleOpen() {
    this.chatboxContainer.dataset.open =
      this.chatboxContainer.dataset.open === "true" ? "false" : "true";
  }
}

customElements.define("chat-box", Chatbox);
