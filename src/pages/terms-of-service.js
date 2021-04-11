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

const TermsOfService = () => {
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
          Terms of Service
        </Heading1>
        <Heading2
          color="p"
          css={`
            text-align: center;
          `}
        >
          Last Updated 04/11/2021
        </Heading2>
        <Content>
          Welcome to https://trytrig.com, a knowledge base operated by Trig
          (“Trig,” “us” or “we”). Please review the following terms and
          conditions (“Terms of Use”) and our other policies that govern your
          visit to our website (this “Site”), and your use of this Site and
          related services available on or through the Site including, but not
          limited to, watching and broadcasting live videos (the “Services”).
          Trig reserves the right, at any time, to modify, alter or update our
          Site, policies and these Terms of Use.
        </Content>
        <Item>1. Your Consent and Use of the Site</Item>
        <Content>
          Your use of our Site constitutes your acceptance of, and agreement to
          follow and be bound by the Terms of Use, our Privacy Policy, and any
          further policies or terms that govern your use of our Site and/or
          Services, which are all incorporated herein by reference
          (collectively, this “Agreement”). If you do not agree to these terms
          and conditions, please do not use the Site.
        </Content>
        <Content>
          We may from time to time change or modify the terms and conditions
          that govern your use of our Site and Services and this Agreement. Your
          use of our Site and Services following any such change constitutes
          your agreement to follow and be bound by the terms and conditions as
          changed. Trig may terminate your right to and deny you access to this
          Site, or remove any material you may have added at the Site, if, in
          our sole discretion, you fail to comply with any term or provision of
          this Agreement, or for any other reason whatsoever. Except as
          otherwise provided herein, however, Trig undertakes no obligation to
          police, supervise, or monitor materials posted to this Site by you or
          other third parties. Use of this Site is limited to persons over the
          age of thirteen (13).
        </Content>
        <Content>
          This Site is not directed to children under 13 years old. The policy
          of Trig, as the operator of this Site, is NOT to knowingly collect any
          personal information from children under 13, including “individually
          identifiable information,” as defined by the Children’s Online Privacy
          Protection Act (COPPA). If you are under 13, you should leave the Site
          without filling out any of the registration, entry, or other forms or
          otherwise providing any information about yourself. Any access to or
          use of this Site or Services by anyone under the age of majority
          requires consent to this Agreement by a parent or legal guardian. By
          accessing or using the Site and/or Services, you represent and warrant
          to us that you are either a legal adult or, if under the age of
          majority, have obtained proper consent from a parent or legal guardian
          to your use of the Site, Services and this Agreement. By using the
          Site and Services, you represent and warrant that you have the right,
          authority and capacity to enter into this Agreement and to abide by
          all of the terms and conditions of this Agreement.
        </Content>
        <Content>
          PROHIBITED USES. Trig imposes certain restrictions on your permissible
          use of the Site. You are prohibited from violating or attempting to
          violate any security features of the Site, including, without
          limitation, (a) accessing content or data not intended for you, or
          logging onto a server or account that you are not authorized to
          access; (b) attempting to probe, scan, or test the vulnerability of
          the Site, or any associated system, service or network, or to breach
          security or authentication measures without proper authorization; (c)
          interfering or attempting to interfere with service to any user, host,
          or network, including, without limitation, by means of submitting a
          virus to the Site, overloading, “flooding,” “spamming,” “mail
          bombing,” or “crashing”; (d) using the Site to send unsolicited email,
          including, without limitation, promotions, or advertisements for
          products or services; (e) forging any TCP/IP packet header or any part
          of the header information in any email or in any posting using the
          Site; or (f) attempting to modify, reverse-engineer, decompile,
          disassemble, or otherwise reduce or attempt to reduce to a
          human-perceivable form any of the source code used by Trig in
          providing the Site. Any violation of system or network security may
          subject you to civil and/or criminal liability. Without limiting the
          foregoing, you may not use “bots”, spiders or intelligent agent
          software (or similar technologies) for any purposes other than
          accessing publicly posted portions of the Site and only for purposes
          consistent with this Agreement. You may not circumvent any access or
          use restrictions, data encryption or content protection related to the
          Site. You may not data mine the Site or in any way cause harm to the
          Site.
        </Content>
        <Item>2. Site Contents and Intellectual Property Rights</Item>
        <Content>
          Unless otherwise noted, the design of the Site, the Site as a whole,
          and all materials that are part of the Site and Services
          (collectively, “Contents”) are copyrights, trademarks, trade dress or
          other intellectual properties owned, controlled or licensed by Trig or
          its subsidiaries and affiliates. No right, title or interest in any of
          the information, material, or other Contents of this Site are granted
          to you under any circumstances and Trig reserves and retains all
          intellectual property rights in and to the Site and its Contents.
          Linking or framing to this Site or any of its Contents is prohibited
          without the prior written permission of Trig.
        </Content>
        <Content>
          Except as expressly noted herein, you may not reproduce, publish,
          transmit, distribute, display, modify, create derivative works from,
          sell or participate in any sale of, or exploit in any way, any of the
          Contents or the Site. Unauthorized use or copying (including
          electronic copying or downloading) of the Site and Contents without
          Trig&apos;s express written consent is expressly prohibited by law,
          and may result in severe civil and criminal penalties.
        </Content>
        <Content>
          Opinions, advice, statements, reviews, offers or other information or
          content made available on this Site or through our Services, but not
          directly by us, are those of their respective authors, and should not
          necessarily be relied upon. Such authors are solely responsible for
          such content.
        </Content>
        <Item>3. Disclaimer of Warranties and Limitation of Liabilities</Item>
        <Content>
          ALL USE OF THIS SITE, ANY INFORMATION, CONTENT, GOODS, OR SERVICES
          HEREIN CONTAINED OR PROVIDED AT OR PURCHASED FROM THIS SITE, AND ANY
          FUNCTIONALITY OR SOFTWARE OR PROGRAMMING CONTAINED OR PROVIDED AT THIS
          SITE, IS PROVIDED ON AN &apos;AS IS&apos; BASIS WITHOUT GUARANTEE OR
          WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING ANY
          IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
          PURPOSE. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY, PROMISE
          OR GUARANTEE OF ANY KIND THAT (A) OPERATION OF OUR SITE AND/OR
          SERVICES WILL BE CONTINUOUS, TIMELY, UNINTERRUPTED, SECURE, OR THAT
          THIS SITE OR ITS SERVER ARE FREE OF ERRORS, VIRUSES OR OTHER HARMFUL
          EFFECTS; (B) THE SITE OR SERVICES WILL MEET YOUR REQUIREMENTS OR
          EXPECTATIONS; (C) THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE
          SITE OR SERVICES WILL BE EFFECTIVE, TYPICAL, ACCURATE OR RELIABLE; AND
          (D) THE QUALITY OF ANY PRODUCTS, SERVICES OR INFORMATION PURCHASED OR
          OBTAINED BY YOU FROM THE SITE OR SERVICES WILL MEET YOUR EXPECTATIONS
          OR BE FREE FROM MISTAKES, ERRORS OR DEFECTS. YOUR USE OF THE SITE AND
          SERVICES ARE AT YOUR OWN RISK.
        </Content>
        <Content>
          FURTHER, WITHOUT LIMITING THE FOREGOING, ALL INFORMATION PROVIDED ON
          THIS SITE IS WITHOUT WARRANTY AS TO ITS COMPLETENESS, TIMELINESS,
          ACCURACY, SUITABILITY OR AUTHENTICITY. YOU SHOULD CONDUCT YOUR OWN DUE
          DILIGENCE AS TO THE TRUTH, ACCURACY, COMPLETENESS, AND CONTINUING
          VALIDITY OF ANY INFORMATION SET FORTH IN OR REFERENCED AT THIS SITE.
          LIKEWISE, TRIG DOES NOT WARRANT THE ACCURACY OF THIRD-PARTY CONTENT
          CONTAINED WITHIN OR REFERRED TO AT THIS SITE, INCLUDING REFERENCE BY
          ANY LINKS TO THIRD-PARTY WEBSITES. TRIG IS NOT LIABLE FOR ANY
          DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF ANY USER.
        </Content>
        <Content>
          YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS OR
          MEMBERS OF THE SITE OR SERVICES. WE DO NOT ATTEMPT TO VERIFY THE
          QUALIFICATIONS OR STATEMENTS OF OUR MEMBERS OR USERS. WE MAKE NO
          REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OF MEMBERS OR USERS OR
          THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE MEMBERS OR USERS. YOU
          AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL INTERACTIONS WITH OTHER
          MEMBERS OR USERS OF THE SITE AND SERVICES. YOU UNDERSTAND THAT WE MAKE
          NO GUARANTEES WHATSOEVER REGARDING YOUR ULTIMATE EXPERIENCE WITH
          INDIVIDUALS YOU MEET THROUGH THE SITE OR SERVICES. YOU DO SO AT YOUR
          OWN RISK AND AT YOUR OWN PERIL. WE DISCLAIM ALL LIABILITY, REGARDLESS
          OF THE FORM OF ACTION, FOR THE ACTS OR OMISSIONS OF OTHER MEMBERS OR
          USERS (INCLUDING UNAUTHORIZED USERS), WHETHER SUCH ACTS OR OMISSIONS
          OCCUR DURING USE OF THE SITE OR SERVICES, OFFLINE OR OTHERWISE.
        </Content>
        <Content>
          UNDER NO CIRCUMSTANCES SHALL TRIG OR ITS AFFILIATED OR RELATED
          ENTITIES OR ITS VENDORS OR CONTENT PROVIDERS BE LIABLE TO YOU OR ANY
          THIRD PARTY FOR ANY DAMAGES (WHETHER DIRECT, INDIRECT, GENERAL,
          COMPENSATORY, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, EXEMPLARY
          OR OTHERWISE), INJURY, CLAIM OR LIABILITY OF ANY KIND OR CHARACTER
          BASED UPON OR ARISING FROM YOUR USE OF OR INABILITY TO USE THIS SITE
          OR SERVICES, INCLUDING WITHOUT LIMITATION, BODILY INJURY, EMOTIONAL
          DISTRESS, AND/OR ANY OTHER DAMAGES RESULTING FROM COMMUNICATIONS OR
          MEETINGS WITH OTHER USERS OF THIS SITE OR SERVICES OR PERSONS YOU MEET
          THROUGH THIS SITE OR SERVICES. IF YOU ARE DISSATISFIED WITH THE SITE
          OR SERVICES, OR ANY MATERIALS ON THE SITE, OR WITH ANY OF THE TERMS OF
          THIS AGREEMENT, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING
          THE SITE AND SERVICES. WITHOUT LIMITING THE FOREGOING, THE LIABILITY
          OF TRIG FOR ANY DAMAGE OF ANY KIND, DIRECT OR INDIRECT, ARISING FROM
          YOUR USE OF THIS SITE OR SERVICES, ANY INFORMATION, CONTENT, GOODS OR
          SERVICES OBTAINED AT OR FROM THIS SITE, OR OTHERWISE RELATING TO YOUR
          USE OF THIS SITE OR SERVICES, SHALL NOT EXCEED THE DOLLAR AMOUNT PAID
          BY YOU, IF ANY, TO TRIG FOR USE OF THIS SITE OR SERVICES.
        </Content>
        <Item>4. Release and Indemnification</Item>
        <Content>
          IN THE EVENT YOU HAVE A DISPUTE WITH ONE OR MORE USERS OR MEMBERS OF
          THE SITE OR SERVICES (INCLUDING, BUT NOT LIMITED TO, ANY DISPUTE
          BETWEEN USERS OR MEMBERS REGARDING ANY TRANSACTION OR USER GENERATED
          CONTENT) OR ANY THIRD PARTY WEBSITE THAT MAY BE LINKED TO OR OTHERWISE
          INTERACT WITH THE SITE, INCLUDING, WITHOUT LIMITATION, ANY SOCIAL
          MEDIA SITE, YOU HEREBY AGREE TO RELEASE AND FOREVER DISCHARGE TRIG AND
          ITS RESPECTIVE AGENTS, DIRECTORS, OFFICERS, EMPLOYEES AND ALL OTHER
          RELATED PERSONS OR ENTITIES FROM ANY AND ALL RIGHTS, CLAIMS,
          COMPLAINTS, DEMANDS, CAUSES OF ACTION, PROCEEDINGS, LIABILITIES,
          OBLIGATIONS, LEGAL FEES, COSTS AND DISBURSEMENTS OF ANY NATURE
          WHATSOEVER, WHETHER KNOWN OR UNKNOWN, WHICH NOW OR HEREAFTER ARISE
          FROM, RELATE TO, OR ARE CONNECTED WITH SUCH DISPUTE AND/OR YOUR USE OF
          THE SITE AND/OR SERVICES.
        </Content>
        <Content>
          UNLESS OTHERWISE PROHIBITED BY LAW, YOU WAIVE CALIFORNIA CIVIL CODE
          SECTION 1542, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO
          CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS
          FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM
          MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.”
        </Content>
        <Content>
          YOU AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS TRIG, ITS DIRECTORS,
          SHAREHOLDERS, OFFICERS, EMPLOYEES, AGENTS, DISTRIBUTORS, VENDORS AND
          AFFILIATES FROM AND AGAINST ALL CLAIMS, DEMANDS, LIABILITIES, LOSSES,
          EXPENSES, DAMAGES AND COSTS, INCLUDING REASONABLE ATTORNEYS’ FEES,
          RESULTING FROM, ARISING OUT OF OR IN CONNECTION WITH YOUR USE,
          UNLAWFUL USE OR OTHER MISUSE, OR INABILITY TO USE THE SITE OR
          SERVICES, YOUR BREACH OF THIS AGREEMENT, OR OTHERWISE RELATING TO THE
          BUSINESS WE CONDUCT ON THE SITE (INCLUDING, WITHOUT LIMITATION, ANY
          POTENTIAL OR ACTUAL COMMUNICATION, TRANSACTION OR DISPUTE BETWEEN YOU
          AND ANY OTHER MEMBER, USER OR THIRD PARTY), ANY CONTENT POSTED BY YOU
          OR ON YOUR BEHALF OR POSTED BY OTHER USERS OF YOUR ACCOUNT TO THE
          SITE, ANY USE OF ANY SERVICE PROVIDED BY A THIRD PARTY PROVIDER, OR
          ANY USE OF A SERVICE OFFERED BY US THAT INTERACTS WITH A THIRD PARTY
          WEBSITE, INCLUDING ANY SOCIAL MEDIA SITE. YOU SHALL COOPERATE AS FULLY
          AS REASONABLY REQUIRED IN THE DEFENSE OF ANY CLAIM. WE RESERVE THE
          RIGHT, AT OUR OWN EXPENSE, TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL
          OF ANY MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU AND YOU
          SHALL NOT SETTLE ANY MATTER WITHOUT OUR WRITTEN CONSENT. THIS SECTION
          SURVIVES TERMINATION OF THIS AGREEMENT.
        </Content>
        <Item>5. Choice of Law, Arbitration, and Venue</Item>
        <Content>
          his Agreement and any claim or controversy relating to or arising from
          the use of this Site or Services, including, but not limited to, any
          purchases or other transactions made or entered into at this Site, any
          information, content, goods, services or promotions herein contained
          or provided from this Site, or any functionality, software or
          programming contained or provided at or from this Site (hereafter,
          “Claims”), shall be governed by the laws of the State of California
          without regard to principles of conflicts of law and, as applicable,
          the laws of the United States of America. All Claims shall be decided
          by one arbitrator pursuant to this provision and the commercial
          arbitration rules and procedures of JAMS, Inc. at their offices
          located in Orange County, California. All Claims shall be brought
          solely in the parties’ individual capacity, and not as a plaintiff or
          class member in any purported class or representative proceeding. The
          arbitrator may not consolidate more than one person’s Claims, and may
          not otherwise preside over any form of a representative or class
          proceeding with respect to any such Claims. NEITHER PARTY SHALL BE
          PERMITTED TO OBTAIN AWARDS FOR, AND EACH PARTY HEREBY WAIVES ALL
          RIGHTS TO CLAIM, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL
          DAMAGES AND ANY OTHER DAMAGES, OTHER THAN FOR ACTUAL OUT-OF-POCKET
          EXPENSES, AND WAIVES ALL RIGHTS TO HAVE DAMAGES MULTIPLIED OR
          OTHERWISE INCREASED. The decision of the arbitrator shall be final and
          binding. No arbitration award or decision will have any preclusive
          effect as to issues or claims in any dispute with anyone who is not a
          named party to the arbitration. Any proceeding to enforce this
          arbitration agreement, including any proceeding to confirm, modify, or
          vacate an arbitration award shall be conducted in the Superior Court
          of the State of California, in and for the County of Orange or, where
          applicable, the federal District Court sitting in the County of
          Orange, State of California. Likewise, in the event that this
          arbitration agreement is for any reason held to be unenforceable, any
          litigation shall be commenced only in the federal or state courts
          located in Orange County, California. You hereby irrevocably consent
          to the jurisdiction of those courts for such purposes.
        </Content>
        <Content>
          BY USING THE SITE AND/OR SERVICES IN ANY MANNER, YOU AGREE TO THE
          ABOVE ARBITRATION AGREEMENT. IN DOING SO, YOU GIVE UP YOUR RIGHT TO GO
          TO COURT TO ASSERT OR DEFEND ANY CLAIMS BETWEEN YOU AND US. YOU ALSO
          GIVE UP YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION OR OTHER CLASS
          PROCEEDING.
        </Content>
        <Item>6. Account Security</Item>
        <Content>
          If you open an account or commence the transaction of business at this
          Site, you will be required to complete the registration process by
          providing certain information and registering a username and password.
          By registering, you agree that all information provided is true and
          accurate and that you will maintain and update this information as
          required in order to keep it current, complete and accurate. You are
          responsible for maintaining the confidentiality of the username and
          password and also for all activities which take place under your
          account. You agree to immediately notify us of any unauthorized use of
          your password or account or any other breach of security. Consistent
          with and without limiting the scope of provisions limiting liability
          elsewhere in this Agreement, in no event will Trig be liable for any
          indirect, special or consequential loss or damage of any kind
          whatsoever resulting from the disclosure of your username and/or
          password. You may not use another person’s account at any time,
          without the express permission of the account holder.
        </Content>
        <Item>7. DMCA Notice and Procedure</Item>
        <Content>
          It is our policy to respond to allegations of copyright violations in
          accordance with the Digital Millennium Copyright Act of 1998 (the
          “DMCA”). If you are a copyright owner and believe that your copyrights
          have been infringed based upon any content at this Site, you may give
          Trig notification of the alleged copyright infringement. When a valid
          DMCA notification is received, we will respond by taking down the
          offending content. We will then take reasonable steps to contact the
          owner of the removed content so that a counter-notification may be
          filed. Upon receipt of a valid counter-notification, we will generally
          restore the content in question, unless we receive notice from you,
          the notifying copyright owner, that a legal action has been filed
          seeking a court order to restrain the alleged infringer from engaging
          in the infringing activity. Trig may provide copies of such notices to
          the participants in the dispute or to any other third parties, at our
          discretion and as required by law. Trig’s Privacy Policy does not
          protect information provided in these notices.
        </Content>
        <Item>Notification</Item>
        <Content>
          If you believe that your work was copied or posted on our Site in a
          way that constitutes copyright infringement, please contact our
          designated agent below:
          <br />
          Contact: Brian Jenkins
          <br />
          Email: brian@trytrig.com
        </Content>
        <Content>
          Please note that you may be liable for damages (including costs and
          attorneys&apos; fees) if you materially misrepresent that material is
          infringing.
          <br />
          Your notification must include the following information:
          <ol>
            <li>
              A physical or electronic signature of a person authorized to act
              on behalf of the owner of an exclusive right that is allegedly
              infringed.
            </li>
            <li>
              Identification of the copyrighted work claimed to have been
              infringed or, if multiple copyrighted works at a single online
              site are covered by a single notification, a representative list
              of such works at that site.
            </li>
            <li>
              Identification of the material that is claimed to be infringing or
              to be the subject of infringing activity and that is to be removed
              or access to which is to be disabled, and information reasonably
              sufficient to permit the service provider to locate the material.
            </li>
            <li>
              Information reasonably sufficient to permit the service provider
              to contact the complaining party, such as an address, telephone
              number and, if available, an email address at which the
              complaining party may be contacted.
            </li>
            <li>
              A statement that the complaining party has a good faith belief
              that use of the material in the manner complained of is not
              authorized by the copyright owner, its agent, or the law.
            </li>
            <li>
              A statement that the information in the notification is accurate,
              and under penalty of perjury, that the complaining party is
              authorized to act on behalf of the owner of an exclusive right
              that is allegedly infringed.
            </li>
          </ol>
          Upon receipt of the written notification containing the information as
          outlined above:
          <ol>
            <li>
              Trig shall remove or disable access to the material that is
              alleged to be infringing.
            </li>
            <li>
              Trig shall use reasonable efforts to forward the written
              notification to such alleged infringer (&quot;User&quot;).
            </li>
            <li>
              Trig shall take reasonable steps promptly to notify the User that
              it has removed or disabled access to the material.
            </li>
          </ol>
        </Content>
        <Item>Counter Notification</Item>
        <Content>
          To be effective, a Counter Notification must be a written
          communication provided to Trig’s designated agent that includes
          substantially the following:
          <ol>
            <li>A physical or electronic signature of the User.</li>
            <li>
              Identification of the material that has been removed or to which
              access has been disabled and the location at which the material
              appeared before it was removed or access to it was disabled.
            </li>
            <li>
              A statement under penalty of perjury that the User has a good
              faith belief that the material was removed or disabled as a result
              of mistake or misidentification of the material to be removed or
              disabled.
            </li>
            <li>
              The User&apos;s name, address, and telephone number, and a
              statement that the User consents to the jurisdiction of Federal
              District Court for the judicial district in which the address is
              located, or if the User&apos;s address is outside of the United
              States, for any judicial district in which the service provider
              may be found, and that the User will accept service of process
              from the person who provided notification or an agent of such
              person.
            </li>
          </ol>
          Upon receipt of a Counter Notification containing the information as
          outlined above:
          <ol>
            <li>
              Trig shall promptly provide you with a copy of the counter
              notification, and inform you that Trig will replace the removed
              material or cease disabling access to it in 10 business days; and
            </li>
            <li>
              Trig shall replace the removed material and cease disabling access
              to it not less than 10, nor more than 14, business days following
              receipt of the counter notice, unless Trig’s designated agent
              first receives notice from you that you have filed an action
              seeking a court order to restrain the User from engaging in
              infringing activity relating to the material at the Site.
            </li>
          </ol>
        </Content>
        <Item>8. Termination of Account and Denial of Access</Item>
        <Content>
          This Agreement is effective unless and until terminated by Trig. If in
          Trig’s sole discretion you fail to comply with any term or provision
          of this Agreement, Trig may terminate your account and access to or
          use of this Site. In the event of termination or denial of access by
          Trig, you are no longer authorized to access the Site, and the
          restrictions imposed upon you with respect to material copied or
          downloaded, and the disclaimers and limitations of liabilities set
          forth in this Agreement, shall continue in force.
        </Content>
        <Content>
          If you believe that another User or account holder of this Site is a
          repeat infringer, please follow the instructions above to contact
          Trig’s DMCA agent and provide information sufficient for us to verify
          that the account holder or User is a repeat infringer.
        </Content>
        <Item>9. Removal of Objectionable Material</Item>
        <Content>
          Trig shall have the right, but not the obligation, to monitor the
          content of the Site and Services, including email, to determine
          compliance with this Agreement and to satisfy any law, regulation or
          authorized government request. Without limiting the foregoing, Trig
          shall have the right to remove any material that Trig, in its sole
          discretion, finds to be in violation of any of the provisions of this
          Agreement or deems to be otherwise objectionable.
        </Content>
        <Content>
          You agree that Trig shall under no circumstances be held liable on
          account of any action it takes, in good faith, to remove from the Site
          or restrict access to material that it or any user considers to be
          obscene, lewd, lascivious, discriminatory, hateful, violent,
          harassing, or otherwise objectionable, whether or not such material is
          constitutionally protected.
        </Content>
        <Item>10. Third Party Links</Item>
        <Content>
          This Site may include links to other Internet sites maintained by
          third parties (“Linked Sites”). Trig provides Linked Sites to you
          solely as a convenience, and the inclusion of Linked Sites does not
          imply endorsement by Trig of the Linked Sites. You access Linked Sites
          at your own risk and by accessing them you leave this Site. Linked
          Sites are not under the control of Trig and Trig is not responsible
          for the contents of any Linked Sites.
        </Content>
        <Item>11. Modifications to the Site or Services</Item>
        <Content>
          Trig reserves the right at any time to modify or discontinue,
          temporarily or permanently, the Site and/or Services (or any part
          thereof) with or without notice at its sole discretion. You agree that
          Trig shall not be liable to you or to any third party for any
          modification, suspension or discontinuance of the Site and/or
          Services.
        </Content>
        <Item>12. Miscellaneous</Item>
        <Content>
          Headings in this Agreement are for reference purposes only and in no
          way define, limit, construe or describe the scope or extent of such
          section. Our failure to act with respect to a breach of this Agreement
          by you or others does not waive our right to act with respect to other
          or similar breaches. This Agreement, including the documents
          referenced herein, shall constitute the entire agreement and
          understanding between Trig and you with respect to use of the Site
          and/or Services and supersedes any and all prior agreements and
          understandings of the parties with respect to the subject matter
          addressed herein. This Agreement is binding on the parties hereto and
          their successors and assigns. If any provision in this Agreement is
          deemed unlawful, void or unenforceable, then that provision will be
          deemed severed from the Agreement and the remaining provisions shall
          remain in full force and effect as if no invalid or unenforceable
          provision had been part of this Agreement.
        </Content>
        <Item>13. Complaints or Concerns</Item>
        <Content>
          If you have any complaints or concerns regarding the services provided
          hereunder, please contact us at support@trytrig.com. The Complaint
          Assistance Unit of the Division of Consumer Services of the Department
          of Consumer Affairs may be contacted by telephone at (800) 952-5210 or
          by writing the California Department of Consumer Affairs, Consumer
          Information Center at 1625 North Market Blvd., Suite N-112,
          Sacramento, California 95834.
        </Content>
      </div>
    </Layout>
  );
};

export default TermsOfService;
