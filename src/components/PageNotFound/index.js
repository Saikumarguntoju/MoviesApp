import Header from '../Header'
import './index.css'

const PageNotFound = () => (
  <div>
    <div style={{backgroundColor: 'black'}}>
      <Header />
    </div>
    <div className="page-not-found-container">
      <h1 className="lost-connection-title">Lost your way?</h1>
      <p>
        Sorry, we can’t find that page. You’ll find lots to explore on the home
        page
      </p>
    </div>
  </div>
)

export default PageNotFound