import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Clara AI Privacy Policy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      {/* Minimal top padding for tight layout */}
      <main className="flex-grow container mx-auto px-4 pt-8 sm:pt-12 pb-4 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">Clara AI Privacy Policy</h1>
          
          {/* Introductory Paragraphs - Minimal Spacing */}
          <p className="mb-1 text-sm">
            Clara AI (“Clara,” “Clara AI,” “we,” “us,” or “our”) operates the justclara.ai website, the Clara AI web application, the Clara mobile application, and all Clara-powered AI agents—including voice agents, dispatch agents, support agents, scheduling and collections agents, and any embedded or integrated agent experiences (collectively, the **“Service”**).
          </p>
          <p className="mb-1 text-sm">
            This Privacy Policy explains how we collect, use, store, and protect personal information (“Personal Information”) when you access or use the Service.
          </p>
          <p className="mb-3 text-sm font-semibold">
            By using the Service, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          {/* Main Content Sections - Using space-y-2 for tight sections */}
          <div className="space-y-2"> 
            
            {/* SECTION 1 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">1. Information We Collect</h2>
              <p className="mb-0.5 text-sm">We collect Personal Information in the following ways:</p>
              
              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">a. Information You Provide Directly</h3>
              <p className="mb-0.5 text-sm">This includes information you submit when creating an account, contacting us, or interacting with a Clara agent:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Name, company name, email address, phone number</li>
                <li>Business contact details</li>
                <li>Job title or role</li>
                <li>Customer support inquiries</li>
              </ul>
              
              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">b. Voice, Call, and Interaction Data</h3>
              <p className="mb-0.5 text-sm">To power Clara’s agents and improve their accuracy, we may collect:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Voice recordings, call recordings, and voicemail messages</li>
                <li>AI-generated or human-generated transcripts</li>
                <li>Chat messages and form submissions</li>
                <li>Input given to Clara agents through phone, text, chat, or integrations</li>
              </ul>
              <p className="text-sm">These recordings may be used to provide the Service, improve accuracy, enhance routing logic, and maintain quality assurance.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">c. Account, Activity & Usage Data</h3>
              <p className="mb-0.5 text-sm">We collect information about how you or your customers use Clara AI:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Interaction logs</li>
                <li>Features accessed</li>
                <li>Frequency and duration of usage</li>
                <li>Device type and app version</li>
              </ul>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">d. Integration & System Data</h3>
              <p className="mb-0.5 text-sm">If you connect Clara AI to third-party platforms (e.g., CRM, scheduling, accounting, marketing systems), we may access:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Customer records</li>
                <li>Job information</li>
                <li>Calendar or ticket details</li>
                <li>Communication history</li>
                <li>Billing or payment metadata (never full card numbers)</li>
              </ul>
              <p className="text-sm">Information accessed is always limited to what is required to perform the requested function.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">e. Log & Technical Data</h3>
              <p className="mb-0.5 text-sm">When you visit or use the Service, we automatically collect:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages viewed and referring URLs</li>
                <li>Date/time of access</li>
                <li>Diagnostic and performance data</li>
              </ul>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">f. Location Information</h3>
              <p className="text-sm">We may infer your approximate location from your IP address or device-level indicators (e.g., GPS if explicitly enabled).</p>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 2 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">2. How We Use Personal Information</h2>
              <p className="mb-0.5 text-sm">We use Personal Information for the following purposes:</p>
              
              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">a. Providing, Operating & Improving the Service</h3>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Delivering Clara AI features, including voice interactions, routing, dispatch, collections, reminders, and automations</li>
                <li>Authenticating users and managing customer accounts</li>
                <li>Customizing and improving conversation accuracy</li>
                <li>Troubleshooting technical issues</li>
              </ul>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">b. AI Training & Optimization</h3>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Clara AI may use de-identified, anonymized, or aggregated data to improve its models and performance.</li>
                <li>We do not use personally identifiable information for AI training without explicit user consent.</li>
              </ul>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">c. Communications & Marketing</h3>
              <p className="mb-0.5 text-sm">We may contact you about:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Feature updates</li>
                <li>System notices</li>
                <li>Product releases</li>
                <li>Promotional content (where permitted by law)</li>
              </ul>
              <p className="text-sm">You may opt out of marketing communications at any time.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">d. Compliance, Safety & Security</h3>
              <p className="text-sm">We may use or disclose information when necessary to:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Comply with applicable laws</li>
                <li>Respond to legal requests (subpoena, warrant, government inquiry)</li>
                <li>Prevent fraud, abuse, or security threats</li>
                <li>Enforce our Terms of Service</li>
              </ul>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 3 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">3. Data Protection & Security</h2>
              <p className="mb-0.5 text-sm">We implement commercially reasonable technical and organizational security measures, including:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Encrypted data transmission and storage</li>
                <li>Access controls and authentication</li>
                <li>Audit logs and monitoring</li>
                <li>Regular vulnerability testing</li>
                <li>Secure development practices</li>
              </ul>
              <p className="text-sm">No method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute protection.</p>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 4 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">4. Data Retention</h2>
              <p className="mb-0.5 text-sm">We retain Personal Information only as long as necessary:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>To provide the Service</li>
                <li>To meet legal or regulatory requirements</li>
                <li>To resolve disputes</li>
                <li>To enforce our agreements</li>
              </ul>
              <p className="text-sm">Recordings and transcripts may be anonymized or securely deleted after expiration of retention periods unless otherwise required by law.</p>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 5 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">5. Data Sharing & Third Parties</h2>
              <p className="mb-0.5 text-sm">We do not sell Personal Information.</p>
              <p className="mb-0.5 text-sm">We may share Personal Information with the following categories of recipients:</p>
              
              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">a. Service Providers</h3>
              <p className="mb-0.5 text-sm">Trusted vendors supporting:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Hosting & cloud infrastructure</li>
                <li>Call and telephony services</li>
                <li>Analytics</li>
                <li>Customer support</li>
                <li>Messaging and 10DLC compliance</li>
                <li>Integrations and workflow automation</li>
              </ul>
              <p className="text-sm">All providers are bound by strict confidentiality and data protection obligations.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">b. Marketing & Advertising Partners</h3>
              <p className="text-sm">Used only to deliver targeted communications or measure marketing performance, as allowed by law.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">c. Business Transfers</h3>
              <p className="text-sm">If Clara AI undergoes a merger, acquisition, investment, or sale of assets, Personal Information may be transferred as part of the transaction.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">d. Legal Compliance</h3>
              <p className="text-sm">We may disclose information if required to comply with applicable law or to protect our users and the Service.</p>
            </div>
            <hr className="my-1 border-gray-200" />
            
            {/* SECTION 6 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">6. Your Privacy Rights</h2>
              <p className="mb-0.5 text-sm">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>**Access** — request a copy of your Personal Information</li>
                <li>**Correction** — request updates or corrections</li>
                <li>**Deletion** — request deletion of your data (subject to legal exceptions)</li>
                <li>**Restriction** — limit certain data uses</li>
                <li>**Portability** — request export of your data</li>
                <li>**Opt-out** — opt out of marketing communications and certain processing</li>
              </ul>
              <p className="mt-0.5 text-sm">To exercise any rights, contact us using the details below.</p>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 7 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">7. Data Protection Principles</h2>
              <p className="mb-0.5 text-sm">We operate Clara AI with the following principles:</p>
              
              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">Privacy by Design</h3>
              <p className="text-sm">Security, privacy, and compliance are embedded into every phase of design, development, and deployment.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">Privacy by Default</h3>
              <p className="text-sm">We only collect and process the minimum data necessary to deliver the Service.</p>

              <h3 className="text-base font-semibold mt-1 mb-0 text-gray-700">Responsible AI</h3>
              <p className="mb-0.5 text-sm">Clara AI enforces policies to ensure:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>Data minimization</li>
                <li>De-identification during training</li>
                <li>No unauthorized human review</li>
                <li>Traceability and auditability</li>
              </ul>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 8 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">8. Compliance With U.S. & International Laws</h2>
              <p className="mb-0.5 text-sm">Clara AI complies with major U.S. and global privacy laws, including:</p>
              <ul className="list-disc list-inside pl-4 text-sm space-y-0.5">
                <li>10DLC / CTIA messaging standards</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Virginia Consumer Data Protection Act (VCDPA)</li>
                <li>Colorado Privacy Act (CPA)</li>
                <li>Connecticut Data Privacy Act (CDPA)</li>
                <li>Utah Consumer Privacy Act (UCPA)</li>
                <li>General Data Protection Regulation (GDPR) (EU)</li>
                <li>HIPAA (for applicable healthcare data handled in supported use cases)</li>
              </ul>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 9 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">9. Changes to This Privacy Policy</h2>
              <p className="text-sm">We may update this Privacy Policy to reflect changes in law, product updates, or best practices. The “Last Updated” date indicates the most recent version.</p>
              <p className="text-sm">Continued use of the Service after changes constitutes acceptance of the updated policy.</p>
            </div>
            <hr className="my-1 border-gray-200" />

            {/* SECTION 10 */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">10. Contact Us</h2>
              <p className="mb-0.5 text-sm">If you have any questions or wish to exercise your privacy rights, please contact:</p>
              <address className="not-italic text-sm">
                <strong>Clara AI</strong><br />
                Phone: +1 (206) 456-8988<br />
                Email: hello@justclara.ai
              </address>
            </div>
            <hr className="my-1 border-gray-200" />
            
            {/* Acknowledgment */}
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mb-0.5">Acknowledgment</h2>
              <p className="text-sm">By accessing or using Clara AI or any Clara-powered agent, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
