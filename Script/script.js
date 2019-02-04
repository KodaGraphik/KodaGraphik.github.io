<script>
  $(document).ready(function() {
    $("#hamburger").click(function() {
      $("#navigation").fadeToggle("fast");
      $("#navcontainer").slideToggle("slow");
      $("#menu").slideToggle("fast");
      $("#close").slideToggle("fast");
    });
  });
</script>
