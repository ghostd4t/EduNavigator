import { Routes, Route } from 'react-router-dom'
import { styled } from 'styled-components'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import Roadmap from './pages/Roadmap'
import KnowledgeBase from './pages/KnowledgeBase'

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--background);
`

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 20px;
  background-color: var(--background);

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
  }
`

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/knowledge" element={<KnowledgeBase />} />
        </Routes>
      </MainContent>
    </AppContainer>
  )
}

export default App
