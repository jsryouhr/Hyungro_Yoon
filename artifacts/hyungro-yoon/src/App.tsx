import { useState } from 'react';
import { Menu, X, ArrowUpRight, Download, Mail, MapPin, BookOpen, Microscope, GraduationCap, ChevronRight } from 'lucide-react';

const nav = [
  ['About', '#about'], ['Research', '#research'], ['Publications', '#publications'],
  ['Teaching', '#teaching'], ['Experience', '#experience'], ['Contact', '#contact'],
];

const assetUrl = (asset: string) => `${import.meta.env.BASE_URL}assets/${asset}`;
const cvUrl = assetUrl('hyungro-yoon-cv.pdf');
const portraitUrl = assetUrl('hyungro-yoon-portrait.jpeg');
const featuredStudyFigureUrl = assetUrl('featured-study-figure.png');
const featuredStudyPdfUrl = assetUrl('featured-study.pdf');
const aamModelFigureUrl = assetUrl('aam-model-figure.png');
const showerStallUrl = assetUrl('ssi-shower-stall.jpg');

const pubs = [
  {
    status: 'Published · 2025', title: 'Social norms for illegal hunting and patrolling to prevent it: Formative data for intervention design and communication campaigns.',
    authors: 'Lapinski, M. K., Heo, R., Liu, R. W., Kerr, J. M., Zhao, J., Bum, T., Wang, Y., Yoon, H., Hipple, S., & Lu, Z.',
    journal: 'Environmental Communication, 1–17.',
  },
  {
    status: 'Published · 2024', title: 'The Role of Collective Group Orientation and Social Norms on Physical Distancing Behaviors for Disease Prevention.',
    authors: 'Yoon, H., Jang, Y., Lapinski, M. K., Turner, M. M., Peng, T. Q., & Lee, S.',
    journal: 'Health Communication, 1–14.',
  },
  {
    status: 'Published · 2023', title: 'Moment-by-moment tracking of audience brain responses to an engaging public speech: Replicating the reverse-message engineering approach.',
    authors: 'Schmälzle, R., Liu, H., Delle, F. A., Lewin, K. M., Jahn, N. T., Zhang, Yoon, H., & Long, J.',
    journal: 'Communication Monographs, 1–25.',
  },
];

const inReview = [
  'Locating anger’s activation and efficacy thresholds: Two tests of the Anger Activism Model. — Turner, M. M., Yoon, H., Jeon, M., Cho, H. J., & Lim, J. I. · Communication Research',
];

const inPrep = [
  'The Shorter Shower Initiative: Using formative data to shape messages about water conservation.',
  'The anger defiance hypothesis: When discouraging efficacy fuels agency.',
  'Measuring emotional flow: Assessing self-report and psychophysiological indicators with multi-trait multi-measure methodology.',
  'Measuring campaign dose and its association with drinking norms and behavior: A six-wave trend study of a collegiate social-norms campaign.',
  'Cultural dynamics and social norms in binge drinking.',
  'Whose norms, whose group? The role of referent groups and group identity in normative influence on water conservation behavior.',
  'Not All Efficacy Is the Same: Disaggregating Self-Efficacy, Response Efficacy, and Retributive Efficacy in Anger-Based Persuasion.',
];

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">{children}</p>;
}

