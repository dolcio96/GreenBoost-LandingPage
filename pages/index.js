
import { ReactElement } from "react"
import HomeLayout from "@components/layout/homeLayout"
import Head from "@components/head"
import HomeComponent from "@components/home"


export default function Home() {
  return (
    <>
        <Head
          title="GreenBoost"
          description="GreenBoost."
        />

        <HomeComponent/>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}



export async function getServerSideProps(context) {
  // Fetch data from external API
  console.log(context.query)
  var fs = require('fs');

  fs.appendFile('mynewfile1.txt', ' This is my text.\n', function (err) {
    if (err) throw err;
    console.log('Error!');
});

  return { props: {  } }
}