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
        url: 'https://jon-wong-sutd.github.io/git-lessons/git-lesson/'
      }
    ]
  }
};
