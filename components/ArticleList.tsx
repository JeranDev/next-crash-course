import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: any, index: number) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  )
}

export default ArticleList
