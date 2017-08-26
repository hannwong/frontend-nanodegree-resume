var bio = {
  name: 'John McFry',
  role: 'Web Developer',
  contacts: {
    mobile: '+65 96387450',
    email: 'jhannwong@gmail.com',
    github: 'hannwong',
    linkedin: 'jon-wong-29347b54',
    mysite: 'udacity-FEND-online-resume',
    location: 'River Api Api, Singapore'
  },

  welcomeMessage: 'I am a reverse-engineer who can rapidly equip you with the latest emerging technologies. Of course, front-end web development work is a piece of cake to me. I took up the Udacity Front-End Nanodegree in an attempt to formalize my skills.<br><br>' +
    'As a hacker and infiltration trainer in charge of inserting cyber tools (read: weapons, backdoors, etc) and infiltration agents into various countries, I obviously have no public portfolio I can show. I have left my "adopted family" (read: owners) some years ago, and have refrained from using my hacking and infiltration skills in that time. My attempts to show my former "family" that I desire to lead a clean and simple life seems to have worked; they are no longer trying to kill me every year.<br><br>' +
    'Useful skills I possess now are: reverse-engineering (software, information or patterns) and phonology. Why phonology? My cohort and I were trained in cultural mimicry, for obvious utility in infiltration work.<br><br>' +
    'Please give me a chance to come back to normal life.',

  skills: [
    ['Languages', ['HTML/CSS/JS', 'Python', 'C/C++', 'PHP', 'Less/Sass']],
    ['Frameworks/Libraries', ['jQuery', 'AngularJS', 'Knockout.js', 'Bootstrap/Foundation', 'Grunt/Gulp', 'Jasmine']],
    ['Other', ['Git/GitHub', 'Agile', 'GIMP', 'Jekyll', 'Assembly', 'Hacking', 'Phonology', 'Cultural mimicry']]],

  biopic: 'images/fixed/fry.jpg',

  display: function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    $('#topContacts, #footerContacts').
      append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    $('#header').append(formattedBioPic, formattedWelcome);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        var skillToStr = HTMLskillsTemplate.replace('%category%', skill[0]);
        skillToStr = skillToStr.replace('%skills%', skill[1].join(', '));
        var formattedSkill = HTMLskills.replace('%data%', skillToStr);
        $("#skills").append(formattedSkill);
      });
    }

    // For print
    $('#header').prepend(HTMLPrint_PersonalContact);
    $('#header').append(HTMLPrint_ProfessionalContact);
    $('#personal-contact > ul').append(formattedLocation, formattedMobile, formattedEmail);

    var formattedMysite = HTMLPrint_mysite.replace(/%data%/g, bio.contacts.mysite);
    formattedGithub = HTMLPrint_github.replace(/%data%/g, bio.contacts.github);
    var formattedLinkedin = HTMLPrint_linkedin.replace(/%data%/g, bio.contacts.linkedin);
    formattedLinkedin = formattedLinkedin.replace(/%account%/g, bio.contacts.linkedin.substr(0, 8));
    $('#professional-contact > ul').append(formattedMysite, formattedGithub, formattedLinkedin);

    if (bio.skills.length > 0) {
      bio.skills.forEach(function(skill) {
        var skillToStr = HTMLskillsTemplate.replace('%category%', skill[0]);
        skillToStr = skillToStr.replace('%skills%', skill[1].join(', '));
        var formattedSkill = HTMLskills.replace('%data%', skillToStr);
        $("#print-skills ul").append(formattedSkill);
      });
    }
  }
};

