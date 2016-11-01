function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', text);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}




$.get("./cover.tex", {}, function(tex){
       console.log("ds");
       var template = Hogan.compile(tex, {delimiters: '<% %>'});
     var result = template.render(
        {
            "name" : "Wonsup Yoon",
            "major" : "Electrical Electronic Engineering",
            "studentid" : "2013142157",
            "university" : "Yonsei University",
            "projectname" : "Project 1",
            "lecturename" : "Control Engineering",
            "date" : "2016.11.9"

        }


    );




    var pdftex = new PDFTeX("texlive/pdftex-worker.js");

    pdftex.compile(result).then(function(pdf) { download("cover.pdf",pdf);  });
    console.log(result)
   }
 );

    
//pdftex.compile(result).then(function(pdf) { download("cover.pdf",pdf);  });
//pdftex.compile(result);