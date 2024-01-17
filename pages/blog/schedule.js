import { getPostBySlug } from 'lib/api'
import Container from 'components/Container'

const Schedule = ({ 
  title, 
  publish, 
  content, 
  eyecatch, 
  categories, 
}) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  }

export async function getStaticProps () {
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
