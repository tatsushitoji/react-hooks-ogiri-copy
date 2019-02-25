import * as React from 'react';
import styled from 'styled-components';
import { records } from './records';
import ToggleSwitch from './components/ToggleSwitch';

type Props = { className?: string };

const StyledApp = styled('div')`
  margin: 16px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  > .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
    &:last-child {
      border: none;
    }
  }
`;

const App: React.FC<Props> = ({ className }) => (
  <StyledApp className={className}>
    {records.map(record => (
      <div key={record.id} className="item" data-testid={record.id}>
        <span>{record.title}</span>
        <ToggleSwitch
          defaultChecked={record.checked}
          activeColor={record.activeColor}
        />
      </div>
    ))}
  </StyledApp>
);

export default App;
