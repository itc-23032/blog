import { getPostBySlug } from 'lib/api'
<<<<<<< HEAD
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'
=======
import Container from 'components/Container'
>>>>>>> chapter7

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
<<<<<<< HEAD
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}
=======
      <h1>{title}</h1>
    </Container>
  }
>>>>>>> chapter7

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)

  return {
    props: {
      titel: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
<<<<<<< HEAD
      categories: post.categories,
      descriptionn: description
    }
  }
=======
      categories: post.categories}
  } 
>>>>>>> chapter7
}

export default Schedule
