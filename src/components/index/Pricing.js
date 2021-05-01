import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  Heading2,
  Heading1,
  Body1Styles,
  Body1,
  Button,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import ContactForm from '../ContactForm';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }
  @media ${device.desktopUp} {
    flex-wrap: nowrap;
    margin-bottom: 0;
  }
`;

const Block = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  padding: 5.6rem 3.2rem;
  border-radius: ${({ theme }) => theme.br};
  margin: 0 auto;
  width: calc(100% - 6.4rem);
  @media ${device.tabletPortraitUp} {
    width: 70%;
  }
  @media ${device.tabletLandscapeUp} {
    width: 60%;
  }
  @media ${device.desktopUp} {
    width: 27.1rem;
  }
  box-shadow: ${({ theme }) => theme.sh};
  text-align: center;
  flex-shrink: 0;
`;

const Title = styled(Heading2)`
  margin-bottom: 3.2rem;
`;

const Price = styled(Heading1)`
  margin-bottom: 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 0.8rem;
  ${Body1Styles};
  color: ${({ theme }) => theme.ps[200]};
`;

const SecondaryButton = styled(Button).attrs({
  size: 'lg',
  variant: 'inverse-s',
})`
  margin-top: ${({ theme }) => theme.space[5] + theme.space[4]}px;
`;

const Pricing = props => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const bodyColor = 'ps.200';
  /* istanbul ignore next */
  const closeModal = () => {
    setIsContactFormOpen(false);
  };
  return (
    <Wrapper {...props}>
      <ContactForm
        isOpen={isContactFormOpen}
        onRequestClose={closeModal}
        initialValues={{
          email: '',
          topic: 'Enterprise Pricing',
          message: '',
        }}
      />
      <Block
        css={`
          @media ${device.desktopUp} {
            transform: translateX(1.6rem);
          }
        `}
      >
        <Title>Solo</Title>
        <Price>$6</Price>
        <Body1
          color={bodyColor}
          css={`
            display: block;
            margin-bottom: 4.8rem;
          `}
        >
          month
        </Body1>
        <List>
          <ListItem>Unlimited Cards</ListItem>
          <ListItem>Full-Text Search</ListItem>
          <ListItem>AI Powered Tagging</ListItem>
          <ListItem>Chrome Extension</ListItem>
        </List>
        <SecondaryButton forwardedAs={Link} to="/#subscribe">
          Start Free 7-day Trial
        </SecondaryButton>
      </Block>
      <Block
        css={`
          @media ${device.desktopUp} {
            transform: translateY(
              -${({ theme }) => theme.space[3] + theme.space[1]}px
            );
            width: 31.1rem;
            position: relative;
            z-index: 2;
          }
        `}
      >
        <Title>Team</Title>
        <Price>$10</Price>
        <Body1
          color={bodyColor}
          css={`
            display: block;
            margin-bottom: 4.8rem;
            @media ${device.desktopUp} {
              margin-bottom: 7.5rem;
            }
          `}
        >
          user/month
        </Body1>
        <List>
          <ListItem
            css={`
              font-style: italic;
              font-weight: 500;
            `}
          >
            All of Solo
          </ListItem>
          <ListItem>Unlimited Collections</ListItem>
          <ListItem>Team Sharing</ListItem>
          <ListItem>Slack Integration</ListItem>
        </List>
        <Body1
          css={`
            display: block;
            font-weight: bold;
            margin-top: 4.8rem;
            @media ${device.desktopUp} {
              margin-top: ${({ theme }) => theme.space[6] + theme.space[3]}px;
            }
          `}
        >
          Coming Soon!
        </Body1>
      </Block>
      <Block
        css={`
          @media ${device.desktopUp} {
            transform: translateX(-1.6rem);
          }
        `}
      >
        <Title>Enterprise</Title>
        <Body1
          color={bodyColor}
          css={`
            display: block;
            margin-bottom: 8.9rem;
          `}
        >
          <Button
            data-testid="contact-us-link"
            variant="inline"
            type="button"
            onClick={() => setIsContactFormOpen(true)}
          >
            contact us
          </Button>{' '}
          for pricing
        </Body1>
        <List>
          <ListItem
            css={`
              font-style: italic;
              font-weight: 500;
            `}
          >
            All of Team
          </ListItem>
          <ListItem>Priority Support</ListItem>
          <ListItem>AI Powered Full-Text Search</ListItem>
        </List>
        <Body1
          css={`
            display: block;
            font-weight: bold;
            margin-top: 4.8rem;
            @media ${device.desktopUp} {
              margin-top: ${({ theme }) =>
                theme.space[6] + theme.space[4] + theme.space[1]}px;
            }
          `}
        >
          Coming Soon!
        </Body1>
      </Block>
    </Wrapper>
  );
};

export default Pricing;
