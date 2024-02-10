import { create } from "zustand";
import axiosClient from "../plugins/axiosClient"


const useAuthStore = create((set)=>({
    register: async(payload)=>{
        try {
          const response = await axiosClient.post("/auth/signup", payload);
          console.log(response)
          if (response?.tokens?.access_token) {
            navigate("/books")
            localStorage.setItem("token", response?.tokens?.access_token)
          }
        } catch (error) {
          console.log(error);
        }
    },
    login: async(payload)=>{
        try {
          const response = await axiosClient.post("/auth/signin", payload);
          if (response?.tokens?.access_token) {
            localStorage.setItem("token", response?.tokens?.access_token)
          }
        } catch (error) {
          console.log(error);
        }
    }
}))

export default useAuthStore;