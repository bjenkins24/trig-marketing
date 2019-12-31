import React from 'react';
import styled from 'styled-components';
import {
  Heading2,
  Heading1,
  Body1,
} from '@trig-app/core-components/dist/Typography';
import { Button } from '@trig-app/core-components/dist/Buttons';

const Block = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  padding: 5.6rem 3.2rem;
  border-radius: ${({ theme }) => theme.br};
  width: 27.1rem;
  box-shadow: ${({ theme }) => theme.sh};
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 0.8rem;
`;

const Pricing = () => {
  const bodyColor = 'ps.200';
  return (
    <Block>
      <Heading2
        css={`
          margin-bottom: 3.2rem;
        `}
      >
        Starter
      </Heading2>
      <Heading1
        css={`
          margin-bottom: 0;
        `}
      >
        $6
      </Heading1>
      <Body1
        color={bodyColor}
        css={`
          display: block;
          margin-bottom: 4.8rem;
        `}
      >
        user/month
      </Body1>
      <List>
        <ListItem>
          <Body1 color={bodyColor}>Up to 8 Decks/User</Body1>
        </ListItem>
        <ListItem>
          <Body1 color={bodyColor}>Deep Searching and Auto Tagging</Body1>
        </ListItem>
        <ListItem>
          <Body1 color={bodyColor}>Dropbox/Google Drive Integration</Body1>
        </ListItem>
        <ListItem>
          <Body1 color={bodyColor}>Slack Integration</Body1>
        </ListItem>
        <ListItem>
          <Body1 color={bodyColor}>50GB File Storage/User</Body1>
        </ListItem>
      </List>
      <Button
        css={`
          margin-top: 4.8rem;
        `}
        size="lg"
        variant="inverse-s"
      >
        Start Free 7-day Trial
      </Button>
    </Block>
  );
};

export default Pricing;
