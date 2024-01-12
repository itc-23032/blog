import parse from 'html-react-parser'
import Image from 'next/image'

const ConvertBody = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: node => {
      if (node.name === 'img') {
        const { src, alt, width, height } = node.attrids
        return (
          <Image
            layout='responsive'
            src={src}
            width={width}
            height={height}
            alt={alt}
            size='(min-width: 768px) 768px, 100vw'
          />
        )
      }
    }
  })
  return <>{contentReact}</>
}

export default ConvertBody
