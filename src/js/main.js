(function() {

  $('#upload').on('change', function(e) {

    $('#target').empty();
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = (file => {
      return function(e) {

        let parsedJSON = JSON.parse(e.target.result);

        parsedJSON.forEach((parent, i) => {

          $('#target').append(`<${parent.tag}></${parent.tag}>`);

          let childContent = parent.content.content;
          let childTag = parent.content.tag;

          // *** weird js typecheck *** //
          // actually checking for array of objects //
          if (typeof childContent === 'object') {

            childContent.forEach(child => {

              $(`${parent.tag}:nth-child(${i+1})`)
              .append(`<${child.tag}>${child.content}</${child.tag}>`);

            });

          } else {

            $(`${parent.tag}`)
            .append(`<${childTag}>${childContent}</${childTag}>`);

          }
        });
      };
    })(file);

    reader.readAsText(file);

  });
}());
