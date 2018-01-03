$(document).ready(function(){
    function Project(){
        this.title = "";
        this.description = "";
        this.projectDetailsTitle = "";
        this.details = "";
        this.pictureBigSizeSRC = "";
        this.pictureSmallSizeSRC = "";
    }

    // Array that will contain all of Related Projects.
    var projectCollection = [];
    var currentIndexProjectShown = 0;


    // Get the current shown project informations.
    var currentShownProject = new Project();
    currentShownProject.title = document.getElementById("projectTitle").innerHTML;
    currentShownProject.description = document.getElementById("projectDescription").innerHTML;
    currentShownProject.pictureBigSizeSRC = document.getElementById("pictureBigSize").getAttribute('src');
    currentShownProject.pictureSmallSizeSRC = "../assets/about/robot_500_300.jpg";

    projectCollection[0] = currentShownProject;                     // Adding the Related Project to the array.


    // Informations for the first related project.
    var relatedProject1 = new Project();
    relatedProject1.title = "Related project 1";
    relatedProject1.description ="Related project 1 description";
    relatedProject1.pictureBigSizeSRC = "http://placehold.it/750x500";
    relatedProject1.pictureSmallSizeSRC = "http://placehold.it/500x300";

    projectCollection[1] = relatedProject1;                         // Adding the Related Project to the array.


    // Informations for the second related project.
    var relatedProject2 = new Project();
    relatedProject2.title = "Related project 2";
    relatedProject2.description ="Related project 2 description";
    relatedProject2.pictureBigSizeSRC = "http://placehold.it/750x500";
    relatedProject2.pictureSmallSizeSRC = "http://placehold.it/500x300";

    projectCollection[2] = relatedProject2;                         // Adding the Related Project to the array.


    // Starting Index for each of the Related Project squares.
    var relatedProject1Index = 1;
    var relatedProject2Index = 2;

    
    // -------------- CLICK MANAGEMENT --------------------
    $("#relatedProject1").click(function(){
        document.getElementById("projectTitle").innerHTML = projectCollection[relatedProject1Index].title;
        document.getElementById("projectDescription").innerHTML = projectCollection[relatedProject1Index].description;
        document.getElementById("pictureBigSize").setAttribute('src', projectCollection[relatedProject1Index].pictureBigSizeSRC);
        document.getElementById("relatedProject1").setAttribute('src', projectCollection[currentIndexProjectShown].pictureSmallSizeSRC);
        var tmpIndex = relatedProject1Index;
        relatedProject1Index = currentIndexProjectShown;
        currentIndexProjectShown = tmpIndex;
    });

    $("#relatedProject2").click(function(){
        document.getElementById("projectTitle").innerHTML = projectCollection[relatedProject2Index].title;
        document.getElementById("projectDescription").innerHTML = projectCollection[relatedProject2Index].description;
        document.getElementById("pictureBigSize").setAttribute('src', projectCollection[relatedProject2Index].pictureBigSizeSRC);
        document.getElementById("relatedProject2").setAttribute('src', projectCollection[currentIndexProjectShown].pictureSmallSizeSRC);
        var tmpIndex = relatedProject2Index;
        relatedProject2Index = currentIndexProjectShown;
        currentIndexProjectShown = tmpIndex;
    });
});

