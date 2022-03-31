// Adding a user and alerting if successful
$("#createStudent").submit(function (event) {
  alert("The student added successfuly!");
});

// Updating a user with proper alerts

$("#updateStudent").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  console.log(unindexed_array);

  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  var req = {
    "url": `/api/students/${data.id}`,
    "method": "PUT",
    "data": data,
  };

  $.ajax(req).done(function(response) {
    alert("Data Updated Successfully!");
  });
});

// Deleting the students from the list

if (window.location.pathname == "/") {
  $ondelete = $(
    "section .wrapper .student .student-actions .delete-button a.delete"
  );
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `/api/students/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
