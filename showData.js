import getData from "./getDataAPI.js";

async function showData() {
    const data = await getData()

    let div = document.getElementById('content');

    data.forEach(e => {
        
        let p = document.createElement('p')

        p.innerHTML = e.house;
        div.appendChild(p);

    });
}


export default showData;

