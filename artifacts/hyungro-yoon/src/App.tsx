import { useState } from 'react';
import { Menu, X, ArrowUpRight, Download, Mail, MapPin, BookOpen, Microscope, GraduationCap, Fingerprint, Linkedin, FlaskConical, Newspaper } from 'lucide-react';
import PublicationSection from './PublicationSection';
import SectionHeading from './SectionHeading';

const nav = [
  ['About', '#about'], ['Research', '#research'], ['Publications', '#publications'],
  ['Teaching', '#teaching'], ['Experience', '#experience'], ['Contact', '#contact'],
];

const profileLinks = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=3rJQ8uwAAAAJ&hl=en',
    Icon: BookOpen,
  },
  {
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Hyungro-Yoon-2',
    Icon: FlaskConical,
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0002-7877-1249',
    Icon: Fingerprint,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hyungro-yoon-b31a3b198',
    Icon: Linkedin,
  },
];

const assetUrl = (asset: string) => `${import.meta.env.BASE_URL}assets/${asset}`;
const cvUrl = assetUrl('hyungro-yoon-cv.pdf');
const portraitUrl = assetUrl('hyungro-yoon-portrait.jpeg');
const featuredStudyFigureUrl = assetUrl('featured-study-figure.png');
const featuredStudyPdfUrl = assetUrl('featured-study.pdf');
const aamModelFigureUrl = assetUrl('aam-model-figure.png');
const ssiStallSetupUrl = assetUrl('ssi-stall-setup.jpg');
const ssiPosterUrl = assetUrl('ssi-poster.png');
const aiChatbotMockupUrl = assetUrl('ai-chatbot-mockup.png');

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">{children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-[100dvh] bg-background">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground" data-testid="link-skip-content">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 no-underline" aria-label="Hyungro Yoon, home" data-testid="link-home">
          <span className="grid h-8 w-8 place-items-center border border-primary/70 font-serif text-lg text-primary">Y</span>
          <span className="text-base font-semibold tracking-wide">HYUNGRO YOON</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, href]) => <a key={label} href={href} className="nav-link text-sm text-muted-foreground" data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>)}
        </nav>
        <a href={cvUrl} download className="hidden items-center gap-2 border border-primary/50 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary-hover hover:text-primary-foreground lg:flex" data-testid="link-download-cv">
          <Download size={13} /> Download CV
        </a>
        <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center border border-border text-foreground lg:hidden" data-testid="button-mobile-menu">
          {menuOpen ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-4 lg:hidden">
        <div className="grid grid-cols-2 gap-1">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="nav-link py-3 text-sm text-muted-foreground" data-testid={`link-mobile-nav-${label.toLowerCase()}`}>{label}</a>)}
          <a href={cvUrl} download className="flex items-center gap-2 py-3 text-sm text-primary" data-testid="link-mobile-download-cv"><Download size={14}/> Download CV</a>
        </div>
      </nav>}
    </header>

    <main id="main">
      <section id="top" className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_.85fr] md:gap-16 md:px-10 md:pb-28 md:pt-24">
        <div className="reveal order-2 md:order-1">
          <p className="text-sm text-muted-foreground">Communication · Michigan State University</p>
          <h1 className="mt-5 max-w-[740px] font-serif text-[clamp(3.4rem,9vw,7.2rem)] leading-[.88] tracking-[-.035em]">Hyungro<br/><span className="italic text-primary">Yoon</span></h1>
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-primary"/>
            <p className="text-sm text-muted-foreground">Ph.D. Candidate &amp; Graduate Teaching Assistant</p>
          </div>
          <p className="mt-8 max-w-[68ch] text-base leading-[1.7] text-muted-foreground md:text-lg">I study how social norms and persuasive messages shape health and environmental behavior, especially when cultural factors or emotions change what a message means.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#research" className="inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary-hover" data-testid="link-explore-research">Explore my research <ArrowUpRight size={14}/></a>
            <a href={cvUrl} download className="inline-flex items-center gap-3 border border-primary/60 px-5 py-3 text-sm text-primary transition-colors hover:bg-accent" data-testid="link-hero-cv">Curriculum vitae <Download size={14}/></a>
          </div>
          <div className="mt-12 border-t border-border pt-5 text-sm text-muted-foreground">
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-primary"/> East Lansing, Michigan</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={15} className="text-primary"/> Department of Communication</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-6">
              {profileLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-2 text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" data-testid={`link-profile-${label.toLowerCase().replace(' ', '-')}`}><Icon size={14}/>{label}</a>)}
            </div>
          </div>
        </div>
        <div className="reveal order-1 relative mx-auto w-full max-w-[410px] md:order-2" style={{ animationDelay: '120ms' }}>
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full border border-primary/55"/>
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img src={portraitUrl} alt="Portrait of Hyungro Yoon" width="900" height="900" className="h-full w-full object-cover object-center grayscale-[12%]"/>
            </div>
          </div>
          <div className="mt-3 border border-border bg-background px-4 py-3 md:absolute md:-bottom-8 md:-left-5 md:mt-0">
            <span className="block text-sm text-muted-foreground">Dissertation</span>
            <span className="mt-1 block text-base">Anger, injunctive norms, and activism intentions</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-5 md:px-10"><div className="section-rule"/></div>
      <section id="about" className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 md:grid-cols-[.72fr_1.28fr] md:gap-20 md:px-10 md:py-28">
        <SectionHeading number="01" className="mb-0">About</SectionHeading>
        <div className="max-w-[68ch]">
          <p className="text-lg leading-[1.7] text-foreground/90">I am a Ph.D. candidate in the Department of Communication at Michigan State University, where I also teach. My work asks how social norms and emotional appeals influence health and environmental behaviors and how those effects shift across groups and cultural settings.</p>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground">Drawing on theories of social norms (e.g., the theory of normative social behavior [TNSB]) and cognitive-emotional theories of persuasion (e.g., the anger activism model [AAM]), I study health behaviors (e.g., drinking and disease prevention), environmental behaviors (e.g., water conservation), and the development and testing of persuasive campaigns. My work also includes cross-cultural comparisons and, more recently, the persuasive effects of messages generated or delivered by AI. In addition to cross-sectional surveys, online experiments, and field experiments, I use newer tools such as AI-generated video stimuli, virtual reality (VR) environments, and AI chatbots to design and test messages.</p>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground">My dissertation extends the anger activism model by examining how perceived injunctive norms, together with efficacy beliefs, shape whether anger leads to activism intentions.</p>
          <p className="mt-5 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">I am a member of the <a className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="https://marialapinski.wordpress.com/lapinskis-lions/" target="_blank" rel="noopener noreferrer" data-testid="link-hrcc-lions-about">HRCC Lions research team</a>, led by Dr. Maria K. Lapinski, and the <a className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="https://caselab.msu.edu/" target="_blank" rel="noopener noreferrer" data-testid="link-case-lab-about">CASE Lab</a>, led by Dr. Monique Turner.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {['Social norms & normative influence','Persuasion & emotional appeals','Health and environmental communication','Cross-cultural communication','AI and persuasion'].map((v, i)=><div className={`flex items-start gap-3 border-l border-primary/50 bg-card px-4 py-3 text-sm leading-[1.7] text-foreground ${i === 4 ? 'sm:col-span-2' : ''}`} key={v}><span className="text-sm text-muted-foreground">0{i+1}</span>{v}</div>)}
          </div>
        </div>
      </section>

      <section id="research" className="bg-secondary">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
          <SectionHeading number="02">Research</SectionHeading>
          <div className="space-y-5">
            <article className="grid gap-7 border border-border bg-card p-6 md:p-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
              <div>
                <div className="flex items-center justify-between"><Eyebrow>Norms · Groups · Behavior</Eyebrow><BookOpen size={19} className="text-primary"/></div>
                <h3 className="mt-6 max-w-lg font-serif text-3xl leading-tight md:text-4xl">When does a norm become persuasive?</h3>
                <p className="mt-5 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">I examine when perceived norms relate to intentions and behavior, and how referent groups, group identity, group orientation, and cultural context shape that relationship. This line of work spans disease prevention, binge drinking, and water conservation.</p>
                <div className="mt-8 flex flex-wrap gap-2">{['TNSB','Referent groups','Group identity','U.S.–Korea'].map(t=><span key={t} className="border border-border bg-accent px-2.5 py-1 text-sm text-accent-foreground">{t}</span>)}</div>
              </div>
              <div className="min-w-0">
                <p className="text-sm leading-6 text-muted-foreground">Featured study: <strong className="font-semibold text-foreground">Yoon, H.</strong>, Jang, Y., Lapinski, M. K., Turner, M. M., Peng, T. Q., &amp; Lee, S. (2024). <em>Health Communication, 39</em>(13), 3108–3121.{' '}
                  <a href="https://doi.org/10.1080/10410236.2024.2303826" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2" data-testid="link-featured-study-doi">DOI</a>
                </p>
                <figure className="mt-4">
                  <div className="border border-border bg-white p-2">
                    <img src={featuredStudyFigureUrl} alt="Figure 3. Interaction effects of descriptive norms and group orientation on physical distancing behaviors." width="1500" height="1013" loading="lazy" className="h-auto w-full object-contain" data-testid="img-featured-study-figure"/>
                  </div>
                  <figcaption className="mt-2 px-1 text-sm leading-5 text-muted-foreground">Figure 3. Interaction effects of descriptive norms and group orientation on physical distancing behaviors.</figcaption>
                  <p className="mt-1 px-1 text-sm leading-5 text-muted-foreground">Source: Yoon et al. (2024).</p>
                </figure>
                <a href={featuredStudyPdfUrl} download className="mt-2 inline-flex min-h-8 items-center gap-2 text-sm text-primary underline underline-offset-2" data-testid="link-featured-study-pdf">Download PDF (open access) <Download size={14}/></a>
              </div>
            </article>

            <article className="grid gap-7 border border-border bg-card p-6 md:p-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
              <div>
                <div className="flex items-center justify-between"><Eyebrow>Emotion · Efficacy · Action</Eyebrow><Microscope size={19} className="text-primary"/></div>
                <h3 className="mt-5 font-serif text-3xl">Anger in persuasion</h3>
                <p className="mt-4 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">With CASE Lab, I study anger-based persuasion through the anger activism model (AAM), focusing on how anger and efficacy interact to predict commitment to social activism. Across multiple experiments, I use nonlinear models of anger, average marginal effects (AMEs), and second differences to identify the levels of anger at which the effects of efficacy change.</p>
                <p className="mt-4 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">When efficacy beliefs are strong, the model predicts that prosocial outcomes increase steadily as anger increases. When efficacy beliefs are weak, it predicts an inverse U-shape: moderate anger promotes action, but extreme anger becomes less productive.</p>
              </div>
              <figure className="min-w-0">
                <div className="border border-border bg-white p-2">
                  <img src={aamModelFigureUrl} alt="Line graph of the anger activism model's predictions. With strong efficacy beliefs, prosocial outcomes rise linearly as anger increases from 0 to 100; with weak efficacy beliefs, outcomes rise, then fall, then level off below the scale midpoint." width="1030" height="716" loading="lazy" className="h-auto w-full object-contain" data-testid="img-aam-model-figure"/>
                </div>
                <figcaption className="mt-2 px-1 text-sm leading-5 text-muted-foreground">Predictions of the anger activism model (AAM; Turner, 2007) for prosocial outcomes.</figcaption>
              </figure>
            </article>

            {/* Desktop: text and chatbot mockup stacked on the left, SSI images spanning both rows on the right. Mobile: text, SSI images, then chatbot (same order as the paragraph). */}
            <article className="grid items-start gap-7 border border-border bg-card p-6 md:p-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-x-10 lg:gap-y-8">
              <div className="lg:col-start-1 lg:row-start-1">
                <Eyebrow>Campaigns · AI</Eyebrow>
                <h3 className="mt-4 font-serif text-3xl">From formative work to feedback</h3>
                <p className="mt-4 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">I contribute to campaign research, including the Shorter Shower Initiative and a six-wave collegiate social-norms campaign study. More recently, I have begun to examine whether AI can help correct normative misperceptions, for example, how people respond to descriptive norm feedback delivered through conversations with a relational AI chatbot.</p>
                <div className="mt-5 flex gap-3 border-l-2 border-primary/40 pl-4" data-testid="news-ssi">
                  <Newspaper size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true"/>
                  <p className="text-sm leading-6 text-muted-foreground">
                    <span className="block font-mono text-xs uppercase tracking-[.2em] text-primary">In the news</span>
                    <a href="https://statenews.com/article/2025/02/msus-shorter-shower-initiative-works-to-reduce-excessive-use-of-heated-water" target="_blank" rel="noopener noreferrer" className="mt-1 inline text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary" data-testid="link-news-statenews">MSU Shorter Shower Initiative works to reduce excessive use of heated water</a>
                    <span className="block">The State News · February 24, 2025</span>
                  </p>
                </div>
              </div>
              <figure className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                {/* Each image's flex-grow equals its aspect ratio (380/730, 1100/1640), so side by side they render at the same height, uncropped. max-w caps that height at 380px. */}
                <div className="flex max-w-[501px] flex-row items-start gap-3">
                  <a href={ssiStallSetupUrl} target="_blank" rel="noopener noreferrer" aria-label="Open full-size Shorter Shower Initiative stall setup image in a new tab" className="block min-w-0 flex-[0.5205_1_0%] border border-border bg-white p-2" data-testid="link-ssi-stall-image">
                    <img src={ssiStallSetupUrl} alt="Shower stall with a digital water meter above the showerhead, and a round shower timer, an instruction card, and a poster mounted on the tiled wall." width="380" height="730" loading="lazy" className="block h-auto w-full object-contain" data-testid="img-ssi-stall"/>
                  </a>
                  <a href={ssiPosterUrl} target="_blank" rel="noopener noreferrer" aria-label="Open full-size Shorter Shower Initiative poster image in a new tab" className="block min-w-0 flex-[0.6707_1_0%] border border-border bg-white p-2" data-testid="link-ssi-poster-image">
                    <img src={ssiPosterUrl} alt="Poster titled 'Quickies are good for the planet' with a playlist of three songs, the carbon emissions saved by getting out of the shower before each song ends, and the line 'Heating water is a major source of carbon emissions.'" width="1100" height="1640" loading="lazy" className="block h-auto w-full object-contain" data-testid="img-ssi-poster"/>
                  </a>
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">Shorter Shower Initiative field experiment. Left: a shower stall in the timer + message condition; a water meter installed above the showerhead recorded water use for each shower. Right: the poster used in this condition (7-minute version for women&apos;s bathrooms; the men&apos;s version recommended 6 minutes). The QR code that linked to the playlist is not shown.</figcaption>
              </figure>
              <figure className="min-w-0 lg:col-start-1 lg:row-start-2">
                <a href={aiChatbotMockupUrl} target="_blank" rel="noopener noreferrer" aria-label="Open full-size AI chatbot mockup image in a new tab" className="block max-w-[480px] border border-border bg-white p-2" data-testid="link-ai-chatbot-image">
                  <img src={aiChatbotMockupUrl} alt="Mockup of a chat window with an AI chat assistant. A student writes that it feels like everyone drinks a lot on weekends. The assistant acknowledges the feeling, asks whether it can share what students reported, and then says that in a campus survey most students said they have 4 or fewer drinks when they go out, and that most people guess much higher." width="1120" height="760" loading="lazy" className="block h-auto w-full object-contain" data-testid="img-ai-chatbot"/>
                </a>
                <figcaption className="mt-2 px-1 text-sm leading-6 text-muted-foreground">Illustrative mockup of a relational AI chatbot delivering descriptive norm feedback in conversation. It is not an actual study stimulus.</figcaption>
              </figure>
            </article>
          </div>
          <div className="mt-8 flex justify-end border-t border-border pt-6">
            <a href="#publications" className="inline-flex min-h-8 items-center gap-2 text-sm text-primary underline underline-offset-4 hover:decoration-2" data-testid="link-see-publications">See publications <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </section>

      <PublicationSection cvUrl={cvUrl} />

      <section id="teaching" className="bg-secondary">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
          <SectionHeading number="04" note="Michigan State University, unless noted">Teaching</SectionHeading>
          <div className="grid gap-10 md:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="max-w-[68ch] text-base leading-[1.7] text-muted-foreground">As a graduate teaching assistant, I have supported undergraduate courses across organizational communication, methods, and human communication. In Summer 2026, I taught an online section of COM 240 as the instructor.</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Teaching interests: Persuasion · Health communication · Research methods · Cross-cultural communication</p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {[
                ['COM 240','Organizational Communication','Fall 2026 · Summer 2026 (Instructor, online) · Fall 2024'],
                ['COM 300','Methods of Communication Inquiry','Spring 2026 · Fall 2025 · Spring 2025'],
                ['COM 100','Human Communication','Summer 2024 · Spring 2024 · Fall 2023'],
                ['COMM 3710','Introduction to Quantitative Communication Research','Spring 2021 · University of Utah'],
              ].map(([code, title, term])=><article key={code} className="grid gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-5"><span className="text-sm font-semibold text-muted-foreground">{code}</span><div><h4 className="text-base">{title}</h4><p className="mt-1 font-mono text-xs leading-5 text-primary">{term}</p></div></article>)}
            </div>
          </div>

          <div className="mt-16" data-testid="student-feedback">
            <h3 className="text-sm font-semibold">Student feedback</h3>
            <div className="mt-5 grid gap-10 md:grid-cols-[.72fr_1.28fr]">
              <div className="self-start border border-border bg-card p-6">
                <p className="font-serif text-6xl leading-none text-primary">4.23<span className="ml-2 font-sans text-base text-muted-foreground">/ 5</span></p>
                <p className="mt-4 text-base leading-[1.6]">&ldquo;Hyungro Yoon created an atmosphere that supported my learning.&rdquo;</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Average rating across 10 end-of-term surveys, 2023&ndash;2026 (70 responses). 84% agreed or strongly agreed; none disagreed.</p>
                <p className="mt-4 border-t border-border pt-3 text-xs leading-5 text-muted-foreground">Source: Michigan State University Student Perceptions of Learning Survey</p>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {[
                  ['Hyungro Yoon was great. The recitations were very informational and he did a great job of engaging us students. He created a great environment where students wanted to interact and be involved in class every week. …', 'COM 240 · Fall 2024'],
                  ['Hyungro is amazing and helped us every step of the way!', 'COM 300 · Spring 2026'],
                  ['I really enjoyed this class. Being an older student already having a career in a professional setting, and being recently promoted, I found that all of the course work benefited me greatly and tied in to my work life. The assignments were engaging and helped me grow professionally.', 'COM 240 · Summer 2026 · Instructor, online'],
                ].map(([quote, source]) => <figure key={source} className="py-5">
                  <blockquote className="max-w-[62ch] font-serif text-xl leading-[1.45]">&ldquo;{quote}&rdquo;</blockquote>
                  <figcaption className="mt-2 font-mono text-xs leading-5 text-primary">{source}</figcaption>
                </figure>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-24">
        <SectionHeading number="05">Education &amp; experience</SectionHeading>
        <div className="grid gap-12 md:grid-cols-2">
          <div><h3 className="text-sm font-semibold">Education</h3><div className="mt-5 border-l border-border pl-6">
            {[
              ['2027 (expected)','Ph.D., Communication','Michigan State University · East Lansing, MI'],
              ['2026','Graduate Certificate, Health and Risk Communication','Michigan State University · East Lansing, MI'],
              ['2023','M.A., Communication','Michigan State University · East Lansing, MI'],
              ['2021','B.A., Communication; minor in Film Studies','University of Utah · Salt Lake City, UT'],
            ].map(([year, degree, school])=><article key={degree} className="relative pb-7 last:pb-0"><span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 bg-primary"/><span className="font-mono text-xs text-primary">{year}</span><h3 className="mt-1 text-base">{degree}</h3><p className="mt-1 text-base leading-[1.7] text-muted-foreground">{school}</p></article>)}
          </div></div>
          <div><h3 className="text-sm font-semibold">Industry experience</h3><div className="mt-5 border-l border-border pl-6">
            {[
              ['2022','Political Camp Intern',"Politician's Election Camp, South Korea"],
              ['2020–2021','Media Monitoring Account Executive','Edelman Korea'],
              ['2020–2021','Reporter Intern','Korea Congress Newspaper, South Korea'],
            ].map(([year, role, organization])=><article key={`${year}-${role}`} className="relative pb-7 last:pb-0"><span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 bg-primary"/><span className="font-mono text-xs text-primary">{year}</span><h4 className="mt-1 text-base">{role}</h4><p className="mt-1 text-base leading-[1.7] text-muted-foreground">{organization}</p></article>)}
          </div></div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-20">
          <div>
            <SectionHeading number="06" className="mb-5" inverse>Contact</SectionHeading>
            <p className="max-w-[68ch] text-base leading-[1.7]">For questions about my research, teaching, or academic work, please reach out by email.</p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="mailto:yoonhy12@msu.edu" className="inline-flex items-center gap-2 border border-primary-foreground/60 px-4 py-3 text-sm transition-colors hover:bg-primary-foreground hover:text-primary" data-testid="link-contact-email"><Mail size={15}/> yoonhy12@msu.edu</a>
              {profileLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/60 px-4 py-3 text-sm transition-colors hover:bg-primary-foreground hover:text-primary" data-testid={`link-contact-${label.toLowerCase().replace(' ', '-')}`}><Icon size={15}/>{label}</a>)}
            </div>
            <span className="text-sm">Department of Communication · Michigan State University</span>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-background">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-6 text-sm leading-[1.7] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <span>Hyungro Yoon · Ph.D. Candidate, Department of Communication, Michigan State University</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {profileLinks.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" data-testid={`link-footer-${label.toLowerCase().replace(' ', '-')}`}>{label}</a>)}
          <a href="https://marialapinski.wordpress.com/lapinskis-lions/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" data-testid="link-footer-hrcc-lions">HRCC Lions</a>
          <a href="https://caselab.msu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" data-testid="link-footer-case-lab">CASE Lab</a>
        </div>
      </div>
    </footer>
  </div>;
}

export default App;
