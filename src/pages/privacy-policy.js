import React from 'react';
import { Heading1, Heading2, Body1 } from '@trig-app/core-components';
import Layout from '../components/Layout';

// eslint-disable-next-line react/prop-types
const Item = ({ children }) => {
  return (
    <Heading2
      color="p"
      css={`
        margin-bottom: ${({ theme }) => theme.space[1]}px;
      `}
    >
      {children}
    </Heading2>
  );
};

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
  return (
    <Body1 as="p" style={{ marginTop: 0 }}>
      {children}
    </Body1>
  );
};

const PrivacyPolicy = () => {
  return (
    <Layout title="Terms of Service" headerProps={{ isLightTheme: false }}>
      <div
        css={`
          margin: ${({ theme }) => theme.space[5]}px auto
            ${({ theme }) => theme.space[5]}px;
          width: 800px;
        `}
      >
        <Heading1
          css={`
            text-transform: uppercase;
            text-align: center;
          `}
        >
          Privacy Policy
        </Heading1>
        <Heading2
          color="p"
          css={`
            text-align: center;
          `}
        >
          Last Updated 04/11/2021
        </Heading2>
        <Item>Privacy Policy Overview</Item>
        <Content>
          Trig (“Trig,” “us,” or “we”) knows that you care how information about
          you is used and shared and respects the privacy of the visitors to the
          https://trytrig.com website (this “Site”). We have created this
          Privacy Policy (“Privacy Policy” or “Policy”) to demonstrate our
          commitment to privacy and security and supplement our Terms of Use.
          This Privacy Policy is an agreement between Trig and you, as the user
          of this Site (“you”). It explains what information of yours will be
          collected by us when you use this Site, how the information will be
          used, how you can control the collection, correction and/or deletion
          of information, when this Policy is effective, how you can review or
          change the personal information you provide to us, how we may change
          this Policy, and the steps we take to ensure that your personal
          information is protected. We request that you read this Privacy Policy
          carefully.
        </Content>
        <Content>
          In this Policy, “personal information” means any information by which
          you can be identified or contacted, such as your name (first and
          last), mailing address, email address, telephone number, billing
          information, etc.
        </Content>
        <Content>
          All activities which you engage in on this Site are voluntary. You are
          not required to provide any personal information to us unless you
          choose to access features or services on the Site which require the
          information. If you do not agree with the terms of this Policy or
          other Terms of Use posted on this Site, then you should immediately
          exit this Site, discontinue using the Site, and do not provide us with
          any personal information. By your use of this Site, you signify your
          agreement to the terms of this Privacy Policy as well as to our Terms
          of Use. The Terms of Use of this Site are expressly incorporated
          herein by reference and made a part of this Policy. This Privacy
          Policy applies only to information collected through this Site and
          does not apply to any information we may collect from you at any place
          other than this Site.
        </Content>
        <Item>Information We Collect</Item>
        <Content>
          User-Provided Information: You provide us information about yourself,
          such as your name and email address, when you register with and log-in
          to the Site. If you correspond with us by email, we may retain the
          content of your email messages, your email address and our responses.
          In addition, you may choose to add information that may contain any
          data you choose to organize within Trig. You can modify and delete
          this information any time after you have signed in using your personal
          password.
        </Content>
        <Content>
          You may also be required to provide personal information to access or
          use certain parts of our Site, or features of the Site or services,
          including without limitation, when you subscribe to the newsletter,
          fill out a form, participate in any of our programs such as contests,
          sweepstakes, surveys, contact us with a comment, question or
          complaint, write a review, etc. If you do not provide the requested
          personal information, you may not be able to access or use the
          features of the Site or service where such information is requested.
        </Content>
        <Content>
          Depending upon the nature of the transaction, the personal information
          collected may include your name, address, telephone number, email
          address, age, gender, credit card information, debit card information.
        </Content>
        <Content>
          We may also collect personal information about you from other third
          parties, such as demographic firms, to make our future services and
          marketing efforts more efficient and personalized for you. We may
          combine all information we collect and may disclose this information
          within our corporate family of companies or our service providers.
        </Content>
        <Content>
          Cookies Information: When you visit the Site, we may send one or more
          cookies – a small text file containing a string of alphanumeric
          characters – to your computer that uniquely identifies your browser
          and lets us help you log in faster and enhance your navigation through
          the Site. A cookie does not collect personal information about you. We
          use both session cookies and persistent cookies. A persistent cookie
          remains on your hard drive after you close your browser. Persistent
          cookies may be used by your browser on subsequent visits to the Site.
          Persistent cookies can be removed by following your web browser’s
          directions. A session cookie is temporary and disappears after you
          close your browser. You can reset your web browser to refuse all
          cookies or to indicate when a cookie is being sent. However, some
          features of the Site or services may not function properly if the
          ability to accept cookies is disabled.
        </Content>
        <Content>
          Log File Information: Log file information is automatically reported
          by your browser each time you access a web page. When you register
          with or view our Site, our servers automatically record certain
          information that your web browser sends whenever you visit any
          website. These server logs may include information such as your web
          request, Internet Protocol (“IP”) addresses or other device
          identifiers, browser information, Internet Service Provider (“ISP”),
          operating system, location, date/time stamp, clickstream data,
          referring/exit pages and URLs, domain names, landing pages, pages
          viewed, and other such information.
        </Content>
        <Content>
          Clear Gifs Information: When you use the Site or services, we may
          employ clear gifs (a.k.a. Web Beacons) which are used to track the
          online usage patterns of our users anonymously. No personal
          information from your account is collected using these clear gifs. In
          addition, we may also use clear gifs in HTML-based emails sent to our
          users to track which emails are opened by recipients. The information
          is used to enable more accurate reporting, improve the effectiveness
          of our marketing, and make this Site better for our users.
        </Content>
        <Item>How We Use Your Information</Item>
        <Content>
          We use the personal information you provide and any general
          information we receive from you to (a) operate, maintain, and provide
          to you the best possible features, functionality of the Site and
          experience; (b) analyze visits to the Site and learn about the
          interests of our visitors in aggregate and also on a personal level to
          better understand your interests and needs, so we can improve our
          products and services and deliver to you the type of content, features
          and promotions that you are most interested in; (c) process
          registration or membership requests when you register for our programs
          or services, or otherwise administer your participation in our
          programs or services; (d) respond to your comments, questions or
          complaints and determine your satisfaction with our programs and
          services; (e) administer a promotion, contest, sweepstakes, survey or
          other Site feature; and (f) if you ask us to, send you marketing
          communications and other information and materials you have chosen to
          receive regarding our products, services, marketing or special events.
          We also use your personal information for our everyday business
          purposes such as security, payment processing, analytics, operations,
          fraud detection and prevention, reporting, making back-ups and legal
          compliance.
        </Content>
        <Content>
          By providing Trig your email address, you consent to our using the
          email address to send you Site and service-related notices, including
          any notices required by law, in lieu of communication by postal mail.
          We may also use your email address to send you other messages
          including, but not limited to, product newsletters, payment
          information, credit card update notifications, account status, legal
          updates, changes to features of the Site or services, special offers,
          or other account information. If you do not want to receive such email
          messages, you may opt out by clicking the unsubscribe link in the
          email. Opting out may prevent you from receiving email messages
          regarding updates, improvements, or offers. You may not opt out of
          service-related emails.
        </Content>
        <Content>
          Trig may use certain information about you without identifying you as
          an individual to third parties. We do this for purposes such as
          analyzing how the Site is used, diagnosing service or technical
          problems, maintaining security, and personalizing advertisements and
          promotions.
        </Content>
        <Content>
          Trig reserves the right, but has no obligation, to monitor the User
          Content you post on the Site. Trig has the right to remove any such
          information or material for any reason or no reason including, without
          limitation, if in its sole opinion, such information or material
          violates, or may violate, any applicable law or our Terms of Use, or
          to protect or defend Trig’s rights or property or those of any third
          party. Trig also reserves the right to remove information upon the
          request of any third party.
        </Content>
        <Content>
          We use cookies, clear gifs, and log file information to: (a) remember
          information so that you will not have to re-enter it during your visit
          or the next time you visit the Site; (b) provide custom, personalized
          content and information; (c) monitor the effectiveness of our Site and
          services; (d) monitor aggregate metrics such as total number of
          visitors and traffic; (e) diagnose or fix technology problems reported
          by our users or engineers that are associated with the IP addresses
          controlled by a specific web company or ISP; and (f) help you
          efficiently access your information after you sign in.
        </Content>
        <Item>How We Secure Your Information</Item>
        <Content>
          All data is encrypted via SSL/TLS when transmitted from our servers to
          your browser and from your browser to our servers. The database
          backups are also encrypted. Most of your data is not encrypted while
          it rests in our database. But we go through great lengths to secure
          your data at rest.
        </Content>
        <Item>How We Share Your Information</Item>
        <Content>
          Personally Identifiable Information:Trig will not rent or sell your
          personal information to others. We disclose potentially
          personally-identifying and personally-identifying information to those
          of our employees, contractors (including website operators),
          affiliated organizations, service providers and other third parties
          that provide support services to us or help us market our products and
          services, administer our programs and operations, fulfill your
          requests, administer surveys, contests, and sweepstakes, provide you
          with membership information, or process any other information on our
          behalf to provide services available at our Site. Any persons or
          entities that perform services on our behalf are contractually
          restricted from using your personal information in any manner other
          than in helping us provide you with service available from our Site.
          We may store personal information in locations outside the direct
          control of Trig (for instance, on servers or databases co-located with
          hosting providers). As we develop our business, we may buy or sell
          assets or business offerings. Customer, email, and visitor information
          is generally one of the transferred business assets in these types of
          transactions. We may also transfer such information in the course of
          corporate divestitures, mergers, or dissolution.
        </Content>
        <Content>
          Except as otherwise described in this Privacy Policy, Trig will not
          disclose personal information to any third party unless required to do
          so by law or subpoena or if we believe that such action is necessary
          to (a) conform to the law, comply with legal process served on us or
          our affiliates, or investigate, prevent, or take action regarding
          suspected or actual illegal activities; (b) to enforce our Terms of
          Use, take precautions against liability, to investigate and defend
          ourselves against any third-party claims or allegations, to assist
          government enforcement agencies, or to protect the security or
          integrity of our Site; and (c) to exercise or protect the rights,
          property, or personal safety of Trig, our users or others.
        </Content>
        <Content>
          We fully cooperate with law enforcement agencies in identifying those
          who use our Site or services for illegal activities. We reserve the
          right to report to law enforcement agencies any activities that we in
          good faith believe to be unlawful, as determined in our sole
          discretion. Release of your personal information for security
          purposes, as described in this agreement to any person or entity under
          any circumstances shall be based on a determination made solely by us,
          exercising our own discretion, permission for which is expressly
          granted by you to us in accordance with this Policy.
        </Content>
        <Item>How We Protect Your Information</Item>
        <Content>
          Trig uses commercially reasonable physical, managerial, and technical
          safeguards to preserve the integrity and security of your personal
          information. We cannot, however, ensure or warrant the security of any
          information you transmit to Trig or the Site and you do so at your own
          risk. Once we receive your transmission of information, Trig makes
          commercially reasonable efforts to ensure the security of our systems.
          However, please note that this is not a guarantee that such
          information may not be accessed, disclosed, altered, or destroyed by
          breach of any of our physical, technical, or managerial safeguards.
        </Content>
        <Content>
          To protect your privacy and security, we take reasonable steps (such
          as requesting a unique password) to verify your identity before
          granting you access to your account. At all times, you are responsible
          for maintaining the secrecy of your unique password and account
          information, and for controlling access to your email communications
          from Trig. While we strive to protect your personal information and
          privacy, we cannot guarantee the security of any information you
          disclose online.
        </Content>
        <Item>When you delete data in your product accounts</Item>
        <Content>
          Anything that you remove from your account is removed immediately.
          When you delete your account we immediately queue your account for
          deletion. Your account is fully removed asynchronously usually within
          seconds or minutes from the time you request deletion. Retrieving data
          for a single account from a backup is cost-prohibitive and unduly
          burdensome, so we will not be able to retrieve your account or deleted
          items from your account if you choose to delete it.
        </Content>
        <Item>Location of Site and Data</Item>
        <Content>
          Trig is operated in the United States. Any information you provide to
          Trig will be transferred to the United States. By using the Site you
          consent to this transfer.
        </Content>
        <Item>Your Choices About Your Information</Item>
        <Content>
          You may access or change your information and preferences at any time
          once you have signed in with your personal password. For example, you
          can control what sort of email notifications you will receive from the
          Site. You may, of course, decline to submit personal information
          through Trig, in which case Trig may not be able to provide certain
          services to you.
        </Content>
        <Item>Children&apos;s Privacy</Item>
        <Content>
          Protecting the privacy of young children is especially important. For
          that reason, Trig does not knowingly collect or solicit personal
          information from anyone under the age of 13 or knowingly allow such
          persons to register. If you are under 13, please do not send any
          information about yourself to us, including your name, address,
          telephone number, or email address. No one under age 13 is allowed to
          provide any personal information to or on this Site. In the event we
          learn that we have collected personal information from a child under
          age 13 without verification of parental consent, we will delete that
          information as quickly as possible. If you believe that we might have
          any information from or about a child under 13, please contact us. We
          encourage parents and guardians of children under 18 to regularly
          check and monitor their children’s use of email and other activities
          online.
        </Content>
        <Item>Social Media Interactions</Item>
        <Content>
          Trig invites you to socialize and share your experiences with Trig
          using Social Media tools such as Facebook, Twitter, Pinterest,
          LinkedIn and Instagram. If you choose to use these tools, you may be
          sharing certain profile elements, including your comments. This
          sharing is subject to each social media program&apos;s privacy
          policies.
        </Content>
        <Item>Notification Procedures</Item>
        <Content>
          It is our policy to provide notifications, whether such notifications
          are required by law or are for marketing or other business related
          purposes, to you via email notice, written or hard copy notice, or
          through conspicuous posting of such notice on our Site page, as
          determined by Trig in its sole discretion. We reserve the right to
          determine the form and means of providing notifications to you,
          provided that you may opt out of certain means of notification as
          described in this Privacy Policy.
        </Content>
        <Item>Changes to Our Privacy Policy</Item>
        <Content>
          We reserve the right to change this Privacy Policy at any time. If we
          change our privacy policies and procedures, we will post those changes
          on our Site to keep you aware of what information we collect, how we
          use it and under what circumstances we may disclose it. Changes,
          modifications, additions, or deletions to this Privacy Policy will be
          effective immediately on their posting to this Site. You should check
          this Policy periodically as its terms may change from time to time.
          Your continued use of the Site after we post any such modifications
          will constitute your acknowledgment of the modified policy and your
          agreement to abide and be bound by the modified policy. We will revise
          the “Last Updated” date found at the beginning of this Privacy Policy
          when we post changes to it.
        </Content>
        <Item>Contact Us</Item>
        <Content>
          If you have any questions about this Privacy Policy, the practices of
          this Site, your dealings with this Site, or wish to update us with
          your preferences, you may contact us by email at support@trytrig.com.
        </Content>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
