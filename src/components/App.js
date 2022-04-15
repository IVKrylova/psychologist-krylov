import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { problems } from '../utils/constants';

function App() {
  return (
    <div className="site-background">
      <div className="page">
        <Header />
        <Main problems={problems} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
