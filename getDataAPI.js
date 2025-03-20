import url from "./API/apiUrl.js";
async function getData() {
    try {
        const data = await fetch(url)
        if (!data.ok){
            throw new Error("El error es:", data.status);

        }
        
        const dataJson = await data.json()

        console.log(dataJson);
        return dataJson;
    } catch (error) {
        console.log(error.message);
    }
    
}

export default getData;



