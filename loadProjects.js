/**
 * Created by Arun on 27/07/2017.
 */
$(document).ready(function() {

    $.getJSON("http://localhost:3000/projects", function (json) {
        var projects = json;
        for(var i=0;i<json.length;i++){
            document.getElementById('projectRow').innerHTML += " <div class='col s8 m4' id='projectCard'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>"+ json[i].name +"</span><p>"+ json[i].description +"</p></div><div class='card-action'><a href='"+ json[i].repository +"'>Repository</a></div></div>";
        }
    });


});
