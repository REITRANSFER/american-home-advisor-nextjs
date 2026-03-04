'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import StickyBar from '@/components/StickyBar/StickyBar';
import AddressInput from '@/components/AddressInput/AddressInput';

function HomeContent() {
  const { openSurvey } = useSurvey();
  const [topAddress, setTopAddress] = useState('');

  function handleTopAddressSelect(addr) {
    setTopAddress(addr);
    setTimeout(() => openSurvey(addr), 200);
  }

  return (
    <>
      <StickyBar triggerElementId="topCta" />
      <div className={styles.container}>
        {/* HEADLINE */}
        <div className={styles.headlineWrapper}>
          <div className={styles.eyebrow}>&#9888;&#65039; URGENT WARNING FOR Baltimore Maryland and Surrounding Areas HOMEOWNERS</div>
          <h1>Cash Buyers Are Using This &quot;Inspection Trick&quot; to Steal $50K-$150K From Sellers.. Here&apos;s How to Stop It</h1>
          <p className={styles.subheadline}>Local homebuyer with 8+ years experience exposes the bait-and-switch tactic that&apos;s costing Maryland sellers a fortune. And reveals the ONE question that stops it cold.</p>
          <p className={styles.authorLine}>By Joe Estefan | American Home Advisor | 7-min read</p>
        </div>

        {/* Main Image */}
        <div className={styles.imageWrap}>
          <Image src="/images/handshake.jpeg" alt="Joe Estefan with homeowners" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        {/* TOP CTA */}
        <div className={styles.topCta} id="topCta">
          <h3>We&apos;ll Beat Any Serious Written Cash Offer on Your Home</h3>
          <p>Tired of bait-and-switch buyers? Get a REAL offer from a trusted Baltimore Maryland and Surrounding Areas homebuyer with 8+ years in business.</p>
          <div className={styles.topAddressForm}>
            <AddressInput
              id="topAddress"
              placeholder="Enter your property address..."
              value={topAddress}
              onChange={setTopAddress}
              onAddressSelect={handleTopAddressSelect}
              inputClassName={styles.topAddressInput}
            />
            <button className={styles.topAddressButton} onClick={() => {
              if (topAddress.trim()) openSurvey(topAddress);
            }}>
              Get My Cash Offer &#8594;
            </button>
          </div>
          <p className={styles.trustLine}>&#10003; No games, no surprises &#8226; 450+ Baltimore Maryland and Surrounding Areas homes purchased since 2018</p>
        </div>

        {/* PROBLEM */}
        <p className={styles.lead}>If you&apos;re considering a cash offer for your Baltimore Maryland and Surrounding Areas home, what I&apos;m about to tell you could save you six figures.</p>
        <p>My name is Joe Estefan. I&apos;ve been buying homes in Maryland since 2018. American Home Advisor has purchased over 450+ properties.</p>
        <p>And I&apos;m sick of watching sellers get scammed.</p>
        <p>Last week alone, I got three calls from homeowners who&apos;d been burned by the same trick. Different buyers, same playbook:</p>

        <div className={styles.proofBox}>
          <p><strong>Initial offer: A strong number.</strong> Higher than expected. Seller accepts, stops talking to other buyers, tells family it&apos;s done.</p>
          <p><strong>Three weeks later:</strong> &quot;Based on our inspection, we need to reduce our offer by $40,000.&quot;</p>
          <p><strong>A $40,000 drop.</strong> For &quot;problems&quot; they knew about from day one.</p>
        </div>

        <h2>The &quot;Inspection Excuse&quot; Is Stealing From Baltimore Maryland and Surrounding Areas Sellers Every Single Day</h2>
        <p>Here&apos;s how it works:</p>
        <p><strong>Step 1:</strong> They make an aggressive offer. High enough to get your attention, get you to sign their contract, and stop you from talking to other buyers.</p>
        <p><strong>Step 2:</strong> Vague contract language. &quot;Subject to inspection.&quot; &quot;Pending walk-through.&quot; Sounds reasonable, right?</p>
        <p><strong>Step 3:</strong> They wait. Two or three weeks pass. You get emotionally invested. You make plans based on that number. You tell people it&apos;s done.</p>
        <p><strong>Step 4:</strong> They &quot;find problems.&quot; Bring in an inspector. Take photos of things you already disclosed. Act surprised. Act concerned.</p>
        <p><strong>Step 5:</strong> The lowball. &quot;We still want your house, but we can only pay what it&apos;s worth in this condition.&quot; They know you&apos;ve wasted weeks. They&apos;re counting on you feeling desperate.</p>
        <p>It&apos;s a hustle. And it&apos;s working because most sellers don&apos;t know to look for it.</p>

        {/* TESTIMONIAL 1 */}
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>&quot;We had two other buyers back out after their &apos;inspections.&apos; Both dropped their offers by over $30,000. American Home Advisor gave us a straightforward number on day one and that&apos;s exactly what we got at closing. I only wish we&apos;d found them sooner.&quot;</p>
          <p className={styles.testimonialAuthor}>Michelle D., Baltimore</p>
        </div>

        <h2>Why Most Sellers Fall For It</h2>
        <p>You&apos;re not stupid. You&apos;re just trusting.</p>
        <p>When a buyer makes you a number that solves your problems, you <em>want</em> to believe it&apos;s real. You need it to be real.</p>
        <p>And these buyers know that. They&apos;re not inspecting your property. They&apos;re inspecting your desperation.</p>
        <p><strong>The red flags most sellers miss:</strong></p>
        <ul className={styles.checkList}>
          <li>They make an offer without asking detailed questions about your property&apos;s condition</li>
          <li>They refuse to provide proof of funds or closing timeline upfront</li>
          <li>Their contract has vague &quot;inspection contingency&quot; language with no specifics</li>
          <li>They can&apos;t (or won&apos;t) give you references from past sellers</li>
          <li>They avoid committing to a final number. Everything is &quot;up to&quot; or &quot;depending on&quot;</li>
        </ul>
        <p>If you see even one of these, run.</p>

        {/* AUTHORITY */}
        <div className={styles.authorityBox}>
          <Image src="/images/headshot.jpeg" alt="Joe Estefan" width={90} height={90} style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
          <div className={styles.authorityContent}>
            <h3>About Joe Estefan</h3>
            <p>Owner &amp; CEO of American Home Advisor. 8+ years buying homes in the Baltimore Maryland and Surrounding Areas. 450+ properties purchased. Licensed and insured. Advocate for honest home buying practices.</p>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.statsGrid}>
          <div>
            <div className={styles.statNumber}>450+</div>
            <p className={styles.statLabel}>Homes purchased since 2018</p>
          </div>
          <div>
            <div className={styles.statNumber}>8+</div>
            <p className={styles.statLabel}>Years in Baltimore Maryland and Surrounding Areas market</p>
          </div>
          <div>
            <div className={styles.statNumber}>4.8&#9733;</div>
            <p className={styles.statLabel}>Average Google rating</p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/images/cash-sales-2025.jpeg" alt="32% of home purchases were cash sales in 2025" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>How American Home Advisor Does It Differently</h2>
        <p>I&apos;m not going to tell you we&apos;re perfect. But I will tell you we&apos;re honest.</p>
        <p>When we make an offer, we mean it. Here&apos;s our process:</p>
        <ul className={styles.checkList}>
          <li><strong>We ask the hard questions upfront.</strong> Roof condition? Foundation? HVAC age? Plumbing issues? We don&apos;t wait until after you sign to &quot;discover&quot; these things.</li>
          <li><strong>We look at the property first.</strong> Either in person or through detailed photos. We don&apos;t make blind offers.</li>
          <li><strong>We give you our final number.</strong> Not a range. Not &quot;up to.&quot; The actual cash amount we&apos;re prepared to pay. In writing.</li>
          <li><strong>We don&apos;t renegotiate.</strong> Unless you lied about condition (which almost never happens), our number doesn&apos;t change. What we offer is what we pay.</li>
          <li><strong>We provide proof immediately.</strong> Proof of funds, closing timeline, recent references. No games, no stalling.</li>
        </ul>

        <h2>The ONE Question That Separates Real Buyers From Pretenders</h2>
        <p>Before you accept any cash offer, ask this:</p>
        <div className={styles.proofBox}>
          <p><strong>&quot;Is this your final offer, or will it change after the inspection?&quot;</strong></p>
        </div>
        <p>Watch their reaction.</p>
        <p>A real buyer will say: <em>&quot;This is our final number, assuming the property is as you&apos;ve described it.&quot;</em></p>
        <p>A pretender will give you some version of: <em>&quot;Well, we need to see it first., we&apos;ll have to inspect., it depends on what we find...&quot;</em></p>
        <p>Translation: They&apos;re planning to lowball you later.</p>

        {/* SCARCITY */}
        <div className={styles.scarcityBox}>
          <h3>&#9200; Our Guarantee: We&apos;ll Beat Their Offer</h3>
          <p>Got a written cash offer from another buyer? Show it to us. If it&apos;s legitimate, we&apos;ll beat it. Or tell you it&apos;s a fair deal. No games.</p>
        </div>

        {/* TESTIMONIAL 2 */}
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>&quot;From the first phone call to the closing table, everything happened exactly like they said it would. They came out, walked through the property, gave us a fair offer, and three weeks later we had our check. No runaround, no games.&quot;</p>
          <p className={styles.testimonialAuthor}>Robert T., Baltimore</p>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/images/trad-vs-cash.jpeg" alt="Traditional Sale vs Cash Sale comparison" width={680} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        <h2>Zero Risk. Zero Obligation. Zero Pressure.</h2>
        <p>Here&apos;s what happens when you fill out our 60-second assessment:</p>
        <ul className={styles.checkList}>
          <li>We&apos;ll ask about your property&apos;s condition (honest answers only. We can handle the truth)</li>
          <li>We&apos;ll review comparable sales in your area</li>
          <li>We&apos;ll give you a real cash offer within 24 hours</li>
          <li>You can accept, decline, or think about it. Zero pressure</li>
          <li>If you accept, we&apos;ll close on YOUR timeline (as fast as 7 days or as slow as you need)</li>
        </ul>
        <p><strong>No fees. No commissions. No repairs required. No showings. No uncertainty.</strong></p>

        {/* FINAL CTA */}
        <div className={styles.finalCta}>
          <h2>Get a REAL Cash Offer That Won&apos;t Change Later</h2>
          <p>Tell us about your property. We&apos;ll beat any legitimate written offer you&apos;ve received. And our number won&apos;t drop after &quot;inspection.&quot;</p>
          <button className={styles.ctaButton} onClick={() => openSurvey()}>Get My Cash Offer Now &#8594;</button>
          <p className={styles.trustLine}>&#10003; 24-hour response &#8226; &#10003; No obligation &#8226; &#10003; We mean what we say</p>
        </div>

        {/* P.S. */}
        <div className={styles.psSection}>
          <p><strong>P.S.</strong> If you&apos;re talking to other cash buyers right now, please ask them that one question: <strong>&quot;Is this your final offer, or will it change after the inspection?&quot;</strong> Their answer will tell you everything.</p>
          <p><strong>P.P.S.</strong> We&apos;re not right for everyone. If your property needs major structural work or has legal issues, we might not be the best fit. But we&apos;ll tell you that upfront. Not three weeks later after wasting your time.</p>
          <p className={styles.disclaimer}>American Home Advisor operates in Maryland. Licensed and insured. This article represents the opinion and experience of Joe Estefan and does not constitute an offer to purchase real estate.</p>
        </div>
      </div>
      <SurveyModal />
    </>
  );
}

export default function Home() {
  return (
    <SurveyProvider config={pageConfigs.home}>
      <HomeContent />
    </SurveyProvider>
  );
}
