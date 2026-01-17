%-------------------------
% Resume in Latex
% Author : David Enikuomehin
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage[T1]{fontenc}
\input{glyphtounicode}

%----------FONT OPTIONS----------
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-0.5in}
\addtolength{\textheight}{1.0in}

\setlength{\footskip}{4.08003pt}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{%
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule\vspace{-5pt}]

% Ensure that generated pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{%
  \item\small{%
    {#1\vspace{-2pt}}%
  }%
}

\newcommand{\resumeSubheading}[4]{%
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}%
}

\newcommand{\resumeSubSubheading}[2]{%
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}%
}

\newcommand{\resumeProjectHeading}[2]{%
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}%
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\begin{document}

%----------HEADING----------
\begin{center}
    \textbf{\Huge\scshape David Enikuomehin} \\ \vspace{1pt}
    \small 682-329-4435 $|$ \href{mailto:dev.davideniku@gmail.com}{\underline{dev.davideniku@gmail.com}} $|$ 
    \href{https://linkedin.com/in/enikudavid}{\underline{linkedin.com/in/enikudavid}}
\end{center}

%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, PostgreSQL, Microsoft SQL Server, TypeScript, JavaScript, HTML/CSS, Go} \\
     \textbf{Frameworks}{: React, Next.js, Alpine.js, Vue.js, Node.js, FastAPI, Spring, Spring Boot, Struts, BIRT Reporting Tool}
    }}
\end{itemize}

%-----------EXPERIENCE-----------
\section{Experience}
\resumeSubHeadingListStart
    \resumeSubheading
      {Software Engineer I}{Sep 2025 -- Dec 2025}
      {Paga}{Lagos, NG}
      \resumeItemListStart
        \resumeItem{Shipped production features and critical bug fixes on consumer-facing Paga Engine, serving 23M+ users.}
        \resumeItem{Built session-based payment feature for Paga checkout (React, Java, Javascript, Spring Boot, PostgreSQL, Microsoft SQL Server), enabling PayPal, Shopify, and Bokku integrations.}
        \resumeItem{Increased callback notifications for payment failures by 400\% by implementing a retry mechanism and webhook dispatcher}
        \resumeItem{Enabled account funding for 260+ businesses on the platform using React, Typesript and Spring Boot.}
      \resumeItemListEnd

    \resumeSubSubheading
      {Software Engineering Fellow}{May 2024 -- Jan 2025}
      \resumeItemListStart
        \resumeItem{Resolved 2 support tickets per week, improving customer satisfaction across the platform}
        \resumeItem{Designed and built an internal feature toggle management tool (Java, Spring, MS-SQL) used by 4 departments, cutting deployment configuration time by over 95\% (from 1--2 days to seconds).}
        \resumeItem{Worked on Paga FX APIs supporting international payment operations.}
        \resumeItem{Rotated across 3 workstreams, gaining hands-on experience Java, Spring Boot, MS-SQL, and enterprise development practices.}
      \resumeItemListEnd

    \resumeSubheading
      {Frontend Developer}{Jun 2023 -- May 2024}
      {Pendulum}{FCT, NG}
      \resumeItemListStart
        \resumeItem{Led founding engineering team as first engineer, guiding architecture decisions and shipping \href{https://pendulumhq.com/products}{\underline{2 products}.}}
        \resumeItem{Built company's inaugural Ed-Tech platform (TypeScript, Next.js, Sanity CMS, Express.js, Google Console Platform.}
        \resumeItem{Owned backend and DevOps responsibilities in startup environment, managing infrastructure on Google Cloud Platform.}
        \resumeItem{Applied frontend architecture and design patterns to build scalable web apps and guide technical decisions as the founding frontend engineer.}
      \resumeItemListEnd
\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Projects}
\resumeSubHeadingListStart
    \resumeProjectHeading
      {\textbf{NACOS Payment Platform} $|$ \emph{Java, Spring Boot, React, Typescript, PostgreSQL, Docker, AWS}}{Nov 2024}
      \resumeItemListStart
        \resumeItem{Built and deployed full-stack payment platform for university student dues collection. View source code \href{https://github.com/eniiku/NACOSPaymentPlatform}{\underline{on Github.}}}
        \resumeItem{Processed ₦4,000,000+ in transactions to date with 99.9\% uptime}
        \resumeItem{Increased payment completion rates by 26\% through user-friendly UI, automated email receipts, and Flutterwave integration.}
      \resumeItemListEnd
\resumeSubHeadingListEnd

%-----------LEADERSHIP-----------
\section{Leadership}
\resumeSubHeadingListStart
    \resumeSubheading
      {Software Director}{Dec 2024 -- May 2025}
      {National Association of Computing Students (NACOS), FUNAAB}{Ogun, NG}
      \resumeItemListStart
        \resumeItem{Co-organized tech seminar connecting 100+ students with industry professionals.}
        \resumeItem{Independently developed NACOS Payment Platform (see Projects section).}
      \resumeItemListEnd

    \resumeSubheading
      {Front End Technical Lead}{Sep 2023 -- July 2024}
      {Google Developer Student Club}{Ogun, NG}
      \resumeItemListStart
        \resumeItem{Increased club membership by 40\% through engaging info session that attracted 500+ students}
        \resumeItem{Mentored 31+ students in weekly web development workshops; 4 directly secured internships.}
        \resumeItem{Built curriculum and led hands-on projects for first-time developers.}
      \resumeItemListEnd
\resumeSubHeadingListEnd

%-----------EDUCATION-----------
\section{Education}
\resumeSubHeadingListStart
    \resumeSubheading
      {Federal University of Abeokuta}{Abeokuta, NG}
      {Bachelor of Science in Computer Science}{Oct 2020 -- May 2025}
\resumeSubHeadingListEnd

\end{document}