function SectionHeading({ number, children, note }: { number: string; children: string; note?: string }) {
  return <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
    <div className="flex items-baseline gap-4"><span className="font-mono text-xs text-primary">{number}</span><h2 className="font-serif text-4xl leading-none md:text-5xl">{children}</h2></div>
    {note && <span className="font-mono text-xs uppercase tracking-[.14em] text-primary">{note}</span>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-[100dvh] bg-background">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 no-underline" aria-label="Hyungro Yoon, home">
          <span className="grid h-8 w-8 place-items-center border border-primary/70 font-serif text-lg text-primary">Y</span>
          <span className="text-sm font-semibold tracking-wide">HYUNGRO YOON</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {nav.map(([label, href]) => <a key={label} href={href} className="nav-link font-mono text-xs uppercase tracking-[.12em] text-primary">{label}</a>)}
        </nav>
        <a href={cvUrl} download className="hidden items-center gap-2 border border-primary/50 px-4 py-2 font-mono text-xs uppercase tracking-[.12em] text-primary transition-colors hover:bg-primary-hover hover:text-primary-foreground md:flex" data-testid="link-download-cv">
          <Download size={13} /> Download CV
        </a>
        <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center border border-border text-foreground md:hidden" data-testid="button-mobile-menu">
          {menuOpen ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-4 md:hidden">
        <div className="grid grid-cols-2 gap-1">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="nav-link py-3 font-mono text-xs uppercase tracking-wider text-primary">{label}</a>)}
          <a href={cvUrl} download className="flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-wider text-primary"><Download size={14}/> Download CV</a>
        </div>
      </nav>}
    </header>

    <main id="main">
      <section id="top" className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_.85fr] md:gap-16 md:px-10 md:pb-28 md:pt-24">
        <div className="reveal order-2 md:order-1">
          <Eyebrow>Communication · Michigan State University</Eyebrow>
          <h1 className="mt-5 max-w-[740px] font-serif text-[clamp(3.4rem,9vw,7.2rem)] leading-[.88] tracking-[-.035em]">Hyungro<br/><span className="italic text-primary">Yoon</span></h1>
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-primary"/>
            <p className="font-mono text-xs uppercase tracking-[.14em] text-primary">Ph.D. Candidate &amp; Graduate Teaching Assistant</p>
          </div>
          <p className="mt-8 max-w-[68ch] text-base leading-[1.7] text-muted-foreground md:text-lg">I study how social norms and persuasive messages shape health and environmental behavior, especially when cultural factors or emotions change what a message means.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#research" className="inline-flex items-center gap-3 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[.12em] text-primary-foreground transition-colors hover:bg-primary-hover">Explore my research <ArrowUpRight size={14}/></a>
            <a href={cvUrl} download className="inline-flex items-center gap-3 border border-primary/60 px-5 py-3 font-mono text-xs uppercase tracking-[.12em] text-primary transition-colors hover:bg-accent">Curriculum vitae <Download size={14}/></a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5 text-base text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-primary"/> East Lansing, Michigan</span>
            <span className="inline-flex items-center gap-2"><GraduationCap size={15} className="text-primary"/> Department of Communication</span>
          </div>
        </div>
        <div className="reveal order-1 relative mx-auto w-full max-w-[410px] md:order-2" style={{ animationDelay: '120ms' }}>
          <div className="absolute -right-3 -top-3 h-full w-full border border-primary/55"/>
          <div className="relative aspect-[4/4.7] overflow-hidden bg-muted">
            <img src={portraitUrl} alt="Portrait of Hyungro Yoon" width="600" height="600" className="h-full w-full object-cover object-center grayscale-[12%]"/>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-foreground/80 p-5">
              <span className="font-mono text-xs uppercase tracking-[.15em] text-primary-foreground">Scholar · Educator</span>
              <span className="font-serif text-3xl italic text-primary-foreground">MSU</span>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-5 hidden border border-border bg-background px-4 py-3 md:block">
            <span className="block font-mono text-xs uppercase tracking-[.18em] text-primary">Current chapter</span>
            <span className="mt-1 block text-sm">Listening across contexts.</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-5 md:px-10"><div className="section-rule"/></div>
      <section id="about" className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 md:grid-cols-[.72fr_1.28fr] md:gap-20 md:px-10 md:py-28">
        <div><Eyebrow>01 / A little context</Eyebrow><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Research is about<br/><i className="text-primary">people in context.</i></h2></div>
        <div className="max-w-[68ch]">
          <p className="text-lg leading-[1.7] text-foreground/90">I am a Ph.D. candidate in the Department of Communication at Michigan State University, where I also teach. My work asks how social norms and emotional appeals influence health and environmental behaviors and how those effects shift across groups and cultural settings.</p>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground">Drawing on theories of social norms (e.g., the theory of normative social behavior [TNSB]) and cognitive-emotional theories of persuasion (e.g., the anger activism model [AAM]), I conduct cross-cultural comparisons and study health behaviors (e.g., drinking and disease prevention), environmental behaviors (e.g., water conservation), the development and testing of persuasive campaigns, and the persuasive effects of messages generated or delivered by AI. In addition to cross-sectional surveys, online experiments, and field experiments, I use newer tools such as AI-generated video stimuli, virtual reality (VR) environments, and AI chatbots to design and test messages.</p>
          <p className="mt-5 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">I am a member of the <a className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="https://marialapinski.wordpress.com/lapinskis-lions/" target="_blank" rel="noreferrer">HRCC Lions research team</a>, led by Dr. Maria K. Lapinski, and the <a className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="https://caselab.msu.edu/" target="_blank" rel="noreferrer">CASE Lab</a>, led by Dr. Monique Turner.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {['Social norms & normative influence','Persuasion & emotional appeals','Health and environmental communication','Cross-cultural communication','AI and persuasion'].map((v, i)=><div className={`flex items-start gap-3 border-l border-primary/50 bg-card px-4 py-3 text-base leading-[1.7] text-foreground ${i === 4 ? 'sm:col-span-2' : ''}`} key={v}><span className="font-mono text-xs text-primary">0{i+1}</span>{v}</div>)}
          </div>
        </div>
      </section>

      <section id="research" className="bg-secondary">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
          <SectionHeading number="02" note="Questions, not silos">Research program</SectionHeading>
          <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr]">
            <article className="border border-border bg-background p-6 md:p-9">
              <div className="flex items-center justify-between"><Eyebrow>Norms · Groups · Behavior</Eyebrow><BookOpen size={19} className="text-primary"/></div>
              <h3 className="mt-6 max-w-lg font-serif text-3xl leading-tight md:text-4xl">When does a norm become persuasive?</h3>
              <p className="mt-5 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">I examine when perceived norms relate to intentions and behavior, and how referent groups, group identity, group orientation, and cultural context shape that relationship. This line of work spans disease prevention, binge drinking, and water conservation.</p>
              <figure className="mt-7 overflow-hidden border border-border bg-white p-2">
                <img src={featuredStudyFigureUrl} alt="Figure 3. Interaction effects of descriptive norms and group orientation on physical distancing behaviors." width="1500" height="1013" loading="lazy" className="h-auto w-full"/>
                <figcaption className="px-2 py-2 font-mono text-xs leading-5 text-neutral-700">Figure 3. Interaction effects of descriptive norms and group orientation on physical distancing behaviors.</figcaption>
              </figure>
              <a href={featuredStudyPdfUrl} download className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.12em] text-primary hover:underline" data-testid="link-featured-study-pdf">Download featured study PDF <Download size={13}/></a>
              <div className="mt-8 flex flex-wrap gap-2">{['TNSB','Referent groups','Group identity','U.S.–Korea'].map(t=><span key={t} className="border border-border bg-accent px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent-foreground">{t}</span>)}</div>
            </article>
            <div className="grid gap-5">
              <article className="flex h-full flex-col border border-border bg-background p-6 md:p-8">
                <div className="flex items-center justify-between"><Eyebrow>Emotion · Efficacy · Action</Eyebrow><Microscope size={19} className="text-primary"/></div>
                <h3 className="mt-5 font-serif text-3xl">Anger in persuasion</h3>
                <p className="mt-4 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">With CASE Lab, I study anger-based persuasion through the anger activism model (AAM), focusing on how anger and efficacy interact to predict commitment to social activism. Across multiple experiments, I use nonlinear models of anger, average marginal effects (AMEs), and second differences to identify the levels of anger at which the effects of efficacy change.</p>
                <figure className="mt-auto pt-6">
                  <div className="border border-border bg-white p-2">
                    <img src={aamModelFigureUrl} alt="Line graph of the anger activism model's predictions. With strong efficacy beliefs, prosocial outcomes rise linearly as anger increases from 0 to 100; with weak efficacy beliefs, outcomes rise, then fall, then level off below the scale midpoint." width="1030" height="716" loading="lazy" className="h-auto w-full"/>
                  </div>
                  <figcaption className="mt-2 px-1 font-mono text-xs leading-5 text-muted-foreground">Predictions of the anger activism model (AAM; Turner, 2007) for prosocial outcomes.</figcaption>
                  <p className="mt-2 px-1 text-base leading-[1.7] text-muted-foreground">When efficacy beliefs are strong, the model predicts that prosocial outcomes increase steadily as anger increases. When efficacy beliefs are weak, it predicts an inverse U-shape: moderate anger promotes action, but extreme anger becomes less productive.</p>
                </figure>
              </article>
              <article className="flex h-full flex-col border border-border bg-background p-6 md:p-8">
                <Eyebrow>Campaigns · AI</Eyebrow>
                <h3 className="mt-4 font-serif text-3xl">From formative work to feedback</h3>
                <p className="mt-4 max-w-[68ch] text-base leading-[1.7] text-muted-foreground">I contribute to campaign research, including the Shorter Shower Initiative and a six-wave collegiate social-norms campaign study. More recently, I have begun to examine whether AI can help correct normative misperceptions, for example, how people respond to descriptive norm feedback delivered through conversations with a relational AI chatbot.</p>
                <figure className="mt-auto pt-6">
                  <div className="flex justify-center border border-border bg-white p-2">
                    <img src={showerStallUrl} alt="Photo of a dormitory shower stall with tiled walls. A small digital water meter is installed above the showerhead, and a round shower timer, an instruction card, and a poster titled 'Quickies are good for the planet' are mounted on the wall." width="676" height="901" loading="lazy" className="block h-auto max-w-full md:max-h-[420px]"/>
                  </div>
                  <figcaption className="mt-2 px-1 font-mono text-xs leading-5 text-muted-foreground">A shower stall in the timer + message condition of the Shorter Shower Initiative field experiment.</figcaption>
                  <p className="mt-2 px-1 text-base leading-[1.7] text-muted-foreground">A water meter installed between the shower arm and the showerhead recorded water use for each shower. In this condition, a shower timer, a card explaining how to use it, and a persuasive poster were placed on the stall wall.</p>
                </figure>
              </article>
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-5 border-t border-border pt-6 md:flex-row md:items-center">
            <p className="max-w-[68ch] text-base leading-[1.7] text-muted-foreground">A mix of cross-sectional surveys, online experiments, field experiments, and newer tools such as AI-generated stimuli, VR environments, and chatbots helps connect message design with real-world contexts.</p>
            <a href="#publications" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.14em] text-primary hover:underline">Browse scholarly work <ChevronRight size={14}/></a>
          </div>
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading number="03" note="Statuses are listed as in the CV">Selected scholarship</SectionHeading>
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3"><span className="h-2 w-2 bg-primary"/><h3 className="font-mono text-xs uppercase tracking-[.16em]">Published work</h3></div>
          <div className="divide-y divide-border border-y border-border">
            {pubs.map(p=><article key={p.title} className="paper-row grid gap-3 py-6 md:grid-cols-[150px_1fr] md:gap-8">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{p.status}</span>
              <div><h4 className="font-serif text-[22px] leading-snug">{p.title}</h4><p className="mt-3 text-xs leading-5 text-muted-foreground">{p.authors}</p><p className="mt-1 text-xs italic text-muted-foreground">{p.journal}</p></div>
            </article>)}
          </div>
          <article className="paper-row grid gap-3 border-b border-border py-6 md:grid-cols-[150px_1fr] md:gap-8">
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">Published · 2025</span>
            <div><h4 className="font-serif text-[22px] leading-snug">Book review: <i>Acknowledging Indigenous Knowledge: Voices of Tropical Forest People</i>, by P. Bose.</h4><p className="mt-2 text-xs text-muted-foreground">Yoon, H. · <i>Environmental Politics.</i></p></div>
          </article>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-2 w-2 border border-primary"/><h3 className="font-mono text-xs uppercase tracking-[.16em]">Under review</h3></div>
            <div className="border-y border-border py-5"><p className="font-serif text-xl leading-snug">{inReview[0].split(' — ')[0]}</p><p className="mt-3 text-xs leading-5 text-muted-foreground">{inReview[0].split(' — ')[1]}</p><p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-primary">Manuscript under review</p></div>
          </div>
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-2 w-2 border border-muted-foreground"/><h3 className="font-mono text-xs uppercase tracking-[.16em]">In preparation</h3></div>
            <div className="divide-y divide-border border-y border-border">
              {inPrep.map((title, i)=><div key={title} className="flex gap-4 py-4"><span className="mt-1 font-mono text-[10px] text-primary">0{i+1}</span><div><p className="text-sm leading-6 text-foreground/85">{title}</p><span className="mt-1 block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Manuscript in preparation</span></div></div>)}
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-2 w-2 bg-primary/60"/><h3 className="font-mono text-xs uppercase tracking-[.16em]">Conference papers · accepted</h3></div>
            <div className="divide-y divide-border border-y border-border">
              {[
                ['2026 · NCA','Measuring emotional flow: Assessing self-report and psychophysiological indicators with multi-trait multi-measure methodology.'],
                ['2026 · NCA','Not All Efficacy Is the Same: Disaggregating Self-Efficacy, Response Efficacy, and Retributive Efficacy in Anger-Based Persuasion.'],
                ['2026 · NCA','Cultural dynamics and social norms in binge drinking.'],
                ['2025 · NCA','The Shorter Shower Initiative: Using Formative Data to Shape Messages About Water Conservation.'],
                ['2025 · NCA','Crossing the Efficacy Threshold: When Anger Turns Counterproductive.'],
                ['2025 · NCA','The Anger Defiance Hypothesis: When Discouraging Efficacy Fuels Agency.'],
                ['2025 · ICA','How Low Can You Go? Testing the Efficacy Threshold for the Anger Activism Model.'],
                ['2024 · ICA','Social Norms for Illegal Hunting and Patrolling to Prevent It: Formative Data for Intervention Design and Communication Campaigns.'],
                ['2024 · ICA','You Can Do It and Here’s How! The Use (or Absence) of Efficacy Messaging in Obesity Prevention Campaigns.'],
                ['2023 · ICA','The role of collective group orientation and social norms on physical distancing behaviors for disease prevention.'],
                ['2022 · NCA','Moment-by-moment tracking of brain responses to an engaging story: A replication study using forward and reverse correlation to study narrative reception.'],
              ].map(([year, title])=><article key={title} className="grid gap-2 py-4 sm:grid-cols-[105px_1fr] sm:gap-4"><span className="font-mono text-[9px] uppercase tracking-wider text-primary">{year}</span><div><p className="text-sm leading-6 text-foreground/85">{title}</p><span className="mt-1 block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Accepted for presentation</span></div></article>)}
            </div>
          </div>
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-2 w-2 border border-primary"/><h3 className="font-mono text-xs uppercase tracking-[.16em]">Conference submissions · under review</h3></div>
            <div className="divide-y divide-border border-y border-border">
              {[
                'Whose norms, whose group? The role of referent groups and group identity in normative influence on water conservation behavior. [Extended abstract submitted for presentation]',
                'When normative feedback becomes a conversation: Relational AI and the acceptance of descriptive norm feedback. [Extended abstract submitted for presentation]',
                'The Shorter Shower Initiative: Combining timer technology and persuasive messages to shape water use. [Paper submitted for presentation]',
                'Measuring campaign dose and its association with drinking norms and behavior: A six-wave trend study of a collegiate social norms campaign. [Paper submitted for presentation]',
              ].map((title, i)=><article key={title} className="grid gap-2 py-4 sm:grid-cols-[32px_1fr] sm:gap-4"><span className="font-mono text-[10px] text-primary">0{i+1}</span><div><p className="text-sm leading-6 text-foreground/85">{title.split(' [')[0]}</p><span className="mt-1 block font-mono text-[9px] leading-5 text-muted-foreground">{title.split(' [')[1]?.replace(']', '')}</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-wider text-primary">Submitted to 77th ICA · 2026</span></div></article>)}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">The CV also lists accepted presentations at NCA and ICA; conference status is distinct from manuscript publication status.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border border-border bg-card p-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-muted-foreground">The CV includes full citations, accepted conference papers, and additional professional detail.</p>
          <a href={cvUrl} download className="inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"><Download size={14}/> Download full CV</a>
        </div>
      </section>

      <section id="teaching" className="bg-[#101116]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
          <SectionHeading number="04" note="Michigan State University, unless noted">Teaching</SectionHeading>
          <div className="grid gap-10 md:grid-cols-[.72fr_1.28fr]">
            <div><h3 className="font-serif text-3xl leading-tight">Teaching is a practice of making ideas usable.</h3><p className="mt-5 leading-7 text-muted-foreground">As a graduate teaching assistant, I have supported undergraduate courses across organizational communication, methods, and human communication.</p></div>
            <div className="divide-y divide-border border-y border-border">
              {[
                ['COM 240','Organizational Communication','Fall 2026 · Summer 2026 · Fall 2024'],
                ['COM 300','Methods of Communication Inquiry','Spring 2026 · Fall 2025 · Spring 2025'],
                ['COM 100','Human Communication','Summer 2024 · Spring 2024 · Fall 2023'],
                ['COMM 3710','Introduction to Quantitative Communication Research','Spring 2021 · University of Utah'],
              ].map(([code, title, term])=><article key={code} className="grid gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-5"><span className="font-mono text-xs text-primary">{code}</span><div><h4 className="text-base">{title}</h4><p className="mt-1 font-mono text-[10px] leading-5 text-muted-foreground">{term}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-24">
        <SectionHeading number="05" note="A short academic timeline">Education &amp; experience</SectionHeading>
        <div className="grid gap-12 md:grid-cols-2">
          <div><Eyebrow>Education</Eyebrow><div className="mt-5 border-l border-border pl-6">
            {[
              ['2028 expected','Ph.D., Communication','Michigan State University · East Lansing, MI'],
              ['2026','Graduate Certificate, Health and Risk Communication','Michigan State University · East Lansing, MI'],
              ['2023','M.A., Communication','Michigan State University · East Lansing, MI'],
              ['2021','B.A., Communication; minor in Film Studies','University of Utah · Salt Lake City, UT'],
            ].map(([year, degree, school])=><article key={degree} className="relative pb-7 last:pb-0"><span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 bg-primary"/><span className="font-mono text-[10px] text-primary">{year}</span><h3 className="mt-1 text-base">{degree}</h3><p className="mt-1 text-sm text-muted-foreground">{school}</p></article>)}
          </div></div>
          <div><Eyebrow>Professional background</Eyebrow><div className="mt-5 border-l border-border pl-6">
            <article className="relative pb-7"><span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 bg-primary"/><h3 className="text-base">Public relations</h3><p className="mt-1 text-sm text-muted-foreground">Edelman Korea</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Professional experience in public relations before graduate study.</p></article>
            <article className="relative"><span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 bg-primary"/><h3 className="text-base">Reporter intern</h3><p className="mt-1 text-sm text-muted-foreground">Korean newspaper</p><p className="mt-3 text-sm leading-6 text-muted-foreground">An early professional experience in journalism.</p></article>
          </div></div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-20">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] opacity-75">06 / Get in touch</p><h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Let’s continue<br/><i>the conversation.</i></h2><p className="mt-5 max-w-lg text-sm leading-6 opacity-80">For questions about my research, teaching, or academic work, please reach out by email.</p></div>
          <div className="flex flex-col gap-4 md:items-end">
            <a href="mailto:yoonhy12@msu.edu" className="inline-flex items-center gap-3 border border-primary-foreground/50 px-5 py-4 font-mono text-xs tracking-wide transition-colors hover:bg-primary-foreground hover:text-primary" data-testid="link-contact-email"><Mail size={16}/> yoonhy12@msu.edu <ArrowUpRight size={14}/></a>
            <span className="font-mono text-[9px] uppercase tracking-[.15em] opacity-70">Department of Communication · Michigan State University</span>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-background">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-6 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>Hyungro Yoon · Communication scholar, educator, and researcher.</span>
        <a href="https://marialapinski.wordpress.com/lapinskis-lions/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono uppercase tracking-wider hover:text-primary">HRCC Lions <ArrowUpRight size={11}/></a>
      </div>
    </footer>
  </div>;
}

export default App;
