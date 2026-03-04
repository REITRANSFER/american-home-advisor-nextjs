'use client';

import Image from 'next/image';
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function JobLossContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>JOB LOSS &amp; RELOCATION</div>
        <h1 className={articleStyles.title}>Lost Your Job? Here&apos;s What Happens to Your House If You Don&apos;t Act in the Next 90 Days.</h1>
        <p className={articleStyles.subtitle}>When the paychecks stop but the mortgage doesn&apos;t, every week of inaction costs you real money. Here&apos;s what I tell homeowners who are burning through savings with no end in sight.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | American Home Advisor<br />February 21, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <Image src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Founder of American Home Advisor. Has helped hundreds of homeowners sell fast during job loss, relocation, and financial hardship. Believes in honest numbers and straight talk.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/images/job-loss-mortgage.jpeg" alt="Job Loss and Your Mortgage - The Numbers" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>The moment you lose your job, a clock starts ticking. Not a metaphorical clock. A real one. Measured in mortgage payments you can no longer afford.</p>

        <p>Most people don&apos;t feel the panic immediately. Unemployment benefits are coming. Savings can cover a month or two. Surely something will come through.</p>

        <p>But here&apos;s what I&apos;ve seen happen over and over again after buying 450+ homes from people in exactly this situation. The first month feels manageable. The second month feels tight. By month three, you&apos;re staring at a bank account that&apos;s running on fumes, a mortgage that doesn&apos;t care about your job search, and a growing sense that you&apos;re out of options.</p>

        <p>You&apos;re not. But the window is smaller than you think.</p>

        <h2>The 90-Day Problem</h2>

        <p>Here&apos;s a number that keeps me up at night: $2,880.</p>

        <p>That&apos;s what the average homeowner in this situation is burning every single month. Mortgage payment. Insurance. Property taxes. The house doesn&apos;t know you got laid off. It just keeps costing you money.</p>

        <p>Now multiply that by three months. That&apos;s $8,640 gone. For most families, that&apos;s the entire savings buffer between &quot;we&apos;re figuring this out&quot; and &quot;we&apos;re in real trouble.&quot;</p>

        <p>The traditional route says: list the house, wait for a buyer, negotiate, inspect, close. That process takes 60 to 90 days on a good day. On a bad day? Four to six months.</p>

        <p>You might not have 60 days. You definitely don&apos;t have six months.</p>

        <p>And every month you wait, that $2,880 disappears from the money you&apos;ll have to start over with. Not from some abstract number on a spreadsheet. From your family&apos;s future.</p>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>When a New Job Means a New City</h2>

        <p>There&apos;s a version of this story that&apos;s even more time-sensitive. You didn&apos;t just lose your job. You found a new one. In another state. Starting in six weeks.</p>

        <p>This should be good news. And it is. Except now you have a house that needs to sell in a timeline that traditional real estate was never built for.</p>

        <p>Think about what a relocation actually looks like. You need to find housing in the new city. Your kids need to enroll in new schools. You need to physically move your family across state lines. And while you&apos;re doing all of that, you&apos;re supposed to be managing showings, fielding offers, and coordinating with a realtor from 800 miles away?</p>

        <p>I&apos;ve talked to people who tried to do it the traditional way. They ended up paying a mortgage in the old city and rent in the new city simultaneously. Two housing payments. Sometimes for months. That&apos;s not a financial strategy. That&apos;s a slow bleed.</p>

        <p>The start date at your new job is fixed. Your family&apos;s transition can&apos;t wait. But the housing market moves at its own pace. And it does not care about your orientation date.</p>

        <h2>What Happens to Your Credit If You Can&apos;t Keep Up</h2>

        <p>This is the part nobody wants to think about. So let me lay it out plainly, because the numbers are brutal.</p>

        <p>Miss one mortgage payment, 30 days late. Your credit score drops 80 points. Maybe more. That&apos;s not a typo. Eighty points from a single missed payment.</p>

        <p>Miss two payments, 90 days late. You&apos;re looking at a 130-point drop. Your credit score is now in a range where most lenders won&apos;t touch you.</p>

        <p>Let it reach foreclosure. That&apos;s a 150+ point hit that stays on your record for seven years. Seven years of higher interest rates on everything. Car loans. Credit cards. And here&apos;s the part that really stings: you won&apos;t be able to buy a home in your new city for three to seven years after a foreclosure.</p>

        <p>So the house you&apos;re trying to hold onto? If you can&apos;t keep up the payments, it doesn&apos;t just hurt you now. It blocks you from rebuilding later. The very thing you&apos;re clinging to becomes the anchor that drags you under.</p>

        <p>Selling proactively, before you miss a payment, protects your credit completely. That&apos;s not a small thing. That&apos;s the difference between arriving in your new city with options and arriving with a financial scar that follows you for nearly a decade.</p>

        <div className={articleStyles.pullquote}>
          &quot;We had three months of savings. That&apos;s it. Chris was searching for work, I was working part-time, and every week that passed I could feel our safety net getting thinner. When the job offer came from out of state, we were relieved and terrified at the same time. We had six weeks. You can&apos;t sell a house in six weeks. At least, that&apos;s what we thought.&quot;
          <div className={articleStyles.pullquoteAuthor}>Natalie B., Baltimore</div>
        </div>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased</div></div>
          <div><div className={articleStyles.statNumber}>16</div><div className={articleStyles.statLabel}>Days avg. close for urgent sales</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years in business</div></div>
        </div>

        <h2>How Natalie and Chris Made It Work</h2>

        <p>Natalie and Chris Brennan were both 39 when the layoff hit. Chris had been a software engineer for eight years. Good company, stable income. Then came the restructuring announcement, and 400 people got the same email on the same Tuesday morning.</p>

        <p>Natalie worked part-time as a teacher&apos;s aide. Between her income and unemployment benefits, they could cover groceries and utilities. But the mortgage? $2,400 a month. That was Chris&apos;s paycheck, not hers.</p>

        <p>Their combined savings: about $8,600. Enough to cover three months of housing costs if they didn&apos;t spend a dollar on anything else. The math was simple and ugly.</p>

        <p>Chris searched locally for two months. Interviews. Callbacks. Second rounds that led nowhere. Then a former colleague called about a position in another state. Good company. Better salary than his old job. One catch: they needed him to start in six weeks.</p>

        <p>Six weeks. They had a house with solid equity. But it wasn&apos;t in perfect condition. It needed about $15,000 in cosmetic work. Paint, carpet, landscaping. The kind of stuff that makes a house show well but costs money they didn&apos;t have.</p>

        <p>They still had a mortgage balance. A traditional sale, even if everything went perfectly, would take 60 to 90 days. They needed to be in another state in 42.</p>

        <p>Natalie called American Home Advisor on a Thursday. We walked the property Friday morning. By Monday, they had a fair cash offer. As-is. No repairs, no staging, no open houses. Close whenever they needed.</p>

        <p>Let me show you the math:</p>
        <ul>
          <li>Net cash to the Brennans: <strong>Enough for first/last month rent, moving costs, and a financial cushion in the new city.</strong></li>
          <li>Timeline: <strong>16 days from offer to close</strong></li>
        </ul>

        <p>Was the cash offer less than full market value? Of course. But full market value was a fantasy number. It assumed perfect condition, perfect timing, and two to three months they didn&apos;t have. The real comparison isn&apos;t &quot;cash offer vs. dream price.&quot; It&apos;s &quot;cash offer vs. what actually happens when you can&apos;t wait.&quot;</p>

        <p>What actually happens when you can&apos;t wait: you burn through $2,880 a month in housing costs while the house sits on the market. You pay for repairs you can&apos;t afford. You try to manage showings from 800 miles away. And if it doesn&apos;t sell fast enough, you&apos;re carrying two housing payments in two states.</p>

        <p>Natalie and Chris closed in 16 days. They drove to the new city with money in the bank, no mortgage hanging over them, and Chris started his new job on time. Natalie found a full-time teaching position that fall.</p>

        <div className={styles.imageWrap}>
          <Image src="/images/trad-vs-cash.jpeg" alt="Traditional Sale vs Cash Sale comparison" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>Everyone told us to list it and wait. But wait with what money? We had three months of savings and a start date we couldn&apos;t move. American Home Advisor gave us a real number, closed in 16 days, and we drove to our new life with cash in the bank instead of panic in our chest. I still think about what would have happened if we&apos;d tried to wait it out. I don&apos;t like the answer.</div>
          <div className={articleStyles.testimonialAuthor}>Natalie Brennan, Baltimore</div>
        </div>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>The Three Job Loss Situations We See Most</h2>

        <p><strong>Situation 1: Laid off and can&apos;t cover the mortgage.</strong> Income disappeared but expenses didn&apos;t. Savings are draining fast. Every month you stay is another month closer to missing a payment, and that first missed payment does permanent credit damage. A fast cash sale stops the bleed and lets you walk away with equity instead of debt.</p>

        <p><strong>Situation 2: Relocated and carrying two houses.</strong> You took the new job. You moved. But the old house is still sitting there, costing you $2,000 to $3,000 a month while you&apos;re also paying rent in the new city. Managing a listing remotely is a nightmare. A cash buyer takes the house as-is and closes before your next double payment is due.</p>

        <p><strong>Situation 3: Income reduction that makes the home unaffordable.</strong> Maybe you didn&apos;t lose your job entirely. Maybe you took a pay cut, lost overtime, or went from two incomes to one. The house was affordable at your old salary. It&apos;s not affordable now. And the longer you stretch to make payments you can barely cover, the deeper the financial hole gets. Selling now, while you&apos;re current on the mortgage, gives you the most options and protects your credit.</p>

        <h2>When You Don&apos;t Need Us</h2>

        <p>I want to be straightforward about this, because selling to a cash buyer isn&apos;t the right move for everyone.</p>

        <p>If you have six months or more of savings in the bank and no immediate deadline forcing your hand, a traditional sale will probably net you more money. That&apos;s just the reality. A real estate agent, a properly staged listing, and 90 days of patience will usually produce a higher sale price.</p>

        <p>If your house is already in great condition and the local market is hot, you might get multiple offers within weeks. If that&apos;s your situation, take that path. Seriously.</p>

        <p>Where we help is when the timeline is the problem. When you don&apos;t have six months. When every week costs money you don&apos;t have. When the house needs work you can&apos;t fund. When you need to be in another state before the mortgage company starts calling.</p>

        <p>That&apos;s the gap we fill. Speed and certainty when the traditional process is too slow and too uncertain for what you&apos;re dealing with.</p>

        <div className={styles.imageWrap}>
          <Image src="/images/cash-offer-checklist.jpeg" alt="Before You Accept ANY Cash Offer - Use This Checklist" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaBox}>
          <h2>Find Out What Your Home Is Worth. No Obligation.</h2>
          <p>Tell us about your property. We&apos;ll give you a real cash offer within 24 hours so you can compare your options and make the best decision for your family.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Get My Free Cash Offer &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;&#8226;&nbsp; &#10003; Offer in 24 hours &nbsp;&#8226;&nbsp; &#10003; 450+ homes purchased</div>
        </div>

        <h2>The Bottom Line</h2>

        <p>Losing your job is one of the most stressful things that can happen to a family. Adding a house you can&apos;t afford to that stress doesn&apos;t make you tougher. It makes everything harder. Harder to think clearly. Harder to interview well. Harder to make good decisions about the future when you&apos;re drowning in the present.</p>

        <p>Natalie and Chris didn&apos;t sell their house because they wanted to. They sold because the math left them no other option that made sense. And once they did, the weight came off. They could breathe. They could focus on the new job, the new city, the new chapter.</p>

        <p>If you&apos;re staring at a shrinking savings account, a mortgage you can&apos;t carry much longer, and a timeline that traditional real estate can&apos;t meet... the move is to get a number. A real number. Not a Zillow estimate or a neighbor&apos;s opinion. An actual cash offer you can hold next to your situation and decide for yourself.</p>

        <p>No obligation. No pressure. Just clarity in a moment when everything feels unclear.</p>

        <p>That&apos;s what we&apos;re here for.</p>

        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Founder, American Home Advisor</p>

        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>

        <p className={articleStyles.disclaimer}><em>American Home Advisor is a real estate investment company that purchases properties for cash. Natalie and Chris&apos;s story is based on a real client experience (names changed for privacy). Individual results vary. This article represents the opinion and experience of the author and does not constitute legal or financial advice. Consult qualified professionals before making decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function JobLossPage() {
  return (
    <SurveyProvider config={pageConfigs['job-loss']}>
      <JobLossContent />
    </SurveyProvider>
  );
}
