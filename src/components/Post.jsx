export default function Post(props) {
   console.log(props.post);
   return (
      <div className="post">
         <h1>{props.post.title}</h1>
         <p>{props.post.text}</p>
         <p>Author: {props.post.author}</p>
      </div>
   );
}
