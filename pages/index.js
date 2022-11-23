
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

      <HomeComponent />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}



// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const email = context.query.email
//   const type = context.query.type
//   if (email && type) {
//     var fs = require('fs');

//     fs.appendFile('collected_emails.csv', email + '\t' + type + '\n', function (err) {
//       if (err) throw err;
//       console.log('Error');
//     });
//   }


//   return { props: {} }
// } 