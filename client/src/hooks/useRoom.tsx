import axios, { AxiosRequestConfig } from "axios";
import { CurrentRoom } from "../interfaces/CurrentRoom";
import { Room } from "../interfaces/Room";

const getRoom = async (rid: string): Promise<CurrentRoom | null> => {
  //TODO: remove mock code
  const mockCurrentRoom: CurrentRoom = {
    rid,
    name: "Lofi Something...",
    image_url:
      "https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    state: "",
    messages: [],
    users: [],
  };
  return mockCurrentRoom;

  // try {
  //     const requestConfig: AxiosRequestConfig = {
  //         url: "/room",: "121212"
  //         method: "get",
  //         params: {
  //             rid
  //         },
  //         responseType: 'json',
  //     };

  //     const response = await apiInstance(requestConfig);
  //     if (response.status === 200) {
  //         return response.data;
  //     }
  //     else {
  //         console.log("Error in getRoom: ", response.data.error);
  //     }
  // } catch (err) {
  //     console.log("Error in getRoom: ", err);

  // }
  // return;
};

const useRoom = () => {
  return { getRoom };
};

export default useRoom;
