import * as React from 'react';
import styled from 'styled-components';

type Props = { className?: string };

const StyledBody = styled('div')``;
const StyledSection = styled('section')`
  padding: 24px;
  & + & {
    border-top: 1px solid #eee;
  }
`;

const Body: React.FC<Props> = ({ className }) => (
  <StyledBody className={className}>
    <StyledSection>
      <h1>Title</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
        asperiores laudantium voluptatum, molestiae commodi tempora dolores
        excepturi sequi corrupti, consectetur ipsum dolorum doloremque fugiat
        dolor! Reprehenderit ex dolor placeat!
      </p>
    </StyledSection>
    <StyledSection>
      <h1>Title</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
        asperiores laudantium voluptatum, molestiae commodi tempora dolores
        excepturi sequi corrupti, consectetur ipsum dolorum doloremque fugiat
        dolor! Reprehenderit ex dolor placeat!
      </p>
    </StyledSection>
  </StyledBody>
);
// ______________________________________________________
//
// @ StyledView

export default Body;
