import { create } from "zustand";
import axiosClient from "../plugins/axiosClient";



const useBooksStore = create((set)=>({
    books: [],
    getBooks: async ()=>{
        try{
            const response = await axiosClient.get("/book")
            set({books: response.data})
        }catch (error){
            console.log("error fetching data:", error)
        }
    },
    updateBook:  async (payload) =>{
        try{
            const response = await axiosClient.patch(`/book/${payload.id}`, payload)
            set({books: [...books, response.data]})
        }catch(error){
            console.error(error)
        }
    },
    deleteBook: async (id)=>{
        try{
            const response = await axiosClient.delete(`/book/${id}`)
            set({books: response.data})
        }catch(error){
            console.error(error)
        }
    }
}))

export default useBooksStore;