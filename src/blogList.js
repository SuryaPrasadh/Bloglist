import { Link } from "react-router-dom";

const BlogList = ({blog,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
        {blog.map((helo)=>(
            <div className="preview" key={helo.id}>
                <Link to={`/bloglist/posts/${helo.id}`}>
           
                    <h1><span style={{color:"#333"}}>TITLE-</span>{helo.title}</h1>
                    <p>{helo.author}</p>
                </Link>
               </div>
        ))}
        </div>
     );
}
 
export default BlogList;