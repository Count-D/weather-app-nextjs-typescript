import Link from 'next/link'
import Example from '../components/example';

const Post = (props:any) => (
  <li>
    <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <h1>Weather App TEST</h1>
    <Link href="/contact">
      <a>Contact me!</a>
    </Link>
    <h3>Input a City:</h3>
    <Example />
    <style jsx global>{`
        body {
          font-family: "Benton Sans", "Helvetica Neue";
        }
        h1 {
          font-style: Bold;
          color: #373fff;
        }
        a {
            color: black;
        }
      `}</style>
  </div>
)
