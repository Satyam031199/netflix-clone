import React, {useEffect, useState} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import {UserAuth} from '../context/AuthContext'
import {db} from '../services/Firebase'
import hero from '../assets/login.jpg'
import {createImageUrl} from '../services/movieServices'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'

const Profile = () => {
  const [movies,setMovies] = useState([])
  const {user} = UserAuth()
  useEffect(() => {
    if(user){
      onSnapshot(doc(db,'users',`${user.email}`),(doc) => {
        if(doc.data()){
          setMovies(doc.data().favShows)
        }
      })
    }
  },[user])
  const silde = (offset) => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + offset
  }
  const handleDelete = async (movie) => {
    const userDoc = doc(db,'users',user.email)
    await updateDoc(userDoc,{
      favShows: arrayRemove(movie)
    })
  }
  return (
    <>
      <div>
        <div>
          <img src={hero} alt="hero" className='block w-full h-[500px] object-cover'/>
          <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'/>
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">My Shows</h1>
            <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
          </div>
        </div>
        <h2 className="font-nsans-bold md:text-xl p-4 uppercase">Fav Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} onClick={() => silde(-500)}/>
        <div id={`slider`} className="w-full h-fumovie.ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map((movie) => {
                return(
                  <div key={movie.id} className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[270px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
                  <img src={createImageUrl(movie.poster_path, "w500")} alt={movie.title} />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100">
                    <p className="whitespace-normal text-xs md:text-sm justify-center flex items-center h-full font-nsans-bold">
                      {movie.title}
                    </p>
                    <p>
                      <AiOutlineClose size={30} className='absolute top-2 right-2' onClick={() => handleDelete(movie)}/>
                    </p>
                  </div>
                </div>
                )
            })}
        </div>
        <MdChevronRight className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} onClick={() => silde(500)}/>
      </div>
      </div>
    </>
  )
}

export default Profile