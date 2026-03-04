'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '../../context/SurveyContext';
import { pageConfigs } from '../../lib/surveyConfig';
import SurveyModal from '../../components/SurveyModal/SurveyModal';
import StickyBar from '../../components/StickyBar/StickyBar';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import articleStyles from '../../components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function MedicalFinancialContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>MEDICAL &amp; FINANCIAL HARDSHIP</div>
        <h1 className={articleStyles.title}>The Hardest Call I Get Is From Homeowners Who Beat Cancer and Got Buried in Bills.</h1>
        <p className={articleStyles.subtitle}>After buying 450+ homes in Baltimore Maryland and Surrounding Areas, I want to share a strategy that&apos;s helped hundreds of families escape medical debt, without filing bankruptcy.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 18, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in Baltimore Maryland and Surrounding Areas since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/medical-debt.jpeg" alt="100 Million Americans Carry Medical Debt" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>I get a lot of calls that stay with me. This is one of the types that never gets easier.</p>
        <p>James Hawkins, 58, had a heart attack followed by triple bypass surgery. Even with insurance, he and his wife Linda were left with $94,000 in medical bills. Linda had to quit her job to care for him during recovery. With only James&apos;s disability income, they fell behind on their $1,650 mortgage. Collection agencies called daily.</p>
        <p>They owned their home in Baltimore outright. Hundreds of thousands in equity sitting in a house while bills piled up.</p>
        <p>His insurance had covered the major procedures. But the deductibles, the out-of-network specialists, the medications they didn&apos;t cover, the facility fees nobody told them about upfront, it added up to a number that made them sick in a different way.</p>
        <p>And they were still drowning, because that equity was locked up in the walls while collection agencies called four times a day.</p>

        <h2>Why Medical Debt Is Different From Every Other Debt</h2>
        <p>I want to say something that I think a lot of financial advisors won&apos;t say clearly: <strong>medical debt is not your fault.</strong></p>
        <p>You didn&apos;t go out and buy things you didn&apos;t need. You were fighting to stay alive. The American healthcare system, with its impossible maze of deductibles, out-of-network surprises, and facility fees buried in the fine print, is designed to overwhelm people who are already overwhelmed.</p>
        <p>And yet the system treats medical debt the same as any other debt. Collection calls. Credit damage. Wage garnishment. Bankruptcy threats.</p>
        <p>Nobody deserves that after beating a life-threatening illness.</p>

        <div className={articleStyles.pullquote}>
          &quot;I spent three months fighting for my life. When I got home, I had to fight just to keep a roof over our heads. That&apos;s not how recovery is supposed to work.&quot;
          <div className={articleStyles.pullquoteAuthor}>James H., Baltimore homeowner</div>
        </div>

        <h2>The Strategy Most Financial Advisors Won&apos;t Bring Up</h2>
        <p>When James and Linda explained their situation, I asked one question: &quot;How much equity do you have in your home?&quot;</p>
        <p>The answer: they owned the home outright, free and clear. Hundreds of thousands in equity.</p>
        <p>That equity was just sitting there, doing nothing, while they struggled to keep up with medical debt payments and watched interest compound on a balance that didn&apos;t seem to shrink.</p>
        <p>Here&apos;s the strategy I walked them through, and that I&apos;ve helped hundreds of families use over the years:</p>
        <p><strong>Sell the home for cash. Use the equity to eliminate the debt. Rent for 2-3 years while your credit rebuilds. Buy again on your terms.</strong></p>
        <p>That&apos;s it. It sounds simple, and in concept it is. The hard part is emotional, not financial.</p>

        <h2>The Math James and Linda Didn&apos;t Want to Do But Had to</h2>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.testimonialText} style={{ fontStyle: 'normal', paddingLeft: '0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', borderBottom: '2px solid #1a3d6b', paddingBottom: '10px' }}>Option 1: Keep the house. Keep paying the debt.</h3>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Monthly mortgage: $1,650</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Monthly medical debt payments: $1,450+</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Combined: $2,850+/month on one disability income</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Time to pay off medical debt (at current rate with interest): 10-12 years</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Total paid on original $94K debt: ~$145,000+</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Credit score: damaged for years from late payments and collections</p>
          </div>
        </div>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.testimonialText} style={{ fontStyle: 'normal', paddingLeft: '0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', borderBottom: '2px solid #1a3d6b', paddingBottom: '10px' }}>Option 2: Sell for cash. Eliminate the debt now.</h3>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Home: Owned outright with significant equity</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Cash offer received: Fair market value, as-is</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Medical debt elimination: $94,000</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Money left after paying all medical bills: Enough to rent comfortably, rebuild credit, and start fresh</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; Rental costs for 2-3 years: manageable, and no more collection calls</p>
            <p style={{ fontSize: '17px', marginBottom: '8px' }}>&#8226; James can focus on recovery. Linda can return to work on her terms.</p>
          </div>
        </div>

        <p>When they saw those two paths written out side by side, James said something I&apos;ll never forget: &quot;I spent months fighting to have a future. Why am I letting a debt payment steal it?&quot;</p>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased since 2018</div></div>
          <div><div className={articleStyles.statNumber}>14-21</div><div className={articleStyles.statLabel}>Days average close time</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years buying in Baltimore Maryland and Surrounding Areas</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/medical-debt-crisis.png" alt="The Medical Debt Crisis - Statistics" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>The Question I Get: &quot;Won&apos;t I Lose Money Versus Listing Traditionally?&quot;</h2>
        <p>Maybe a little. Probably less than you think. Let me show you the real comparison.</p>
        <p>If James and Linda listed traditionally, they&apos;d face 6% realtor commission, closing costs, and 90 days of collection calls and penalties while the house sits on market.</p>
        <p>The cash offer meant zero repairs. Zero staging. Seventeen days to close instead of 3-4 months.</p>
        <p>They netted more with cash, and they eliminated $94,000 in debt in seventeen days instead of enduring years of collection calls.</p>
        <p>That&apos;s not always the case. But in situations where someone needs to act fast and medical debt is compounding, the math often surprises people.</p>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>What About Bankruptcy?</h2>
        <p>Every time I explain this, someone asks: &quot;Why not just file bankruptcy and wipe out the medical debt?&quot;</p>
        <p>Here&apos;s my honest answer, as someone who&apos;s worked with families on all sides of this situation:</p>
        <ul>
          <li>Bankruptcy stays on your credit for <strong>10 years</strong> (not 7, that&apos;s a common misconception)</li>
          <li>Chapter 7 bankruptcy has income limits you may not qualify for</li>
          <li>Chapter 13 requires a 3-5 year repayment plan, you&apos;re still paying</li>
          <li>You may lose the house anyway if you can&apos;t sustain the mortgage post-bankruptcy</li>
          <li>Legal fees run $1,500-$3,500 upfront</li>
          <li>It&apos;s public record, it affects job applications, apartment rentals, everything</li>
        </ul>
        <p>Using home equity to eliminate debt is not bankruptcy. It&apos;s a strategic financial decision. You exit cleanly, keep your dignity, and control your timeline.</p>

        <h2>James and Linda&apos;s Outcome</h2>
        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>We closed in 17 days. That same week, Linda called every collection agency and paid them off one by one. She said it was the most satisfying afternoon of her life. We&apos;re in a smaller place now, but we sleep through the night. No more calls. No more letters. We&apos;re starting over, and that&apos;s enough.</div>
          <div className={articleStyles.testimonialAuthor}>James &amp; Linda H., Baltimore</div>
        </div>

        <h2>Is This Right for You?</h2>
        <p>I&apos;ll be straight with you, the same way I am with everyone who calls us.</p>
        <p><strong>This strategy makes sense if:</strong></p>
        <ul>
          <li>You owe $30,000+ in medical debt with no realistic path to pay it off in 3 years</li>
          <li>Your mortgage + medical payments are consuming more than 50% of your take-home income</li>
          <li>You have at least $40,000-$60,000 in home equity</li>
          <li>You can rent comfortably for 2-4 years while your credit recovers</li>
          <li>You&apos;re willing to make a strategic trade, the house now, for freedom and a clean future</li>
        </ul>
        <p><strong>It probably doesn&apos;t make sense if:</strong></p>
        <ul>
          <li>You can realistically manage both payments without destroying your quality of life</li>
          <li>You have other assets (retirement accounts, investments) you haven&apos;t explored first</li>
          <li>Your equity is minimal and the sale won&apos;t make a meaningful dent</li>
        </ul>

        <div className={styles.imageWrap}>
          <img src="/images/know-options.jpeg" alt="Know Your Options Before You Sell" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaBox}>
          <h2>See What Your Home Is Worth. No Obligation.</h2>
          <p>We&apos;ll give you a real number in 24 hours. If it makes sense, great. If it doesn&apos;t, we&apos;ll tell you that too. That&apos;s how we&apos;ve done business for 9.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Response in 24 hours &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <h2>The Bottom Line</h2>
        <p>You survived something most people can&apos;t imagine. You don&apos;t deserve to spend the next decade being punished by a healthcare system that wasn&apos;t designed with you in mind.</p>
        <p>Your home has equity. That equity exists to help you, and right now, it might be the most powerful financial tool you have.</p>
        <p>Call us. We&apos;ll be honest about what we can offer and honest about whether it actually makes sense for your situation. We&apos;ve been doing this since 2018. We&apos;ve seen every version of this story.</p>
        <p>And we&apos;re rooting for you.</p>
        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018 | <strong>(443) 407-8421</strong></p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute financial, medical, or legal advice. Individual results vary. Consult qualified professionals before making major financial decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function MedicalFinancialPage() {
  return (
    <SurveyProvider config={pageConfigs['medical-financial']}>
      <MedicalFinancialContent />
    </SurveyProvider>
  );
}
