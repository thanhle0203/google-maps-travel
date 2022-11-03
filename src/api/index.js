import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    // request
    const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        },
        headers: {
            'X-RapidAPI-Key': '99db9032f2mshb0ea01c4f918384p1acfb6jsnaec49441eafe',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });

    return data;

  } catch (error) {
    console.log(error)
  }
}