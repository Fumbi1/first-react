import Navigation from './sections/Nav/Nav';
import Header from './sections/Header/Header';
import Preamble from './sections/NftCards/Preamble';

function App() {


  const datas = [
    {
    color: "red", 
    firstText: "Muyiwa",
    secondText: "Fcmua"
  },
  {
    color: "green", 
    firstText: "Muyiwa",
    secondText: "Fcmua"
  },{
    color: "yellow", 
    firstText: "Muyiwa",
    secondText: "Fcmua"
  }

]



  return (
    <>
      <Navigation />
      <Header />
      <div style={{display: "flex"}}>
      {datas.map(item => {
        return(
      
          <Preamble color={item.color} firstText={item.firstText} secondText={item.secondText}/>
        )
      })}
      
      </div>
    </>
  );
}

export default App;
