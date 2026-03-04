'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function AdvertorialFounderContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>INDUSTRY INSIDER</div>
        <h1 className={articleStyles.title}>I&apos;ve Been Buying Homes in Baltimore Maryland and Surrounding Areas for 9+ Years. Here&apos;s What Most Cash Buyers Won&apos;t Tell You.</h1>
        <p className={articleStyles.subtitle}>After buying over 450+ homes, I&apos;m finally exposing the &quot;inspection game&quot; that&apos;s costing Baltimore Maryland and Surrounding Areas sellers thousands, and why I refuse to play it.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 8, 2026 | 8-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in the Baltimore Maryland and Surrounding Areas area since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <p className={styles.lead}>I need to tell you something that&apos;s going to make some of my competitors very angry.</p>

        <p>For the past 8+ years, I&apos;ve been buying homes in Maryland. American Home Advisor has purchased over 450+ properties. We&apos;ve worked with families in foreclosure, inherited homes, divorces, downsizing, every situation you can imagine.</p>
        <p>And in that time, I&apos;ve watched this industry become infested with people who give legitimate cash buyers like us a bad name.</p>
        <p>I&apos;m writing this because I&apos;m tired of getting calls from homeowners who&apos;ve been burned. Tired of hearing the same story over and over.</p>
        <p>It&apos;s time someone said it out loud.</p>

        <h2>The Call I Got Last Tuesday</h2>
        <p>Her name was Angela. Baltimore. Single mom, two kids. Her ex-husband had stopped paying the mortgage three months ago, and she was drowning.</p>
        <p>She&apos;d accepted a &quot;cash offer&quot; three weeks earlier. A strong number. The buyer seemed professional. Made her feel like she could finally breathe.</p>
        <p>Then came the inspection.</p>
        <p>Suddenly, the offer dropped by $40,000. Just like that. For &quot;issues&quot; they claimed to have just discovered, issues Angela had disclosed in writing from day one.</p>

        <div className={articleStyles.pullquote}>
          &quot;They knew about the water damage before they made the offer. They used it anyway. Like I wasn&apos;t already going through enough.&quot;
          <div className={articleStyles.pullquoteAuthor}>Angela Rivera, Baltimore homeowner</div>
        </div>

        <p>This wasn&apos;t an inspection. It was a hustle.</p>
        <p>And it&apos;s happening every single day in Baltimore Maryland and Surrounding Areas.</p>

        <h2>The &quot;Inspection Excuse&quot; Playbook</h2>
        <p>Let me explain how it works. Because once you understand the game, you&apos;ll never fall for it.</p>
        <p><strong>Step 1:</strong> Make an aggressive offer. Not necessarily the highest, but high enough to get your attention. High enough to make you sign their contract and stop talking to other buyers.</p>
        <p><strong>Step 2:</strong> Use vague language. &quot;Subject to inspection.&quot; &quot;Pending final walk-through.&quot; It sounds reasonable. Every contract has contingencies, right?</p>
        <p><strong>Step 3:</strong> Wait. Let two or three weeks pass. Let you get emotionally invested. Let you tell your family it&apos;s done. Let you make plans based on that number.</p>
        <p><strong>Step 4:</strong> Find &quot;problems.&quot; They&apos;ll bring in an inspector. Take lots of photos. Act concerned. Then hit you with the new number.</p>
        <p><strong>Step 5:</strong> Apply pressure. &quot;We still want to buy your house, but we can only pay what it&apos;s worth in this condition.&quot; They know you&apos;ve stopped talking to other buyers. They know you&apos;ve wasted weeks. They&apos;re counting on you feeling desperate.</p>
        <p>It&apos;s a bait-and-switch. Pure and simple.</p>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>67%</div><div className={articleStyles.statLabel}>Of sellers report post-inspection price drops</div></div>
          <div><div className={articleStyles.statNumber}>$82K</div><div className={articleStyles.statLabel}>Average reduction amount</div></div>
          <div><div className={articleStyles.statNumber}>47 days</div><div className={articleStyles.statLabel}>Average time wasted before getting real offer</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/inspection-trick.jpeg" alt="The Inspection Trick - How Dishonest Buyers Steal Your Equity" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>Why We Do It Differently</h2>
        <p>When American Home Advisor makes you an offer, we mean it.</p>
        <p>Here&apos;s our process, and I want you to hold every other buyer to this standard:</p>
        <p><strong>We ask the hard questions upfront.</strong> Roof condition? Foundation? HVAC? Plumbing? We don&apos;t wait until after you sign to suddenly &quot;discover&quot; these things. We ask before we make an offer.</p>
        <p><strong>We look at the property.</strong> Either in person or through detailed photos you send us. We don&apos;t make offers blind.</p>
        <p><strong>We give you our final number.</strong> Not a range. Not &quot;up to.&quot; The actual number we&apos;re prepared to pay. And we put it in writing.</p>
        <p><strong>We don&apos;t renegotiate.</strong> Unless you lied about the property&apos;s condition, and in 8+ years, that&apos;s happened maybe twice, our number doesn&apos;t change. What we offer is what we pay.</p>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>The Question That Separates Real Buyers From Pretenders</h2>
        <p>If you&apos;re talking to a cash buyer, any cash buyer, including us, ask this question:</p>
        <p><em>&quot;Is this your final offer, or will it change after the inspection?&quot;</em></p>
        <p>Watch how they answer.</p>
        <p>A real buyer will say: &quot;This is our final number, assuming the property is as you&apos;ve described it.&quot;</p>
        <p>A pretender will give you some version of: &quot;Well, we need to see the property first... we&apos;ll have to inspect... it depends on what we find...&quot;</p>
        <p>Translation: They&apos;re planning to lowball you later.</p>

        <h2>What Angela Did Next</h2>
        <p>Angela called me on a Tuesday. We talked for 20 minutes. I asked her about the property, the water damage, the aging roof, the dated kitchen, the furnace that needed replacing.</p>
        <p>She was honest. I was honest.</p>
        <p>I made her an offer on Wednesday. A fair number.</p>
        <p>Lower than her original offer. But far higher than the slashed number. And most importantly, it was real.</p>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>Joe Estefan looked me in the eye and gave me a number. No conditions, no &quot;pending inspection,&quot; no fine print. We closed in 16 days and I finally had the money to get my kids into a stable situation. I don&apos;t know what would have happened if I&apos;d waited another month.</div>
          <div className={articleStyles.testimonialAuthor}>Angela Rivera, Baltimore</div>
        </div>

        <p>We closed 16 days later. The number didn&apos;t budge.</p>

        <h2>Why I&apos;m Writing This</h2>
        <p>Some of you reading this are thinking: &quot;Joe Estefan, you&apos;re hurting your own business. Why expose these tactics?&quot;</p>
        <p>Because I&apos;m tired of cleaning up other people&apos;s messes.</p>
        <p>I didn&apos;t build American Home Advisor by tricking people. I built it by being honest, even when honesty means offering less than the competition&apos;s bait-and-switch number.</p>
        <p>Our reputation in Baltimore Maryland and Surrounding Areas is worth more than any single deal.</p>
        <p>I&apos;ve got a family. I want them to be proud of what I do for a living. And I can&apos;t be proud if I&apos;m running the same hustle as everyone else.</p>

        <div className={articleStyles.ctaBox}>
          <h2>Get a Real Cash Offer From American Home Advisor</h2>
          <p>Answer 5 quick questions. We&apos;ll give you an honest number based on your property&apos;s actual condition. No games. No surprises.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Takes 60 seconds &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/cash-offer-checklist.jpeg" alt="Before You Accept ANY Cash Offer - Use This Checklist" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>The Bottom Line</h2>
        <p>If you&apos;re selling your home in Maryland, you deserve to work with someone who respects you enough to tell the truth.</p>
        <p>Not every cash buyer is a scam artist. But too many are. And they&apos;re making it harder for the good ones to earn your trust.</p>
        <p>Ask the hard questions. Demand proof of funds. Get references. And never, ever accept an offer with vague &quot;inspection&quot; language unless you&apos;re prepared for that number to drop.</p>
        <p>Or just call us at <strong>(443) 407-8421</strong>. We&apos;ve been doing this since 2018. We&apos;ll give you a straight answer.</p>
        <p>You deserve better than the runaround.</p>

        <p style={{ marginTop: '40px' }}>Joe Estefan, Founder of American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018</p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute an offer to purchase real estate. All offers are subject to property verification of condition.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function AdvertorialFounderPage() {
  return (
    <SurveyProvider config={pageConfigs['advertorial-founder']}>
      <AdvertorialFounderContent />
    </SurveyProvider>
  );
}
