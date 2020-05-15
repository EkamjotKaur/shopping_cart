$(function()
{
    $('#btnadd').click(
        function()
        {
            addproduct(
                $('#productname').val(),
                $('#productmanufacturer').val(),
                $('#productprice').val(),
                function(addedproduct)
                {
                    window.alert("Added "+addedproduct.name+" to database");
                }
            )
        }
    )
}
)