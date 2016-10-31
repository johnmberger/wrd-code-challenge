(function() {

  $('#upload').on('change', function(e) {

    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = (file => {
      return function(e) {

        let parsedJSON = JSON.parse(e.target.result);

        parsedJSON.forEach(item => {
          $('#target').append(`<${item.tag}>${item.content}</${item.tag}>`);
        });

      };
    })(file);

    reader.readAsText(file);

  });
}());
