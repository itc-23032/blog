import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
      </article>
    </Container>
  )
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
      categories: post.categories
    }
  }
}

export default Schedule
