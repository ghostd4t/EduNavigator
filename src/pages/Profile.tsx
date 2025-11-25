import { styled } from 'styled-components'

const ProfileContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
`

const ProgressSection = styled.div`
  background-color: var(--surface);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 4px 20px var(--shadow);
`

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`

const ProgressTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-blue);
`

const ProgressPercent = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: var(--success-green);
  display: flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '%';
    font-size: 24px;
    color: var(--text-secondary);
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 16px;
`

const ProgressFill = styled.div`
  height: 100%;
  width: 72%;
  background: linear-gradient(90deg, var(--success-green), var(--accent-orange));
  border-radius: 6px;
  transition: width 0.3s ease;
`

const ProgressText = styled.p`
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const Section = styled.div`
  background-color: var(--surface);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px var(--shadow);
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const SubscriptionCard = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-orange));
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
`

const SubscriptionTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 8px;
  opacity: 0.9;
`

const SubscriptionLevel = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

const UpgradeButton = styled.button`
  background-color: var(--accent-orange);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e66a3d;
  }
`

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
`

const AchievementCard = styled.div`
  background-color: var(--background);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border: 2px solid var(--border);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent-orange);
    transform: translateY(-2px);
  }
`

const AchievementIcon = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`

const AchievementTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-blue);
`

const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-blue);
    background-color: rgba(42, 91, 142, 0.02);
  }
`

const DocumentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const DocumentIcon = styled.div`
  font-size: 20px;
`

const DocumentDetails = styled.div`
  flex: 1;
`

const DocumentName = styled.div`
  font-weight: 500;
  color: var(--primary-blue);
`

const DocumentType = styled.div`
  font-size: 12px;
  color: var(--text-secondary);
`

const DocumentAction = styled.button`
  background-color: var(--accent-orange);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e66a3d;
  }
`

const Profile = () => {
  const achievements = [
    { icon: '📝', title: 'Master of Motivation Letters' },
    { icon: '🛂', title: 'Visa Expert' },
    { icon: '🎓', title: 'University Scout' },
    { icon: '💼', title: 'Resume Pro' }
  ]

  const documents = [
    { name: 'Motivation Letter Draft', type: 'DOC', icon: '📄' },
    { name: 'CV Template', type: 'PDF', icon: '📋' },
    { name: 'IELTS Study Guide', type: 'PDF', icon: '📖' },
    { name: 'University Application Form', type: 'DOC', icon: '📝' }
  ]

  return (
    <ProfileContainer>
      <Header>
        <Title>Profile</Title>
        <Subtitle>Your academic journey dashboard</Subtitle>
      </Header>

      <ProgressSection>
        <ProgressHeader>
          <ProgressTitle>Ready for admission</ProgressTitle>
          <ProgressPercent>72</ProgressPercent>
        </ProgressHeader>
        <ProgressBar>
          <ProgressFill />
        </ProgressBar>
        <ProgressText>Keep going! You're making great progress toward your dream university.</ProgressText>
      </ProgressSection>

      <GridContainer>
        <div>
          <Section>
            <SectionTitle>📊 Subscription Level</SectionTitle>
            <SubscriptionCard>
              <SubscriptionTitle>Current Level</SubscriptionTitle>
              <SubscriptionLevel>Explorer</SubscriptionLevel>
              <UpgradeButton>Upgrade</UpgradeButton>
            </SubscriptionCard>
          </Section>

          <Section>
            <SectionTitle>🏆 Achievements</SectionTitle>
            <AchievementGrid>
              {achievements.map((achievement, index) => (
                <AchievementCard key={index}>
                  <AchievementIcon>{achievement.icon}</AchievementIcon>
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                </AchievementCard>
              ))}
            </AchievementGrid>
          </Section>
        </div>

        <Section>
          <SectionTitle>📁 My Documents</SectionTitle>
          <DocumentList>
            {documents.map((doc, index) => (
              <DocumentItem key={index}>
                <DocumentInfo>
                  <DocumentIcon>{doc.icon}</DocumentIcon>
                  <DocumentDetails>
                    <DocumentName>{doc.name}</DocumentName>
                    <DocumentType>{doc.type}</DocumentType>
                  </DocumentDetails>
                </DocumentInfo>
                <DocumentAction>View</DocumentAction>
              </DocumentItem>
            ))}
          </DocumentList>
        </Section>
      </GridContainer>
    </ProfileContainer>
  )
}

export default Profile
