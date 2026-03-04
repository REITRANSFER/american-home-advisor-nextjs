'use client';

import Image from 'next/image';
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function TiredLandlordContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>LANDLORD RESOURCES</div>
        <h1 className={articleStyles.title}>The &quot;Passive Income&quot; Lie That&apos;s Costing Small Landlords $8,000+ Per Year</h1>
        <p className={articleStyles.subtitle}>You bought a rental property to build wealth. Instead, you built a second job you can&apos;t quit. Here&apos;s the math nobody showed you before you signed.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 21, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <Image src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Has purchased 450+ homes from owners in every situation imaginable. Advocate for honest, no-pressure home buying.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/images/landlord-reality.jpeg" alt="The Reality of Being a Landlord in 2026" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>Somewhere around 2016, the internet decided that buying rental property was a guaranteed path to financial freedom. The YouTube gurus made it look easy. Buy a duplex. Rent both units. Collect checks. Retire early.</p>

        <p>Millions of people believed it. And for some of them, it worked.</p>

        <p>But here&apos;s what nobody filmed a YouTube video about: the landlords who did everything right and still ended up working harder than they did at their day job, for less money, with more stress, and zero &quot;passive&quot; anything.</p>

        <p>If you&apos;re reading this at 11pm after getting a text from your tenant about a leaking pipe... you already know which group you&apos;re in.</p>

        <p>I&apos;ve bought 450+ homes over 8+ years. A growing number of those sellers are small landlords with 1-4 units who are exhausted, underwater, or both. This article is for them. Maybe it&apos;s for you.</p>

        <h2>The Math That Made You a Landlord. The Math That&apos;s Breaking You Now.</h2>

        <p>Let&apos;s be honest about how this started.</p>

        <p>You ran the numbers. They looked great on paper. Purchase price, rental income, mortgage payment, property taxes, insurance. Subtract expenses from income. Positive cash flow. Done.</p>

        <p>The spreadsheet said you&apos;d clear $400-$800 per unit per month. Maybe more. The rental income would cover the mortgage and then some. In 15-20 years the property would be paid off and you&apos;d own a fully cash-flowing asset.</p>

        <p>Beautiful theory. Here&apos;s what the spreadsheet left out:</p>

        <ul>
          <li>Vacancy. Not one month every few years. Real vacancy. The kind where it takes 6-8 weeks to find a qualified tenant, and the unit sits empty the whole time.</li>
          <li>Turnover costs. New paint, new carpet, deep cleaning, minor repairs between tenants. $2,000-$5,000 every time someone moves out.</li>
          <li>Non-paying tenants. The ones who passed the credit check but stop paying at month four. Then you discover your state has a 4-6 month eviction backlog.</li>
          <li>Capital expenditures. The $14,000 plumbing repair. The $8,000 roof patch. The $6,500 HVAC replacement. These aren&apos;t emergencies. They&apos;re certainties.</li>
          <li>Property management. If you hire a manager, they take 8-12% off the top. If you don&apos;t, congratulations: you ARE the property manager.</li>
        </ul>

        <p>When you add it all up, that $800/month &quot;profit&quot; becomes $200. Or zero. Or negative.</p>

        <p>And negative is where a lot of small landlords live. They just haven&apos;t admitted it yet.</p>

        <h2>The Eviction Nightmare</h2>

        <p>Nothing breaks a landlord faster than a non-paying tenant they can&apos;t remove.</p>

        <p>Here&apos;s how it plays out in most states. Your tenant stops paying. You serve them a notice. They ignore it. You file for eviction. The court gives you a hearing date... in 8-12 weeks. The tenant shows up with a story. The judge grants a continuance. Another 4-6 weeks.</p>

        <p>Finally, you get the judgment. Now you file for the actual removal. The sheriff&apos;s office schedules the lockout... in another 3-4 weeks.</p>

        <p>Total time from first missed payment to vacant unit: 4-7 months. During all of that, you&apos;re still paying the mortgage, the taxes, the insurance, and the water bill. The tenant is living rent-free.</p>

        <p>And the cost? Between filing fees, attorney fees, and lost rent, a single eviction runs $4,000-$7,000. That&apos;s before you factor in the condition they leave the unit in.</p>

        <p>I&apos;ve seen landlords spend $4,500 on the eviction process only to walk into a unit with holes in every wall, missing appliances, and carpet that needs to be ripped out entirely. Another $8,000-$12,000 in repairs before you can even list the unit again.</p>

        <p>One bad tenant can wipe out two years of profit. Two bad tenants in a row can put you underwater permanently.</p>

        <div className={articleStyles.pullquote}>
          &quot;I did the math after my second eviction. Over 8 years of owning this duplex, I made negative $67,000. I would have been better off putting the down payment in a savings account and forgetting about it.&quot;
          <div className={articleStyles.pullquoteAuthor}>Ray D., Baltimore</div>
        </div>

        <h2>Why Most Landlords Don&apos;t Sell... Even When They Should</h2>

        <p>If the numbers don&apos;t work, why do people keep holding?</p>

        <p>Three reasons. And none of them are financial.</p>

        <p><strong>1. Sunk cost fallacy.</strong> You&apos;ve already spent $40,000 on repairs, dealt with three terrible tenants, and poured five years of your life into this property. Selling feels like admitting all of that was wasted. So you hold on, hoping next year will be different. It usually isn&apos;t.</p>

        <p><strong>2. Embarrassment.</strong> You told everyone at the dinner table you were a real estate investor. Your brother-in-law thought it was a bad idea. Selling feels like proving him right. So you keep the property and quietly bleed money to protect your ego.</p>

        <p><strong>3. Fear of selling with tenants in place.</strong> This is the big one. Most landlords assume they need to evict all tenants, renovate the property, and list it on the MLS to get a fair price. They look at that process and think: &quot;That&apos;s another $15,000-$20,000 and 6 months I don&apos;t have.&quot; So they do nothing.</p>

        <p>Here&apos;s the thing. That third reason? It&apos;s based on a false assumption. You don&apos;t need to evict anyone. You don&apos;t need to renovate anything. You can sell the property exactly as it sits, tenants included.</p>

        <p>Most landlords don&apos;t know that&apos;s an option. Now you do.</p>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased</div></div>
          <div><div className={articleStyles.statNumber}>19</div><div className={articleStyles.statLabel}>Days average close for rentals</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years in business</div></div>
        </div>

        <h2>Ray&apos;s Breaking Point</h2>

        <p>Ray Delgado is 52. Works as an operations manager for a logistics company. Good income. Stable career. In 2016, he bought a duplex because everyone told him rental income was the smart move.</p>

        <p>For the first three years, it was fine. Not great. Fine. Both units rented, tenants paying, small repairs here and there. His &quot;profit&quot; after mortgage, taxes, insurance, and maintenance was about $350/month combined. Not life-changing, but it felt like progress.</p>

        <p>Then everything stacked up at once.</p>

        <p>The tenant in Unit B stopped paying rent in June. $1,100/month, gone. Ray filed for eviction in August. The court hearing wasn&apos;t scheduled until November. The tenant hired a legal aid attorney who got a continuance. The new hearing was set for January. Then February.</p>

        <p>Meanwhile, in Unit A, a pipe burst in November. The plumber came out and gave Ray the news: the entire main drain line needed replacement. Cost: $14,000.</p>

        <p>Ray&apos;s property manager, who had been collecting 10% of rents for four years, quit. &quot;Not enough income to justify the work,&quot; they said. Now Ray was his own property manager again. Fielding calls. Coordinating contractors. Chasing down the tenant in Unit B who owed him four months of back rent.</p>

        <p>Let me show you what Ray&apos;s &quot;investment&quot; looked like at this point:</p>

        <ul>
          <li>Unit B rent lost (4+ months at $1,100): -$4,400 and climbing</li>
          <li>Eviction legal costs so far: -$3,200</li>
          <li>Unit A pipe repair: -$14,000</li>
          <li>Mortgage still due every month: -$1,650/mo</li>
          <li>Property taxes, insurance: -$450/mo</li>
          <li>Unit A tenant paying rent: +$1,100/mo</li>
        </ul>

        <p>Net monthly cash flow: negative $1,000. And that&apos;s before the $14K repair bill.</p>

        <p>His wife told him she was done. Not done with the marriage. Done with the tenant calls at 2am. Done with the stress. Done with the &quot;investment&quot; that was draining their savings account.</p>

        <p>That&apos;s when Ray called us.</p>

        <div className={styles.imageWrap}>
          <Image src="/images/selling-rental-options.jpeg" alt="Selling a Rental Property - Your Options" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>I owned that duplex for 8 years. I put in over $60,000 in repairs, dealt with two evictions, and spent every other weekend dealing with tenant issues. When I finally ran the real numbers, I&apos;d lost money every single year. American Home Advisor bought it with both tenants still in the units. Closed in 19 days. I put the $234,000 into index funds and now I earn $23,000 a year doing absolutely nothing. That&apos;s the passive income I was promised eight years ago.</div>
          <div className={articleStyles.testimonialAuthor}>Ray Delgado, Baltimore</div>
        </div>

        <h2>We Buy With Tenants In Place</h2>

        <p>This is the part that surprises most landlords: you do not need to evict your tenants before selling.</p>

        <p>You don&apos;t need to wait for leases to expire. You don&apos;t need to renovate. You don&apos;t need to deal with showings while someone is living in the unit.</p>

        <p>We buy properties with tenants in place. Paying tenants, non-paying tenants, tenants you haven&apos;t spoken to in months. It doesn&apos;t matter. We handle all of it after closing.</p>

        <p>Here&apos;s how Ray&apos;s numbers worked out:</p>

        <ul>
          <li>Duplex market value (fully renovated, fully occupied): Higher on paper</li>
          <li>Current reality: one non-paying tenant, one unit needing $14K in repairs</li>
          <li>Estimated eviction cost if Ray did it himself: $4,500 + 3-6 more months of lost rent</li>
          <li>Annual &quot;profit&quot; after all real expenses: negative $8,400</li>
          <li>Our cash offer: A fair number for the property as-is</li>
          <li>Time to close: 19 days</li>
        </ul>

        <p>Was the cash offer less than the theoretical market value? Yes. But that number required $14,000 in repairs, a completed eviction, a full renovation of Unit B, and 6-8 months of carrying costs while the property sat on the MLS.</p>

        <p>After all of that, Ray&apos;s realistic net on a traditional sale would have been close to the cash offer anyway. And he&apos;d have spent another 8 months of his life managing it.</p>

        <p>Instead, he closed in 19 days, put the proceeds into a low-cost index fund and now earns real passive income every year. No tenants. No toilets. No 2am phone calls.</p>

        <p>That&apos;s tens of thousands more per year than the duplex was generating.</p>

        <div className={styles.imageWrap}>
          <Image src="/images/inspection-trick.jpeg" alt="The Inspection Trick - How Dishonest Buyers Steal Your Equity" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>When Holding Makes More Sense</h2>

        <p>I want to be straight with you, because I think honesty matters more than making a deal.</p>

        <p>If your rental property is actually profitable... keep it. If your tenants pay on time, your property manager is competent, your maintenance costs are reasonable, and the numbers genuinely work... selling to a cash buyer doesn&apos;t make sense for you.</p>

        <p>Here&apos;s when holding is the right call:</p>

        <ul>
          <li>Your property generates consistent positive cash flow after ALL real expenses (not just mortgage vs. rent)</li>
          <li>You have a property manager you trust and the management fee doesn&apos;t eat your profit</li>
          <li>Your tenants are stable, paying, and low-maintenance</li>
          <li>You have cash reserves to handle major repairs without financial stress</li>
          <li>You genuinely don&apos;t mind being a landlord. Some people are built for it.</li>
        </ul>

        <p>But if you&apos;re reading this article at 11pm because you can&apos;t sleep thinking about your rental property... that&apos;s your answer. Your body is telling you what your spreadsheet won&apos;t.</p>

        <p>The property that was supposed to give you freedom has become a cage. And the key to that cage is simpler than you think.</p>

        <div className={articleStyles.ctaBox}>
          <h2>Find Out What Your Rental Is Worth. No Obligation.</h2>
          <p>Tell us about your property. We&apos;ll give you a real cash offer within 24 hours. Tenants in place, repairs needed, it doesn&apos;t matter. We buy it as-is.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;&#8226;&nbsp; &#10003; Tenants can stay &nbsp;&#8226;&nbsp; &#10003; Close in as few as 19 days</div>
        </div>

        <h2>The Bottom Line</h2>

        <p>You got into rental investing because you wanted financial freedom. What you got was a second job that doesn&apos;t respect your time, your weekends, or your sleep.</p>

        <p>That&apos;s not a personal failure. The &quot;passive income&quot; narrative sold you a half-truth. Rental properties CAN be great investments. But they require scale, systems, and a tolerance for chaos that most small landlords never signed up for.</p>

        <p>Ray spent 8 years learning that lesson. It cost him over $67,000 in real losses and thousands of hours he&apos;ll never get back. When he finally sold, the weight came off his shoulders the same day.</p>

        <p>If your rental is costing you more than it&apos;s making you, if your tenants are running the show, if your &quot;investment&quot; has become an obligation... you have the same option Ray did.</p>

        <p>Sell the property. Take the equity. Put it somewhere that actually works while you sleep.</p>

        <p>That&apos;s what passive income was supposed to look like all along.</p>

        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />American Home Advisor - Tired Landlord</p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor purchases properties for cash in as-is condition. This article represents the opinion and experience of Joe Estefan and does not constitute legal or financial advice. Ray Delgado&apos;s story is based on a real client (name changed for privacy). Individual results vary. Consult qualified professionals before making real estate or investment decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function TiredLandlordPage() {
  return (
    <SurveyProvider config={pageConfigs['tired-landlord']}>
      <TiredLandlordContent />
    </SurveyProvider>
  );
}
