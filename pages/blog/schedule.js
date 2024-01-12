import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

const Schedule = ({ 
  title, 
  publish, 
  content, 
  eyecatch, 
  categories, 
}) => {
  return (
    <container>
      <h1>{title}</h1>
    </container>
}

export async function getSataticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      titel: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories}
  }
}

export default Schedule
