$(document).ready(function(){
    function Project(){
        this.title = "";
        this.description = "";
        this.projectDetailsTitle = "";
        this.details = "";
        this.pictureURL = "";
    }

    // Get the current shown project informations.
    var currentShownProject = new Project();
    currentShownProject.title = document.getElementById("projectTitle").innerHTML;
    currentShownProject.description = document.getElementById("projectDescription").innerHTML;

    var relatedProject1 = new Project();
    relatedProject1.title = "Related project 1";


    $("#relatedProject1").click(function(){

        
        document.getElementById("projectTitle").innerHTML = relatedProject1.title;
    });
});

