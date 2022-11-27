
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



export async function getServerSideProps(context) {

  const Mailjet = require('node-mailjet');
  // Fetch data from external API
  const email = context.query.email
  const type = context.query.type


  console.log("Context: " + context.query)
  if (email && type) {
    /*
        fetch('https://api.mailjet.com/v3.1/send', {
          method: "POST",
          headers: {
            'Authorization': 'Basic NDgzZGQ3ZjdmMTc0ODdlMzI0OTdmMGI2MjFkYmY3NDg6NGQ4ODU5MDViMGY0MzI1MzIxMDdhOWJhN2Q5YjQ4ZTU=',
            'Content-Type': 'application/json'
          },
          body: '{"Messages":[{"From": {"Email": "admin@greenboost.it"},"To": [{"Email": "admin@greenboost.it"}],"Subject": "zxc","TextPart": email:' + email + ' type:' + type + ',"HTMLPart": "asd"}]}'
        }).then(console.log("abc")).catch(console.log("def"))
    
    */
    const mailjet = Mailjet.apiConnect(
      '483dd7f7f17487e32497f0b621dbf748',
      'a6c1f7062f0499a863f8a45c1e3c6c6a'
    );

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: "admin@greenboost.it",
            },
            To: [
              {
                Email: "admin@greenboost.it",
              }
            ],
            Subject: "Your email flight plan!",
            TextPart: "Email:" + email+ " Type: " + type,
            HTMLPart: ""
          }
        ]
      })

    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })

    /*
    
        var fs = require('fs');
    
        fs.appendFile('collected_emails.csv', email + '\t' + type + '\n', function (err) {
          if (err) throw err;
          console.log('Error');
        });
         */
  }


  return { props: {} }
} 