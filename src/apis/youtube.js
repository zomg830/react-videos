import axios from "axios";

const KEY = "AIzaSyDYm4UKg3HizxaUj9pb21Zdx6mUdD0DYTQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
