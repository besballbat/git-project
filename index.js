const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://pni72rgu37zxtivjulg2p2gzau0dmzcu.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ' Views: ${data}';
}
updateCounter();