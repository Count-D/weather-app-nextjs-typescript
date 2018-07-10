import Link from 'next/link'

export default () => (
    <div>
        <h1>Dejan Dabic</h1>
      <p>
        <a href="mailto:dejan.dabic@outlook.com">Contact me!</a>
      </p>
      <Link href="/index">
      <a>Home!</a>
    </Link>
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
  