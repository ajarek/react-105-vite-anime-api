import Nav from './components/Nav/Nav'
import Card from './components/Card/Card'
import Loading from './components/Loading/Loading'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import CardId from './components/CardId/CardId'
import { useFetch } from './helper/useFetch'
import { useDebounce } from './helper/useDebounce'
import { createContext, useState } from 'react'
export const AppContext = createContext()

function App() {
  const [activeCardId, setActiveCardId] = useState(false)
  const [selectedId, setSelectedId] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 700) || ''
  const { data, pending, error } = useFetch(
    `https://api.jikan.moe/v4/anime?q=${debouncedSearchValue}&limit=20`
  )
  const newData = { ...data }
  const animeData = { ...newData.data }

  const handleCard = (id) => {
    setSelectedId(id)
    setActiveCardId(true)
  }

  console.log(Object.values(animeData))

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          searchValue,
          setSearchValue,
          activeCardId,
          setActiveCardId,
          selectedId,
          setSelectedId,
          animeData,
        }}
      >
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
            {activeCardId ? (
              <CardId />
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
                        onClick={() => handleCard(obj.mal_id)}
                      />
                    )
                  })}
                </div>
              </>
            )}
          </>
        )}
      </AppContext.Provider>
    </div>
  )
}

export default App
