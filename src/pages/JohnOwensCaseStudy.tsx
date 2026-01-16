import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { openHubSpotForm } from '@/utils/hubspotForm';
import { ArrowRight, CheckCircle2, XCircle, Play, Star, TrendingUp, Clock, Phone, Database, Quote, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function JohnOwensCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>John Owens Services Case Study | Clara AI</title>
        <meta name="description" content="How John Owens Services unlocked $31,000 in monthly revenue with Clara AI." />
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header Section */}
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Back Link */}
          <Link to="/case-studies" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-12 text-sm font-medium">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Case Studies
          </Link>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-20">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#D32F2F] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  +29% Bookings
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  HVAC & Plumbing
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                John Owens Services
              </h1>

              {/* Metadata */}
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8 w-fit">
                <div>
                  Location: <span className="text-gray-900 font-bold ml-1">California</span>
                </div>
                <div>
                  Timeframe: <span className="text-gray-900 font-bold ml-1">30 days with Clara</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                John Owens Services is a dual-trade operation serving residential HVAC and plumbing customers across California. Known for quality workmanship and honest pricing, they had built a reputation over 15 years. But their phone system was becoming their biggest liability. This case matters because it shows what happens when a growing service business finally stops losing jobs to voicemail.
              </p>
            </div>

            {/* Right Card */}
            <div className="flex-1 w-full lg:max-w-xl">
              <div className="bg-[#FFF5F5] rounded-[32px] p-12 text-center h-full flex flex-col justify-center items-center border border-red-50">
                <div className="text-6xl md:text-7xl font-bold text-[#D32F2F] mb-4 tracking-tighter">$31,000</div>
                <div className="text-lg font-bold text-gray-900">additional revenue in 30 days</div>
              </div>
            </div>
          </div>

          {/* Hidden Cost Section (Insight) */}
          <div className="max-w-3xl mx-auto mb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#D32F2F] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.5.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg></span>
              Insight
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              The Hidden Cost of Missed Calls in Home Services
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                HVAC and plumbing companies live and die by call volume. When a homeowner has a burst pipe at 2 AM or an AC unit that fails on the hottest day of summer, they are not leaving a voicemail and waiting. They are calling the next company on the list. John Owens Services was losing these moments every single day.
              </p>
              <p>
                Most service businesses underestimate how many calls they actually miss. They assume voicemails get returned, that customers wait, that after-hours calls are not that urgent. The reality is different. A missed call is a lost job, and a lost job is a customer who now knows your competitor.
              </p>
              <p>
                Without answering every call, businesses cannot track what they are losing. They see the booked jobs but never the ones that slipped away. Owners convince themselves the problem is marketing when the real problem is a phone that rings five times and goes to voicemail.
              </p>
            </div>
          </div>

          {/* Before Clara */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Before Clara</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Row 1 */}
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Call Handling</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Calls went to a shared office line answered by whoever was available. After 6 PM, everything went to voicemail. On weekends, the owner tried to answer personally but often could not. Emergency calls at night were almost always missed.
                </p>
              </div>

              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Staffing Limitations</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Two office staff handled dispatch, billing, customer questions, and incoming calls. During busy seasons, they were underwater. Hiring another person seemed necessary, but training someone to handle HVAC and plumbing inquiries takes months.
                </p>
              </div>

              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Customer Gaps</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Customers who called after hours had no way to reach anyone. Those who left voicemails often called a competitor before their message was returned the next morning. Repeat customers felt like they could not get through when it mattered most.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 2 */}
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Missed Revenue</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  The company estimated 30% of after-hours calls were emergencies worth $500 or more. Over a month, that added up to tens of thousands in lost jobs. The worst part was not knowing exactly how much was being lost.
                </p>
              </div>

              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Emotional & Operational Stress</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  The owner felt chained to the phone. Every vacation meant checking voicemails. Every night meant worrying about what calls were missed. The team felt overwhelmed, and customers were starting to notice.
                </p>
              </div>
            </div>
          </div>

          {/* After Clara */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">After Clara</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-green-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">How Calls Are Handled Now</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Every call is now answered within two rings, 24 hours a day. Clara gathers customer details, identifies the service need, checks technician availability, and either books the job immediately or creates a prioritized callback with full context.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-green-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Data Flow</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Call summaries and transcripts flow directly into their CRM. Dispatchers wake up to organized lists of overnight bookings and callbacks, not a voicemail inbox. Every interaction is documented and searchable.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-green-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Team Interaction</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Office staff now focus on dispatch optimization and customer follow-up instead of answering phones. They review Clara transcripts to spot patterns and improve service scripts. The owner checks morning reports instead of listening to voicemails.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-green-50 h-full">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Customer Experience</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Customers get immediate help regardless of when they call. Emergency callers are prioritized and scheduled. Repeat customers are recognized and greeted by name. The experience feels professional and reliable.
                </p>
              </div>
            </div>

            {/* Clara Agents Used */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Clara Agents Used:</span>
              <span className="bg-[#D32F2F] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                Clara Answers
              </span>
            </div>
          </div>

          {/* At a Glance Impact */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">At a Glance Impact</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 text-center h-full flex flex-col justify-center">
                <div className="text-5xl font-bold text-[#D32F2F] mb-2">100%</div>
                <div className="text-gray-900 font-bold mb-1">Call Answer Rate</div>
                <div className="text-gray-500 text-xs">Up from 68%</div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 text-center h-full flex flex-col justify-center">
                <div className="text-5xl font-bold text-[#D32F2F] mb-2">$31,000</div>
                <div className="text-gray-900 font-bold mb-1">New Revenue</div>
                <div className="text-gray-500 text-xs">First 30 days</div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 text-center h-full flex flex-col justify-center">
                <div className="text-5xl font-bold text-[#D32F2F] mb-2">+29%</div>
                <div className="text-gray-900 font-bold mb-1">Booking Increase</div>
                <div className="text-gray-500 text-xs">Month over month</div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-50 text-center h-full flex flex-col justify-center">
                <div className="text-5xl font-bold text-[#D32F2F] mb-2">24/7</div>
                <div className="text-gray-900 font-bold mb-1">Availability</div>
                <div className="text-gray-500 text-xs">Previously 8 AM to 6 PM</div>
              </div>
            </div>
          </div>

          {/* How Clara Was Deployed */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">How Clara Was Deployed</h3>
            </div>

            <div className="space-y-8">
              {/* Week 1 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="shrink-0 flex items-start justify-center pt-2">
                  <div className="w-12 h-12 rounded-full bg-[#D32F2F] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-red-200">
                    1
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1">
                  <div className="text-sm font-bold text-[#D32F2F] mb-2 uppercase tracking-wide">Week 1</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Discovery and Configuration</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Mapped all HVAC and plumbing service types, documented pricing structures, defined emergency vs. routine call protocols, and connected their CRM for seamless data flow.
                  </p>
                  <div className="bg-[#FFF5F5] p-6 rounded-xl border-l-4 border-[#D32F2F]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-[#D32F2F]">Why This Mattered:</strong> Getting the foundation right meant Clara could speak knowledgeably about every service from day one. No generic scripts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="shrink-0 flex items-start justify-center pt-2">
                  <div className="w-12 h-12 rounded-full bg-[#D32F2F] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-red-200">
                    2
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1">
                  <div className="text-sm font-bold text-[#D32F2F] mb-2 uppercase tracking-wide">Week 2</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Script Training and Refinement</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Trained Clara on trade-specific terminology, common customer questions, booking logic, and escalation triggers. Tested with real call scenarios provided by the team.
                  </p>
                  <div className="bg-[#FFF5F5] p-6 rounded-xl border-l-4 border-[#D32F2F]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-[#D32F2F]">Why This Mattered:</strong> A homeowner calling about a water heater expects different questions than one calling about AC repair. Clara needed to know the difference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="shrink-0 flex items-start justify-center pt-2">
                  <div className="w-12 h-12 rounded-full bg-[#D32F2F] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-red-200">
                    3
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1">
                  <div className="text-sm font-bold text-[#D32F2F] mb-2 uppercase tracking-wide">Week 3</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Soft Launch with Overflow</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Clara answered calls only when the office was busy or after hours. The team reviewed every transcript and provided feedback to refine responses.
                  </p>
                  <div className="bg-[#FFF5F5] p-6 rounded-xl border-l-4 border-[#D32F2F]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-[#D32F2F]">Why This Mattered:</strong> This phase built trust. The team saw Clara handling calls correctly before handing over primary responsibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Week 4 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="shrink-0 flex items-start justify-center pt-2">
                  <div className="w-12 h-12 rounded-full bg-[#D32F2F] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-red-200">
                    4
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1">
                  <div className="text-sm font-bold text-[#D32F2F] mb-2 uppercase tracking-wide">Week 4</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Full 24/7 Deployment</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Clara became the primary answering system. Office staff shifted to dispatch and customer success. After-hours bookings started flowing immediately.
                  </p>
                  <div className="bg-[#FFF5F5] p-6 rounded-xl border-l-4 border-[#D32F2F]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-[#D32F2F]">Why This Mattered:</strong> Within days, the owner saw bookings from 11 PM and 6 AM calls that would have been voicemails. Revenue appeared that had previously been invisible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Hear Their Story */}
          <div className="mb-24">
            <div className="flex flex-col items-start gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Hear Their Story</h3>
              </div>
              <p className="text-gray-600 max-w-2xl">
                Watch how John Owens Services transformed their operations with Clara AI and hear directly from the team about the impact on their business.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-black aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PVdznLToSXA?si=8Yf6Yf6Yf6Yf6Yf6"
                title="Clara AI Case Study - John Owens Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* In Their Words */}
          <div className="mb-24 bg-[#FFF5F5] rounded-[32px] p-12 md:p-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">In Their Words</h3>
            </div>

            <div className="space-y-6 max-w-4xl">
              {/* Card 1 */}
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-red-50">
                <Quote className="w-8 h-8 text-[#D32F2F] mb-6 fill-current opacity-20" />
                <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                  "I used to wake up dreading the voicemail inbox. Now I wake up to a report of jobs already booked. Clara did not just answer phones. Clara changed how we operate."
                </p>
                <div>
                  <div className="font-bold text-gray-900">John Owens</div>
                  <div className="text-sm text-gray-500">Owner, John Owens Services</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-red-50">
                <Quote className="w-8 h-8 text-[#D32F2F] mb-6 fill-current opacity-20" />
                <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                  "Customers tell us they appreciate getting a real response at 10 PM instead of a voicemail. That is what sets us apart now."
                </p>
                <div>
                  <div className="font-bold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Office Manager</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Other Businesses Can Learn */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">What Other Businesses Can Learn</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Voicemail is a silent revenue killer",
                  desc: "Every voicemail represents a customer who wanted to buy and could not. In home services, urgency drives decisions. If you are not available when they call, someone else is."
                },
                {
                  title: "After-hours calls are worth more than you think",
                  desc: "Emergency calls carry higher ticket values and more urgency. These customers are ready to book immediately. Losing them to voicemail means losing premium jobs."
                },
                {
                  title: "Staff do not need to answer every call to deliver great service",
                  desc: "Office teams provide more value doing dispatch, follow-up, and relationship management than playing phone tag. AI handles the repetitive intake so humans can focus on what matters."
                },
                {
                  title: "Data visibility changes operations",
                  desc: "When every call is transcribed and logged, patterns emerge. You see which marketing is working, what customers are asking, and where you are losing opportunities."
                },
                {
                  title: "Speed to answer is speed to revenue",
                  desc: "Answering in two rings instead of six, or immediately instead of next morning, directly impacts how many jobs you book. Speed is not just service. Speed is sales."
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Case Studies */}
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Related Case Studies</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="bg-[#D32F2F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    +225 Leads Captured
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    HVAC
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#D32F2F] transition-colors">Apex Residential Solutions</h4>
                <p className="text-gray-500 text-sm mb-6">Texas</p>
                <div>
                  <div className="text-3xl font-bold text-[#D32F2F] mb-1">835</div>
                  <div className="text-sm text-gray-600">calls handled with 27% lead rate</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="bg-[#D32F2F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    20 Hours Saved Weekly
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    HVAC
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#D32F2F] transition-colors">HVAC Proz</h4>
                <p className="text-gray-500 text-sm mb-6">Florida</p>
                <div>
                  <div className="text-3xl font-bold text-[#D32F2F] mb-1">85%</div>
                  <div className="text-sm text-gray-600">of calls handled by AI</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="bg-[#D32F2F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    24/7 Coverage
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Electrical
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#D32F2F] transition-colors">Noor Electrical Services</h4>
                <p className="text-gray-500 text-sm mb-6">Arizona</p>
                <div>
                  <div className="text-3xl font-bold text-[#D32F2F] mb-1">92%</div>
                  <div className="text-sm text-gray-600">of after-hours calls converted</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to transform how your business handles calls and customers?
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Join John Owens Services and hundreds of others growing with Clara.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="h-14 px-8 text-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full font-semibold px-8"
                  onClick={openHubSpotForm}
                >
                  Book a Growth Demo
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full font-semibold"
                  asChild
                >
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}