import { styled } from 'styled-components'

const KnowledgeContainer = styled.div`
  max-width: 1200px;
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

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`

const Card = styled.div`
  background-color: var(--surface);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px var(--shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--border);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--shadow);
    border-color: var(--primary-blue);
  }
`

const CardIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 8px;
`

const CardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.5;
`

const CardAction = styled.button`
  background-color: var(--accent-orange);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e66a3d;
  }
`

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`

const ResourceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-blue);
    background-color: rgba(42, 91, 142, 0.02);
  }
`

const ResourceIcon = styled.div`
  font-size: 24px;
  width: 40px;
  text-align: center;
`

const ResourceInfo = styled.div`
  flex: 1;
`

const ResourceName = styled.div`
  font-weight: 500;
  color: var(--primary-blue);
  margin-bottom: 2px;
`

const ResourceType = styled.div`
  font-size: 12px;
  color: var(--text-secondary);
`

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`

const TemplateCard = styled.div`
  background-color: var(--surface);
  border-radius: 12px;
  padding: 20px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-orange);
    transform: translateY(-2px);
  }
`

const TemplateIcon = styled.div`
  font-size: 28px;
  margin-bottom: 12px;
  color: var(--primary-blue);
`

const TemplateTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 8px;
`

const TemplateDescription = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.4;
`

const DownloadButton = styled.button`
  width: 100%;
  background-color: var(--accent-orange);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e66a3d;
  }
`

const KnowledgeBase = () => {
  const resources = [
    { icon: '📱', name: 'EduNavigator Telegram Channel', type: 'Articles & News' },
    { icon: '💬', name: 'International Students Chat', type: 'Community Support' },
    { icon: '📧', name: 'Newsletter', type: 'Weekly Updates' },
    { icon: '📅', name: 'Deadline Calendar', type: 'Application Tracker' }
  ]

  const templates = [
    {
      icon: '📄',
      title: 'CV/Resume Template',
      description: 'Professional template optimized for international applications with modern design.'
    },
    {
      icon: '✍️',
      title: 'Motivation Letter (SOP)',
      description: 'Structured template for Statement of Purpose with tips and examples.'
    },
    {
      icon: '📋',
      title: 'Application Checklist',
      description: 'Comprehensive checklist for university applications and visa requirements.'
    },
    {
      icon: '🎯',
      title: 'IELTS/TOEFL Study Guide',
      description: 'Complete preparation guide with practice tests and strategies.'
    },
    {
      icon: '🏠',
      title: 'Accommodation Guide',
      description: 'Templates and checklists for finding student housing abroad.'
    },
    {
      icon: '💰',
      title: 'Scholarship Application',
      description: 'Templates and guides for merit-based and need-based scholarships.'
    }
  ]

  return (
    <KnowledgeContainer>
      <Header>
        <Title>Knowledge Base</Title>
        <Subtitle>Your comprehensive resource center for international education</Subtitle>
      </Header>

      <Section>
        <SectionTitle>🔗 Resource Directory</SectionTitle>
        <ResourceList>
          {resources.map((resource, index) => (
            <ResourceItem key={index}>
              <ResourceIcon>{resource.icon}</ResourceIcon>
              <ResourceInfo>
                <ResourceName>{resource.name}</ResourceName>
                <ResourceType>{resource.type}</ResourceType>
              </ResourceInfo>
            </ResourceItem>
          ))}
        </ResourceList>
      </Section>

      <Section>
        <SectionTitle>📚 Template Library</SectionTitle>
        <TemplateGrid>
          {templates.map((template, index) => (
            <TemplateCard key={index}>
              <TemplateIcon>{template.icon}</TemplateIcon>
              <TemplateTitle>{template.title}</TemplateTitle>
              <TemplateDescription>{template.description}</TemplateDescription>
              <DownloadButton>Download Template</DownloadButton>
            </TemplateCard>
          ))}
        </TemplateGrid>
      </Section>

      <Section>
        <SectionTitle>📖 Quick Guides</SectionTitle>
        <Grid>
          <Card>
            <CardIcon>🎓</CardIcon>
            <CardTitle>University Selection Guide</CardTitle>
            <CardDescription>
              Learn how to research and choose the perfect university based on your academic goals,
              budget, and location preferences.
            </CardDescription>
            <CardAction>Read Guide</CardAction>
          </Card>

          <Card>
            <CardIcon>🛂</CardIcon>
            <CardTitle>Visa Application Process</CardTitle>
            <CardDescription>
              Step-by-step guide through visa requirements, document preparation, and application
              procedures for different countries.
            </CardDescription>
            <CardAction>Read Guide</CardAction>
          </Card>

          <Card>
            <CardIcon>💰</CardIcon>
            <CardTitle>Scholarship Strategies</CardTitle>
            <CardDescription>
              Discover how to find and apply for merit-based scholarships, understand eligibility
              criteria, and maximize your chances.
            </CardDescription>
            <CardAction>Read Guide</CardAction>
          </Card>

          <Card>
            <CardIcon>🏠</CardIcon>
            <CardTitle>Accommodation Options</CardTitle>
            <CardDescription>
              Explore different housing options for international students including dormitories,
              private rentals, and homestays.
            </CardDescription>
            <CardAction>Read Guide</CardAction>
          </Card>
        </Grid>
      </Section>
    </KnowledgeContainer>
  )
}

export default KnowledgeBase