var work = {
  jobs: [
    {
      employer: "Singapore University of Technology and Design",
      title: "Part-time Lecturer and Teaching Aide",
      dates: "2017",
      description: [
        "Developed programming exercises, programmatic teaching tools.",
        "Teaching aide for Probability/Statistics, Algorithms, AI",
        "Co-lecturer for Database, Big Data",
        "Lecturer for Cybercrime, Masters programme",
        "Developed outreach workshops for Machine Learning"],
      location: "Singapore University of Technology and Design"
    },
    {
      employer: "Go-Ahead Singapore",
      title: "Bus Driver",
      dates: "2016 - 2017",
      description: [
        "Learned several bus routes well, helped fill gaps on launch date (Sep 04, 2016) when many bus drivers were assigned routes they didn't know.",
        "Worked with management on developing new training material, better driving techniques."],
      location: "Go-Ahead Singapore (Loyang Bus Depot)"
    },
    {
      employer: "Various software houses in Singapore",
      title: "From technician to programmer",
      dates: "Spanning last 10 years",
      description: [
        "Wrote first book on OFBiz, a Java-based ERP.",
        "Reverse-engineered malware, legacy software, and performed some cybersecurity-related work.",
        "Installed rapid collaborative workflows with git which involved pull requests (peer reviews), Agile, and ITS (Redmine).",
        "Migrated workflows away from SVN and CVS."]
    },
    {
      employer: "Unknown",
      title: "Hacker",
      dates: "Not convenient to reveal",
      description: [
        "Reverse-engineered malware to document new and/or emerging techniques in cyber weapons.",
        "Reverse-engineered numerous commercial products to compile comprehensive catalogue of attack vectors.",
        "Trained agents in targeted phonology and cultural mimicry to effect their insertion in timeframes of 'a few months'."]
    }
  ],

  display: function() {
    for (var i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);

      var job = work.jobs[i];

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, HTMLworkDescriptionStart);

      for (var j = 0; j < job.description.length; j++) {
        var description = job.description[j];
        $(".work-entry:last ul").
          append(HTMLworkDescription.replace('%data%', description));
      }

      // For print
      $("#workExperience").append(HTMLPrint_workStart);

      formattedEmployer = HTMLPrint_workEmployer.replace("%data%", job.employer);
      formattedTitle = HTMLPrint_workTitle.replace("%data%", job.title);
      formattedDates = HTMLPrint_workDates.replace('%data%', job.dates);

      $(".print-work-entry:last").append(HTMLPrint_workTitleStart, HTMLPrint_workDescriptionStart);

      $(".print-work-entry:last .title").append(formattedEmployer, formattedTitle, formattedDates);

      for (var j = 0; j < job.description.length; j++) {
        var description = job.description[j];
        $(".print-work-entry:last ul").
          append(HTMLworkDescription.replace('%data%', description));
      }
    }
  }
};

var projects = {
  projects: [
    {
      title: "Online Resume",
      dates: "2017",
      description: [
        "Online resume that includes print styles for 1-page print version.",
        "Uses HTML/CSS/Javascript, and Grunt for some art direction.",
        "Uses GET parameter 'resume' to host multiple online resumes at one GitHub Pages (1 github repo)"],
      images: ["images/fry_small.jpg"],
      url: 'github.com/hannwong/udacity-FEND-online-resume'
    },
    {
      title: "Portfolio Site",
      dates: "2017",
      description: [
        "HTML/CSS/Javascript project that uses Grunt, GraphicsMagick (for art direction), and ImageOptim.",
        "Responsive design where correct sizes of images downloaded, plus some other web optimization employed."],
      images: ["images/still_life.jpg", "images/volt.jpg"],
      url: 'github.com/hannwong/udacity-FEND-portfolio-site'
    }
  ],

  display: function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var project = projects.projects[i];

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      formattedTitle = formattedTitle.replace('%url%', project.url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      // var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      $(".project-entry:last").append(formattedTitle, formattedDates, HTMLprojectDescriptionStart);

      for (var j = 0; j < project.description.length; j++) {
        var description = project.description[j];
        $(".project-entry:last ul").
          append(HTMLprojectDescription.replace('%data%', description));
      }

      if (project.images.length > 0) {
        for (var j = 0; j < project.images.length; j++) {
          var formattedImage = HTMLprojectImage.replace("%data%", project.images[j]);
          $(".project-entry:last").append(formattedImage);
        }
      }

      // For print
      $("#projects").append(HTMLPrint_projectStart);

      formattedTitle = HTMLPrint_projectTitle.replace("%data%", project.title);
      var formattedUrl = HTMLPrint_projectUrl.replace(/%data%/g, project.url);
      formattedDates = HTMLPrint_projectDates.replace('%data%', project.dates);

      $(".print-project-entry:last").append(HTMLPrint_projectTitleStart, HTMLPrint_projectDescriptionStart);

      $(".print-project-entry:last .title").append(formattedTitle, formattedUrl, formattedDates);

      for (var j = 0; j < project.description.length; j++) {
        var description = project.description[j];
        $(".print-project-entry:last ul").
          append(HTMLprojectDescription.replace('%data%', description));
      }
    }
  }
};

