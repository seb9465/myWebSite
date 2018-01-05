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
    currentShownProject.details = document.getElementById("detailList").innerHTML;
    currentShownProject.pictureBigSizeSRC = document.getElementById("pictureBigSize").getAttribute('src');
    currentShownProject.pictureSmallSizeSRC = "../assets/about/robot_500_300.jpg";

    projectCollection[0] = currentShownProject;                                                                 // Adding the Related Project to the array.


    // Informations for the first related project.
    var relatedProject1 = new Project();
    relatedProject1.title = "Polyphoto";
    relatedProject1.description = "Committtee of the <i>Association des Étudiants de Polytechnique</i> (AEP)";
    relatedProject1.details ="<li>Active member - Session A2017</li>" +
                                    "<li>Sports director - Session H2018</li>";
    relatedProject1.pictureBigSizeSRC = "../assets/about/polyphoto_750_500.jpg";
    relatedProject1.pictureSmallSizeSRC = "../assets/about/polyphoto_500_300.jpg";

    projectCollection[1] = relatedProject1;                                                                     // Adding the Related Project to the array.
    document.getElementById("relatedProject1").setAttribute('src', projectCollection[1].pictureSmallSizeSRC);   // Fixing the image src of the related project 1.


    // Informations for the second related project.
    var relatedProject2 = new Project();
    relatedProject2.title = "Hackatown Polytechnique";
    relatedProject2.description ="Related project 2 description";
    relatedProject2.details = "";
    relatedProject2.pictureBigSizeSRC = "../assets/about/hackatown_750_500.jpg";
    relatedProject2.pictureSmallSizeSRC = "../assets/about/hackatown_500_300.jpg";
    
    projectCollection[2] = relatedProject2;                                                                     // Adding the Related Project to the array.
    document.getElementById("relatedProject1").setAttribute('src', projectCollection[2].pictureSmallSizeSRC);   // Fixing the image src of the related project 2.


    // Starting Index for each of the Related Project squares.
    var relatedProject1Index = 1;
    var relatedProject2Index = 2;

    
    // -------------- CLICK MANAGEMENT --------------------
    $("#relatedProject1").click(function(){
        document.getElementById("projectTitle").innerHTML = projectCollection[relatedProject1Index].title;
        document.getElementById("projectDescription").innerHTML = projectCollection[relatedProject1Index].description;
        document.getElementById("pictureBigSize").setAttribute('src', projectCollection[relatedProject1Index].pictureBigSizeSRC);
        document.getElementById("detailList").innerHTML = projectCollection[relatedProject1Index].details;
        document.getElementById("relatedProject1").setAttribute('src', projectCollection[currentIndexProjectShown].pictureSmallSizeSRC);
        
        var tmpIndex = relatedProject1Index;
        relatedProject1Index = currentIndexProjectShown;
        currentIndexProjectShown = tmpIndex;
    });

    $("#relatedProject2").click(function(){
        document.getElementById("projectTitle").innerHTML = projectCollection[relatedProject2Index].title;
        document.getElementById("projectDescription").innerHTML = projectCollection[relatedProject2Index].description;
        document.getElementById("pictureBigSize").setAttribute('src', projectCollection[relatedProject2Index].pictureBigSizeSRC);
        document.getElementById("detailList").innerHTML = projectCollection[relatedProject2Index].details;
        document.getElementById("relatedProject2").setAttribute('src', projectCollection[currentIndexProjectShown].pictureSmallSizeSRC);
        
        var tmpIndex = relatedProject2Index;
        relatedProject2Index = currentIndexProjectShown;
        currentIndexProjectShown = tmpIndex;
    });
});

