import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Data Center</title>
        <meta name="Data Center" content="Data Center is a search engine" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      {/* the data center header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* the left nav items */}
        <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p>Store</p>
        </div>

        {/* the right nav items */}
        <div className="flex space-x-4 items-center">
        <p className="text-4xl cursor-pointer">Gmail</p>
        <p>Images</p>

        {/* icons */}


        {/* avatar - profile image*/}
        </div>
      </header>

      {/* the body */}


      {/* the footer */}
    </div>
  )
}
