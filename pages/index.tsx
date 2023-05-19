import React from 'react'
import { Container } from '@/components'
import Head from 'next/head'

const HomePage: React.FC = () => {
const title: string = 'chrlwv.tech'

return (
<>

  <Head>
    <title>{title}</title>
  </Head>

  <Container>
    <br />
    <br />
    <br />
    <div className="mb-4">
      <img src="https://cdn.discordapp.com/attachments/1050110818773110855/1109097075917991966/421171b65bc28d799c7e565afd5e6499-photoaidcom-cropped.png" />
      <br />
      <h2 className="text-3xl font-medium mb-1">chrlwv.tech (offline)</h2>
      <div>
        <div className="text-secondary font-mono">
          (Discontinued) A multipurpose discord client written in <span
            className="font-bold text-yellow-200 text-lg">javascript</span>.
          Used to be a freelance start-up project but now it's a public client for all around the world users.
        </div>
      </div>
    </div>
    <div>
      <a href='https://skillzl.me'><button
          className="px-4 py-2 rounded-l-xl text-white m-0 bg-green-500 hover:bg-green-600 transition">Invite</button></a>
      <a href='https://skillzl.me'><button
          className="px-4 py-2 rounded-r-xl text-black bg-neutral-50 hover:bg-neutral-300 transition">Support</button></a>
    </div>
  </Container>
</>
 )
}

export default HomePage
