import Post from "./Post";

export default function Posts(props) {
   console.log(props.info);
   console.log(props.info[0]);
   return (
      <div className="posts">
         <div className="posts-header">
            <p>Posts da semana</p>
         </div>

         <div className="posts-div">
            <Post post={props.info[0]} />
            <Post post={props.info[1]} />
            <Post post={props.info[2]} />
         </div>
      </div>
   );
}
