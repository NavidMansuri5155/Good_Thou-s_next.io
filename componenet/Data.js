import style from "../styles/Article.module.css"


function Data({ posts }) {
  return (
    <div className={style.grid}>
      {posts.map(post => (
        <a className={style.card}>
          <h3>{post.author || "NAVID MANSURI"} &#8631;</h3>
          <p>{post.text || "you are a good parson"}</p>
          <span className={style.more} > Read more &rarr;</span>
        </a>
      ))}
    </div>

  )
}

export default Data
