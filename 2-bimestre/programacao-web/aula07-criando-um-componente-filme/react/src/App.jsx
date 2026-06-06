import Filme from "./components/Filme" 

export default function App(){
  return(
    <div>
      <Filme 
        filme="Matrix"
        ano="1999"
      />

      <Filme 
        filme="Rio 1"
        ano="2011"
      />

      <Filme 
        filme="Alice no País das Maravilhas"
        ano="2009"
      />      
    </div>
  )
}