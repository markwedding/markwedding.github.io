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
