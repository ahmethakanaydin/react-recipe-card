import "./App.css";
import Card from "./components/Card/Card";
import kebab from "./assets/iskender-kebab.jpg"

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "İskender Kebap",
    date: "8 Mart 2021, Perşembe",
    image: kebab,
    description:
      "İskender kebap veya İskender döner, Bursa yöresinin meşhur kebap yemeklerinden biridir. 1867 yılında Kayhan Çarşısı'nda başlamıştır. Aslında temel malzemesi Döner olsa da, İskender'i İskender yapan, üstündeki tereyağ, domates sosu, yanındaki yoğurt ve altındaki yağlı pide parçalarıdır.",
  };

  const likeCount = 1983;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
            <Card
              /* prop ismi = { değişken } */
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              food={recipeItem.image}
              likeCount={likeCount}
              liked={isLiked}
            />
      </header>
    </div>
  );
}

export default App;
