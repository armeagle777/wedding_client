import axios from "axios";

const serverApi = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const getGuestInfo = async ({ guestId }) => {
  const response = await serverApi.get(`/guests/${guestId}`);

  return response.data;
};

// export const getFile = async (filterData) => {
//   const config = {
//     responseType: 'blob',
//   };

//   const { data } = await serverApi.post('/export/excel', { data: filterData }, config);

//   const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//   return blob;
// };

export default serverApi;
