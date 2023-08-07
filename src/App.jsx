import Nav from './components/Nav/Nav'
import Card from './components/Card/Card'
import Loading from './components/Loading/Loading'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import { useFetch } from './helper/useFetch'
import { createContext, useState } from 'react'
export const AppContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('');
  const { data, pending, error } = useFetch(
    `https://api.jikan.moe/v4/anime?q=${searchValue}&limit=20`
  )
  const newData = { ...data }
  const animeData = { ...newData.data }
  console.log(Object.values(animeData))
  return (
    <div className='App'>
      <AppContext.Provider value={{searchValue, setSearchValue}}>
        {error ? (
          <FullPageLayout>
            <ErrorMessage error={error} />
          </FullPageLayout>
        ) : null}
        {pending ? (
          <FullPageLayout>
            <Loading />
          </FullPageLayout>
        ) : (
          <>
            <Nav />

            <div className='card-wrapper'>
              {Object.values(animeData).map((obj) => {
                return (
                  <Card
                    key={obj.mal_id}
                    src={obj.images.jpg.image_url}
                    title={obj.title}
                  />
                )
              })}
            </div>
          </>
        )}
      </AppContext.Provider>
    </div>
  )
}

export default App
