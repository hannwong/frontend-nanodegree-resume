var resumes = {};

resumes['gars4!caving'] = {
  bio: {
    name: 'Jon Wong',
    contacts: {
      mysite: 'udacity-FEND-online-resume/?resume=gars4!caving',
    },

    welcomeMessage: 'Looking to competently apply my skills learned at Udacity FEND, and to become a prime demonstration of the efficacy of Udacity education. My human language skills will allow me to work with Udacity Blitz teams that are geographically, linguistically and culturally distributed.',

    skills: [
      ['Languages', ['HTML/CSS/JS', 'Python', 'C/C++', 'PHP', 'Less/Sass']],
      ['Frameworks/Libraries', ['jQuery', 'AngularJS', 'Knockout.js', 'Bootstrap/Foundation', 'Grunt/Gulp', 'Jasmine']],
      ['Other', ['Git/GitHub', 'GIMP', 'Jekyll', 'Phonology', 'Cultural mimicry']]],

    biopic: 'images/fixed/selfie.jpg'
  },

  projects: {
    op: 'prepend',
    projects: [
      {
        title: "Agile workflow and culture",
        dates: "2017",
        description: [
          "Migrated from underused SVN to BitBucket",
          "Installed fluid, agile, emergent leadership; leadership arises from competence",
          "Installed optimized version of textbook Agile/Scrum",
          "Built visibility, accountability of all skills within team",
          "Technical guidance on coding standards, code organization, architecture",
          "Freed company from developer-lock, initiated rapid code ownership",
          "Code quality protection via unit tests, rapid emergency code coverage by targetting mid-level functions",
          "Rapid stop-gap fix for missing documentation: functional specs implicitly documented in unit tests."
        ],
        images: ["images/fixed/sigmajs.png"],
        url: 'github.com/hannwong/jobapp-latize-techtest'
      },
      {
        title: "Sigma.js Hacking (Reverse-engineering)",
        dates: "2017",
        description: [
          "Hacked Sigma.js within hours to extend functionality",
          "General demonstration of reverse-engineering ability",
          "Pixel-accurate CSS styling for HTML lists, complex aesthetics"
        ],
        images: ["images/fixed/sigmajs.png"],
        url: 'github.com/hannwong/jobapp-latize-techtest'
      },
      {
        title: "Git Lesson",
        dates: "2017",
        description: [
          "Trim online Git lesson that covers concepts ('what') and usage ('why'); the 'how' can be Googled.",
          "Built on Jekyll and HTML/CSS/Javascript, and uses Grunt for art direction.",
          "Reader-friendly features include editable fields (commit IDs) and floating TOC.",
          "Full yet trim run-through of necessary Git concepts from need-to-know internals to best-convention collaboration techniques.",
          "Build script allows deployment on private BitBucket repos and publication on GitHub Pages."
        ],
        images: ["images/fixed/git.png"],
        url: 'jon-wong-sutd.github.io/git-lessons/git-lesson/'
      }
    ]
  }
};
