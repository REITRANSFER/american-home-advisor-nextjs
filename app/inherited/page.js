'use client';

/* eslint-disable @next/next/no-img-element */
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import ArticleLayout from '@/components/ArticleLayout/ArticleLayout';
import articleStyles from '@/components/ArticleLayout/ArticleLayout.module.css';
import styles from './page.module.css';

function InheritedContent() {
  const { openSurvey } = useSurvey();

  return (
    <>
      <StickyBar />
      <ArticleLayout>
        <div className={articleStyles.categoryBadge}>INHERITED PROPERTY</div>
        <h1 className={articleStyles.title}>After Buying 450+ Homes, Here&apos;s What I Tell Every Person Who Just Inherited a House.</h1>
        <p className={articleStyles.subtitle}>Nobody prepares you for the financial weight of inheriting a family home. Here&apos;s the honest advice I give, including when selling for cash makes sense and when it doesn&apos;t.</p>
        <div className={articleStyles.byline}>By <strong>Joe Estefan</strong> | Owner &amp; CEO, American Home Advisor<br />February 20, 2026 | 7-minute read</div>

        <div className={articleStyles.authorBox}>
          <img src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} className={articleStyles.authorPhoto} />
          <div>
            <h3 className={articleStyles.authorName}>Joe Estefan</h3>
            <p className={articleStyles.authorBio}>Owner &amp; CEO of American Home Advisor. Buying homes in Baltimore Maryland and Surrounding Areas since 2018. Father, husband, and advocate for fair home buying practices.</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/inherited-homes.jpeg" alt="Inherited Homes in America - Statistics" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <p className={styles.lead}>Inheriting a home is supposed to be a blessing. Your parent or grandparent worked their entire life to own that house, and they left it to you because they loved you and wanted you to have something of value.</p>
        <p>But here&apos;s what nobody tells you at the funeral. That house is now costing you money every single month. And the longer you wait to figure out what to do with it, the more it eats into the very inheritance it was meant to be.</p>
        <p>I&apos;ve bought inherited properties from hundreds of families over 8+ years. Some were straightforward. Most were not. The pattern is almost always the same: grief clouds the decision, siblings disagree, the house sits vacant, and thousands of dollars quietly disappear while everyone tries to &quot;figure it out.&quot;</p>
        <p>I&apos;m going to walk you through exactly what I&apos;ve seen, what it actually costs, and when it makes sense to sell quickly versus hold on.</p>

        <h2>The Holding Cost Nobody Talks About</h2>
        <p>Here&apos;s the thing about an inherited house. The day you inherit it, the bills start. Doesn&apos;t matter if you live 10 minutes away or 10 states away. Doesn&apos;t matter if you haven&apos;t even started probate yet. The house doesn&apos;t care about your grief. It needs to be maintained.</p>
        <p>Let me show you what a typical vacant inherited home costs every month. These are real numbers I see constantly in Baltimore Maryland and Surrounding Areas:</p>
        <ul>
          <li>Property taxes: $380/month</li>
          <li>Homeowner&apos;s insurance (vacant home premium): $210/month</li>
          <li>Utilities to prevent pipe damage and maintain the property: $180/month</li>
          <li>Lawn care and basic exterior maintenance: $130/month</li>
          <li>Remaining mortgage interest still accruing: $500/month</li>
        </ul>
        <p>That&apos;s <strong>$1,400 every single month</strong>. And most people don&apos;t even realize it&apos;s happening because the costs are spread across different accounts, different billing cycles, different family members.</p>
        <p>Nine months of &quot;we&apos;ll figure it out later&quot;? That&apos;s $12,600 gone. Not invested. Not building equity. Just... gone. Burned on a house nobody is living in.</p>

        <div className={articleStyles.pullquote}>
          &quot;We kept saying &apos;next month&apos; for almost a year. Then I sat down and added up what the house had cost us while it sat empty. $12,600. Mom would have been furious.&quot;
          <div className={articleStyles.pullquoteAuthor}>Marcus W., Baltimore</div>
        </div>

        <h2>Why Probate Makes Everything Harder</h2>
        <p>If you&apos;ve inherited a house, you&apos;ve probably already heard the word &quot;probate&quot; more times than you&apos;d like. Let me simplify it.</p>
        <p>Probate is the legal process that transfers ownership of the house from the person who passed away to the heirs. Until probate is complete, you technically don&apos;t own the house. You can&apos;t sell it. You can&apos;t refinance it. You can&apos;t do much of anything with it legally.</p>
        <p>In most states, probate takes 6 to 12 months. Sometimes longer if the will is contested or if there&apos;s no will at all.</p>
        <p>Here&apos;s why that matters for your wallet: during those 6 to 12 months, the holding costs keep running. The house still needs insurance. Still needs the lawn mowed. Still needs the heat on in winter so the pipes don&apos;t burst. You&apos;re paying to maintain a property you can&apos;t even legally sell yet.</p>
        <p>The good news? Experienced cash buyers can work within the probate process. We do it regularly. We can make an offer during probate, structure the contract to close as soon as the court approves the transfer, and eliminate months of unnecessary waiting on the back end.</p>

        <h2>When Siblings Don&apos;t Agree</h2>
        <p>This is the number one problem I see with inherited properties. And I&apos;ll be honest with you... it&apos;s the one that costs families the most money.</p>
        <p>Here&apos;s how it usually goes. Mom passes. She leaves the house to her three kids equally. One sibling wants to sell immediately. One wants to keep it &quot;in the family.&quot; The third just wants their share of the money and doesn&apos;t care how it happens.</p>
        <p>Nobody is wrong. Everyone is grieving differently. Everyone has a different financial situation. And the house becomes the thing they fight about because it&apos;s easier to argue about a house than to process the fact that their mother is gone.</p>
        <p>I&apos;ve seen siblings who were close their entire lives stop speaking over an inherited house. Not because anyone was being selfish. Because grief makes everything harder and money makes everything personal.</p>
        <p>A cash sale resolves this in a way that nothing else can. Here&apos;s why: when a cash buyer makes an offer, it&apos;s a single number. There&apos;s no listing process to disagree about, no renovation decisions to fight over, no staging opinions, no &quot;should we wait for a better market&quot; debates. One number. Split it according to the will. Done.</p>
        <p>The house doesn&apos;t have to become the thing that tears your family apart.</p>

        <div className={articleStyles.stats}>
          <div><div className={articleStyles.statNumber}>450+</div><div className={articleStyles.statLabel}>Homes purchased since 2018</div></div>
          <div><div className={articleStyles.statNumber}>22</div><div className={articleStyles.statLabel}>Days average close, inherited homes</div></div>
          <div><div className={articleStyles.statNumber}>8+</div><div className={articleStyles.statLabel}>Years buying in Baltimore Maryland and Surrounding Areas</div></div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/probate-process.jpeg" alt="The Probate Process - What Most Heirs Don't Know" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>The Numbers That Made Marcus&apos;s Decision Easy</h2>
        <p>Let me tell you about Marcus and Denise Williams. Their mother passed away last year and left them her 1960s ranch-style home. Marcus lives in Baltimore. Denise lives two states away. The house had been in the family for over 40 years.</p>
        <p>The home was livable but seriously outdated. Original kitchen, single-pane windows, HVAC from 2004 that was on its last legs, a roof with maybe three years left. The kind of house that needs everything updated before a traditional buyer would touch it.</p>
        <p>For nine months, the house sat empty. Marcus and Denise couldn&apos;t agree on what to do. Marcus wanted to sell. Denise felt guilty about letting go of their childhood home. Neither one could afford to fly back regularly to manage a renovation. And neither one could afford to keep paying $1,400 a month on a house nobody was using.</p>
        <p>Here&apos;s the math they were facing:</p>
        <ul>
          <li>Home value if fully renovated: higher, but at what cost?</li>
          <li>Cost to renovate (kitchen, windows, HVAC, roof, cosmetics): $45,000 to $55,000</li>
          <li>Realtor commission at 6%: thousands more gone</li>
          <li>Closing costs: $4,500</li>
          <li>Carrying costs during 4 to 6 month renovation plus listing period: $11,200 to $16,800</li>
          <li>Net after everything: significantly less than they expected</li>
          <li>Timeline: 8 to 12 more months minimum</li>
        </ul>
        <p>Or they could take a fair cash offer. No renovation. No realtor. No listing. No flying back. Close in 22 days.</p>
        <p>After the small remaining mortgage payoff, the siblings split the proceeds and each walked away with more than the renovate-and-list path would have netted.</p>
        <p>Compare that to the renovate-and-list path: less per person, after spending 8 to 12 more months and fronting $50,000 in renovation money they didn&apos;t have.</p>
        <p>The &quot;lower&quot; cash offer actually put more money in their pockets. That&apos;s the part most people miss.</p>

        <div className={articleStyles.testimonial}>
          <div className={articleStyles.quoteMark}>&ldquo;</div>
          <div className={articleStyles.testimonialText}>Denise and I hadn&apos;t agreed on anything in nine months. The house was draining both of us. When American Home Advisor gave us a number, we finally had something concrete to look at instead of arguing about hypotheticals. We closed in 22 days. Neither of us ever had to fly back. Mom&apos;s house didn&apos;t become the thing that ruined our relationship, and that&apos;s worth more than any dollar amount.</div>
          <div className={articleStyles.testimonialAuthor}>Marcus W., Baltimore</div>
        </div>

        <div className={articleStyles.ctaWrapper}>
          <button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get a Written Cash Offer Within 24 Hours</button>
        </div>

        <h2>The Three Inherited Property Situations I See Most</h2>
        <p><strong>Situation 1: Out-of-state heirs.</strong> You inherited a house that&apos;s hours or states away from where you live. You can&apos;t manage a renovation remotely. You can&apos;t show up for contractor bids, realtor walkthroughs, or inspections. Every trip costs you time and money. A cash buyer handles everything locally. You sign the paperwork remotely. The money arrives in your account. You never have to make the drive.</p>
        <p><strong>Situation 2: Siblings who disagree.</strong> One wants to sell, one wants to keep it, one just wants their check. The longer you argue, the more the house costs all of you. A cash offer gives everyone a concrete number to evaluate. No more hypotheticals. No more &quot;what if we renovated&quot; debates that go nowhere. One number, split per the will, move forward.</p>
        <p><strong>Situation 3: The house needs too much work.</strong> Outdated kitchen, old roof, failing systems, maybe even code violations. The renovation estimate keeps climbing. Nobody wants to spend $50,000 fixing up a house just to sell it. And no traditional buyer is going to pay market value for a home that needs $45,000 in work. We buy as-is. Whatever condition it&apos;s in right now is the condition we buy it in.</p>

        <h2>When a Cash Sale Doesn&apos;t Make Sense</h2>
        <p>I say this to every family I talk to, because I think honesty matters more than a transaction.</p>
        <p>If the inherited home is in great shape, if it&apos;s in a strong market, if all the heirs agree, and if someone in the family lives close enough to manage a traditional listing... you might net more going the traditional route. And I&apos;ll tell you that directly.</p>
        <p>If there&apos;s no rush, if the holding costs are low, if the house would show well to retail buyers without significant work, listing with a good agent could be the better play.</p>
        <p>We&apos;re not trying to buy every inherited house. We&apos;re trying to help the families who are stuck. The ones bleeding $1,400 a month on a vacant house. The ones who can&apos;t get siblings to agree. The ones staring at a $50,000 renovation bill on a property they never planned to own.</p>
        <p>If that&apos;s you, we can help. If it&apos;s not, I&apos;ll tell you that too.</p>

        <div className={styles.imageWrap}>
          <img src="/images/inherited-holding-cost.jpeg" alt="The Hidden Cost of Holding an Inherited Property" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <div className={articleStyles.ctaBox}>
          <h2>Find Out What Your Inherited Home Is Worth. No Obligation.</h2>
          <p>Tell us about the property. We&apos;ll give you a real cash offer within 24 hours so you can compare your options and make the best decision for your family.</p>
          <button className={articleStyles.ctaButton} onClick={() => openSurvey()}>Start Free Assessment &#8594;</button>
          <div className={articleStyles.trustLine}>&#10003; No obligation &nbsp;•&nbsp; &#10003; Response in 24 hours &nbsp;•&nbsp; &#10003; 450+ homes purchased since 2018</div>
        </div>

        <h2>The Bottom Line</h2>
        <p>Your parent left you that house because they loved you. They didn&apos;t leave it so it could drain your savings, fracture your family, or become a source of stress for years.</p>
        <p>The house has value. That value belongs to you and your family. Getting it out shouldn&apos;t require a six-figure renovation, a year of your life, or a relationship with your sibling that never recovers.</p>
        <p>If you&apos;re stuck, if the house is sitting vacant, if siblings can&apos;t agree, if you&apos;re watching $1,400 a month disappear into a property nobody is using... call us. We&apos;ll tell you honestly what we can offer and whether it makes sense for your situation.</p>
        <p>Honor the inheritance by using it wisely. That&apos;s what they would have wanted.</p>
        <p style={{ marginTop: '40px' }}>Joe Estefan<br />Owner &amp; CEO, American Home Advisor<br />Serving Baltimore Maryland and Surrounding Areas since 2018 | <strong>(443) 407-8421</strong></p>
        <div className={articleStyles.ctaWrapper}><button className={articleStyles.inlineCtaBtn} onClick={() => openSurvey()}>Get Your Cash Offer Now &#8594;</button></div>
        <p className={articleStyles.disclaimer}><em>American Home Advisor has been purchasing homes in Maryland since 2018. This article represents the opinion and experience of Joe Estefan and does not constitute legal or financial advice. Individual results vary. Consult qualified professionals before making decisions.</em></p>
      </ArticleLayout>
      <SurveyModal />
    </>
  );
}

export default function InheritedPage() {
  return (
    <SurveyProvider config={pageConfigs.inherited}>
      <InheritedContent />
    </SurveyProvider>
  );
}
