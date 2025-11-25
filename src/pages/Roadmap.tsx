import { styled } from 'styled-components'

const RoadmapContainer = styled.div`
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

const RoadmapWrapper = styled.div`
  background-color: var(--surface);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px var(--shadow);
  margin-bottom: 32px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const RoadmapTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-blue);
  text-align: center;
  margin-bottom: 40px;
`

const RoadmapPath = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--success-green), var(--accent-orange), var(--primary-blue));
    transform: translateX(-50%);
    border-radius: 2px;
    z-index: 1;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`

const Step = styled.div<{ $status: 'completed' | 'current' | 'upcoming' }>`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  background-color: ${props =>
    props.$status === 'completed' ? 'var(--success-green)' :
    props.$status === 'current' ? 'var(--accent-orange)' :
    'var(--border)'
  };
  color: ${props => props.$status === 'upcoming' ? 'var(--text-secondary)' : 'white'};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${props =>
    props.$status === 'completed' ? 'rgba(76, 175, 80, 0.3)' :
    props.$status === 'current' ? 'rgba(255, 122, 69, 0.3)' :
    'rgba(0, 0, 0, 0.1)'
  };
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    width: 16px;
    height: 16px;
    background-color: ${props =>
      props.$status === 'completed' ? 'var(--success-green)' :
      props.$status === 'current' ? 'var(--accent-orange)' :
      'var(--border)'
    };
    border: 4px solid white;
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 3;

    @media (max-width: 768px) {
      left: 10px;
    }
  }

  @media (max-width: 768px) {
    margin-left: 60px;
    width: calc(100% - 60px);
  }
`

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`

const StepDescription = styled.p`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 16px;
`

const StepActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const ActionButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  ${props => props.$variant === 'primary' ? `
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  ` : `
    background-color: transparent;
    color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ProgressIndicator = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background-color: var(--background);
  border-radius: 12px;
  border: 1px solid var(--border);
`

const ProgressText = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 8px;
`

const ProgressStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  font-size: 14px;
  color: var(--text-primary);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`

const Roadmap = () => {
  const steps = [
    {
      id: 1,
      title: 'Choosing your dream university',
      description: 'Research and select universities that match your goals, budget, and academic profile.',
      status: 'completed' as const,
      actions: ['View Research', 'Edit Selection']
    },
    {
      id: 2,
      title: 'Building a strong personal brand',
      description: 'Develop your academic profile, extracurricular activities, and personal statement.',
      status: 'completed' as const,
      actions: ['View Profile', 'Update Resume']
    },
    {
      id: 3,
      title: 'Searching for scholarships (Merit-based)',
      description: 'Find and apply for scholarships based on academic merit and achievements.',
      status: 'current' as const,
      actions: ['Browse Scholarships', 'Apply Now']
    },
    {
      id: 4,
      title: 'Visa process',
      description: 'Complete visa application requirements and documentation.',
      status: 'upcoming' as const,
      actions: ['Learn Requirements', 'Schedule Appointment']
    },
    {
      id: 5,
      title: 'Finding accommodation',
      description: 'Research and secure housing options near your chosen university.',
      status: 'upcoming' as const,
      actions: ['Explore Options', 'Book Visit']
    }
  ]

  const completedSteps = steps.filter(step => step.status === 'completed').length
  const totalSteps = steps.length

  return (
    <RoadmapContainer>
      <Header>
        <Title>Road Map</Title>
        <Subtitle>Your structured path to university admission</Subtitle>
      </Header>

      <RoadmapWrapper>
        <RoadmapTitle>Your Admission Journey</RoadmapTitle>

        <RoadmapPath>
          {steps.map((step) => (
            <Step key={step.id} $status={step.status}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <StepActions>
                {step.actions.map((action, index) => (
                  <ActionButton
                    key={index}
                    $variant={index === 0 ? 'primary' : 'secondary'}
                    disabled={step.status === 'upcoming'}
                  >
                    {action}
                  </ActionButton>
                ))}
              </StepActions>
            </Step>
          ))}
        </RoadmapPath>

        <ProgressIndicator>
          <ProgressText>Overall Progress</ProgressText>
          <ProgressStats>
            <span>Completed: {completedSteps}/{totalSteps} steps</span>
            <span>Current: Step {steps.find(step => step.status === 'current')?.id || 1}</span>
            <span>Success Rate: {Math.round((completedSteps / totalSteps) * 100)}%</span>
          </ProgressStats>
        </ProgressIndicator>
      </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default Roadmap
