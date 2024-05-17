// Multiselect Check Box Alokasi
$(document).ready(function () {
  // Menangkap Perubahan Check All
  $("#checkAll").click(function () {
    $('ul.dropdown-menu input[type="checkbox"]').prop("checked", this.checked);
    updateButtonText();
  });
  // Menangkap perubahan pada checkbox
  $('ul.dropdown-menu input[type="checkbox"]').change(function () {
    updateButtonText(); // Panggil fungsi untuk memperbarui teks tombol
  });

  // Fungsi untuk memperbarui teks tombol
  function updateButtonText() {
    if ($("#checkAll").is(":checked")) {
      buttonText = "All";
    } else {
      var selectedItems = [];

      // Loop through checked checkboxes and add their values to the array
      $('ul.dropdown-menu input[type="checkbox"]:checked').each(function () {
        selectedItems.push($(this).val().trim());
      });

      // Update button text with the list of selected items
      if (selectedItems.length) {
        buttonText = selectedItems.join(", ");
      } else {
        buttonText = "Click to Select";
      }
    }

    $("#btnAlokasi").text(buttonText);
  }
});
