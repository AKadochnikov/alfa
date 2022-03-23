import Header from '../header/header';
import Filter from '../filter/filter';
import CardList from '../card-list/card-list';
import Footer from '../footer/footer';

function Main ():JSX.Element {
  return  (
    <div className="container">
      <Header/>
      <main className="main-container padding-container">
        <h1 className="visually-hidden">Тестовое задание</h1>
        <Filter/>
        <CardList/>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;
