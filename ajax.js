  $.ajax({
      url: 'data.json',
      dataType: 'json',
      success: function (data) {
        for (var i = 0; i < data.length; i++) {
          var row = $('<tr><td>' + data[i].serialno + '</td><td>' + data[i].name + '</td><td>' + data[i].age + '</td><td>' + data[i].zipcode + '</td><td>' + data[i].city + '</td><td>' + data[i].county + '</td><td>' + data[i].profession + '</td></tr>');
          $('#myTable').append(row);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert('Error: ' + textStatus + ' - ' + errorThrown);
      }
    });