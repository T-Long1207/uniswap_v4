import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import { SettingsContext } from '../context/AnimationContext'
import { useContext } from 'react'
import Snowfall from 'react-snowfall'
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

const Home: NextPage = () => {
  const { color, setColor, snowflakeCount, setSnowflakeCount } =
    useContext(SettingsContext)
  return (
    <div className={style.wrapper}>
            <Snowfall color={color} snowflakeCount={snowflakeCount} />

      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}

export default Home
