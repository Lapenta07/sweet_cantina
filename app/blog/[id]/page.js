'use client'
import './post.css'
import { useEffect, useState } from 'react';
import data from '../../components/post_blogs.json';

export default function OnePost({ params }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const { id } = params;
    const selectedPost = data.find((item) => item.id === parseInt(id));
    if (selectedPost) {
      setPost(selectedPost);
    }
  }, [params]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { titulo, articulo, imagen } = post;

  return (
    <div className='articulo'>
      <h1 className='titular'>{titulo}</h1>
      <div className='entr1'>
      <img src= {imagen} alt={titulo} className='post-image' />
      <p className='noticia'>{articulo}</p>
      </div>
    </div>
  );
}