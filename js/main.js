(function() {

  $('#upload').on('change', function(e) {

    $('#target').empty();
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = (file => {
      return function(e) {

        let parsedJSON = JSON.parse(e.target.result);

        parsedJSON.forEach(parentElement => {
          let element = $(`<${parentElement.tag}></${parentElement.tag}>`);
          $('#target').append(element);
          convertToHTML(parentElement.content, element);
        });

        function convertToHTML(ParentContent, parentElement) {

          if (Array.isArray(ParentContent)) {
            ParentContent.forEach(childContent => convertToHTML(childContent, parentElement));

          } else if (Object(ParentContent) === ParentContent) {
            let newParent = $(`<${ParentContent.tag}></${ParentContent.tag}`);
            parentElement.append(newParent);
            convertToHTML(ParentContent.content, newParent);

          } else {
            $(parentElement).html(ParentContent);
          }
        }
      };
    })(file);

    reader.readAsText(file);

  });
}());
