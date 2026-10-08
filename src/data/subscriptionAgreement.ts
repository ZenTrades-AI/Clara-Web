// Clara AI Subscription Agreement, shown at /user-licence-agreement.
// Keep this text in sync with the signed legal version.

export type AgreementBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "definition"; term: string; text: string }
  | { kind: "clause"; num: string; label?: string; text: string };

export interface AgreementSection {
  num: string;
  title: string;
  blocks: AgreementBlock[];
}

export const agreementTitle = "Clara AI Subscription Agreement";

export const agreementMeta = ["Actora Inc., doing business as Clara AI", "User License Agreement", "Last updated: 09th October, 2026"];

export const agreementSections: AgreementSection[] = [
  {
    "num": "1",
    "title": "About These Terms",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "This Clara AI Subscription Agreement (these \"Terms\") governs Customer's access to and use of the Clara AI services. It is a binding agreement between Actora Inc., a Delaware corporation doing business as Clara AI (\"Clara\", \"we\", \"us\"), and the business identified as the customer on an Order Form (\"Customer\", \"you\")."
      },
      {
        "kind": "paragraph",
        "text": "Each order form, pilot order form or other ordering document signed by both parties that references these Terms (an \"Order Form\") is governed by and incorporates these Terms. Each Order Form, together with these Terms, is the \"Agreement\". If an Order Form conflicts with these Terms, the Order Form controls, but only for that Order Form."
      },
      {
        "kind": "paragraph",
        "text": "Customer accepts these Terms by signing an Order Form that references them or by accessing or using the Services. The person accepting these Terms on Customer's behalf represents that they are authorized to bind Customer. The Services are offered only to businesses, not to consumers for personal, family or household use."
      }
    ]
  },
  {
    "num": "2",
    "title": "Definitions",
    "blocks": [
      {
        "kind": "definition",
        "term": "Agent",
        "text": "means each AI-powered software agent Clara makes available and identifies in an Order Form, such as Clara Answers (inbound call answering and booking), Clara Collections (follow-up on Customer's receivables) and Clara Confirms (appointment and inspection confirmations)."
      },
      {
        "kind": "definition",
        "term": "Services",
        "text": "means the Agents, the Clara platform, dashboards, integrations, documentation, onboarding and support that Clara provides under an Order Form."
      },
      {
        "kind": "definition",
        "term": "Customer Data",
        "text": "means data, content and information that Customer or its end customers provide to the Services or that Clara accesses on Customer's behalf, including customer contact details, job and invoice information, call audio, recordings, transcripts and messages."
      },
      {
        "kind": "definition",
        "term": "Outputs",
        "text": "means calls, messages, transcripts, summaries, bookings and other content the Agents generate in providing the Services."
      },
      {
        "kind": "definition",
        "term": "End Contacts",
        "text": "means the persons the Agents communicate with on Customer's behalf, such as Customer's customers, prospects and debtors."
      },
      {
        "kind": "definition",
        "term": "Customer Systems",
        "text": "means the field-service, CRM, accounting, calendar and other third-party software that Customer uses and connects to the Services."
      },
      {
        "kind": "definition",
        "term": "Pilot",
        "text": "means any free or discounted pilot, trial or evaluation period described in an Order Form."
      },
      {
        "kind": "definition",
        "term": "Subscription Term",
        "text": "means the paid subscription period for an Agent stated in an Order Form, including any renewal."
      }
    ]
  },
  {
    "num": "3",
    "title": "The Services",
    "blocks": [
      {
        "kind": "clause",
        "num": "3.1",
        "label": "Access",
        "text": "Subject to the Agreement, Clara grants Customer a non-exclusive, non-transferable right during the Subscription Term (and any Pilot) to access and use the Services for Customer's internal business purposes."
      },
      {
        "kind": "clause",
        "num": "3.2",
        "label": "Changes",
        "text": "Clara may improve, update or modify the Services from time to time, but will not materially reduce the core functionality of an Agent Customer has subscribed to during its current Subscription Term."
      },
      {
        "kind": "clause",
        "num": "3.3",
        "label": "Integrations",
        "text": "Customer authorizes Clara to access, retrieve and use Customer's data in the Customer Systems that Customer connects, such as customers, jobs, schedules and invoices, to configure and provide the Services. Customer's use of Customer Systems is governed by Customer's agreements with their providers, and Clara is not responsible for their availability or for changes they make that affect an integration."
      },
      {
        "kind": "clause",
        "num": "3.4",
        "label": "Third-party services",
        "text": "The Services rely on third-party providers, including telephony carriers, messaging providers, cloud hosting and AI model providers. Clara is responsible for the providers it engages to deliver the Services, but is not responsible for outages, carrier filtering, message blocking or caller-ID labelling imposed by carriers or other third parties outside Clara's reasonable control."
      },
      {
        "kind": "clause",
        "num": "3.5",
        "label": "Support",
        "text": "Clara provides support by phone and email during standard U.S. business hours and aims to respond to standard requests within one (1) business day. Critical issues receive expedited, best-efforts attention."
      }
    ]
  },
  {
    "num": "4",
    "title": "Pilots",
    "blocks": [
      {
        "kind": "clause",
        "num": "4.1",
        "label": "Pilot terms",
        "text": "If an Order Form includes a Pilot, the Selected Agents are provided free of charge (or at the discount stated) for the Pilot period stated in the Order Form. Usage during a Pilot is subject to reasonable fair-use limits. Clara may throttle or pause usage that materially exceeds normal levels for a business of Customer's size after notifying Customer."
      },
      {
        "kind": "clause",
        "num": "4.2",
        "label": "Automatic conversion",
        "text": "Unless the Order Form says otherwise, at the end of a Pilot each Selected Agent automatically converts to a paid Subscription Term on the terms in the Order Form, unless Customer cancels that Agent by written notice (email is sufficient) to support@justclara.ai before the Pilot ends. Cancellation applies only to the Agent(s) named in the notice. Clara will send Customer a reminder at least 15 days before the Pilot ends."
      },
      {
        "kind": "clause",
        "num": "4.3",
        "label": "Usage review and fee adjustment",
        "text": "During a Pilot, Clara will review each Agent's usage with Customer. If usage is materially higher than the volume covered by the fee in the Order Form, Clara will discuss it with Customer and give written notice of any proposed fee adjustment at least fifteen (15) days before the Pilot ends. Customer may accept the adjustment or cancel the affected Agent before the Pilot ends. No fee adjustment applies to the first Subscription Term without that notice and discussion."
      },
      {
        "kind": "clause",
        "num": "4.4",
        "label": "Pilot disclaimer",
        "text": "During any period in which the Services are provided free of charge, they are provided \"AS IS\", without any warranty or service-level commitment, and Section 14.2 does not apply."
      }
    ]
  },
  {
    "num": "5",
    "title": "Fees, Billing and Taxes",
    "blocks": [
      {
        "kind": "clause",
        "num": "5.1",
        "label": "Fees",
        "text": "Customer will pay the fees stated in each Order Form. Unless the Order Form states otherwise, fees are invoiced quarterly in advance and are due immediately upon invoice issuance. Customer may pay by card, ACH, wire or check. If Customer provides a payment method on file, Customer authorizes Clara to charge it for amounts due."
      },
      {
        "kind": "clause",
        "num": "5.2",
        "label": "Committed fees",
        "text": "Each Subscription Term is a firm commitment for its full length. Except as expressly provided in the Agreement, fees are non-cancellable and non-refundable, and are not reduced for non-use, partial use or early termination."
      },
      {
        "kind": "clause",
        "num": "5.3",
        "label": "Usage",
        "text": "Fees cover the usage volume stated in or contemplated by the Order Form, such as call minutes, active customers or locations. If Customer's usage materially exceeds that volume during a Subscription Term, Clara will notify Customer and the parties will discuss in good faith an adjusted fee or usage limits. No fee increase takes effect until Customer agrees to it in writing; until then, Clara may apply reasonable usage limits."
      },
      {
        "kind": "clause",
        "num": "5.4",
        "label": "Price changes",
        "text": "Fees are fixed for each Subscription Term. Clara may change fees for a renewal term by notifying Customer at least 45 days before that renewal term begins."
      },
      {
        "kind": "clause",
        "num": "5.5",
        "label": "Late payment",
        "text": "Overdue amounts may accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower. If any undisputed amount remains unpaid more than fifteen (15) days after the invoice date, Clara may suspend the Services after giving at least five (5) days' written notice, until all overdue amounts are paid. Suspension does not relieve Customer of its payment obligations."
      },
      {
        "kind": "clause",
        "num": "5.6",
        "label": "Disputes",
        "text": "Customer must notify Clara in writing of any good-faith invoice dispute within fifteen (15) days of the invoice date and pay any undisputed portion when due. The parties will work together in good faith to resolve the dispute."
      },
      {
        "kind": "clause",
        "num": "5.7",
        "label": "Taxes",
        "text": "Fees exclude sales, use, value-added and similar taxes, which Customer will pay, except taxes based on Clara's net income."
      }
    ]
  },
  {
    "num": "6",
    "title": "Term, Renewal and Termination",
    "blocks": [
      {
        "kind": "clause",
        "num": "6.1",
        "label": "Term",
        "text": "The Agreement starts on the Effective Date of the first Order Form and continues until all Order Forms have expired or been terminated."
      },
      {
        "kind": "clause",
        "num": "6.2",
        "label": "Renewal",
        "text": "Unless the Order Form states otherwise, each Subscription Term automatically renews for successive periods equal to the initial Subscription Term, unless either party gives written notice of non-renewal at least thirty (30) days before the current term ends. Clara will send Customer a reminder of the renewal and the notice deadline between fifteen (15) and forty-five (45) days before that deadline."
      },
      {
        "kind": "clause",
        "num": "6.3",
        "label": "Termination for cause",
        "text": "Either party may terminate an Order Form if the other party materially breaches the Agreement and fails to cure the breach within thirty (30) days after receiving written notice of it, or if the other party becomes insolvent, makes an assignment for the benefit of creditors, or becomes subject to bankruptcy or similar proceedings."
      },
      {
        "kind": "clause",
        "num": "6.4",
        "label": "Effect of termination",
        "text": "When an Order Form ends, Customer's access to the affected Services ends. If Clara terminates for Customer's uncured breach, all fees for the remainder of the Subscription Term become due immediately. If Customer terminates for Clara's uncured breach, Clara will refund any prepaid fees covering the period after termination."
      },
      {
        "kind": "clause",
        "num": "6.5",
        "label": "Customer Data after termination",
        "text": "For thirty (30) days after termination, Clara will, on written request, provide a one-time export of Customer Data in a commercially reasonable format. Clara may charge a reasonable fee for custom exports. After that period, Clara may delete Customer Data, subject to legal retention requirements and routine backup cycles."
      },
      {
        "kind": "clause",
        "num": "6.6",
        "label": "Survival",
        "text": "Sections 5 (for amounts owed), 6.4–6.6, 9 and 11 through 19 survive termination."
      }
    ]
  },
  {
    "num": "7",
    "title": "Customer Responsibilities and Communications Compliance",
    "blocks": [
      {
        "kind": "clause",
        "num": "7.1",
        "label": "Responsibility for communications",
        "text": "The Agents place and receive calls and send messages on Customer's behalf and at Customer's direction. Customer is the party initiating these communications and is responsible for them, including for complying with all applicable laws. These include the Telephone Consumer Protection Act (TCPA) and FCC rules (including rules on artificial or AI-generated voice calls), the Telemarketing Sales Rule, state telemarketing and \"mini-TCPA\" laws, do-not-call rules, calling-hour restrictions, CAN-SPAM, and carrier messaging requirements such as A2P 10DLC registration."
      },
      {
        "kind": "clause",
        "num": "7.2",
        "label": "Consents",
        "text": "Customer will obtain and keep records of all consents required for the Agents to contact End Contacts, including prior express (written, where required) consent for calls using artificial or AI-generated voices and for text messages. Customer will promptly honor opt-out and do-not-call requests and will not upload numbers that Customer lacks the right to contact."
      },
      {
        "kind": "clause",
        "num": "7.3",
        "label": "Call recording",
        "text": "Where the Services record or transcribe calls, Customer is responsible for providing any notice and obtaining any consent required by law, including in states that require all parties to consent. Clara can configure a recording disclosure at Customer's request."
      },
      {
        "kind": "clause",
        "num": "7.4",
        "label": "Collections",
        "text": "Clara Collections is intended only for Customer's collection of its own receivables. Customer will not use it for third-party debt collection or debt purchasing. Customer is responsible for compliance with applicable debt-collection and consumer-protection laws, including the content of any collection messages it approves, and must have a lawful basis for amounts it asks the Agent to collect."
      },
      {
        "kind": "clause",
        "num": "7.5",
        "label": "Configuration and approvals",
        "text": "Customer will provide accurate information, business rules, scripts and contact data, and is responsible for reviewing and approving Agent configurations, scripts and escalation rules before go-live. Customer will designate a named contact for onboarding."
      },
      {
        "kind": "clause",
        "num": "7.6",
        "label": "Accounts",
        "text": "Customer is responsible for its users, their credentials and all activity under its account, and will notify Clara promptly of any unauthorized use."
      }
    ]
  },
  {
    "num": "8",
    "title": "Acceptable Use",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Customer will not, and will not permit anyone to: (a) reverse engineer, decompile or attempt to access the source code or underlying models of the Services, except as permitted by law; (b) resell, sublicense, rent or provide the Services to third parties; (c) use the Services to build a competing product; (d) use the Services for unlawful, deceptive, harassing or fraudulent communications, or to impersonate any person; (e) upload malicious code or interfere with or disrupt the Services; (f) use the Services in violation of law, carrier policies, or the usage policies of Clara's AI model providers that Clara makes available; or (g) circumvent usage limits or security controls. Clara may suspend any Agent or communication that Clara reasonably believes violates this Section or poses a legal or security risk, and will notify Customer promptly."
      }
    ]
  },
  {
    "num": "9",
    "title": "AI Services and Outputs",
    "blocks": [
      {
        "kind": "clause",
        "num": "9.1",
        "label": "Nature of the Agents",
        "text": "The Agents use artificial intelligence, which can produce inaccurate, incomplete or unexpected Outputs. The Agents assist with routine operational tasks; they do not replace human judgment. Customer is responsible for overseeing the Agents, reviewing Outputs where appropriate, and making final decisions on bookings, pricing, collections and customer commitments."
      },
      {
        "kind": "clause",
        "num": "9.2",
        "label": "Not an emergency service",
        "text": "The Agents are not an emergency service, an alarm-monitoring service, or a life-safety system. They must not be relied on to detect, dispatch, escalate or respond to emergencies, including fire, alarm, sprinkler or other life-safety events. Customer must maintain its own procedures for emergencies and direct callers with emergencies to 911 or the appropriate monitoring service."
      },
      {
        "kind": "clause",
        "num": "9.3",
        "label": "Outputs",
        "text": "As between the parties, Customer owns the Outputs generated for it, subject to Clara's rights in the Services. Outputs may be similar to outputs generated for other customers."
      },
      {
        "kind": "clause",
        "num": "9.4",
        "label": "Clara's responsibility",
        "text": "Clara will use commercially reasonable efforts to configure the Agents according to Customer's approved instructions. Subject to Sections 15 and 16, Clara is not liable for the acts or omissions of the Agents, including miscommunication, incorrect information, failed or delayed escalation, or incomplete or delayed task execution, except to the extent caused by Clara's breach of the Agreement."
      }
    ]
  },
  {
    "num": "10",
    "title": "Customer Data, Privacy and Security",
    "blocks": [
      {
        "kind": "clause",
        "num": "10.1",
        "label": "Ownership",
        "text": "As between the parties, Customer owns Customer Data. Customer grants Clara a non-exclusive, worldwide license to host, process, transmit and use Customer Data to provide, support, secure and improve the Services and as otherwise permitted by the Agreement."
      },
      {
        "kind": "clause",
        "num": "10.2",
        "label": "Aggregated data",
        "text": "Clara may create and use de-identified or aggregated data derived from the use of the Services, which does not identify Customer or any individual, to operate, analyze and improve its products and for benchmarking. Clara will not disclose Customer Data to third parties except as needed to provide the Services, as permitted by the Agreement, or as required by law."
      },
      {
        "kind": "clause",
        "num": "10.3",
        "label": "Security",
        "text": "Clara will maintain commercially reasonable administrative, technical and physical safeguards designed to protect Customer Data against unauthorized access, use or disclosure. Clara will notify Customer without undue delay after becoming aware of a security breach affecting Customer Data."
      },
      {
        "kind": "clause",
        "num": "10.4",
        "label": "Customer obligations",
        "text": "Customer represents that it has all rights, notices and consents needed for Clara to process Customer Data as described in the Agreement, including personal information about End Contacts. Customer will not provide payment card numbers, Social Security numbers, health information or similar sensitive data unless the Order Form expressly provides for it."
      },
      {
        "kind": "clause",
        "num": "10.5",
        "label": "Privacy policy",
        "text": "Clara's handling of personal information is also described in its Privacy Policy at https://justclara.ai/privacy."
      }
    ]
  },
  {
    "num": "11",
    "title": "Intellectual Property and Feedback",
    "blocks": [
      {
        "kind": "clause",
        "num": "11.1",
        "label": "Clara IP",
        "text": "Clara and its licensors own all rights, title and interest in and to the Services, including software, models, prompts, workflows, documentation and all improvements. No rights are granted except as expressly stated in the Agreement."
      },
      {
        "kind": "clause",
        "num": "11.2",
        "label": "Feedback",
        "text": "If Customer provides suggestions or feedback, Clara may use them without restriction or obligation."
      }
    ]
  },
  {
    "num": "12",
    "title": "Confidentiality",
    "blocks": [
      {
        "kind": "clause",
        "num": "12.1",
        "label": "Obligations",
        "text": "Each party will use the other party's non-public information that is marked or reasonably understood to be confidential (\"Confidential Information\") only to perform under the Agreement, and will protect it with at least reasonable care. It may disclose Confidential Information only to its and its affiliates' employees, contractors and advisors who need to know it and are bound by confidentiality obligations at least as protective as these. Clara's pricing and the terms of each Order Form are Clara's Confidential Information."
      },
      {
        "kind": "clause",
        "num": "12.2",
        "label": "Exclusions",
        "text": "Confidential Information does not include information that is or becomes public through no fault of the recipient, was known to the recipient without restriction, is independently developed, or is rightfully received from a third party without a duty of confidentiality. A party may disclose Confidential Information when legally required, after giving reasonable notice where permitted."
      },
      {
        "kind": "clause",
        "num": "12.3",
        "label": "Duration",
        "text": "These obligations continue for three (3) years after the Agreement ends, and for trade secrets, for as long as they remain trade secrets."
      }
    ]
  },
  {
    "num": "13",
    "title": "Publicity",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Clara may identify Customer by name and logo as a customer on its website, in marketing materials and in investor and partner communications. Customer may withdraw this permission at any time by emailing support@justclara.ai. Any case study, testimonial or press release requires Customer's prior approval."
      }
    ]
  },
  {
    "num": "14",
    "title": "Warranties and Disclaimers",
    "blocks": [
      {
        "kind": "clause",
        "num": "14.1",
        "label": "Mutual",
        "text": "Each party represents that it has the authority to enter into the Agreement."
      },
      {
        "kind": "clause",
        "num": "14.2",
        "label": "Clara",
        "text": "During a paid Subscription Term, Clara warrants that the Services will perform materially as described in Clara's applicable documentation. Customer's exclusive remedy for breach of this warranty is for Clara to use commercially reasonable efforts to correct the non-conformity. If Clara cannot do so within thirty (30) days of Customer's written notice, either party may terminate the affected Agent and Clara will refund prepaid fees for that Agent covering the period after termination."
      },
      {
        "kind": "clause",
        "num": "14.3",
        "label": "Disclaimer",
        "text": "EXCEPT AS EXPRESSLY STATED IN THE AGREEMENT, THE SERVICES AND OUTPUTS ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\", AND CLARA DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. CLARA DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT OUTPUTS WILL BE ACCURATE, OR THAT USE OF THE SERVICES WILL ACHIEVE ANY PARTICULAR BUSINESS RESULT."
      }
    ]
  },
  {
    "num": "15",
    "title": "Indemnification",
    "blocks": [
      {
        "kind": "clause",
        "num": "15.1",
        "label": "By Clara",
        "text": "Clara will defend Customer against any third-party claim alleging that the Services, as provided by Clara and used in accordance with the Agreement, infringe that third party's U.S. patent, copyright or trademark or misappropriate its trade secret. Clara will pay damages and costs finally awarded against Customer, or agreed by Clara in settlement, in connection with that claim. Clara has no obligation for claims arising from Customer Data, Customer's instructions or scripts, combination with items Clara did not provide, or modifications Clara did not make. If the Services are or may become subject to such a claim, Clara may procure the right for Customer to continue using them, modify them to be non-infringing, or terminate the affected Services and refund prepaid fees for the period after termination. This Section states Clara's entire liability for infringement claims."
      },
      {
        "kind": "clause",
        "num": "15.2",
        "label": "By Customer",
        "text": "Customer will defend Clara and its affiliates against any third-party claim, and any regulatory action, arising from (a) Customer Data, or Customer's lack of rights or consents for it; (b) communications made by the Agents on Customer's behalf, including claims under the TCPA, do-not-call, call-recording, debt-collection or similar laws, except to the extent caused by Clara's failure to follow Customer's approved configuration; or (c) Customer's breach of Sections 7 or 8. Customer will pay damages, fines, penalties and costs finally awarded or agreed in settlement in connection with those claims."
      },
      {
        "kind": "clause",
        "num": "15.3",
        "label": "Process",
        "text": "The indemnified party will notify the indemnifying party promptly of the claim, give it sole control of the defense and settlement (provided that no settlement may impose non-monetary obligations on the indemnified party without its consent), and provide reasonable cooperation at the indemnifying party's expense."
      }
    ]
  },
  {
    "num": "16",
    "title": "Limitation of Liability",
    "blocks": [
      {
        "kind": "clause",
        "num": "16.1",
        "label": "Exclusion of damages",
        "text": "EXCEPT FOR EXCLUDED CLAIMS, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, BUSINESS OR DATA, EVEN IF ADVISED OF THEIR POSSIBILITY."
      },
      {
        "kind": "clause",
        "num": "16.2",
        "label": "Cap",
        "text": "EXCEPT FOR EXCLUDED CLAIMS, EACH PARTY'S TOTAL LIABILITY ARISING OUT OF OR RELATING TO THE AGREEMENT WILL NOT EXCEED THE FEES PAID AND PAYABLE BY CUSTOMER UNDER THE AGREEMENT IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE LIABILITY. FOR ANY CLAIM ARISING DURING A FREE PILOT, CLARA'S TOTAL LIABILITY WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US$100)."
      },
      {
        "kind": "clause",
        "num": "16.3",
        "label": "Excluded Claims",
        "text": "\"Excluded Claims\" means (a) Customer's obligations to pay fees; (b) Customer's obligations under Section 15.2; (c) a party's breach of Section 12 (excluding breaches relating to Customer Data, which are subject to Section 16.2); and (d) a party's gross negligence, fraud or willful misconduct. Clara's total liability under Section 15.1 will not exceed two times (2x) the cap in Section 16.2."
      },
      {
        "kind": "clause",
        "num": "16.4",
        "text": "These limitations apply to the fullest extent permitted by law, regardless of the theory of liability, and are an essential basis of the bargain between the parties."
      }
    ]
  },
  {
    "num": "17",
    "title": "Governing Law and Disputes",
    "blocks": [
      {
        "kind": "clause",
        "num": "17.1",
        "label": "Governing law",
        "text": "The Agreement is governed by the laws of the State of California, without regard to its conflict-of-law rules."
      },
      {
        "kind": "clause",
        "num": "17.2",
        "label": "Arbitration",
        "text": "The parties will first try to resolve any dispute through good-faith negotiation between senior representatives for thirty (30) days. Any dispute that remains unresolved will be finally resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, before a single arbitrator in San Francisco, California. Judgment on the award may be entered in any court of competent jurisdiction. Claims may be brought only in a party's individual capacity and not as a class or representative action."
      },
      {
        "kind": "clause",
        "num": "17.3",
        "label": "Exceptions",
        "text": "Either party may seek injunctive or other equitable relief in a court of competent jurisdiction to protect its intellectual property or Confidential Information, and Clara may bring an action to collect unpaid fees in the state or federal courts located in San Francisco County, California, to whose jurisdiction the parties consent."
      }
    ]
  },
  {
    "num": "18",
    "title": "Changes to These Terms",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Clara may update these Terms from time to time by posting a new version at https://justclara.ai/user-licence-agreement with a new \"Last updated\" date. The version in effect on an Order Form's Effective Date applies to that Order Form for its current Subscription Term (including any Pilot). An updated version applies on the next renewal, provided Clara has notified Customer at least thirty (30) days before that renewal. Changes required by law, or that do not materially reduce Customer's rights, may take effect upon posting. Clara will keep prior versions available on request."
      }
    ]
  },
  {
    "num": "19",
    "title": "General",
    "blocks": [
      {
        "kind": "clause",
        "num": "19.1",
        "label": "Notices",
        "text": "Legal notices must be in writing and sent by email or by courier to the addresses in the Order Form. Notices to Clara must go to support@justclara.ai with a copy to billing@justclara.ai, or by courier to Actora Inc. (d/b/a Clara AI), 299 Fremont Street, TH313, San Francisco, CA 94105, USA. Email notices are effective on the business day after sending."
      },
      {
        "kind": "clause",
        "num": "19.2",
        "label": "Assignment",
        "text": "Neither party may assign the Agreement without the other's prior written consent, except that either party may assign it, without consent, to an affiliate or to a successor in a merger, acquisition or sale of all or substantially all of the relevant business or assets. Clara may use subcontractors and remains responsible for their performance."
      },
      {
        "kind": "clause",
        "num": "19.3",
        "label": "Force majeure",
        "text": "Neither party is liable for delay or failure to perform (other than payment obligations) caused by events beyond its reasonable control, including natural disasters, war, labor actions, government action, internet, telecommunications or carrier failures, or failures of third-party hosting or AI providers."
      },
      {
        "kind": "clause",
        "num": "19.4",
        "label": "Relationship",
        "text": "The parties are independent contractors. Nothing in the Agreement creates a partnership, joint venture, agency or employment relationship."
      },
      {
        "kind": "clause",
        "num": "19.5",
        "label": "Electronic signatures",
        "text": "Order Forms may be signed electronically (including through DocuSign) and in counterparts, and electronic signatures are binding."
      },
      {
        "kind": "clause",
        "num": "19.6",
        "label": "Entire agreement",
        "text": "The Agreement is the parties' entire agreement on its subject matter and supersedes all prior agreements and understandings. Terms in any Customer purchase order or vendor portal do not apply, even if accepted or signed. A waiver is effective only in writing, and failure to enforce a provision is not a waiver. If any provision is held unenforceable, it will be enforced to the maximum extent permitted and the rest of the Agreement remains in effect."
      },
      {
        "kind": "clause",
        "num": "19.7",
        "label": "Export and sanctions",
        "text": "Customer will comply with applicable U.S. export-control and sanctions laws in its use of the Services."
      }
    ]
  }
];
