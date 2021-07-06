import React,{useState,useEffect} from 'react'
import ComB from './ComB'
const ComA = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };
    useEffect(() => {
      getPosts();
    }, []);
    return (
        <div>
               <ComB/>
               <h3>  Displaying Post Data from a API </h3>
               <div className="data_card">
          
        <ul>
          {posts.map((post, index) => {
            return (
              <li className="newList" key={index}>
                  <img
              class="img" alt={"image"+post.id}
              src={"https://picsum.photos/300/90?random="+index}
            />
               <span className="post-text"> {post.title}</span>
              </li>
            );
          })} 
        </ul>
      </div>
   
         
        </div>
    )
}

export default ComA;
