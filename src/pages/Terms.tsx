import React from 'react';
import PolicyViewer from '@/components/shared/PolicyViewer';

const Terms = () => {
  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      content: (
        <p>
          By accessing or using this website (the “Site”), you agree to be bound by these
          Terms of Service (“Terms”). If you do not agree with any part of these Terms, do
          not use the Site.
        </p>
      )
    },
    {
      id: "use",
      title: "Use of the Site",
      content: (
        <p>
          You agree to use the Site only for lawful purposes and in a way that does not
          infringe the rights of, restrict, or inhibit others from using the Site.
          Prohibited uses include transmitting harmful content or disrupting Site
          functionality.
        </p>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: (
        <p>
          All content, logos, text, graphics, and designs available on the Site are the
          property of the Site owners or licensed to them and are protected by intellectual
          property laws. You may not reproduce, distribute, or create derivative works
          without written permission.
        </p>
      )
    },
    {
      id: "user-content",
      title: "User Content",
      content: (
        <p>
          If you submit any content, including comments, messages, or uploads, you grant
          the Site a worldwide, non-exclusive, royalty-free license to use, copy, modify,
          publish, and distribute that content.
        </p>
      )
    },
    {
      id: "links",
      title: "Links to Third-Party Sites",
      content: (
        <p>
          The Site may contain links to third-party websites. These links are provided for
          convenience only. The Site does not endorse and is not responsible for the
          content or practices of linked sites.
        </p>
      )
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      content: (
        <p>
          The Site is provided “as is” without warranties of any kind. The Site does not
          guarantee accuracy, completeness, or fitness for a particular purpose.
        </p>
      )
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <p>
          Under no circumstances shall the Site or its owners be liable for any direct,
          indirect, incidental, or consequential damages arising from your use of the Site.
        </p>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <p>
          These Terms are governed by the laws of the jurisdiction where the Site’s owners
          are established. Any disputes will be resolved in the appropriate courts of that
          jurisdiction.
        </p>
      )
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: (
        <p>
          The Site may modify these Terms at any time. Modified terms become effective
          when posted. Continued use of the Site constitutes acceptance of the updated
          Terms.
        </p>
      )
    }
  ];

  return (
    <PolicyViewer
      title="Terms of Service"
      lastUpdated="March 15, 2024"
      intro={
        <p>
          Please read these Terms of Service carefully before using our services.
        </p>
      }
      sections={sections}
    />
  );
};

export default Terms;
