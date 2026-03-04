'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '../../context/SurveyContext';
import { pageConfigs } from '../../lib/surveyConfig';
import SurveyModal from '../../components/SurveyModal/SurveyModal';
import StickyBar from '../../components/StickyBar/StickyBar';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import articleStyles from '../../components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function DivorceContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>DIVORCE RESOURCES</div>
        <h1 className={articleStyles.title}>After Buying 450+ Homes, Here&apos;s What I Tell Every Divorcing Couple About Their House.</h1>
        <p className={articleStyles.subtitle}>The marital home is the most fought-over asset in divorce. Here&apos;s the honest advice I give, including when a cash sale is and isn&apos;t the right move.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 18, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in Baltimore Maryland and Surrounding Areas since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/divorce-infographic.jpeg" alt="Divorce and The Family Home - Statistics" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>Over 9 in this business, I&apos;ve bought homes from people going through every kind of difficult situation. Foreclosure, financial crisis, inherited properties, relocation.</p>
        <p>But divorce situations are their own category. Because the house doesn&apos;t just have financial value, it has emotional weight that makes rational decision-making almost impossible.</p>
        <p>I&apos;m not here to tell you what to feel. I&apos;m here to tell you what I&apos;ve seen work, and what I&apos;ve seen cost people tens of thousands of dollars they didn&apos;t have to lose.</p>

        <h2>Why the House Becomes a Weapon</h2>
        <p>Here&apos;s what I&apos;ve observed in hundreds of these situations: the spouse who is less motivated to sell the house has all the power. Every day they delay is another day the other party bleeds money, paying rent somewhere else while still covering their share of the mortgage.</p>
        <p>It becomes leverage. Sometimes that&apos;s conscious. Sometimes it isn&apos;t. But the result is the same: months of double housing costs, accumulating legal fees, and a relationship that gets more toxic with every missed deadline.</p>
        <p>Your divorce decree might say &quot;the house shall be sold within 30 days.&quot; But a signed decree doesn&apos;t force anyone to pick up the phone, agree on a listing price, or show up for a realtor walkthrough.</p>

        <div className={articleStyles.pullquote}>
          &quot;My attorney kept saying &apos;be patient.&apos; But patience costs $3,700 a month when you&apos;re paying a mortgage AND rent. I needed this resolved, not &apos;eventually&apos;, now.&quot;
          <div className={articleStyles.pullquoteAuthor}>Karen M., Baltimore</div>
        </div>

        <h2>The Real Cost of Waiting Out a Contested Sale</h2>
        <p>Let me put some numbers to this, because I&apos;ve seen people lose real money by not understanding the math.</p>
        <p>Say the marital home has significant equity. You and your ex agree to split everything 50/50. Sounds simple.</p>
        <p>Now factor in what waiting 8 months actually costs:</p>
        <ul>
          <li>Your mortgage payment during those 8 months: ~$16,800 ($2,100/month)</li>
          <li>Your rent at a separate apartment: ~$12,800 ($1,600/month)</li>
          <li>Additional attorney fees from filing motions to compel the sale: $4,000-$8,000</li>
          <li>Lost time on rebuilding your financial life: priceless</li>
        </ul>
        <p>That&apos;s roughly $29,600 in double payments alone over 8 months, money draining out the door while you wait. And your &quot;fair share&quot; is the same whether it took 3 weeks or 8 months.</p>
        <p>The only person who benefits from the delay is your ex, and their attorney.</p>

        <h2>What a Cash Sale Can Do in a Divorce</h2>
        <p>Here&apos;s the option most divorce attorneys don&apos;t bring up until late in the process: you can force a cash sale even when one party won&apos;t cooperate.</p>
        <p>If your divorce decree specifies the house must be sold, a cash buyer with experience in divorce situations can work directly with both attorneys and, when necessary, file the appropriate court motions to compel the sale. The uncooperative spouse doesn&apos;t have to agree on anything. The court order does the compelling.</p>
        <p>We&apos;ve done this more times than I can count. It&apos;s not complicated. It just requires a buyer who understands the process.</p>
        <p>The result: you close in 3-4 weeks. Both parties get their equity. It&apos;s done.</p>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased since 2018</div></div>
          <div><div className={articleStyles.statNumber}>3-4</div><div className={articleStyles.statLabel}>Weeks to close, divorce situations</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years buying in Baltimore Maryland and Surrounding Areas</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/trad-vs-cash.jpeg" alt="Traditional Sale vs Cash Sale comparison" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>The Numbers That Surprised My Client</h2>
        <p>Let me share a situation from last year. Karen Mitchell, 44, was going through a bitter divorce. Her ex-husband refused to cooperate on selling the house. She was paying $2,100/month on a mortgage for a house she&apos;d moved out of, plus $1,600/month rent on her apartment. After 7 months of her attorney trying to negotiate, she contacted American Home Advisor.</p>
        <p>The marital home had significant equity. Karen was hemorrhaging $3,700 every single month in double housing costs.</p>
        <p>American Home Advisor worked with both attorneys, made a fair cash offer and closed in 18 days. Both parties got their share and moved on.</p>
        <p>After the mortgage payoff, both parties got their share. Karen started her life over 18 days after making the call, instead of waiting another 8 months and bleeding another $29,600 in double payments.</p>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>The day we closed was the first day in almost a year I felt like I could breathe. I&apos;d been hemorrhaging money for months while my ex dragged his feet. American Home Advisor got both attorneys on the same page, closed in 18 days, and I finally started my life over. I wish I&apos;d made that call six months earlier.</div>
          <div className={articleStyles.testimonialAuthor}>Karen M., Baltimore</div>
        </div>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>The Three Divorce House Situations I See Most</h2>
        <p><strong>Situation 1: Both parties want to sell but can&apos;t coordinate.</strong> The relationship is too damaged for civil communication. Neither side trusts the other to handle a traditional listing. A cash buyer handles everything, one transaction, one closing, done. No coordination required between the parties.</p>
        <p><strong>Situation 2: One party is being obstructionist.</strong> One spouse is stalling, refusing to sign paperwork, missing appointments. If the divorce decree specifies a sale, we can work with attorneys to file a motion to compel. The court order does what your ex won&apos;t.</p>
        <p><strong>Situation 3: The house needs repairs neither party wants to fund.</strong> The HVAC is failing, the roof is leaking, and the kitchen is from 1991. Nobody wants to spend money fixing up a house they&apos;re selling anyway. We buy as-is. No repairs, no staging, no arguments about who pays for what.</p>

        <h2>When a Cash Sale Doesn&apos;t Make Sense</h2>
        <p>I&apos;ll say this clearly, because I think it&apos;s important: not every divorce situation calls for a cash sale.</p>
        <p>If you and your ex are actually communicating well, if the house is in great shape and would sell fast on the open market, if you both have a cooperative attorney who can manage the listing process, you might net more money going the traditional route. And if that&apos;s your situation, I&apos;ll tell you that honestly.</p>
        <p>We&apos;re not trying to buy every house. We&apos;re trying to help people who actually need a different solution.</p>

        <div className={styles.imageWrap}>
          <img src="/images/cash-offer-checklist.jpeg" alt="Before You Accept ANY Cash Offer - Use This Checklist" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaBox}>
          <h2>Find Out What Your Home Is Worth. No Obligation.</h2>
          <p>Tell us about your property. We&apos;ll give you a real cash offer within 24 hours so you can compare your options and make the best decision for your situation.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Response in 24 hours &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <h2>The Bottom Line</h2>
        <p>Divorce is one of the hardest things a person goes through. The financial piece shouldn&apos;t be harder than it has to be.</p>
        <p>Your house has value. That value is yours. Getting it out shouldn&apos;t require months of legal warfare or tens of thousands in unnecessary carrying costs.</p>
        <p>If you&apos;re stuck, if your ex won&apos;t cooperate, if the traditional sale process has stalled, if you&apos;re tired of bleeding money every month, call us. We&apos;ll tell you honestly what we can offer and whether it makes sense for your situation.</p>
        <p>You deserve to move forward. Let&apos;s figure out how to get you there.</p>
        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018 | <strong>(443) 407-8421</strong></p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute legal or financial advice. Individual results vary. Consult qualified professionals before making decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function DivorcePage() {
  return (
    <SurveyProvider config={pageConfigs.divorce}>
      <DivorceContent />
    </SurveyProvider>
  );
}
