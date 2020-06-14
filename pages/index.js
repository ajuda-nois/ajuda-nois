import Head from 'next/head'
import axios from 'axios'

function Home({ mentorus }) {
  return (
    <div>
      <Head>
        <title>Ajuda nois</title>
      </Head>]

      {JSON.stringify(mentorus, null, 2)}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3000/api/mentorus'
  })

  return {
    mentorus: response.data
  }
}

export default Home