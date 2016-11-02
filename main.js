function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', text);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}




$.get("./cover.tex", {}, function (tex) {
  console.log("ds");

  var document = tex + "\\begin{document}\n";
  document += "\\titleGM{" + ["Project 1", "Control Engineering", "2016.11.9", "Wonsup Yoon", "2013142157", "Electrical \\& Electronic Engineering", "Yonsei University"].join("}{")
  document += "}\n\\end{document}"

  var pdftex = new PDFTeX("texlive/pdftex-worker.js");

  pdftex.compile(document).then(function (pdf) { download("cover.pdf", pdf); });
  console.log(document)
}
);

