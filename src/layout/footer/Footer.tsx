import styled from 'styled-components';

export const Footer = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>Created by <span>Maria Kushlianskaya</span></p>
      <span>&copy; {startYear === currentYear ? startYear : `${startYear} - ${currentYear}`}</span>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 0.5);

;
`
