/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import Image from "next/image";
import { prefix } from "../utils/prefix";
import LanguagePicker from "../components/LanguagePicker";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffdf1]">
      <Head>
        <title>Privacy Policy | Stormbreaker</title>
        <meta name="description" content="Stormbreaker Privacy Policy" />
        <link rel="icon" href={`${prefix}/logo.png`} />
      </Head>
      <div className="flex items-center justify-between px-4 py-2 border-b gap-4 w-full max-w-5xl bg-gray-300 rounded-none lg:rounded-md m-0 lg:m-8">
        <Image
          src={`${prefix}/logo.png`}
          alt="Stormbreaker Logo"
          width={44}
          height={44}
          className="rounded-md"
        />
        <h1 className="text-2xl font-light">
          <a href="/Clinical-Toolkit/">Stormbreaker Clinical Toolkit</a>
        </h1>
        <LanguagePicker
          availableLanguages={[{ code: "en", name: "English", flag: "🇺🇸" }]}
        />
      </div>
      <main className="bg-gray-300 w-full max-w-5xl mx-auto flex-grow rounded-none lg:rounded-md m-0 lg:m-8 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="prose prose-sm dark:prose-invert gap-4 flex flex-col">
          <p>
            <strong>Rutgers University</strong> built the Stormbreaker app as a
            Commercial app. This SERVICE is provided by Rutgers University and
            is intended for use as is.
          </p>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at Stormbreaker
            unless otherwise defined in this Privacy Policy.
          </p>
          <h1 className="text-xl">Information Collection and Use</h1>
          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to name, email address, crash data. The
            information that we request will be retained by us and used as
            described in this privacy policy.
          </p>
          <p>
            The app does use third-party services that may collect information
            used to identify you.
          </p>
          <p>
            Link to the privacy policy of third-party service providers used by
            the app:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/policies/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Google Analytics for Firebase
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Firebase Crashlytics
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Facebook
              </a>
            </li>
          </ul>
          <h1 className="text-xl">Log Data</h1>
          <p>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <h1 className="text-xl">Cookies</h1>
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device&apos;s
            internal memory.
          </p>
          <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third-party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
          <h1 className="text-xl">Service Providers</h1>
          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            We want to inform users of this Service that these third parties
            have access to their Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>
          <h1 className="text-xl">Security</h1>
          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <h2>Links to Other Sites</h2>
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <h1 className="text-xl">Children’s Privacy</h1>
          <p>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the case we discover that a child under 13
            has provided us with personal information, we immediately delete
            this from our servers. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us so that we will be able to do the necessary
            actions.
          </p>
          <h1 className="text-xl">Changes to This Privacy Policy</h1>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <p>This policy is effective as of 2022-09-09</p>
          <h1 className="text-xl">Contact Us</h1>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at{" "}
            <a href="mailto:edward.selby@rutgers.edu">
              edward.selby@rutgers.edu
            </a>
            .
          </p>
          <p className="text-xs text-gray-400 mt-4">
            This privacy policy page was created at{" "}
            <a href="https://privacypolicytemplate.net/">
              privacypolicytemplate.net
            </a>{" "}
            and modified/generated by App Privacy Policy Generator.
          </p>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-16 border-t bg-gray-200">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1"
        >
          <Image
            src={`${prefix}/logo.png`}
            alt="Vercel Logo"
            width={24}
            height={24}
            className="rounded-md mr-1"
          />
          Stormbreaker
          <span>&copy;</span> {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}
