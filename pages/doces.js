export default () => {
    const container = document.createElement('div')

    const template = `
    <Section id="container-chat">
    <h2 id="chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="border-radius: 50%; fill: rgb(255, 255, 255); width: 26px; height: 26px; flex-shrink: 0;">
            <path d="M0 0v60h60V0zm40.37 47a19.15 19.15 0 01-26.47-5.77l-.06-.09a1 1 0 011.74-1 17.15 17.15 0 0028.85 0l.06-.09a1 1 0 011.62 1.17A19.15 19.15 0 0140.37 47zM20.84 28a3.58 3.58 0 00-3.58 3.58 1 1 0 01-2 0 5.58 5.58 0 1111.16 0 1 1 0 01-2 0 3.58 3.58 0 00-3.58-3.63zm18.32 0a3.58 3.58 0 00-3.58 3.58 1 1 0 01-2 0 5.58 5.58 0 1111.16 0 1 1 0 01-2 0 3.58 3.58 0 00-3.58-3.63z"></path>
        </svg>
        Vamos conversar por chat
    </h2>
</Section>

<main>
    <div id="brigadeiro1">
        <h1 class="title1">Casadinho gourmet</h1>
        <img id="imgBrigadeiro" src="./images/casadinhoGourmet.jpg">
    </div>
    <div id="brigadeiro2">
        <h1 class="title2">Bomba de chocolate</h1>
        <img id="imgBrigadeiro" src="./images/bombaChocolate.webp">
    </div>
    <div id="brigadeiro3">
        <h1 class="title3">Petit Gâtue</h1>
        <img id="imgBrigadeiro" src="./images/petitGateau.jpg">
    </div>
</main>
`;

container.innerHTML = template;

return container

}