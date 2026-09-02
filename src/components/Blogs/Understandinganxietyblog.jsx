import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  HeartHandshake,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import anxiety from "../../assets/anxiety.jpg";

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
                  You don't have to face anxiety alone.
                </h3>

                <p className="text-white/75 text-sm md:text-[15px] leading-relaxed">
                  If anxiety is affecting your everyday life, talking to a
                  mental health professional can be an important step toward
                  feeling better.
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

export default function UnderstandingAnxietyBlog() {
  const blogData = {
    title:
      "Understanding Anxiety: Signs, Causes & When to Seek Help",

    description:
      "A closer look at what anxiety really is, why it happens, and the practical steps that can help you manage it — plus how to know when it's time to reach out for support.",

    date: "2026-09-01",

    image: anxiety,

    link: "/blog/understanding-anxiety",

    tags: [
      "Mental Health",
      "Anxiety",
      "Anxiety Disorders",
      "Mental Wellness",
      "Psychiatry",
      "Stress Management",
    ],

    text1: `
      <p>
        Everyone feels stressed sometimes — a big presentation, a tight
        deadline, a difficult conversation. But there's a difference between
        everyday stress and anxiety. Stress usually fades once the situation
        passes; anxiety can show up without an obvious trigger and stick around
        far longer than it should.
      </p>

      <p>
        Anxiety often builds so gradually that people don't notice it until
        it's already shaping how they think, sleep, work and connect with
        others. Understanding the signs, causes and treatment options is the
        first step toward managing it well.
      </p>

      <h2>Common Signs of Anxiety</h2>

      <p>
        Anxiety affects the mind, the body, behavior and thinking all at once.
        If several of these show up together and persist, it's worth paying
        closer attention:
      </p>

      <div style="
        border:1px solid #e5e7eb;
        border-radius:16px;
        overflow:hidden;
        margin:24px 0;
      ">

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          padding:18px 20px;
          border-bottom:1px solid #eef1f5;
        ">
          <strong style="color:#4a1263; min-width:140px;">
            Emotional
          </strong>

          <span>
            Constant unease, restlessness, irritability, a sense of impending
            doom, feeling on edge
          </span>
        </div>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          padding:18px 20px;
          border-bottom:1px solid #eef1f5;
        ">
          <strong style="color:#4a1263; min-width:140px;">
            Physical
          </strong>

          <span>
            Rapid heartbeat, sweating, shortness of breath, muscle tension,
            headaches, fatigue
          </span>
        </div>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          padding:18px 20px;
          border-bottom:1px solid #eef1f5;
        ">
          <strong style="color:#4a1263; min-width:140px;">
            Behavioral
          </strong>

          <span>
            Avoiding people or situations, procrastination, seeking constant
            reassurance
          </span>
        </div>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          padding:18px 20px;
          border-bottom:1px solid #eef1f5;
        ">
          <strong style="color:#4a1263; min-width:140px;">
            Cognitive
          </strong>

          <span>
            Racing thoughts, overthinking, poor concentration, catastrophizing
          </span>
        </div>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          padding:18px 20px;
        ">
          <strong style="color:#4a1263; min-width:140px;">
            Sleep-related
          </strong>

          <span>
            Trouble falling asleep, frequent waking, restless or unrefreshing
            sleep
          </span>
        </div>

      </div>

      <h2>Why Does Anxiety Happen?</h2>

      <p>
        There's rarely just one reason someone develops anxiety — it's usually
        a mix of biology, environment and lifestyle:
      </p>

      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
        gap:16px;
        margin:24px 0;
      ">

        <div style="
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:20px;
          background:#fff;
        ">
          <h3>Genetics & Family History</h3>
          <p>
            A family history of anxiety or other mental health conditions
            raises the likelihood of developing it yourself.
          </p>
        </div>

        <div style="
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:20px;
          background:#fff;
        ">
          <h3>Brain Chemistry</h3>
          <p>
            Imbalances in neurotransmitters like serotonin and GABA can make
            the brain's threat-detection system overly sensitive.
          </p>
        </div>

        <div style="
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:20px;
          background:#fff;
        ">
          <h3>Major Life Events</h3>
          <p>
            Job loss, divorce, relocation, or the loss of a loved one can all
            disrupt a sense of stability and trigger anxiety.
          </p>
        </div>

        <div style="
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:20px;
          background:#fff;
        ">
          <h3>Childhood Experiences</h3>
          <p>
            Growing up in an unpredictable or high-conflict environment can
            keep the brain wired for high alert into adulthood.
          </p>
        </div>

        <div style="
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:20px;
          background:#fff;
        ">
          <h3>Chronic Stress & Lifestyle</h3>
          <p>
            Ongoing pressure, poor sleep, excessive caffeine, and low physical
            activity all compound and prolong anxiety.
          </p>
        </div>

        <div style="
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:20px;
          background:#fff;
        ">
          <h3>Underlying Medical Conditions</h3>
          <p>
            Thyroid disorders, heart arrhythmias, and certain medications can
            produce or worsen anxiety-like symptoms.
          </p>
        </div>

      </div>

      <h2>Practical Steps to Manage Anxiety</h2>

      <p>
        Managing anxiety isn't about eliminating it completely — it's about
        reducing its intensity and frequency so it stops running the show:
      </p>

      <ol style="padding-left:1.4rem;">
        <li>
          <strong>Identify Your Triggers:</strong>
          Keep a simple log of when anxiety spikes. Patterns usually emerge
          within a couple of weeks, making triggers easier to manage.
        </li>

        <li>
          <strong>Practice Grounding Techniques:</strong>
          The 5-4-3-2-1 method — naming things you can see, touch, hear, smell
          and taste — brings your mind back to the present moment.
        </li>

        <li>
          <strong>Learn Controlled Breathing:</strong>
          Inhale for 4 seconds, hold for 4, exhale for 6. A few minutes of this
          signals your nervous system that you're safe.
        </li>

        <li>
          <strong>Reduce Stimulants:</strong>
          Caffeine and sugar can mimic and intensify anxiety symptoms.
          Cutting back gradually tends to work best.
        </li>

        <li>
          <strong>Move Your Body Daily:</strong>
          Even a 20–30 minute walk releases endorphins, lowers cortisol, and
          improves sleep quality.
        </li>

        <li>
          <strong>Protect Your Sleep:</strong>
          Set a consistent sleep and wake time, and avoid screens before bed to
          break the anxiety–poor sleep cycle.
        </li>

        <li>
          <strong>Challenge Anxious Thoughts:</strong>
          Ask yourself, "what's the actual evidence for this?" to interrupt
          worst-case-scenario thinking before it spirals.
        </li>

        <li>
          <strong>Build a Support System:</strong>
          Regularly talking to trusted people helps put worries in perspective
          and reminds you that you're not carrying it alone.
        </li>
      </ol>

      <h2>When Should You Seek Professional Help?</h2>

      <p>
        Self-help strategies can go a long way, but they aren't always enough
        on their own — and that's completely normal. Consider reaching out to
        a professional if:
      </p>

      <ul style="padding-left:1.4rem;">
        <li>
          Anxiety is significantly interfering with work, studies, or
          relationships
        </li>

        <li>
          Symptoms have persisted continuously for more than two weeks
        </li>

        <li>
          You're experiencing panic attacks
        </li>

        <li>
          There's been a noticeable change in appetite, weight, or sleep
        </li>

        <li>
          Feelings of sadness or hopelessness are showing up alongside the
          anxiety
        </li>

        <li>
          You've started using alcohol or other substances to cope
        </li>
      </ul>

      <p>
        A therapist, counselor, or psychiatrist can help identify what's
        really going on and offer tools — such as Cognitive Behavioral Therapy
        (CBT) — tailored specifically to you. Seeking help isn't a sign of
        weakness; it's one of the most proactive things you can do for yourself.
      </p>

      <h2>Common Types of Anxiety Disorders</h2>

      <div style="
        border:1px solid #e5e7eb;
        border-radius:16px;
        overflow:hidden;
        margin:24px 0;
      ">

        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong>Generalized Anxiety Disorder (GAD)</strong>
          <p style="margin:6px 0 0;">
            Persistent, excessive worry about everyday matters that's hard to
            control
          </p>
        </div>

        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong>Panic Disorder</strong>
          <p style="margin:6px 0 0;">
            Sudden, intense episodes of fear, often with physical symptoms
          </p>
        </div>

        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong>Social Anxiety Disorder</strong>
          <p style="margin:6px 0 0;">
            Intense fear of being judged or rejected in social situations
          </p>
        </div>

        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong>Specific Phobias</strong>
          <p style="margin:6px 0 0;">
            Extreme, often irrational fear of a specific object or situation
          </p>
        </div>

        <div style="padding:18px 20px;border-bottom:1px solid #eef1f5;">
          <strong>Health Anxiety</strong>
          <p style="margin:6px 0 0;">
            Persistent, excessive worry about having or developing a serious
            illness
          </p>
        </div>

        <div style="padding:18px 20px;">
          <strong>PTSD</strong>
          <p style="margin:6px 0 0;">
            Anxiety triggered by memories or reminders of a past traumatic
            event
          </p>
        </div>

      </div>

      <h2>Final Thoughts</h2>

      <p>
        Anxiety is incredibly common, and understanding it is the first real
        step toward managing it. It's not about eliminating worry entirely,
        but about recognizing the signs early and having a toolkit of steps
        that actually help.
      </p>

      <p>
        You don't have to figure this out by yourself. Support is available,
        recovery is possible, and taking the first step is often the hardest —
        but also the most important — part.
      </p>
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
          <strong style="color:#4a1263;">Understanding anxiety starts with awareness.</strong>
          Recognizing its signs, understanding possible triggers, and knowing
          when to seek professional support can make an important difference.
        </p>
      </div>
    `,

    hookTitle: "Understanding Anxiety Better",

    hookText: `
      <p>
        Anxiety can affect different parts of everyday life, but with the
        right understanding, support and healthy coping strategies, it can be
        managed effectively.
      </p>
    `,

    keyPoints: [
      "<strong>Recognize the signs</strong> of anxiety early",
      "<strong>Identify personal triggers</strong> and patterns",
      "<strong>Practice healthy coping strategies</strong>",
      "<strong>Protect sleep and daily routines</strong>",
      "<strong>Seek professional support</strong> when anxiety interferes with daily life",
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
          Anxiety is common and manageable. Recognizing the signs and seeking
          appropriate support can be an important step toward better mental
          wellbeing.
        </p>
      </div>
    `,

    faqs: [
      {
        question: "What are the common signs of anxiety?",
        answer:
          "Common signs can include excessive worry, restlessness, racing thoughts, difficulty concentrating, rapid heartbeat, sweating, muscle tension and sleep difficulties.",
      },
      {
        question: "Can anxiety be managed?",
        answer:
          "Yes. Healthy routines, coping strategies, therapy and professional support can help people manage anxiety effectively.",
      },
      {
        question: "When should I seek professional help?",
        answer:
          "Consider professional support when anxiety persists, becomes difficult to manage, causes significant distress, or starts interfering with work, studies, relationships or daily life.",
      },
    ],
  };

  return <BlogPage blogData={blogData} />;
}