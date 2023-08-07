import Nav from "./components/Nav/Nav"
import Card from "./components/Card/Card"
import Loading from "./components/Loading/Loading"
import FullPageLayout from "./components/FullPageLayout/FullPageLayout"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import {useFetch} from './helper/useFetch'
const search=''
function App() {
  const {data, pending, error }=useFetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
  console.log(error);
  const newData={...data}
  const animeData={...newData.data}
  console.log(Object.values(animeData));
  return (
    <div className="App">
       {error? (
        <FullPageLayout
        >
          <ErrorMessage error={error}/>
           
          
        </FullPageLayout>
      ) : null}
      {pending?<FullPageLayout>
        <Loading/>
      </FullPageLayout>
      :
      <>
     
      <Nav/>
     
      <div className="card-wrapper">
      {Object.values(animeData).map(obj=>{    
        return(
          <Card key={obj.mal_id} src={obj.images.jpg.image_url} title={obj.title}/>
          
        )

      })}
      </div>
      </>
   }
    </div>
  )
}

export default App
