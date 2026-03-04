'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function TaxLienContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>TAX LIENS</div>
        <h1 className={articleStyles.title}>I&apos;ve Bought Dozens of Homes With Tax Liens. Here&apos;s What Every Homeowner Needs to Know Before It&apos;s Too Late.</h1>
        <p className={articleStyles.subtitle}>Property tax liens are the silent financial killer most homeowners don&apos;t take seriously, until they&apos;re facing foreclosure. Here&apos;s how the system actually works, and what your options are.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 18, 2026 | 6-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in the Baltimore Maryland and Surrounding Areas area since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/tax-liens-america.jpeg" alt="Property Tax Liens in America" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>I want to tell you something that surprises almost every homeowner I say it to: you can lose your house to property tax debt even if you have no mortgage. Even if you own it free and clear.</p>

        <p>Most people think foreclosure only happens to people who missed mortgage payments. That&apos;s not true. Counties and municipalities have the legal right to foreclose on properties with unpaid taxes, and unlike your bank, they don&apos;t negotiate, they don&apos;t offer modifications, and they move slowly enough that you think you have more time than you do.</p>

        <p>By the time most people call me about a tax lien situation, the clock is already deep into the red.</p>

        <p>I&apos;m writing this because I want you to understand how this works, clearly, without the jargon, so you can make a real decision instead of a panicked one.</p>

        <h2>The Call That Changed How I Think About This</h2>

        <p>About two years ago, I got a call from a woman named Dorothy. She was 71 years old and had been living in her home in Baltimore for 34 years. After her husband Harold passed, she fell behind on property taxes, not from negligence, but from grief and confusion about which bills he had been handling. Over 3 years, a $4,200 annual tax bill turned into a $14,800 lien with penalties and interest. She didn&apos;t open the letters because she didn&apos;t understand them.</p>

        <p>When her grandson finally saw the pile of certified mail, the county tax sale was 45 days away.</p>

        <p>She had substantial equity in the home, and was about to lose all of it.</p>

        <div className={articleStyles.pullquote}>
          &quot;After Harold passed, I just stopped opening the mail. I didn&apos;t know what half of it meant anyway. By the time my grandson found those letters, they were talking about selling my home out from under me. Thirty-four years in this house, and I almost lost it because I didn&apos;t open an envelope.&quot;
          <div className={articleStyles.pullquoteAuthor}>Dorothy G., Baltimore homeowner</div>
        </div>

        <h2>How Property Tax Debt Actually Works</h2>

        <p>Let me walk you through the real timeline, because I&apos;ve seen homeowners misunderstand this at every stage.</p>

        <h3>Year 1: You&apos;re Behind. Not In Crisis Yet.</h3>
        <p>You miss a property tax payment. The county sends notices. Penalties start accruing, often around 1-2% per month depending on your jurisdiction. You&apos;re delinquent, but you still have time and options.</p>

        <h3>Year 2: Compounding Begins. The Hole Gets Deeper.</h3>
        <p>Penalties compound. Some jurisdictions add collection fees. Your total balance grows faster than you expect. A $3,000 original debt becomes $4,500 or more without you doing anything.</p>

        <h3>Year 3: The Lien Is Filed. This Changes Everything.</h3>
        <p>The county files a formal property tax lien. It attaches to your property title. You cannot sell, refinance, or borrow against your home until the lien is satisfied. Some counties then sell that lien to third-party investors, who have their own right to pursue foreclosure and often charge 24-36% interest.</p>

        <h3>Year 4+: Foreclosure. The County Takes It.</h3>
        <p>If the debt remains unpaid, the county, or the lien investor, can foreclose. Your property sells at a tax sale, usually far below market value. You lose your equity. And if the sale doesn&apos;t cover the full debt, you may still owe the difference.</p>

        <h2>Why People Let It Get This Far</h2>

        <p>I ask every homeowner I speak with in this situation: &quot;Why did you wait?&quot;</p>

        <p>The answer is almost always the same: property tax debt doesn&apos;t feel urgent the way mortgage debt does. Nobody&apos;s calling every day. The consequences build slowly. And the notices, those official government envelopes, are easy to put in a drawer when you&apos;re already stressed about other things.</p>

        <p>But here&apos;s the thing about counties: they&apos;re not banks. They&apos;re not trying to work with you. They want the money. Period. And the legal machinery they use is slow enough to give you false comfort, and then fast enough to catch you completely off guard.</p>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased since 2018</div></div>
          <div><div className={articleStyles.statNumber}>18-21</div><div className={articleStyles.statLabel}>Days average close time</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years buying in Baltimore Maryland and Surrounding Areas</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/tax-lien-options.jpeg" alt="Your Options When Facing a Tax Lien" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>The Option You Probably Don&apos;t Know About</h2>

        <p>Here&apos;s what Dorothy&apos;s grandson learned, and what I confirm to every homeowner in this situation: <strong>you can sell a house with a tax lien attached.</strong></p>

        <p>Most homeowners assume a lien makes the property unsellable. It doesn&apos;t. What happens is this: at closing, the title company pays off all outstanding liens, including the tax lien, from the sale proceeds. The county gets paid. The lien is cleared. The buyer receives clean title.</p>

        <p>You get whatever equity remains after the lien payoff and closing costs.</p>

        <p>For Dorothy, that math looked like this:</p>

        <div className={articleStyles.pullquote}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', fontStyle: 'normal' }}>Financial Case Study: Dorothy Greene</h3>
          <p style={{ fontSize: '17px', marginBottom: '10px', fontStyle: 'normal' }}>Tax lien: $14,800 (3 years of unpaid taxes + penalties)</p>
          <p style={{ fontSize: '17px', marginBottom: '0', fontStyle: 'normal' }}>Lien paid at closing by American Home Advisor. Dorothy kept her equity and moved on.</p>
        </div>

        <p>That&apos;s money she would have lost entirely if the county had proceeded to the tax sale.</p>

        <p>The catch? She had 45 days. A traditional listing wasn&apos;t going to close in time.</p>

        <p>American Home Advisor coordinated with the county, made a fair cash offer, paid the $14,800 lien at closing, and Dorothy walked away with her equity intact. She moved into a senior living community near her daughter.</p>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>My grandson called American Home Advisor on a Tuesday. By Thursday they were at my kitchen table explaining everything in plain English, not legal talk, not pressure, just &apos;here&apos;s what&apos;s happening and here&apos;s what we can do.&apos; We closed in 21 days. The county got their money, and I got enough to move into a beautiful place five minutes from my daughter. I should have asked for help sooner, but I&apos;m grateful I asked when I did.</div>
          <div className={articleStyles.testimonialAuthor}>Dorothy G., Baltimore</div>
        </div>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>Is a Cash Sale Right for Your Situation?</h2>

        <p>Let me be honest about when it makes sense and when it doesn&apos;t, because I&apos;d rather lose a deal than give someone bad advice.</p>

        <p><strong>A cash sale makes sense if:</strong></p>
        <ul>
          <li>You owe $3,000+ in tax debt you can&apos;t pay off in a lump sum</li>
          <li>A lien has already been filed, or foreclosure proceedings have started</li>
          <li>You&apos;re on a tight timeline (30-60 days or less)</li>
          <li>You have equity in the property that would be lost in a tax sale</li>
          <li>You want to walk away clean and move on</li>
        </ul>

        <p><strong>It probably doesn&apos;t make sense if:</strong></p>
        <ul>
          <li>You can pay off the tax debt and want to keep the house</li>
          <li>You have substantial equity and 4-6 months to list traditionally</li>
          <li>Your lien amount is small relative to the value, a home equity line might be an easier solution</li>
        </ul>

        <p>The key question to ask yourself: <em>Can I come up with this money in the next 60-90 days?</em> If yes, do it. If no, then every month you wait is money walking out the door.</p>

        <div className={styles.imageWrap}>
          <img src="/images/predatory-warning.jpeg" alt="5 Warning Signs of a Predatory Cash Buyer" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaBox}>
          <h2>Get a Real Cash Offer From American Home Advisor</h2>
          <p>We handle tax lien situations regularly. Tell us about your property, we&apos;ll give you an honest number within 24 hours and let you know if it makes sense for your situation.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Response in 24 hours &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <h2>The Bottom Line</h2>

        <p>Property tax liens don&apos;t go away on their own. They don&apos;t negotiate. They compound. And the counties that file them have a legal process that ends in one place: you losing your house at a fraction of its value.</p>

        <p>But if you have equity in that home, and most homeowners do, you have a way out that preserves what you&apos;ve built. Use it before the decision gets made for you.</p>

        <p>Give us a call. We&apos;ll tell you what your home is worth, what we can offer, and whether a cash sale makes sense for your situation. We&apos;ve been doing this since 2018. We&apos;ve seen every version of this story.</p>

        <p>Don&apos;t wait until it&apos;s too late.</p>

        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018 | <strong>(443) 407-8421</strong></p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute legal, financial, or tax advice. Individual results vary. Property tax laws and timelines vary by jurisdiction, consult a qualified attorney or tax professional before making decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function TaxLienPage() {
  return (
    <SurveyProvider config={pageConfigs['tax-lien']}>
      <TaxLienContent />
    </SurveyProvider>
  );
}
