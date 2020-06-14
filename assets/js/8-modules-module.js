
window.onload = function (){
    class NameBadge extends HTMLElement {
        constructor() { 
        super();
        let template = document.getElementById("nameTag");
        let templateContent = template.content;
        const shadowRoot = this.attachShadow({mode:'open'}).appendChild(
        templateContent.cloneNode(true));
        }
    }

    customElements.define('name-tag', NameBadge);
    var namefromtag = document.getElementById("uname");
    namefromtag.addEventListener("click", module.mess);
};