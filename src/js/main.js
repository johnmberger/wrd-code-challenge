(function(){

    function onChange(event) {
      var reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
      var obj = JSON.parse(event.target.result);
      console.log(obj);
      $('#target').html('this works!');
    }

    document.getElementById('upload').addEventListener('change', onChange);

}());