var education = {
  schools: [
    {
      name: 'Nanyang Technological University',
      degree: 'BA Communication Studies',
      dates: '2005',
      location: 'Nanyang Technological University',
      majors: ['Not completed due to financial difficulty']
    },
    {
      name: 'National University of Singapore',
      degree: 'BSc Computer Science',
      dates: '2008',
      location: 'National University of Singapore',
      majors: ['Not completed due to financial difficulty']
    }
  ],

  onlineCourses: [
    {
      title: 'Udacity Front-End Nanodegree',
      school: 'Udacity',
      dates: '2016-2017',
      url: 'www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ],

  display: function() {
    for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);

      var school = education.schools[i];

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedNameDegree = formattedName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

      $(".education-entry:last").
        append(formattedNameDegree, formattedDates, formattedLocation, formattedMajor);

      // For print
      $("#education").append(HTMLPrint_schoolStart);

      formattedName = HTMLPrint_schoolName.replace("%data%", school.name);
      formattedDegree = HTMLPrint_schoolDegree.replace("%data%", school.degree);
      formattedDates = HTMLPrint_schoolDates.replace("%data%", school.dates);

      $(".print-education-entry:last").append(HTMLPrint_schoolTitleStart);

      $(".print-education-entry:last .title").append(formattedName, formattedDegree, formattedDates);
    }

    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);

      var course = education.onlineCourses[i];

      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedTitleSchool = formattedTitle + formattedSchool;
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);

      $(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedURL);

      // For print
      $("#education").append(HTMLPrint_schoolStart);

      formattedSchool = HTMLPrint_schoolName.replace("%data%", course.school);
      formattedTitle = HTMLPrint_schoolDegree.replace("%data%", course.title);
      formattedDates = HTMLPrint_schoolDates.replace("%data%", course.dates);

      $(".print-education-entry:last").append(HTMLPrint_schoolTitleStart);

      $(".print-education-entry:last .title").append(formattedSchool, formattedTitle, formattedDates);
    }
  }
};

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

var resumeID = findGetParameter('resume');
if (resumeID && resumeID in resumes) {
  resume = resumes[resumeID];
  if (resume.hasOwnProperty('bio')) {
    var plainProps = ['name', 'role', 'welcomeMessage', 'skills', 'biopic'];
    for (var i = 0; i < plainProps.length; i++) {
      var prop = plainProps[i];
      if (resume['bio'].hasOwnProperty(prop)) {
        bio[prop] = resume['bio'][prop];
      }
    }
    if (resume['bio'].hasOwnProperty('contacts')) {
      if (resume['bio']['contacts'].hasOwnProperty('mysite')) {
        bio['contacts']['mysite'] = resume['bio']['contacts']['mysite'];
      }
    }
  }

  if (resume.hasOwnProperty('projects')) {
    if (resume['projects']['op'] == 'prepend') {
      projects['projects'] = resume['projects']['projects'].concat(projects['projects']);
    }
  }
}

bio.display();

projects.display();

work.display();

education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
