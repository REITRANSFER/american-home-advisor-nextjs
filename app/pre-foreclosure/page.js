'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function PreForeclosureContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>PRE-FORECLOSURE</div>
        <h1 className={articleStyles.title}>I&apos;ve Bought Homes From Hundreds of Families Facing Foreclosure. Here&apos;s What Your Bank Will Never Tell You.</h1>
        <p className={articleStyles.subtitle}>After 9 years and 450+ purchases in Baltimore Maryland and Surrounding Areas, I&apos;m sharing the exit strategy that saves homeowners&apos; equity, and their credit, that lenders won&apos;t mention.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 18, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in the Baltimore Maryland and Surrounding Areas area since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/foreclosure-filings.jpeg" alt="Foreclosure Filings Have Nearly Tripled Since 2021" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>If you&apos;re behind on your mortgage and you haven&apos;t called your lender back in weeks, I&apos;m not here to judge you. I&apos;m here to tell you something nobody else will.</p>

        <p>In 9 years of buying homes in Maryland, I&apos;ve sat across the kitchen table from hundreds of families in foreclosure. Good people. Hard-working people. People who lost a job, got sick, went through a divorce, or just got hit by a stretch of bad luck they couldn&apos;t outrun.</p>

        <p>And almost every single one of them waited too long to act.</p>

        <p>Not because they were irresponsible. Because nobody gave them the full picture.</p>

        <p>So today, I&apos;m giving you the full picture.</p>

        <h2>What Your Bank Actually Wants You to Do</h2>

        <p>Your bank sends notices that say things like: &quot;Call us. We want to help.&quot; They advertise forbearance, loan modifications, repayment plans.</p>

        <p>Here&apos;s what they don&apos;t tell you: most of those &quot;options&quot; require money you don&apos;t have or add months of missed payments to the back of your loan, meaning you&apos;ll still owe it, just later. The bank gets paid either way. You&apos;re the one carrying the risk.</p>

        <p>I&apos;m not saying banks are evil. I&apos;m saying they have shareholders. And their job is to protect the bank&apos;s interest, not yours.</p>

        <p>Nobody at the bank is going to call you and say: &quot;Have you considered selling before this gets worse?&quot; That&apos;s not their job. That&apos;s mine.</p>

        <div className={articleStyles.pullquote}>
          &quot;I called my lender every single week for two months asking about a loan modification. They kept telling me to &apos;wait for processing.&apos; Then one morning I get a certified letter. Notice of Default. Two months of &apos;waiting&apos; and they were filing on me the whole time.&quot;
          <div className={articleStyles.pullquoteAuthor}>Victor S., Baltimore homeowner</div>
        </div>

        <h2>The Foreclosure Clock Most People Don&apos;t Realize Is Ticking</h2>

        <p>Let me walk you through exactly what happens, month by month. Because understanding the timeline is the most important thing you can do right now.</p>

        <h3>Month 1-2: You&apos;re Behind, But Not In Danger Yet</h3>
        <p>Late notices arrive. Credit score drops 50-100 points at 30 days, another hit at 60. The bank is calling. Most people avoid those calls. That&apos;s the biggest mistake.</p>

        <h3>Month 3: The Notice of Default Changes Everything</h3>
        <p>At 90 days delinquent, your lender files a Notice of Default. It&apos;s public record. Your neighbors can look it up. And the legal clock starts. In most states, you now have 90-120 days before the auction. That&apos;s not as much time as it sounds.</p>

        <h3>Month 4-6: Attorneys Get Involved On Their Side</h3>
        <p>Your lender hires a foreclosure attorney. Late fees, legal fees, and penalties start stacking. Every month that passes costs you more money out of your eventual equity. I&apos;ve watched homeowners lose $8,000-$12,000 in equity per month during this phase, simply from accumulating fees.</p>

        <h3>Month 6+: Auction and the Aftermath Nobody Talks About</h3>
        <p>Your home sells at auction, typically 20-40% below market value. Your credit is destroyed for 7 years. And if the auction doesn&apos;t cover what you owe, the bank can come after you for the difference, called a deficiency judgment. I&apos;ve seen people lose a house AND still owe $30,000 after.</p>

        <h2>The Option Nobody in a Suit Will Tell You About</h2>

        <p>Here&apos;s what I tell every homeowner who calls me in pre-foreclosure:</p>

        <p><strong>You can sell that house. Right now. Even with the Notice of Default filed.</strong></p>

        <p>You don&apos;t need your lender&apos;s permission. You don&apos;t need 6 months. You don&apos;t need to list the property and wait for a retail buyer who&apos;ll run for the hills the moment they see &quot;pre-foreclosure&quot; in the title search.</p>

        <p>You call a cash buyer, a real one, and you get an offer in 24-48 hours. You close in 14-21 days. The title company pays off your mortgage, clears the default, and you walk away with whatever equity is left. Clean. Done.</p>

        <p>No foreclosure on your record. No bankruptcy. No destroyed credit for 7 years. No deficiency judgment hunting you down two years from now.</p>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased since 2018</div></div>
          <div><div className={articleStyles.statNumber}>14-21</div><div className={articleStyles.statLabel}>Days average close time</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years buying in Baltimore Maryland and Surrounding Areas</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/foreclosure-timeline.jpeg" alt="The Foreclosure Timeline - Know Your Window" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>A Family We Worked With Last Spring</h2>

        <p>Denise called us on a Thursday. Her husband William had lost his job as a plant supervisor when his company relocated. They burned through savings in 4 months trying to keep up with the $1,850 mortgage. By month 5, they were $9,400 behind. Their lender wouldn&apos;t approve a modification because William&apos;s unemployment income was &quot;insufficient.&quot; The foreclosure auction was 6 weeks away.</p>

        <p>Their house in Baltimore had significant equity, even as-is.</p>

        <p>American Home Advisor evaluated the property and made a fair cash offer. We closed 19 days later, three weeks before the auction date. After the mortgage payoff and back payments, the Carters walked away with tens of thousands in equity they would have lost entirely.</p>

        <p>That&apos;s equity they would have lost entirely if the bank had foreclosed and auctioned the property, which is exactly where this was heading.</p>

        <p>The Carters preserved tens of thousands in equity that would have been wiped out at auction. They closed in 19 days and moved forward with their lives.</p>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>We were three weeks from losing everything. I couldn&apos;t sleep. My wife couldn&apos;t eat. Joe Estefan didn&apos;t make us feel like a charity case, just walked us through the numbers and said &apos;here&apos;s what we can do.&apos; We closed 19 days later. That check wasn&apos;t just money. It was proof we weren&apos;t starting from zero.</div>
          <div className={articleStyles.testimonialAuthor}>William C., Baltimore</div>
        </div>

        <h2>The Equity Math Nobody Shows You</h2>

        <p>This is the part that keeps me up at night when I think about homeowners who wait too long.</p>

        <p>Every month you delay in pre-foreclosure costs you real money. Here&apos;s why:</p>

        <ul>
          <li>Late fees compound on top of missed payments</li>
          <li>Legal fees from the bank&apos;s attorneys get added to what you owe</li>
          <li>Penalties and interest accrue on the delinquent balance</li>
          <li>Your negotiating position weakens with every passing day</li>
        </ul>

        <p>I&apos;ve seen homeowners with significant equity at month 2 walk away with almost nothing at month 7. Same house. Same mortgage. Just seven months of compounding fees and lost negotiating leverage.</p>

        <p>Act early. Every week matters.</p>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>Who Should Call Us (And Who Probably Shouldn&apos;t)</h2>

        <p>I&apos;m going to be straight with you, because that&apos;s how we&apos;ve built this business.</p>

        <p><strong>Call us if:</strong></p>
        <ul>
          <li>You&apos;re 2+ months behind and can&apos;t realistically catch up in 90 days</li>
          <li>Your income dropped and isn&apos;t coming back at the level you need</li>
          <li>You&apos;ve already been denied for a modification or forbearance</li>
          <li>You just want this over, clean exit, move on, rebuild</li>
        </ul>

        <p><strong>Don&apos;t call us if:</strong></p>
        <ul>
          <li>This is truly temporary and you have a lump sum coming (inheritance, settlement) that will catch you up</li>
          <li>You have significant equity and 4-6 months to list traditionally and wait for a retail buyer</li>
          <li>You can realistically afford the mortgage again next month</li>
        </ul>

        <p>I&apos;d rather lose a deal than talk someone into something that isn&apos;t right for their situation. That&apos;s not how we&apos;ve lasted 9 years in this business.</p>

        <h2>The One Question to Ask Yourself Right Now</h2>

        <p>Forget the bank. Forget what your neighbor thinks. Forget the shame of it.</p>

        <p>Ask yourself honestly: <em>Can I realistically catch up on these payments within the next 60 days?</em></p>

        <p>If the answer is yes, fight for it. Call your lender. Get a housing counselor. Explore every option.</p>

        <p>If the answer is no, or even &quot;probably not&quot;, then every day you wait costs you real money. And I&apos;d rather you hear that from me now than figure it out at month 7 when there&apos;s nothing left to protect.</p>

        <div className={styles.imageWrap}>
          <img src="/images/selling-before-foreclosure.jpeg" alt="Selling Before Foreclosure preserves equity" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaBox}>
          <h2>Get a Real Cash Offer From American Home Advisor</h2>
          <p>Tell us about your property. We&apos;ll give you an honest number within 24 hours, no obligation, no pressure, no games.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Response in 24 hours &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <h2>The Bottom Line</h2>

        <p>Your bank operates on their timeline, with their legal team, protecting their interest.</p>

        <p>You need someone operating on your timeline, giving you honest information, and giving you an exit before the system takes the decision out of your hands.</p>

        <p>That&apos;s what we do. That&apos;s all we do.</p>

        <p>If you&apos;re in pre-foreclosure in Maryland, or know someone who is, give us a call. We&apos;ve seen every situation. We won&apos;t judge you. We&apos;ll just give you the facts and a fair offer.</p>

        <p>You deserve better than silence from your bank and panic from everyone else.</p>

        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018 | <strong>(443) 407-8421</strong></p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute financial or legal advice. Individual results vary. Consult a qualified attorney or housing counselor before making decisions about your property.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function PreForeclosurePage() {
  return (
    <SurveyProvider config={pageConfigs['pre-foreclosure']}>
      <PreForeclosureContent />
    </SurveyProvider>
  );
}
