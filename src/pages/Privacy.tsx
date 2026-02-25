import React from 'react';
import PolicyViewer from '@/components/shared/PolicyViewer';

const Privacy = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          This Privacy Policy explains how the Site collects, uses, stores, and protects
          your personal information when you visit or interact with the Site.
        </p>
      )
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium text-foreground">Personal Data:</span> Name, email address, phone
              number, and any other data you voluntarily provide, such as through a contact
              form.
            </li>
            <li>
              <span className="font-medium text-foreground">Usage Data:</span> IP address, browser type,
              pages visited, date and time of visit, and other technical log data that is
              collected automatically.
            </li>
          </ul>
        </>
      )
    },
    {
      id: "information-usage",
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We may use collected data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respond to your inquiries and provide services.</li>
            <li>Improve Site features and user experience.</li>
            <li>Send updates, newsletters, or marketing communications, only with consent.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </>
      )
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      content: (
        <p>
          We use cookies and similar technologies to analyze Site usage, remember
          preferences, and improve functionality. Most browsers allow you to control cookie
          settings.
        </p>
      )
    },
    {
      id: "sharing",
      title: "Data Sharing",
      content: (
        <>
          <p className="mb-4">We will not sell or rent your personal data to third parties. We may share information with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service providers that support the Site, such as hosting and analytics.</li>
            <li>Legal authorities, if required by law or to protect rights.</li>
          </ul>
        </>
      )
    },
    {
      id: "security",
      title: "Data Security",
      content: (
        <p>
          We implement reasonable technical and organizational measures to protect personal
          data from unauthorized access, loss, or misuse.
        </p>
      )
    },
    {
      id: "rights",
      title: "Your Rights",
      content: (
        <p>
          You may request access to, correction of, or deletion of your personal data. You
          can also opt out of marketing communications.
        </p>
      )
    },
    {
      id: "children",
      title: "Children’s Privacy",
      content: (
        <p>
          The Site is not intended for children under 13. We do not knowingly collect
          personal data from minors.
        </p>
      )
    },
    {
      id: "changes",
      title: "Changes to Policy",
      content: (
        <p>
          We may update this Privacy Policy periodically. The updated date will be
          indicated at the top of the policy, and your continued use of the Site
          constitutes acceptance of the updated policy.
        </p>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <>
          <p className="mb-4">For questions or requests regarding this Privacy Policy, contact:</p>
          <div className="bg-muted p-6 rounded-lg border border-border">
            <p className="mb-2">
              <span className="font-semibold text-foreground">Email:</span> <a href="mailto:sales@psgbiz.com" className="text-primary hover:underline">sales@psgbiz.com</a>, <a href="mailto:ceo@psgbiz.com" className="text-primary hover:underline">ceo@psgbiz.com</a>
            </p>
            <p>
              <span className="font-semibold text-foreground">Address:</span><br />
              King Abdulaziz St, Al Dawasir<br />
              Dammam 32416 - United Arab Emirates
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <PolicyViewer
      title="Privacy Policy"
      lastUpdated="March 15, 2024"
      intro={
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
      }
      sections={sections}
    />
  );
};

export default Privacy;
