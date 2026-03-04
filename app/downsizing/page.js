'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function DownsizingContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>DOWNSIZING &amp; RETIREMENT</div>
        <h1 className={articleStyles.title}>After Buying 450+ Homes, Here&apos;s What I Tell Every Senior Who Says &quot;The House Is Too Much Now.&quot;</h1>
        <p className={articleStyles.subtitle}>Your home served you beautifully for decades. But when the maintenance, the stairs, and the carrying costs start working against you, it&apos;s worth knowing your real options.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 21, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in Baltimore Maryland and Surrounding Areas since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/seniors-downsizing.jpeg" alt="Why Seniors Are Selling - The Downsizing Trend" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>Most people don&apos;t call me because they want to sell their house. They call me because the house they raised their family in, the one they&apos;ve loved for 20 or 30 or 40 years, has quietly become a burden they didn&apos;t expect.</p>
        <p>That&apos;s not a failure. It&apos;s just life changing around you while the house stays the same.</p>
        <p>I&apos;ve sat across the kitchen table from hundreds of homeowners who are 65, 70, 80 years old. Good people. Smart people. People who worked hard and paid off their mortgage and did everything right. And the thing they all say, in some version or another, is this: &quot;I love this house. But it doesn&apos;t fit my life anymore.&quot;</p>
        <p>If that sounds familiar, I want to walk you through what I&apos;ve learned, what the real numbers look like, and when selling makes sense... and when it doesn&apos;t.</p>

        <h2>The House That Once Fit Your Life May Not Fit It Anymore</h2>
        <p>You bought this home when the kids were young. Four bedrooms made sense then. The big yard was perfect for summer barbecues and birthday parties. The two-story layout didn&apos;t bother your knees back then.</p>
        <p>Now? The kids have been gone for years. Two of those bedrooms haven&apos;t been used in a decade. The yard takes three hours to mow. The stairs creak, and so do you.</p>
        <p>I say that with warmth, not judgment. Because downsizing isn&apos;t giving up on your home. It&apos;s choosing the next chapter on your terms. There&apos;s a big difference between being forced out and making a thoughtful decision to simplify your life while you still have the energy and the equity to do it well.</p>
        <p>The people who do this right are the ones who see their house for what it is now, not what it was 30 years ago. It&apos;s a 4-bedroom building that costs real money to heat, cool, insure, and maintain. And every dollar it costs to keep is a dollar that isn&apos;t working for your retirement, your health, or your peace of mind.</p>

        <h2>What Your House Is Really Costing You</h2>
        <p>I always ask homeowners in this situation to add up what the house actually costs them each year. Not the mortgage, because most seniors have paid theirs off. The other costs. The ones that show up every single month whether you notice them or not.</p>
        <p>For a typical 4-bedroom home in the Baltimore Maryland and Surrounding Areas area, here&apos;s what I see:</p>
        <ul>
          <li>Property taxes: $4,200/year</li>
          <li>Homeowner&apos;s insurance: $2,800/year</li>
          <li>Utilities (heating, cooling, electric, water): $4,800/year</li>
          <li>Routine maintenance (lawn care, gutter cleaning, plumbing, etc.): $3,600/year</li>
        </ul>
        <p>That&apos;s <strong>$15,400 per year.</strong> Just to keep the house standing. Not to improve it. Not to update it. Just to maintain the status quo.</p>
        <p>Over five years? That&apos;s $77,000. Over ten years? $154,000. Money that could be funding your retirement, covering healthcare costs, or simply sitting in a savings account giving you options.</p>
        <p>And that&apos;s before we talk about the big-ticket repairs that every aging house eventually needs. A new roof: $18,000. An HVAC replacement: $12,000. A kitchen that hasn&apos;t been touched since the 90s: $25,000. Bathroom updates: $15,000. That&apos;s $70,000 in deferred maintenance that doesn&apos;t go away just because you ignore it. It shows up the day you try to sell.</p>
        <p>Then there&apos;s the cost you can&apos;t put a dollar sign on: the physical toll. The worry every time it snows and the walkway needs shoveling. The anxiety when the basement makes a strange noise. The exhaustion of keeping a 2,400-square-foot house clean when it&apos;s just one or two of you living there.</p>

        <div className={articleStyles.pullquote}>
          &quot;I kept telling myself I&apos;d deal with the house &apos;next year.&apos; But every year the list got longer and I had less energy to handle it. Selling was the first time in years I felt like I was moving forward instead of just keeping up.&quot;
          <div className={articleStyles.pullquoteAuthor}>Beverly P., Baltimore</div>
        </div>

        <h2>Why Traditional Selling Feels Wrong to Most Seniors</h2>
        <p>Here&apos;s something I hear constantly from people over 65: &quot;I know I should probably sell, but I just can&apos;t picture going through that whole process.&quot;</p>
        <p>And honestly? I understand why. Traditional home selling was designed for people in their 30s and 40s who can handle the chaos. Think about what it actually involves:</p>
        <p><strong>Decluttering 30-40 years of memories.</strong> Every closet, every drawer, every corner of the attic and basement. On someone else&apos;s timeline. Because the realtor says the house needs to look &quot;staged&quot; and &quot;minimal&quot; before the first showing.</p>
        <p><strong>Strangers walking through your home.</strong> Multiple times a week, sometimes with only a few hours&apos; notice. Opening your closets. Peeking in your bathroom. Making comments about your wallpaper. For 60 to 90 days, your home is not your own anymore.</p>
        <p><strong>Repairs and updates you can&apos;t afford.</strong> The realtor says the kitchen needs updating, the carpet needs replacing, and the bathrooms are &quot;dated.&quot; Suddenly you&apos;re being asked to spend $30,000-$50,000 on a house you&apos;re trying to leave.</p>
        <p><strong>And the waiting.</strong> The average traditional home sale takes 90 to 120 days from listing to closing. That&apos;s 3 to 4 months of your house being on display, your schedule revolving around showings, and your life in limbo.</p>
        <p>For a 35-year-old couple with energy to spare, that&apos;s a hassle. For a 75-year-old couple dealing with health concerns, it can be genuinely overwhelming.</p>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased since 2018</div></div>
          <div><div className={articleStyles.statNumber}>26</div><div className={articleStyles.statLabel}>Days average close, downsizing</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years buying in Baltimore Maryland and Surrounding Areas</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/home-equity-retirement.png" alt="Your Home Equity - What It Could Mean For Retirement" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>Harold and Beverly&apos;s Story</h2>
        <p>Harold and Beverly Patterson are both 74. They lived in their 4-bedroom colonial in Baltimore for 38 years. Raised three kids there. Hosted Thanksgiving every November. Watched grandchildren take their first steps in that living room.</p>
        <p>But over the past few years, the house started working against them instead of for them.</p>
        <p>Harold had a hip replacement two years ago. The stairs to the second floor became a daily obstacle course. Beverly, who&apos;d always handled the household, found herself managing the yard work, the gutter cleaning, the furnace maintenance, and the snow removal on her own. Their three kids live in three different states.</p>
        <p>The house needed work. Real work. The roof was 25 years old and the inspector quoted $18,000 to replace it. The HVAC system was 22 years old, running on borrowed time. The kitchen hadn&apos;t been updated since 1994. The bathrooms needed new fixtures, tile, and plumbing work.</p>
        <p>Total deferred maintenance: roughly $70,000.</p>
        <p>Beverly called a realtor, who told her the house could sell for a strong number... if they did the renovations first. &quot;You&apos;ll need to update the kitchen, replace the roof, and get a new HVAC before we list,&quot; the realtor said. &quot;Otherwise you&apos;re looking at a much lower number.&quot;</p>
        <p>Seventy thousand dollars they didn&apos;t have. And didn&apos;t want to spend.</p>
        <p>Meanwhile, here&apos;s what the house was costing them every single year:</p>
        <ul>
          <li>Property taxes: $4,200</li>
          <li>Insurance: $2,800</li>
          <li>Maintenance and upkeep: $8,400</li>
        </ul>
        <p><strong>$15,400 per year, every year.</strong> On a house that was too big, too difficult to maintain, and too far from their daughter in Maryland.</p>
        <p>They contacted American Home Advisor. We looked at the house, looked at the condition, and made a fair cash offer. <strong>As-is. No repairs. No showings. No strangers.</strong></p>
        <p>The house was fully paid off, so Harold and Beverly kept every dollar. They closed in 26 days. They moved into a single-story condo 10 minutes from their daughter. Monthly costs dropped from $1,283 to $620.</p>
        <p>Was the cash offer less than what a fully renovated sale might bring? After spending $70,000 on renovations, waiting 4 months for a buyer, and paying a 6% realtor commission? Let&apos;s do the math:</p>
        <ul>
          <li>Renovated sale price: Higher on paper</li>
          <li>Renovation costs: -$70,000</li>
          <li>Realtor commission (6%): -Thousands more</li>
          <li>Closing costs: -$5,000</li>
          <li>4 months of carrying costs during renovation + listing: -$5,133</li>
          <li><strong>Net after traditional sale: Less than the cash offer</strong></li>
        </ul>
        <p>Our cash offer actually netted them <strong>more</strong> than the traditional route. And they didn&apos;t have to spend $70,000 they didn&apos;t have, wait 4 months, or let a single stranger through their front door.</p>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>We thought selling to a cash buyer meant getting lowballed. But when we actually ran the numbers, we came out ahead. No repairs. No showings. No waiting. Harold and I were in our new condo within a month, ten minutes from our daughter. We should have done this two years ago.</div>
          <div className={articleStyles.testimonialAuthor}>Harold &amp; Beverly P., Baltimore</div>
        </div>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>Three Signs It Might Be Time</h2>
        <p>After buying 450+ homes, I&apos;ve noticed a pattern. The seniors who are happiest after selling are the ones who recognized one or more of these three signs early, before the situation forced their hand.</p>
        <p><strong>Sign 1: You can&apos;t maintain the house on your own anymore.</strong> The gutters need cleaning and you can&apos;t get on a ladder. The yard is overwhelming. Small repairs pile up into big ones because you don&apos;t have the energy (or the budget) to address them. If you&apos;re spending more time worrying about the house than enjoying it, that&apos;s a signal worth listening to.</p>
        <p><strong>Sign 2: A medical situation has made the house impractical.</strong> A hip replacement. A stroke. Arthritis that makes stairs dangerous. A spouse who needs a walker. Homes built for families aren&apos;t built for medical limitations. When your house becomes a safety risk, the house isn&apos;t the priority anymore. You are.</p>
        <p><strong>Sign 3: Your equity is trapped and you need it for the next stage of life.</strong> You&apos;re sitting on significant home equity, but you can&apos;t touch it without selling. That equity could fund a more comfortable living situation, cover healthcare costs, provide financial security, or simply give you breathing room. Equity that sits in a house isn&apos;t helping your life. Equity in the bank is.</p>

        <div className={styles.imageWrap}>
          <img src="/images/aging-vs-downsizing.jpeg" alt="Aging in Place vs Downsizing comparison" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>When Staying Put Makes More Sense</h2>
        <p>I&apos;ll say this directly, because I think honesty matters more than a sale: not every senior should sell their house right now.</p>
        <p>If you&apos;re healthy, if the house is manageable, if the costs don&apos;t stress your budget, and if you genuinely enjoy living there, stay. A house full of good memories is worth something that no financial calculation can capture.</p>
        <p>If you have family nearby who can help with maintenance and repairs, that changes the math significantly. If you&apos;ve already updated the house in recent years and it wouldn&apos;t need work to sell traditionally, a realtor might get you more money. If you&apos;re not in any rush and have no pressing medical or financial reasons to move, waiting is perfectly fine.</p>
        <p>I&apos;m not trying to buy every home. I&apos;m trying to help the people who genuinely need a simpler, faster path. And part of that is telling you honestly when you&apos;re not one of them.</p>

        <div className={articleStyles.ctaBox}>
          <h2>Find Out What Your Home Is Worth. No Obligation.</h2>
          <p>Tell us about your property. We&apos;ll give you a real cash offer within 24 hours so you can compare your options and make the best decision for your situation.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Response in 24 hours &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <h2>The Bottom Line</h2>
        <p>Your house gave you some of the best years of your life. You raised your family there. You built a life inside those walls. Nobody is asking you to forget that or diminish it.</p>
        <p>But a house is also a financial asset. And when that asset costs you $15,000 a year to maintain, needs $70,000 in repairs you can&apos;t afford, and no longer fits the way you actually live, keeping it isn&apos;t a badge of honor. It&apos;s a weight.</p>
        <p>Harold and Beverly waited two years longer than they should have. They spent over $30,000 in carrying costs during those two years while the house got harder, not easier. When they finally made the call, the only regret they had was not making it sooner.</p>
        <p>You&apos;ve earned the right to live comfortably. You&apos;ve earned the right to stop worrying about the roof, the furnace, and the property tax bill. You&apos;ve earned the right to be closer to your kids and grandkids, in a home that actually fits your life today.</p>
        <p>If any of this sounds like your situation, I&apos;d like to have a conversation. No pressure. No obligation. Just an honest look at the numbers so you can make the best decision for your family.</p>
        <p>You spent decades taking care of that house. Maybe it&apos;s time to let it take care of you one last time.</p>
        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018 | <strong>(443) 407-8421</strong></p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute legal or financial advice. Individual results vary. Consult qualified professionals before making decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function DownsizingPage() {
  return (
    <SurveyProvider config={pageConfigs.downsizing}>
      <DownsizingContent />
    </SurveyProvider>
  );
}
