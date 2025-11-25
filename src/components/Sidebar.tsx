import { Link, useLocation } from 'react-router-dom'
import { styled } from 'styled-components'

const SidebarContainer = styled.aside`
  width: 280px;
  background-color: var(--surface);
  border-right: 1px solid var(--border);
  padding: 30px 20px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const NavItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.$active ? 'var(--surface)' : 'var(--text-primary)'};
  background-color: ${props => props.$active ? 'var(--primary-blue)' : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-blue)' : 'var(--shadow)'};
    color: ${props => props.$active ? 'var(--surface)' : 'var(--primary-blue)'};
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px;
  }
`

const NavIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const NavText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`

const Sidebar = () => {
  const location = useLocation()

  const navItems = [
    {
      path: '/profile',
      icon: '👤',
      label: 'Profile'
    },
    {
      path: '/roadmap',
      icon: '🗺️',
      label: 'Road Map'
    },
    {
      path: '/knowledge',
      icon: '📚',
      label: 'Knowledge Base'
    }
  ]

  return (
    <SidebarContainer>
      <Logo>EduNavigator</Logo>
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          to={item.path}
          $active={location.pathname === item.path || (item.path === '/profile' && location.pathname === '/')}
        >
          <NavIcon>{item.icon}</NavIcon>
          <NavText>{item.label}</NavText>
        </NavItem>
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
