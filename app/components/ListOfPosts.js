import Link from "next/link";
import './ListOfPosts.css';
import data from '../components/post_blogs.json';
import { useEffect, useState } from "react";

export default function ListOfPosts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(data);
  }, []);

  return (
    <div className="main">
      {post.map(({ id, imagen, titulo, descripcion }) => (
        <article key={id} className="entrada">
          <div className="foto">
            <img src={imagen} alt={titulo} />
          </div>
          <div className="titulo">
            <h3>{titulo}</h3>
          </div>
          <div className="descripcion">
            <p>{descripcion}</p>
          </div>
          <div className="boton">
            <Link href={`/blog/${id}`} key={id}><button>LEER NOTA</button></Link>
          </div>
        </article>
      ))}
    </div>
  );
}