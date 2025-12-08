import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet-async";

const UserLicenseAgreement = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Clara AI Subscription Agreement</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 pt-24 sm:pt-32 pb-8 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Clara AI Subscription Agreement</h1>
          <p className="mb-4 text-sm">
            This Master Subscription Agreement (“Agreement”) is entered into by and between **Clara AI, Inc.**, a Delaware corporation with its principal office at 236 W 27th St, Floor 12, New York, NY 10001 (“Company”), and **the individual or entity accessing or using the Services** (“Customer”).
          </p>
          <p className="mb-4 text-sm">
            **By accessing or using any Clara AI Service, Customer acknowledges and agrees to be bound by this Agreement.**
          </p>
          <p className="mb-6 text-sm">
            This Agreement, along with any referenced policies, exhibits, or order forms, constitutes the **entire agreement** between the Parties and supersedes all prior discussions or understandings.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. Company Background</h2>
              <p className="text-sm">
                Clara AI, Inc. provides **cloud-based software-as-a-service (SaaS) platforms** that automate operational workflows for service businesses. Clara AI includes a suite of **AI-powered agents** for answering, dispatching, scheduling, collections, and customer communication. These tools help companies to improve responsiveness, reduce overhead, and streamline operations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
              <p className="mb-2 text-sm">
                During the Subscription Term, the Company grants the Customer access to the Clara AI platform and its AI agents, which may include (collectively, the **“Services”**):
              </p>
              <h3 className="text-lg font-medium mt-4 mb-2">Core AI Agents</h3>
              <ul className="list-disc list-inside pl-4 mb-2 text-sm">
                <li>**AI Answering Agent** – Handles incoming calls and customer inquiries using contextual AI.</li>
                <li>**AI Dispatch Agent** – Assists with job scheduling, technician dispatching, and workflow coordination.</li>
                <li>**AI Collections Agent** – Automates payment reminders, invoice follow-ups, and collection workflows.</li>
                <li>**AI Reminder Agent** – Handles messaging, appointment confirmations, and customer updates.</li>
              </ul>
              <p className="mb-2 text-sm">
                The Company may enhance, expand, or modify features at its discretion, provided such changes do not materially degrade the core functionality.
              </p>
              <p className="text-sm">
                Additional features or modules may require separate subscriptions.
              </p>
            </div>
            
            <div>
                <h2 className="text-xl font-semibold mb-2">3. Customer Support</h2>
                <p className="mb-2 text-sm">The Company provides support via phone and email during standard U.S. business hours.</p>
                <ul className="list-none pl-4 mb-2 text-sm">
                    <li>**Phone:** +1-206-826-9074</li>
                    <li>**Email:** support@justclara.ai</li>
                </ul>
                <p className="text-sm">Standard requests receive a response within **one (1) business day**. Critical issues may receive expedited attention on a best-effort basis.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">4. Subscription Fees & Billing</h2>
                <p className="mb-2 text-sm">Customer agrees to the subscription and billing terms displayed at signup or in any executed order form.</p>
                <ul className="list-disc list-inside pl-4 text-sm">
                    <li>**Commitment:** Annual agreement with recurring billing.</li>
                    <li>**Billing:** Auto-recurring charges to the payment method on file.</li>
                    <li>**Payment Due:** Immediately upon invoice issuance.</li>
                    <li>**Fees:** **Non-refundable**, including for early termination or non-usage.</li>
                </ul>
                 <p className="mt-2 text-sm">Pricing is not included in this public agreement and may vary by plan.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">5. Subscription Term & Renewal</h2>
                <p className="text-sm">The Subscription Term begins upon Customer’s activation and continues for **twelve (12) months**, renewing automatically unless terminated under Section 7.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">6. Payment Terms & Suspension</h2>
                <p className="mb-2 text-sm">All fees must be paid in advance. If payment is not received within **three (3) days** of the due date:</p>
                <ul className="list-disc list-inside pl-4 text-sm">
                    <li>Services may be **suspended without notice**.</li>
                    <li>Access may be restored upon full payment.</li>
                </ul>
                <p className="text-sm">Suspension does not relieve the Customer from payment obligations.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">Termination for Convenience</h3>
                <p className="text-sm">Customer may terminate with at least **thirty (30) days’ written notice**. Fees are non-refundable.</p>
                <h3 className="text-lg font-medium mt-4 mb-2">Termination for Cause</h3>
                <p className="text-sm">Either party may terminate with thirty (30) days’ notice if the other fails to cure a material breach.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">8. Effect of Termination</h2>
                <ul className="list-disc list-inside pl-4 text-sm">
                    <li>Customer access to Services ends immediately.</li>
                    <li>No refunds will be issued.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">9. Customer Data & Retrieval</h2>
                <p className="text-sm">Customer Data may be retained for **thirty (30) days** after termination.</p>
                <p className="text-sm">Upon request, the Company will provide a **one-time data export** in a commercially reasonable format.</p>
                <p className="text-sm">After 30 days, all Customer Data may be **permanently deleted**.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">10. Access & Use Rights</h2>
                <p className="text-sm">Customer receives a **limited, non-exclusive, non-transferable right** to use the Services **solely for internal business operations**.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">11. Restrictions</h2>
                <p className="mb-2 text-sm">Customer shall not:</p>
                <ul className="list-disc list-inside pl-4 text-sm">
                    <li>Reverse engineer or attempt to access source code</li>
                    <li>Resell, lease, sublicense, or transfer the Services</li>
                    <li>Interfere with platform performance</li>
                    <li>Use the Services in violation of the law</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">12. Ownership</h2>
                <p className="text-sm">All intellectual property related to Clara AI remains the **exclusive property of the Company**. No ownership rights are transferred to the Customer.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">13. Feedback</h2>
                <p className="text-sm">Any suggestions or feedback provided to the Company may be used **freely without obligation**.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">14. Confidentiality</h2>
                <p className="mb-2 text-sm">Each party agrees to protect the other’s Confidential Information with reasonable care.</p>
                <p className="text-sm">Confidentiality obligations survive for **two (2) years** after termination.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">15. Warranties & Disclaimer</h2>
                <p className="text-sm">The Company warrants that the Services will operate materially as documented.</p>
                <p className="text-sm">All other warranties are disclaimed. Services are provided **“as is.”**</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">16. Limitation of Liability</h2>
                <p className="mb-2 text-sm">Maximum liability shall not exceed the amount paid by the Customer in the **three (3) months** preceding the claim.</p>
                <p className="mb-2 text-sm">No liability for indirect or consequential damages.</p>
                <h3 className="text-lg font-medium mt-4 mb-2">AI Responsibility Disclaimer</h3>
                <p className="mb-2 text-sm">Clara AI is an automated system. The Company is not responsible for outcomes relating to:</p>
                <ul className="list-disc list-inside pl-4 mb-2 text-sm">
                    <li>Failure to escalate emergencies</li>
                    <li>Incorrect information or miscommunication</li>
                    <li>Missed appointments</li>
                    <li>Delayed responses or task execution</li>
                </ul>
                <p className="text-sm">Customer is responsible for oversight of AI-generated actions.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">17. Indemnification</h2>
                <p className="text-sm">Customer agrees to **indemnify** the Company for claims arising from **misuse of the Services** or **violations of law**.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">18. Force Majeure</h2>
                <p className="text-sm">Neither party is liable for delays caused by events beyond reasonable control.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">19. Dispute Resolution</h2>
                <p className="text-sm">Disputes will first be resolved through good-faith negotiation.</p>
                <p className="text-sm">If unresolved, disputes will be submitted to **binding arbitration** in New York, NY.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">20. Governing Law</h2>
                <p className="text-sm">This Agreement is governed by the laws of the **State of New York**.</p>
            </div>
            
            <div>
                <h2 className="text-xl font-semibold mb-2">21. Entire Agreement</h2>
                <p className="text-sm">This Agreement constitutes the **full understanding** between the parties regarding the Services.</p>
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLicenseAgreement;
