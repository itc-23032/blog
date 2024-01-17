import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <h1>記事のタイトル</h1>
    </Container>
  )
}
export default Schedule

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
