import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Legal() {
  return (
    <section className="max-w-5xl mx-auto px-5 md:px-10 w-full min-h-[100vh] flex flex-col text-dark-600">
      <Link
        href={"/"}
        className="flex justify-center items-center mb-5 text-dark-600 border-dark-600 border rounded-[30px] py-2 px-1 w-[120px] hover:bg-gray-200"
      >
        <MoveLeft />
        <span className="ml-3 text-lg">Back</span>
      </Link>

      <div className="flex-center mb-10">
        <Link
          href={"$#1"}
          prefetch={false}
          className="mx-5 text-dark-600 text-xl border border-dark-600 py-2 px-4 rounded-[30px] hover:bg-gray-200"
        >
          Terms of conditions
        </Link>
        <Link
          href={"$#2"}
          prefetch={false}
          className="mx-5 text-dark-600 text-xl border border-dark-600 py-2 px-4 rounded-[30px] hover:bg-gray-200"
        >
          Privacy policy
        </Link>
      </div>

      <div id="1" className=" mb-20">
        <h2 className="my-5 text-xl font-bold">
          Terms and Conditions for PixelWizard AI
        </h2>
        <p className="my-5 text-lg">Last Updated: September 26, 2024</p>
        <p className="my-5 text-lg font-bold">Welcome to PixelWizard AI!</p>
        <p className="my-5 text-lg">
          These Terms of Service ("Terms") govern your use of the PixelWizard AI
          website at https://pixelwizard-ai.com ("Website") and the services
          provided by PixelWizard AI. By using our Website and services, you
          agree to these Terms.
        </p>
        <p className="my-5 text-lg font-bold">
          1. Description of PixelWizard AI
        </p>
        <p className="my-5 text-lg">
          PixelWizard AI is a platform that offers AI-powered image editing
          tools to enhance and transform your photos effortlessly.
        </p>
        <p className="my-5 text-lg font-bold">2. Ownership and Usage Rights</p>
        <p className="my-5 text-lg">
          When you use PixelWizard AI's services, you gain the right to access
          and use the tools provided for editing your images. You own the images
          you create but do not have the right to resell them. Refunds are not
          accepted and cannot be requested.
        </p>
        <p className="my-5 text-lg font-bold">3. User Data and Privacy</p>
        <p className="my-5 text-lg">
          We collect and store user data, including name, email, and payment
          information, as necessary to provide our services. For details on how
          we handle your data, please refer to our Privacy Policy at
          https://pixelwizard-ai.com/privacy-policy.
        </p>
        <p className="my-5 text-lg font-bold">
          4. Non-Personal Data Collection
        </p>
        <p className="my-5 text-lg">
          We use web cookies to collect non-personal data for the purpose of
          improving our services and user experience.
        </p>
        <p className="my-5 text-lg font-bold">5. Governing Law</p>
        <p className="my-5 text-lg">
          These Terms are governed by the laws of Denmark.
        </p>
        <p className="my-5 text-lg font-bold">6. Updates to the Terms</p>
        <p className="my-5 text-lg">
          We may update these Terms from time to time. Users will be notified of
          any changes via email.
        </p>
        <p className="my-5 text-lg">
          For any questions or concerns regarding these Terms of Service, please
          contact us at ispasdani14@gmail.com.
        </p>
        <p className="my-5 text-lg">Thank you for using PixelWizard AI!</p>
      </div>

      <div id="2" className="mb-10">
        <h2 className="my-5 text-xl font-bold">
          Privacy Policy for PixelWizard AI
        </h2>
        <p className="my-5 text-lg">Last Updated: September 26, 2024</p>
        <p className="my-5 text-lg">
          Thank you for visiting PixelWizard AI ("we," "us," or "our"). This
          Privacy Policy outlines how we collect, use, and protect your personal
          and non-personal information when you use our website located at
          https://pixelwizard-ai.com (the "Website").
        </p>
        <p className="my-5 text-lg">
          By accessing or using the Website, you agree to the terms of this
          Privacy Policy. If you do not agree with the practices described in
          this policy, please do not use the Website.
        </p>
        <p className="my-5 text-lg font-bold">1. Information We Collect</p>
        <p className="my-5 text-lg font-bold">1.1 Personal Data</p>
        <p className="my-5 text-lg">
          We collect the following personal information from you:
        </p>
        <p className="my-5 text-lg">
          Name: We collect your name to personalize your experience and
          communicate with you effectively.
        </p>
        <p className="my-5 text-lg">
          Email: We collect your email address to send you important information
          regarding your orders, updates, and communication.
        </p>
        <p className="my-5 text-lg">
          Payment Information: We collect payment details to process your orders
          securely. However, we do not store your payment information on our
          servers. Payments are processed by trusted third-party payment
          processors.
        </p>
        <p className="my-5 text-lg">
          Google Account Image: We collect your Google Account image to enhance
          the user experience and create a more common aproach to use the
          Profile Section.
        </p>
        <p className="my-5 text-lg font-bold">1.2 Non-Personal Data</p>
        <p className="my-5 text-lg">
          We may use web cookies and similar technologies to collect
          non-personal information such as your IP address, browser type, device
          information, and browsing patterns. This information helps us to
          enhance your browsing experience, analyze trends, and improve our
          services.
        </p>
        <p className="my-5 text-lg font-bold">2. Purpose of Data Collection</p>
        <p className="my-5 text-lg">
          We collect and use your personal data for the sole purpose of order
          processing. This includes processing your orders, sending order
          confirmations, providing customer support, and keeping you updated
          about the status of your orders.
        </p>
        <p className="my-5 text-lg font-bold">3. Data Sharing</p>
        <p className="my-5 text-lg">
          We do not share your personal data with any third parties except as
          required for order processing (e.g., sharing your information with
          payment processors). We do not sell, trade, or rent your personal
          information to others.
        </p>
        <p className="my-5 text-lg font-bold">4. Children's Privacy</p>
        <p className="my-5 text-lg">
          PixelWizard AI is not intended for children under the age of 14. We do
          not knowingly collect personal information from children. If you are a
          parent or guardian and believe that your child has provided us with
          personal information, please contact us at the email address provided
          below.
        </p>
        <p className="my-5 text-lg font-bold">
          5. Updates to the Privacy Policy
        </p>
        <p className="my-5 text-lg">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. Any updates will be posted on this page, and we may notify
          you via email about significant changes.
        </p>
        <p className="my-5 text-lg font-bold">6. Contact Information</p>
        <p className="my-5 text-lg">
          If you have any questions, concerns, or requests related to this
          Privacy Policy, you can contact us at:
        </p>
        <p className="my-5 text-lg">Email: ispasdani14@gmail.com</p>
        <p className="my-5 text-lg">
          For all other inquiries, please visit our Contact Us page on the
          Website.
        </p>
        <p className="my-5 text-lg">
          By using PixelWizard AI, you consent to the terms of this Privacy
          Policy.
        </p>
      </div>
    </section>
  );
}

export default Legal;
