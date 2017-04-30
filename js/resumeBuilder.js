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
    ['Other', ['Git/GitHub', 'GIMP', 'Jekyll', 'Assembly', 'Hacking', 'Phonology', 'Cultural mimicry']]],

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
      employer: "Go-Ahead Singapore",
      title: "Bus Driver",
      dates: "2016 - 2017",
      description: "Learned several bus routes so well that I helped fill gaps on launch date (Sep 04, 2016), during which many bus drivers were assigned routes they didn't know (planning and training issues). Worked with management on developing new training material, better driving techniques, as well as on managing severe and urgent mismatch issues between management and local cultures. (http://www.straitstimes.com/singapore/transport/go-ahead-up-to-speed-after-a-bumpy-start)",
      location: "Go-Ahead Singapore (Loyang Bus Depot)"
    },
    {
      employer: "Singapore University of Technology and Design",
      title: "Part-time teaching aid",
      dates: "2017",
      description: "Just some part-time work.",
      location: "Singapore University of Technology and Design"
    },
    {
      employer: "Various software houses in Singapore",
      title: "From technician to programmer",
      dates: "Spanning last 10 years",
      description: "Singapore has a culture: you publish facts that make you look more competent than your bosses, you WILL be fired. Unfortunately for me, I thrive on creating solutions. At every turn of my diligent and effective servitude, I had been threatened for 'rocking the boat', even when it almost always meant doubling or tripling profits and/or lowering costs drastically. One example: SingTel's CTO tells every SingTel customer not to set passwords to protect their (officially SingTel-supplied) home routers, just so that SingTel's technical support can enter those routers to troubleshoot at any time. Unbeknownst to the entire country, a persistent and unusually reliable botnet was thus made possible by SingTel's CTO. Shortly afterward, a cyber attack turned off all SingTel broadband for one day. The attack was performed by 'infiltrators', not mere hackers, which led to the Singapore government announcing that 'there was no reason to believe it was an attack'. In addition, Singapore routinely 'attacks herself' by misconfiguring her own servers and services, which could academically be argued as constituting 'another attack vector' altogether. In short, Singapore's culture has created in Singapore a uniquely 'juicy target': high-value assets guarded by uncommonly low technical capabilities. From my previous work with incidental contact with various foreign state actors, it is clear that Singapore will be held hostage within the next few decades, possibly even to the point of voluntary annexation (citizens here love to hate the government). So yeah, the only way I can survive in a career in Singapore is to be less competent than my bosses. The country's civil sector alone runs on ego and power trips."
    },
    {
      employer: "Unknown",
      title: "Hacker",
      dates: "Not convenient to reveal",
      description: "Reverse-engineered malware to document new and/or emerging techniques in cyber weapons. Reverse-engineered numerous commercial products to compile comprehensive catalogue of attack vectors. Trained agents in targeted phonology and cultural mimicry to effect their insertion in timeframes of 'a few months'. And some other work I would rather forget I ever did."
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

      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
    }
  }
};

var projects = {
  projects: [
    {
      title: "Online Resume",
      dates: "2017",
      description: [
        "Online resume. Print styles allows 1-page print version. HTML/CSS/Javascript.",
        "Git repo has 1 branch for each job application. Temp repo forks host corresponding online resumes.",
        "Above and beyond Udacity project requirements. Used for actual job applications."],
      images: ["images/fixed/fry.jpg"],
      url: 'github.com/hannwong/udacity-FEND-online-resume'
    },
    {
      title: "Portfolio Site",
      dates: "2017",
      description: [
        "HTML/CSS/Javascript project. Uses Grunt, GraphicsMagick (for art direction), ImageOptim.",
        "Responsive design. Correct sizes of images downloaded, some web optimization employed."],
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

      formattedTitle = HTMLPrint_Title.replace("%data%", project.title);
      var formattedUrl = HTMLPrint_Url.replace(/%data%/g, project.url);
      formattedDates = HTMLPrint_Dates.replace('%data%', project.dates);
      // var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      $(".print-project-entry:last").append(HTMLPrint_TitleStart, HTMLPrint_projectDescriptionStart);

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
      name: 'National University of Singapore',
      degree: 'Computer Science',
      dates: '2005',
      location: 'National University of Singapore',
      majors: ['Not completed due to financial difficulty'],
    },
    {
      name: 'Nanyang Technological University',
      degree: 'Communication Studies',
      dates: '2008',
      location: 'Nanyang Technological University',
      majors: ['Not completed due to financial difficulty'],
    }
  ],

  onlineCourses: [
    {
      title: 'Udacity Front-End Nanodegree',
      school: 'Udacity',
      dates: '2016-2017',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
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
    }
  }
};

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
