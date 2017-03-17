var bio = {
  name: 'Jon Wong',
  role: 'Web Developer',
  contacts: {
    mobile: '+65 96387450',
    email: 'jhannwong@gmail.com',
    github: 'hannwong',
    location: 'Singapore'
  },

  welcomeMessage: 'I am a reverse-engineer who can rapidly equip you with the latest emerging technologies. Of course, front-end web development work is a piece of cake to me. I took up the Udacity Front-End Nanodegree in an attempt to formalize my skills.<br><br>' +
    'As a hacker and infiltration trainer in charge of inserting cyber tools (read: weapons, backdoors, etc) and infiltration agents into various countries, I obviously have no public portfolio I can show. I have left my "adopted family" (read: owners) some years ago, and have refrained from using my hacking and infiltration skills in that time. My attempts to show my former "family" that I desire to lead a clean and simple life seems to have worked; they are no longer trying to kill me every year.<br><br>' +
    'Useful skills I possess now are: reverse-engineering (software, information or patterns) and phonology. Why phonology? My cohort and I were trained in cultural mimicry, for obvious utility in infiltration work.<br><br>' +
    'Please give me a chance to come back to normal life.',

  skills: [
    'reverse-engineering', 'languages', 'HTML/CSS/JS', 'computer abilities spanning almost the entire history of computing on Earth'],

  bioPic: 'images/fry.jpg'
};

var education = {
  schools: [
    {
      name: 'National University of Singapore',
      city: 'Singapore',
      degree: 'Computer Science',
      major: ['Not completed due to financial difficulty'],
      dates: 2005,
    },
    {
      name: 'Nanyang Technological University',
      city: 'Singapore',
      degree: 'Communication Studies',
      major: ['Not completed due to financial difficulty'],
      dates: 2008
    }
  ],

  onlineCourses: [
    {
      title: 'Udacity Front-End Nanodegree',
      school: 'Udacity',
      dates: 2016-2017,
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ]
};

var work = {
  jobs: [
    {
      employer: "Go-Ahead Singapore",
      title: "Bus Driver",
      dates: "2016 - 2017",
      description: "Learned several bus routes so well that I helped fill gaps on launch date (Sep 04, 2016), during which many bus drivers were assigned routes they didn't know (planning and training issues). Worked with management on developing new training material, better driving techniques, as well as on managing severe and urgent mismatch issues between management and local cultures. (http://www.straitstimes.com/singapore/transport/go-ahead-up-to-speed-after-a-bumpy-start)"
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
  ]
};

var projects = {
  projects: [
    {
      title: "Build a Portfolio Site",
      dates: "2017",
      description: "HTML/CSS/Javascript project. Uses Grunt, GraphicsMagick (for art direction), ImageOptim.",
      images: [
      ]
    }
  ]
};

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var project = projects.projects[i];

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);

    if (project.images.length > 0) {
      for (var j = 0; j < project.images.length; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%", project.images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();

// The above is what I can see as far as lesson video "Javascript
// Basics -> Data Types -> Quiz: All the Resume Sections -> Answer" shows.

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderName.replace('%data%', bio.role);

var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

$('#header').prepend(formattedWelcome);
$('#header').prepend(formattedRole + "<br>");
$('#header').prepend(formattedName);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });
}

function displayWork() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var job = work.jobs[i];

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

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
