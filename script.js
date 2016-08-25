function writeGenSkill(icon, heading, paragraph) {
  var skill = "";

  skill += '<h2 class="ui inverted header">';
  skill += '<i class="' + icon + ' inverted teal icon"></i>';
  skill += '<div class="content">' + heading + '</div></h2>';
  skill += '<p class="p-m">' + paragraph + '</p>';
  return skill;
}

var generalSkills = [
  {
    icon:'html5',
    heading:'Web Development',
    paragraph:'I know how to create custom websites combining HTML, CSS, JavaScript, ' +
      'front-end frameworks like Bootstrap, and a PHP/MySQL back end.'
  },
  {
    icon:'database',
    heading:'Database Development',
    paragraph:'I have a strong understanding of relational databases and know ' +
      'how to design an effective database structure for the back end of an application.'
  },
  {
    icon:'line chart',
    heading:'Data Analytics',
    paragraph:'I can understand and make predictions from large data sets. I have ' +
      'experience with mathematical modeling techniques such as simulation and linear programming.'
  },
  {
    icon:'wordpress',
    heading:'Website Management',
    paragraph:'I have used WordPress to update content on a website and have ' +
      'implemented various plug-ins related to content presentation, user forms, and payment processing.'
  }
];

var genSkills_html = "";

for(var j = 0; j < generalSkills.length; j++) {
  genSkills_html += writeGenSkill(generalSkills[j].icon, generalSkills[j].heading, generalSkills[j].paragraph);
  document.getElementById('gen-skills').innerHTML = genSkills_html;
}

$('#gen-skills p:last-child').removeClass("p-m");



var skills = [
  ['HTML',4],
  ['CSS',4],
  ['Bootstrap',4],
  ['PHP',4],
  ['SQL',4],
  ['VBA',4],
  ['JavaScript',3],
  ['jQuery',3],
  ['MySQL',3],
  ['Semantic UI',2],
  ['Python',2],
  ['SQL Server',2],
  ['VB.NET',2],
  ['WordPress',2],
  ['AngularJS',1]
];

var html = "";

for(var i = 0; i < skills.length; i++) {
  html += '<tr>';
  html += '<td class="right aligned eight wide">';
  html += '<h3 class="ui inverted header">' + skills[i][0] + '</h3>';
  html += '</td>';
  html += '<td class="eight wide">';
  for (var j = 0; j < skills[i][1]; j++) {
    html += '<div class="ui teal empty circular label"></div>';
  }
  html += '</td>';
  html += '</tr>';
}

document.getElementById("skills-body").innerHTML = html;

$('.ui.modal')
  .modal({
    blurring: true
  })
  .modal('attach events', '.bd-more-info.button', 'show')
;
