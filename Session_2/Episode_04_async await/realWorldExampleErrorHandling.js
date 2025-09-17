const API_URL = "https://api.github.com/users/ramesh12331";

// await can only be used inside an async function
async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (error) {
        console.log(error)
    }
}
handlePromise()