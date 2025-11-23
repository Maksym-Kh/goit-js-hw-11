import axios from "axios";




export async function getImagesByQuery(query) {
const myApiKey = "53375208-e57c58d3edc6a90b7b7ee591a";
const params = new URLSearchParams({
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});



   return  axios.get(`https://pixabay.com/api/?key=${myApiKey}&${params}`)
}