
$.getJSON("https://www.bling-center.com/business/list/test", 
    function (data) {
    var student = '';
    var business = ""
    // ITERATING THROUGH OBJECTS
    console.log(data)
    $.each(data.data, function (key, value) {
    //CONSTRUCTION OF ROWS HAVING
    // DATA FROM JSON OBJECT
        business += '<div class="bizBox">';
        business += '<div class="imgHolder"><span class="featured">Featured</span><img class="img-responsive listImg" src="img/list.jpg"></div>';
        business += '<h3>'+ value.businessName + '</h3>';
        business +='<span class="holder"><i class="fas fa-passport"></i> Business ID: <span class="value">'+ value.businessId +'</span></span>';
        business += '<span class="holder"><i class="fas fa-info"></i> Status: <span class="value">'+value.status+'</span></span>';
        business += '<span class="holder"><i class="fas fa-phone-alt"></i> Phone Number: <span class="value">'+ value.blingPhoneNumber +'</span></span>';
        business +='<span class="holder"><i class="fas fa-hand-holding-usd"></i> Price Plan: <span class="value">'+ value.businessId +'</span></span>';
        business += '<a href="#" class="btnVisit">View</a>';
        business += '</div>';
    });
        $('#bizHolder').append(business);
    });