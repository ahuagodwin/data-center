import Head from "next/head"
import Avatar from "../components/Avatar";

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
        <p className="link">Store</p>
        </div>

        {/* the right nav items */}
        <div className="flex space-x-4 items-center">
        <p className="link">Messages</p>
        <p className="link">Images</p>

        {/* icons */}


        {/* avatar - profile image*/}
        <Avatar url="https://media-exp1.licdn.com/dms/image/C4E03AQEmJcu47sMVkw/profile-displayphoto-shrink_200_200/0/1622055185857?e=1642636800&v=beta&t=1_eNcxgfYjvoSpTUKLK7eQE52CXnQZgV8ser99CskXM" />

        </div>
      </header>

      {/* the body */}


      {/* the footer */}
    </div>
  )
}
