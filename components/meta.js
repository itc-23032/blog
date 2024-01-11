import Head from 'next/head'

const Meta = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property='og:title' content={pageTitle} />
    </Head>
  )
}

export default Meta
