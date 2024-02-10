import React, { useEffect, useState } from 'react'
import useBooksStore from '../../store/books'
import BookModal from './BooksModal'
export default function Books() {
    const {books, getBooks} = useBooksStore()
    const {book, updateBook} = useBooksStore()
    const [modal, setModal] = useState("")
        const [edit, setEdit] = useState("");
    useEffect(()=>{
        getBooks()
    })
    const toggle = () => {
      setModal(false);
      setEdit("");
    };
    return (
    <div className='ml-[20px]'>
      <BookModal edit={edit} open={modal} toggle={toggle} />
      <button
        className="p-[10px] bg-green-700 ml-[20px] mt-[10px]"
        onClick={() => setModal(true)}
      >
        add books
      </button>
      <div>
        {books?.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-xl bg-white w-[250px] h-[400px]  p-[10px]"
            >
              <img
                src={item.image}
                className="w-[250px] h-[200px] rounded-xl"
                alt=""
              />
              <h1 className="text-[25px] ml-[20px]">Name: {item.name}</h1>
              <h1 className="text-[25px] ml-[20px]">Price: {item.price}</h1>
              <div className="flex justify-around">
                <button
                  onClick={() => updateBook(item)}
                  className="w-[100px] bg-sky-600 p-[10px] text-white rounded-xl"
                >
                  {" "}
                  Edit
                </button>
                <button
                  onClick={() => deleteBook(item.id)}
                  className="w-[100px] bg-red-500 p-[10px] text-white rounded-xl"
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
