$(document).ready(function(){
    function Project(){
        this.title = "";
        this.description = "";
        this.projectDetailsTitle = "";
        this.details = "";
        this.pictureURL = "";
    }

    var projectCollection = [];
    var currentIndexProjectShown = 0;

    // Get the current shown project informations.
    var currentShownProject = new Project();
    currentShownProject.title = document.getElementById("projectTitle").innerHTML;
    currentShownProject.description = document.getElementById("projectDescription").innerHTML;

    projectCollection[0] = currentShownProject;

    // Informations for the first related project.
    var relatedProject1 = new Project();
    relatedProject1.title = "Related project 1";
    relatedProject1.description ="Related project 1 description";

    projectCollection[1] = relatedProject1;

    // Informations for the second related project.
    var relatedProject2 = new Project();
    relatedProject2.title = "Related project 2";
    relatedProject2.description ="Related project 2 description";

    projectCollection[2] = relatedProject2;


    var relatedProject1Index = 1;
    var relatedProject2Index = 2;

    $("#relatedProject1").click(function(){
        document.getElementById("projectTitle").innerHTML = projectCollection[relatedProject1Index].title;
        document.getElementById("projectDescription").innerHTML = projectCollection[relatedProject1Index].description;
        var tmpIndex = relatedProject1Index;
        relatedProject1Index = currentIndexProjectShown;
        currentIndexProjectShown = tmpIndex;
    });

    $("#relatedProject2").click(function(){
        document.getElementById("projectTitle").innerHTML = projectCollection[relatedProject2Index].title;
        document.getElementById("projectDescription").innerHTML = projectCollection[relatedProject2Index].description;
        var tmpIndex = relatedProject2Index;
        relatedProject2Index = currentIndexProjectShown;
        currentIndexProjectShown = tmpIndex;
    });
});

