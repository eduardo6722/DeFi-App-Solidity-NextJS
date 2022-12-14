import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

function Home() {
  return (
    <div className="h-screen w-screen bg-[#20242f] text-white select-none flex flex-col justify-between">
      <main className="flex flex-col w-full max-w-[1440px] px-4 mx-auto justify-between min-h-screen">
        <Header />
        <div className="w-full flex justify-center">
          <Main />
        </div>
        <footer />
      </main>
    </div>
  )
}

export default Home
