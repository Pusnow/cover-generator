function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', text);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



$("#mainfrm").on("submit",function(e){
  e.preventDefault();
  $.get("./cover.tex", {}, function (tex) {

    var document = tex + "\\begin{document}\n";
    var inputs = $('#mainfrm :input');
    document += "\\titleGM{" + [inputs[4].value, inputs[5].value, inputs[6].value, inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value].join("}{")
    document += "}\n\\end{document}"

    var pdftex = new PDFTeX("texlive/pdftex-worker.js");

    pdftex.compile(document).then(function (pdf) { download("cover.pdf", pdf); });
  }
  );
  }
);

