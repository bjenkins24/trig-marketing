import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Heading2,
  Heading1,
  Body1Styles,
  Body1,
  Button,
  Modal,
  ModalHeader,
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
  margin-top: 4.8rem;
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
      <Modal
        isOpen={isContactFormOpen}
        onRequestClose={() => setIsContactFormOpen(false)}
      >
        <ModalHeader>Contact Us</ModalHeader>
        <ContactForm
          initialValues={{
            email: '',
            topic: 'Enterprise Pricing',
            message: '',
          }}
          afterSubmit={closeModal}
        />
      </Modal>
      <Block
        css={`
          @media ${device.desktopUp} {
            transform: translateX(1.6rem);
          }
        `}
      >
        <Title>Starter</Title>
        <Price>$6</Price>
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
          <ListItem>Up to 8 Decks/User</ListItem>
          <ListItem>Deep Searching and Auto Tagging</ListItem>
          <ListItem>Dropbox/Google Drive Integration</ListItem>
          <ListItem>Slack Integration</ListItem>
          <ListItem>50GB File Storage/User</ListItem>
        </List>
        <SecondaryButton type="button">Start Free 7-day Trial</SecondaryButton>
      </Block>
      <Block
        css={`
          @media ${device.desktopUp} {
            transform: translateY(-2.4rem);
            width: 31.1rem;
            position: relative;
            z-index: 2;
          }
        `}
      >
        <Title>Plus</Title>
        <Price>$16</Price>
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
            All of Starter
          </ListItem>
          <ListItem>Unlimited Decks</ListItem>
          <ListItem>Question Feature</ListItem>
          <ListItem>Ideas Feature</ListItem>
          <ListItem>250GB File Storage/User</ListItem>
        </List>
        <Button
          type="button"
          size="lg"
          css={`
            margin-top: 4.8rem;
            @media ${device.desktopUp} {
              margin-top: 7.5rem;
            }
          `}
        >
          Start Free 7-day Trial
        </Button>
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
            All of Plus
          </ListItem>
          <ListItem>Priority Support</ListItem>
          <ListItem>Fully Embeddable</ListItem>
          <ListItem>White Labeling</ListItem>
          <ListItem>Unlimited File Storage</ListItem>
        </List>
        <SecondaryButton
          data-testid="contact-us-button"
          type="button"
          onClick={() => setIsContactFormOpen(true)}
        >
          Contact Us
        </SecondaryButton>
      </Block>
    </Wrapper>
  );
};

export default Pricing;
