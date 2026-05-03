import "./memo.css";

const Index = () => {
  return (
    <main className="memo-root">
      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <div className="wordmark">Asmi</div>
          <div className="memo-label">
            Investor Memo
            <br />
            May 2026
          </div>
        </div>
        <h1 className="hero-line">
          AI that handles your personal chores
          <br />
          <em>in the physical world.</em>
        </h1>
        <p className="hero-sub">
          Voice-first AI that makes real-world calls on your behalf — books appointments,
          negotiates quotes, resolves issues — while you get on with your day. No app. No chatbot.
        </p>
      </header>

      {/* TRACTION BAR */}
      <section className="traction-bar" aria-label="Traction">
        <div className="traction-cell live">
          <div className="traction-num">2,000+</div>
          <div className="traction-label">
            Real-world tasks
            <br />
            executed
          </div>
          <div className="delta">↑ organic only</div>
        </div>
        <div className="traction-cell">
          <div className="traction-num">1,000</div>
          <div className="traction-label">
            On waitlist
            <br />
            and growing daily
          </div>
        </div>
        <div className="traction-cell">
          <div className="traction-num">$0</div>
          <div className="traction-label">
            Paid acquisition
            <br />
            spent to date
          </div>
        </div>
        <div className="traction-cell">
          <div className="traction-num">40%+</div>
          <div className="traction-label">
            Day-7 retention
            <br />
            first cohort
          </div>
        </div>
      </section>

      <div className="body">
        {/* TEAM */}
        <section className="section">
          <div className="section-tag">The team</div>
          <h2>
            Great at both. Distribution
            <br />
            <em className="accent-em">and</em> product execution.
          </h2>

          <div className="team-wrap">
            {/* RISHI */}
            <div className="founder-row">
              <div className="founder-id">
                <div className="founder-role">Co-Founder · CEO</div>
                <div className="founder-name">Rishi</div>
                <div className="founder-tag">
                  2x founder. Built in one of the world's toughest consumer markets.
                </div>
              </div>
              <div className="founder-stats">
                <div className="fstat">
                  <div className="fstat-val accent">Asia's Largest</div>
                  <div className="fstat-label">
                    Appliances platform
                    <br />
                    built &amp; scaled
                  </div>
                </div>
                <div className="fstat">
                  <div className="fstat-val">600M+</div>
                  <div className="fstat-label">
                    Consumers reached
                    <br />
                    across Asia
                  </div>
                </div>
                <div className="fstat">
                  <div className="fstat-val gold">~$100M</div>
                  <div className="fstat-label">
                    Raised from SoftBank,
                    <br />
                    Intel CEO, DoorDash &amp; Zoom founders
                  </div>
                </div>
                <div className="fstat">
                  <div className="fstat-val">Forbes</div>
                  <div className="fstat-label">
                    30 Under 30 Asia
                    <br />
                    #9 in Hurun's U35 India list
                  </div>
                </div>
              </div>
            </div>

            {/* SATWIK */}
            <div className="founder-row last">
              <div className="founder-id">
                <div className="founder-role">Co-Founder · CTO</div>
                <div className="founder-name">Satwik</div>
                <div className="founder-tag">
                  One of the top AI researchers in agentic systems.
                </div>
              </div>
              <div className="founder-stats">
                <div className="fstat">
                  <div className="fstat-val accent">40+</div>
                  <div className="fstat-label">
                    Highly cited papers
                    <br />
                    on large action models
                  </div>
                </div>
                <div className="fstat">
                  <div className="fstat-val">
                    FAIR &amp;<br />DeepMind
                  </div>
                  <div className="fstat-label">
                    Frontier AI research
                    <br />
                    at Meta &amp; Google
                  </div>
                </div>
                <div className="fstat">
                  <div className="fstat-val gold">
                    Meta<br />Glasses
                  </div>
                  <div className="fstat-label">
                    Consumer-grade agentic
                    <br />
                    infra built at scale
                  </div>
                </div>
                <div className="fstat">
                  <div className="fstat-val">CMU PhD</div>
                  <div className="fstat-label">
                    Best PhD Thesis Award
                    <br />
                    International Olympiad medalist
                  </div>
                </div>
              </div>
            </div>

            <div className="backer-row">
              <div className="backer-label">Previously backed by</div>
              <div className="backer-names">
                <div className="backer-pill">SBI (Softbank)</div>
                <div className="backer-pill">Intel CEO</div>
                <div className="backer-pill">Doordash Founder</div>
                <div className="backer-pill">Zoom Founder</div>
                <div className="backer-pill">5 Decacorn Consumer Founders</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE ROUND — moved after team */}
        <section className="section">
          <div className="section-tag">The round</div>
          <h2>$300k raised. $25M cap.</h2>

          <div className="round-block compact">
            <div className="round-top">
              <div>
                <div className="round-closed-label">● Pre-seed · Closed</div>
                <div className="round-headline">
                  Led by people who've built consumer at the frontier.
                </div>
                <div className="round-body">
                  Firm led by Jack Brody (CPO at Suno AI, former CPO at Snap) — alongside founders
                  from top AI labs.
                </div>
              </div>
              <div className="round-num-block">
                <div className="round-num">$300k</div>
                <div className="round-cap">
                  SAFE · $25M cap · No discount
                </div>
              </div>
            </div>

            <div className="round-goal">
              <div className="round-goal-text">
                One objective: get to <strong>50,000 active users</strong> and prove the network
                loop compounds. <strong>US public launch now. India in Q4.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* THESIS */}
        <section className="section">
          <div className="section-tag">The thesis</div>
          <h2>
            A hundred companies are building AI assistants.
            <br />
            <em className="accent-em">All of them stop at the screen.</em>
          </h2>
          <div className="thesis">
            <p>
              You still make the call. You still sit on hold. You still follow up.{" "}
              <strong>10% of our waking hours go to life admin</strong> — scheduling, coordinating,
              chasing, booking — and no AI has solved it.
            </p>
            <p style={{ marginTop: 20 }}>
              <strong>Asmi does.</strong> It calls places. It calls people. It gets things done in
              the real world while you go about your day.
            </p>
          </div>
        </section>

        {/* WHY NOW */}
        <section className="section">
          <div className="section-tag">Why now</div>
          <h2>Three forces converging.</h2>
          <div className="why-now-grid">
            <div className="why-cell">
              <div className="why-num">01</div>
              <div className="why-title">Voice AI finally works in real time</div>
              <div className="why-body">
                Sub-75ms latency TTS. Multilingual. Human-like. The infrastructure to run a voice
                agent at consumer scale didn't exist 18 months ago.
              </div>
            </div>
            <div className="why-cell">
              <div className="why-num">02</div>
              <div className="why-title">iMessage and chat apps are the distribution layer</div>
              <div className="why-body">
                No app install. No account. An iMessage window is the entire onboarding.
              </div>
            </div>
            <div className="why-cell">
              <div className="why-num">03</div>
              <div className="why-title">Physical world execution is completely unclaimed</div>
              <div className="why-body">
                ChatGPT owns research. Other Assistants are fighting for the digital admin pie.
                Nobody owns physical world execution.
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="section">
          <div className="section-tag">The product</div>
          <h2>One morning call. The day handles itself.</h2>
          <p className="section-lead">
            Asmi calls you every morning. You talk through what needs doing. Asmi makes the calls —
            to your CPA, your dentist, your plumber, your bank — while you go on with your day.
            Updates arrive on iMessage when tasks are done.
          </p>

          <div className="product-grid">
            <div className="product-cell">
              <div className="product-cell-title">Zero Friction Entry</div>
              <div className="product-cell-body">
                An iMessage window is the entire onboarding. First interaction completes in under
                30 sec followed by first call with Asmi. <strong>No data access required to get
                Asmi to work.</strong>
              </div>
            </div>
            <div className="product-cell">
              <div className="product-cell-title">Give task → forget → done</div>
              <div className="product-cell-body">
                Users mention something on call. Asmi works in the background — making outbound
                calls, navigating IVRs, following up — and sends an iMessage update when it's done.
              </div>
            </div>
            <div className="product-cell">
              <div className="product-cell-title">Available where people already are</div>
              <div className="product-cell-body">
                Asmi calls you every morning. You can call Asmi any time something comes up. Or
                text it on iMessage mid-day. Same intelligence, same context, every surface.
              </div>
            </div>
            <div className="product-cell">
              <div className="product-cell-title">Speaks your language</div>
              <div className="product-cell-body">
                Asmi speaks in the user's native language or a mix of them — English, Italian,
                Hindi, Spanish and 50 others. This is the global wedge.
              </div>
            </div>
          </div>
        </section>

        {/* NETWORK MECHANIC */}
        <section className="section">
          <div className="section-tag">Distribution mechanic</div>
          <h2>The product spreads itself.</h2>
          <div className="network">
            <div className="network-flow loop">
              <div className="nf-step">User gives task</div>
              <div className="nf-arrow">→</div>
              <div className="nf-step">Asmi calls their CPA</div>
              <div className="nf-arrow">→</div>
              <div className="nf-step">CPA also wants it</div>
              <div className="nf-arrow">→</div>
              <div className="nf-step">CPA calls their contacts</div>
              <div className="nf-arrow loop-arrow">↻</div>
            </div>
            <div className="network-stat">
              We spent <strong>$0 on user acquisition</strong>. Growth came entirely
              from Asmi making calls. Every call Asmi makes is a distribution event.
            </div>
          </div>
        </section>

        {/* BETA STORIES */}
        <section className="section">
          <div className="section-tag">Beta proof · this happened</div>
          <h2>Four stories from this week.</h2>
          <div className="stories tight">
            <article className="story">
              <div className="story-tag">Moving / logistics</div>
              <h3>Seven suppliers. Best price. Boxes ordered.</h3>
              <p>
                User was moving homes. Described requirements on morning call. Asmi called seven
                suppliers, collected quotes across sizes, recommended the best option, and placed
                the order once confirmed.
              </p>
              <div className="story-result">→ No apps opened. He just talked.</div>
            </article>
            <article className="story">
              <div className="story-tag">Emergency home repair</div>
              <h3>Five plumbers called. One at the door in two hours.</h3>
              <p>
                User told Asmi about a plumbing emergency. Asmi called five plumbers, negotiated
                price and timing, and had one confirmed and en route within two hours.
              </p>
              <div className="story-result">→ Update arrived via iMessage: "He's on his way."</div>
            </article>
            <article className="story">
              <div className="story-tag">Cross-border family care</div>
              <h3>Twice-daily check-ins. In Italian. From SF to Rome.</h3>
              <p>
                User in SF has Asmi call his elderly mother in Rome twice daily — in Italian —
                tracking medications and reordering when needed. He gets a summary every evening.
              </p>
              <div className="story-result">→ Peace of mind across time zones.</div>
            </article>
            <article className="story">
              <div className="story-tag">IVR / billing dispute</div>
              <h3>$47 charge. Carrier called. Charge reversed.</h3>
              <p>
                User noticed an unexpected $47 charge on their phone bill. Called Asmi to resolve
                this. Asmi called the carrier, navigated the IVR, waited on hold, disputed the
                charge with a rep, and got it reversed.
              </p>
              <div className="story-result">→ User found out over iMessage an hour later.</div>
            </article>
          </div>

          {/* What we learned — highlight one-liner */}
          <div className="learned-highlight">
            <span className="learned-tag">What we learned ·</span> The highest-intent moment is{" "}
            <strong>before</strong> users open anything. Proactive morning calls drive{" "}
            <strong>40%+ Day-7 retention</strong> vs. the 25% consumer app benchmark.
          </div>
        </section>

        {/* MARKET */}
        <section className="section">
          <div className="section-tag">Market</div>
          <h2>AI for physical world chores doesn't exist yet. We're building it.</h2>
          <div className="market-row">
            <div className="market-cell">
              <div className="market-size">$400B</div>
              <div className="market-desc">
                Personal services market
                <br />
                US alone
              </div>
              <div className="market-note">
                Home services, healthcare admin, financial coordination, travel, legal — tasks
                people currently pay humans or agencies to handle. US launch. India next: previously
                scaled to 600M consumers.
              </div>
            </div>
            <div className="market-cell">
              <div className="market-size">3.5B</div>
              <div className="market-desc">
                Global chat app users
                <br />
                (excl. China)
              </div>
              <div className="market-note">
                WhatsApp (2B), iMessage (1B+), Telegram (900M), Signal, Viber. No app install. No
                account. A phone number is the entire onboarding — zero friction distribution at
                global scale.
              </div>
            </div>
            <div className="market-cell">
              <div className="market-size market-size--small">wedge</div>
              <div className="market-desc" style={{ marginTop: 10 }}>
                Physical world AI
                <br />
                execution
              </div>
              <div className="market-note">
                ChatGPT, Claude, Perplexity — all stop at the screen. No AI is making autonomous
                outbound calls on behalf of users. The physical world execution category is wide
                open.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM BAR */}
      <footer className="bottom-bar">
        <div className="bottom-left">Asmi</div>
      </footer>
    </main>
  );
};

export default Index;
