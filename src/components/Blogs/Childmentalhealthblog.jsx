import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  HeartHandshake,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import childMentalHealth from "../../assets/child.jpg";

function BlogPage({ blogData }) {
  return (
    <div className="w-full bg-[#f4f6fb] py-8 md:py-12 px-4 sm:px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* ================= HEADER ================= */}
        <div className="p-6 md:p-10 pb-6">

          {/* Date */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4a1263]" />
            <span className="text-sm text-[#4a1263] font-semibold">
              {blogData?.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#16233B] leading-tight">
            {blogData?.title}
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            {blogData?.description}
          </p>

          {/* Tags */}
          {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {blogData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f3e9f9] text-[#4a1263] px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ================= IMAGE ================= */}
        <div className="px-6 md:px-10">
          <img
            src={blogData?.image}
            alt={blogData?.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* ================= ARTICLE ================= */}
        <article className="p-6 md:p-10 pt-8">

          {/* Main Content */}
          {blogData?.text1 && (
            <div
              className="text-gray-700 text-[15px] md:text-base leading-8
              [&_h2]:text-[#16233B]
              [&_h2]:font-extrabold
              [&_h2]:text-2xl
              [&_h2]:md:text-[28px]
              [&_h2]:leading-tight
              [&_h2]:mt-12
              [&_h2]:mb-5
              [&_h3]:text-[#16233B]
              [&_h3]:font-bold
              [&_h3]:text-lg
              [&_p]:mb-5
              [&_strong]:text-[#16233B]
              [&_ul]:my-5
              [&_ol]:my-5
              [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: blogData.text1 }}
            />
          )}

          {/* ================= HIGHLIGHT BOX ================= */}
          {blogData?.crux && (
            <div
              className="mt-10"
              dangerouslySetInnerHTML={{ __html: blogData.crux }}
            />
          )}

          {/* ================= HOOK SECTION ================= */}
          {blogData?.hookTitle && (
            <section className="mt-12">

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#f3e9f9] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#4a1263]" />
                </div>

                <h2 className="text-2xl md:text-[28px] font-extrabold text-[#16233B]">
                  {blogData.hookTitle}
                </h2>
              </div>

              {blogData?.hookText && (
                <div
                  className="text-gray-700 text-[15px] md:text-base leading-8"
                  dangerouslySetInnerHTML={{
                    __html: blogData.hookText,
                  }}
                />
              )}
            </section>
          )}

          {/* ================= KEY POINTS ================= */}
          {Array.isArray(blogData?.keyPoints) &&
            blogData.keyPoints.length > 0 && (
              <section className="mt-12">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f3e9f9] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#4a1263]" />
                  </div>

                  <h2 className="text-2xl md:text-[28px] font-extrabold text-[#16233B]">
                    Key Points
                  </h2>
                </div>

                <div className="grid gap-3">
                  {blogData.keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 md:p-5 bg-[#faf9fc] border border-[#ebe5ef] rounded-2xl transition-all duration-300 hover:border-[#cdb4d8] hover:-translate-y-0.5"
                    >
                      <div className="shrink-0 w-7 h-7 rounded-full bg-[#4a1263] flex items-center justify-center mt-0.5">
                        <CheckCircle2
                          className="w-4 h-4 text-white"
                          strokeWidth={2}
                        />
                      </div>

                      <div
                        className="text-gray-700 text-sm md:text-[15px] leading-7"
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* ================= FAQ ================= */}
          {Array.isArray(blogData?.faqs) &&
            blogData.faqs.length > 0 && (
              <section className="mt-12">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f3e9f9] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#4a1263]" />
                  </div>

                  <h2 className="text-2xl md:text-[28px] font-extrabold text-[#16233B]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {blogData.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-[#e5e7eb] rounded-2xl p-5 md:p-6 bg-white hover:bg-[#fcfbfd] transition-colors"
                    >
                      <h3 className="text-[15px] md:text-base font-bold text-[#16233B]">
                        {faq.question}
                      </h3>

                      <p className="mt-2 text-sm md:text-[15px] text-gray-600 leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* ================= CONCLUSION ================= */}
          {blogData?.conclusion && (
            <div
              className="mt-12"
              dangerouslySetInnerHTML={{
                __html: blogData.conclusion,
              }}
            />
          )}

          {/* ================= CONTACT CTA ================= */}
          <div className="relative overflow-hidden mt-12 rounded-3xl bg-[#4a1263] p-7 md:p-9">

            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-16 w-44 h-44 rounded-full bg-white/5" />

            {/* Small decorative dot */}
            <div className="absolute top-8 right-24 w-3 h-3 rounded-full bg-white/20" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

              {/* CTA Content */}
              <div className="max-w-xl">

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <HeartHandshake
                      className="w-5 h-5 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="text-white/70 text-xs font-semibold tracking-[0.16em] uppercase">
                    Professional Support
                  </span>
                </div>

                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3">
                  Your child doesn't have to struggle in silence.
                </h3>

                <p className="text-white/75 text-sm md:text-[15px] leading-relaxed">
                  If you're concerned about your child's emotional wellbeing,
                  Dr. Archana Singh, Psychiatrist, offers a calm,
                  judgment-free space for children and parents to work
                  through challenges together.
                </p>
              </div>

              {/* CTA Button */}
              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-white text-[#4a1263] px-6 py-3.5 rounded-full font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Talk to Us

                  <span className="w-7 h-7 rounded-full bg-[#f3e9f9] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

            </div>
          </div>

          {/* ================= TRUST NOTE ================= */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-[#4a1263]" />
            Confidential and judgment-free support
          </div>

        </article>
      </div>
    </div>
  );
}

export default function ChildMentalHealthBlog() {
  const blogData = {
    title: "How to Talk to Your Child About Their Mental Health",

    description:
      "A practical, step-by-step guide for parents — how to recognize the signs, start the conversation, avoid common mistakes, and know when it's time to bring in a child psychiatrist.",

    date: "2026-09-02",

    image: childMentalHealth,

    link: "/blog/talk-to-child-about-mental-health",

    tags: [
      "Child Mental Health",
      "Parenting",
      "Adolescent Psychiatry",
      "Family Support",
      "Mental Wellness",
      "Psychiatry",
    ],

    text1: `
      <p>
        Every parent wants their child to feel safe, understood and heard.
        But when it comes to mental health, many parents freeze up — not
        because they don't care, but because they don't know where to start.
        Should you bring it up directly? Wait for the child to open up? Use
        simple words or clinical ones?
      </p>

      <p>
        Children and teenagers often don't have the vocabulary to describe
        what they're feeling. A child who is anxious might say "my stomach
        hurts" before school. A teenager who is depressed might say they're
        "just tired" all the time. If parents don't create space for these
        conversations early, kids learn to hide their struggles instead of
        sharing them.
      </p>

      <h2>Why This Conversation Matters</h2>

      <p>Talking openly about mental health does three important things:</p>

      <ul style="padding-left:1.4rem;">
        <li>It normalizes emotions instead of labeling them as "good" or "bad."</li>
        <li>It teaches children that asking for help is a sign of strength, not weakness.</li>
        <li>It builds a foundation of trust that makes future, harder conversations easier.</li>
      </ul>

      <h2>Signs Your Child Might Be Struggling</h2>

      <p>
        Before starting the conversation, it helps to recognize the signs.
        These can vary by age, but common patterns include:
      </p>

      <div style="
        border:1px solid #e5e7eb;
        border-radius:16px;
        overflow:hidden;
        margin:24px 0;
      ">
        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong style="color:#4a1263;">Sleep & Appetite</strong>
          <p style="margin:6px 0 0;">Sudden changes in sleep patterns or eating habits</p>
        </div>
        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong style="color:#4a1263;">Withdrawal</strong>
          <p style="margin:6px 0 0;">Pulling away from friends, family, or activities they used to enjoy</p>
        </div>
        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong style="color:#4a1263;">Academics</strong>
          <p style="margin:6px 0 0;">A noticeable drop in performance or motivation at school</p>
        </div>
        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong style="color:#4a1263;">Mood</strong>
          <p style="margin:6px 0 0;">Increased irritability, anger, or frequent tearfulness</p>
        </div>
        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong style="color:#4a1263;">Physical Complaints</strong>
          <p style="margin:6px 0 0;">Frequent headaches or stomachaches with no medical cause</p>
        </div>
        <div style="padding:18px 20px;">
          <strong style="color:#4a1263;">Speech</strong>
          <p style="margin:6px 0 0;">Talking about feeling worthless, hopeless, or "not wanting to be here"</p>
        </div>
      </div>

      <div style="
        background:#fff4f4;
        border-left:4px solid #d64545;
        padding:16px 20px;
        border-radius:12px;
        margin:24px 0;
      ">
        <strong style="color:#b02a2a;">Important:</strong>
        If your child talks about self-harm or not wanting to live, treat it
        as urgent. Stay calm, listen without judgment, and reach out to a
        mental health professional immediately.
      </div>

      <h2>Common Problems Parents Face — and Practical Solutions</h2>

      <table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:0.95rem;">
        <thead>
          <tr style="background:#4a1263;color:#fff;">
            <th style="padding:12px 14px;text-align:left;">Problem</th>
            <th style="padding:12px 14px;text-align:left;">Why It Happens</th>
            <th style="padding:12px 14px;text-align:left;">Practical Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Child refuses to talk or says "I'm fine"</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Fear of being judged or not understood</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Talk side-by-side (a walk or car ride) instead of face-to-face; it lowers pressure.</td>
          </tr>
          <tr>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Parent doesn't know the right words</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Mental health wasn't discussed openly growing up</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Use simple, age-appropriate language: "It's okay to feel sad. Do you want to tell me what's going on?"</td>
          </tr>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Parent reacts with panic or anger</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Fear for the child turns into an emotional reaction</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Pause, breathe, and respond with curiosity: "Tell me more" instead of "Why would you feel that?"</td>
          </tr>
          <tr>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Child feels dismissed</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Comments like "you have nothing to worry about" minimize the emotion</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Validate first, problem-solve later: "That sounds really hard."</td>
          </tr>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Conversation turns into a lecture</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Parents want to fix the issue quickly</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Ask more, tell less: "What do you think would help?"</td>
          </tr>
          <tr>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Child shuts the door on future talks</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">One bad experience makes them guarded going forward</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">End every talk with reassurance: "I'm glad you told me. You can always come to me."</td>
          </tr>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Not sure when to seek professional help</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Uncertainty about "normal" vs. clinical concern</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">If symptoms last over 2 weeks or affect daily functioning, consult a child psychiatrist.</td>
          </tr>
        </tbody>
      </table>

      <h2>Step-by-Step Tips for the Conversation</h2>

      <ol style="padding-left:1.4rem;">
        <li><strong>Choose the right moment:</strong> Avoid starting right before school, bedtime, or during an argument.</li>
        <li><strong>Start with observation, not accusation:</strong> "I've noticed you seem a little quiet lately," rather than "What's wrong with you?"</li>
        <li><strong>Listen more than you speak:</strong> Resist filling silences. Let your child find their words.</li>
        <li><strong>Validate the emotion before addressing behavior:</strong> Feelings are never "wrong," even if a behavior needs correction.</li>
        <li><strong>Normalize seeking help:</strong> "Just like we see a doctor for a fever, we can see someone who helps with feelings."</li>
        <li><strong>Avoid comparisons:</strong> "Other kids don't have it this bad" shuts the conversation down instantly.</li>
        <li><strong>Follow up regularly:</strong> One conversation is a start, not a solution.</li>
        <li><strong>Model healthy coping yourself:</strong> Children learn regulation by watching how parents handle stress.</li>
      </ol>

      <h2>Age-Wise Approach</h2>

      <h3>Young Children (4–9 years)</h3>
      <p>Use simple words, drawings, or stories. Ask, "Is your tummy feeling worried or happy right now?"</p>

      <h3>Pre-teens (10–13 years)</h3>
      <p>They are more self-conscious. Give them privacy and avoid discussing feelings in front of siblings or friends.</p>

      <h3>Teenagers (14–18 years)</h3>
      <p>Respect their independence. Ask permission before offering advice: "Do you want me to just listen, or help you find a solution?"</p>

      <h2>When to Involve a Mental Health Professional</h2>

      <p>Not every difficult emotion needs clinical intervention — but some signs call for professional support, including:</p>

      <ul style="padding-left:1.4rem;">
        <li>Symptoms lasting more than two weeks</li>
        <li>Noticeable decline in school performance or social life</li>
        <li>Signs of self-harm or talk of suicide</li>
        <li>Extreme mood swings or behavioral changes</li>
        <li>Anxiety or fear that stops the child from daily activities</li>
      </ul>

      <p>
        A qualified child and adolescent psychiatrist can assess whether your
        child needs therapy, counseling, or further evaluation — and guide
        the family through the process with the right support plan.
      </p>

      <h2>What to Look for in a Child Psychiatrist</h2>

      <p>A good child and adolescent psychiatrist should offer:</p>

      <ul style="padding-left:1.4rem;">
        <li><strong>A calm, non-judgmental environment</strong> for both child and parents.</li>
        <li><strong>Age-appropriate communication</strong> — very different for a 6-year-old versus a 16-year-old.</li>
        <li><strong>Family-inclusive care</strong> that treats mental health as something the whole family navigates together.</li>
        <li><strong>A patient, listening-first approach</strong> rather than rushing to a diagnosis.</li>
        <li><strong>Clear, honest guidance</strong> on next steps.</li>
      </ul>

      <p>
        This is the kind of approach parents look for when they consult
        <strong> Dr. Archana Singh, Psychiatrist</strong> — a calm, structured
        space where children feel heard and parents feel supported, rather
        than judged.
      </p>

      <h2>What to Expect in a Consultation</h2>

      <p>
        Many parents delay their child's first psychiatric consultation
        simply because they don't know what to expect:
      </p>

      <ol style="padding-left:1.4rem;">
        <li><strong>An initial conversation</strong> to understand the child's history and the concerns parents have noticed.</li>
        <li><strong>A comfortable space for the child</strong> to share feelings at their own pace.</li>
        <li><strong>Guidance for parents</strong> on how to support their child at home.</li>
        <li><strong>A personalized plan</strong> — counseling, therapy techniques, or follow-up sessions, based on what the child needs.</li>
      </ol>

      <p>
        The goal is never to "fix" a child, but to help the whole family
        build healthier ways of communicating and coping — together.
      </p>

      <h2>Myths vs Facts About Child Mental Health</h2>

      <table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:0.95rem;">
        <thead>
          <tr style="background:#4a1263;color:#fff;">
            <th style="padding:12px 14px;text-align:left;">Myth</th>
            <th style="padding:12px 14px;text-align:left;">Fact</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">"Children are too young to have real mental health issues."</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Anxiety, depression, and behavioral disorders can appear as early as preschool age. Early support leads to much better outcomes.</td>
          </tr>
          <tr>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">"Talking about feelings will make the problem worse."</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Avoiding the topic usually increases shame and isolation. Open conversation builds resilience.</td>
          </tr>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">"Only 'weak' kids need therapy."</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Seeking help is a proactive, healthy step — similar to seeing a doctor for a physical illness.</td>
          </tr>
          <tr>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">"It's just a phase, they'll grow out of it."</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Persistent symptoms lasting weeks or affecting daily life need proper evaluation.</td>
          </tr>
          <tr style="background:#faf9fc;">
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">"Medication is always the first step."</td>
            <td style="padding:12px 14px;border:1px solid #ebe5ef;">Many children benefit from counseling and family support first; medication is considered case by case.</td>
          </tr>
        </tbody>
      </table>
    `,

    crux: `
      <div style="
        background:linear-gradient(135deg,#f7effa,#faf7fc);
        padding:22px;
        border-left:4px solid #4a1263;
        border-radius:16px;
        margin-top:32px;
      ">
        <p style="
          font-size:1.05rem;
          line-height:1.8;
          color:#374151;
          margin:0;
        ">
          <strong style="color:#4a1263;">Talking about mental health early builds trust.</strong>
          Listening without judgment, adapting your approach to your child's
          age, and knowing when to bring in a professional can make all the
          difference.
        </p>
      </div>
    `,

    hookTitle: "Building a Habit of Open Conversation",

    hookText: `
      <p>
        The goal isn't a single perfect conversation — it's creating an
        ongoing habit where your child knows they can come to you, or to a
        trusted professional, whenever something feels too heavy to carry
        alone.
      </p>
    `,

    keyPoints: [
      "<strong>Recognize the early signs</strong> of emotional struggle",
      "<strong>Listen without judgment</strong> before offering solutions",
      "<strong>Adapt your approach</strong> to your child's age",
      "<strong>Normalize professional help</strong> like any other health checkup",
      "<strong>Follow up consistently</strong>, not just once",
    ],

    conclusion: `
      <div style="
        background:#f8fafc;
        padding:24px;
        border-radius:18px;
        border:1px solid #edf0f4;
      ">
        <p style="
          font-size:1.05rem;
          line-height:1.9;
          color:#374151;
          margin:0;
        ">
          Talking about mental health early builds trust and prevents bigger
          struggles later. Seeking professional guidance is a sign of good
          parenting, not failure.
        </p>
      </div>
    `,

    faqs: [
      {
        question: "At what age should I start talking to my child about emotions?",
        answer:
          "As early as possible — even toddlers can learn simple emotion words like 'happy,' 'sad,' or 'frustrated.' The vocabulary grows with the child.",
      },
      {
        question: "What if my child refuses to talk to me but might talk to a professional?",
        answer:
          "This is completely normal, especially with teenagers. A neutral, trained professional often makes it easier for children to open up.",
      },
      {
        question: "How do I know if it's a phase or something that needs help?",
        answer:
          "Watch the duration and intensity. If a change in mood or behavior lasts more than two weeks, or interferes with school, friendships, or sleep, it's worth getting a professional opinion.",
      },
      {
        question: "Will seeing a psychiatrist mean my child is automatically put on medication?",
        answer:
          "No. A first consultation is primarily about understanding the child and family. Any treatment plan is discussed and decided step by step.",
      },
      {
        question: "How can I support my child between sessions?",
        answer:
          "Keep communication open, maintain consistent routines, avoid punishing them for expressing emotions, and follow any guidance given during the consultation.",
      },
    ],
  };

  return <BlogPage blogData={blogData} />;
}