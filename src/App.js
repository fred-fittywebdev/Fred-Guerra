import { Route } from "react-router-dom"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyle"

// Components
import Main from './components/Main'
import About from './components/About'
import Blog from './components/Blog'
import Work from './components/Work'
import Skiils from './components/Skills'

function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skiils} />

      </Switch>
    </ThemeProvider>

  </>

}

export default App

