import './style.scss'
import { Header, Footer, ColorPalette, Search, Form, NoteList } from './components'
function App() {
  return (
    <div className="base__container">
      <Header />
      <section className="notes">
        <Search />
        <ColorPalette />
        <Form />
        <NoteList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
