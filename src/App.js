import React, { useState } from 'react';
import ClassCounter from './components/classCounter';
import Counter from './components/Counter';
import PostItem from './components/Postitem';
import Postlist from './components/Postlist';
import './styles/App.css';
import {Carousel} from './components/carousel/Carousel';


function App() {

return (
  <Carousel>
<div className='item item-1'>item 1</div>
<div className='item item-2'>item 2</div>
<div className='item item-3'>item 3</div>



  </Carousel>
)
}






 /*const [posts, setPosts]= useState([
   {id:1, title:'Javascript', body:'Discription'},
   {id:2, title:'Javascript 2', body:'Discription'},
   {id:3, title:'Javascript 3', body:'Discription'},
   {id:4, title:'Javascript 4', body:'Discription'},



])
const [posts2, setPosts2]= useState([
  {id:1, title:'Pyton', body:'Discription'},
  {id:2, title:'Pyton2', body:'Discription'},
  {id:3, title:'Pyton3', body:'Discription'},
  {id:4, title:'Pyton4', body:'Discription'},
  {id:5, title:'Pyton5', body:'Discription'},
  


])*/
  
 /* return (
    <div className="App">
      <Postlist posts = {posts} title ="Список постов 1"/>
      <Postlist posts = {posts2} title ="Список постов 2"/>
    </div>
  );*/


export default App;
