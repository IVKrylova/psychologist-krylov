import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { problems, diplomas } from '../utils/constants';

function App() {
  return (
    <div className="site-background">
      <div className="page">
        <Header />
        <Main problems={problems}
              diplomas={diplomas} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
