$('document').ready(function(){
    console.log('JavaScript and jQuery are working');
    
    $(".hidden").hide();

    $("div.row").each(function(){
        $("div:first").css("text-align","right");
        $("div:first h2").css("text-align","left");
    });

    $("#tabs").tabs({
        disabled:[1,2,3,4,5],
        active: 0,
        heightStyle: "fill"
    });

    $("input[type='button']").button();

    //validation
    $("#personalForm").validate({
        rules : {
            firstName: {
                maxlength: 50
            },
            middleInitial:{
                maxlength: 1
            },
            lastName:{
                maxlength: 100
            },
            streetAddress:{
                maxlength: 100
            },
            aptUnitNum:{
                maxlength: 20
            },
            city:{
                maxlength: 90
            },
            zip:{
                rangelength: [5,5],
                digits: true
            },
            phone:{
                phoneUS: true
            },
            email:{
                email: true
            },
            dateAvailable:{
                date : true
            },
            ssn:{
                rangelength: [9,9],
                digits: true
            },
            desiredSal:{
                digits: true
            }
        },
        messages : {
            firstName:{
                maxlength: "First Name cannot be more than 50 characters long."
            },
            middleInitial:{
                maxlength: "Middle Initial must be one character long."
            },
            lastName:{
                maxlength: "Last Name cannot be more than 100 characters long."
            },
            streetAddress:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            aptUnitNum:{
                maxlength: "Apartment/Unit Number cannot be more than 20 characters long."
            },
            city:{
                maxlength: "City cannot be more than 90 characters long."
            },
            zip:{
                rangelength : "Zip must be 5 characters long."
            },
            ssn:{
                rangelength: "Social Security Number must be 9 digits long."
            }
        }
    });

    $("#employmentForm").validate({
        rules:{
            employer1Company:{
                maxlength: 75
            },
            employer1Address:{
                maxlength: 100
            },
            employer1City:{
                maxlength: 90
            },
            employer1State:{
                required: true
            },
            employer1Zip:{
                rangelength: [5,5],
                digits: true
            },
            employer1Phone:{
                phoneUS: true
            },
            employer1SupervisorFirstName:{
                maxlength: 50
            },
            employer1SupervisorLastName:{
                maxlength: 100
            },
            employer1JobTitle:{
                maxlength: 25
            },
            employer1StartingSal:{
                number: true
            },
            employer1EndingSal:{
                number: true
            },
            employer1Responsibilities:{
                maxlength: 350
            },
            employer1StartDate:{
                date : true
            },
            employer1EndDate:{
                date : true
            },
            employer1ReasonForLeaving:{
                maxlength: 25
            },
            employer2Company:{
                maxlength: 75
            },
            employer2Address:{
                maxlength: 100
            },
            employer2City:{
                maxlength: 90
            },
            employer2Zip:{
                rangelength: [5,5],
                digits: true
            },
            employer2Phone:{
                phoneUS: true
            },
            employer2SupervisorFirstName:{
                maxlength: 50
            },
            employer2SupervisorLastName:{
                maxlength: 100
            },
            employer2JobTitle:{
                maxlength: 25
            },
            employer2StartingSal:{
                number: true
            },
            employer2EndingSal:{
                number: true
            },
            employer2Responsibilities:{
                maxlength: 350
            },
            employer2StartDate:{
                date : true
            },
            employer2EndDate:{
                date : true
            },
            employer2ReasonForLeaving:{
                maxlength: 25
            },
            employer3Company:{
                maxlength: 75
            },
            employer3Address:{
                maxlength: 100
            },
            employer3City:{
                maxlength: 90
            },
            employer3Zip:{
                rangelength: [5,5],
                digits: true
            },
            employer3Phone:{
                phoneUS: true
            },
            employer3SupervisorFirstName:{
                maxlength: 50
            },
            employer3SupervisorLastName:{
                maxlength: 100
            },
            employer3JobTitle:{
                maxlength: 25
            },
            employer3StartingSal:{
                number: true
            },
            employer3EndingSal:{
                number: true
            },
            employer3Responsibilities:{
                maxlength: 350
            },
            employer3StartDate:{
                date : true
            },
            employer3EndDate:{
                date : true
            },
            employer3ReasonForLeaving:{
                maxlength: 25
            }
        },
        messages:{
            employer1Company:{
                maxlength: "Company name cannot be more than 75 characters long."
            },
            employer1Address:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            employer1City:{
                maxlength: "City cannot be more than 90 characters long."
            },
            employer1Zip:{
                rangelength : "Zip must be 5 characters long."
            },
            employer1SupervisorFirstName:{
                maxlength: "Supervisor First Name cannot be more than 50 characters long."
            },
            employer1SupervisorLastName:{
                maxlength: "Supervisor Last Name cannot be more than 100 characters long."
            },
            employer1JobTitle:{
                maxlength: "Job Title cannot be more than 25 characters long."
            },
            employer1StartingSal:{
                number: "Starting Salary must be a number."
            },
            employer1EndingSal:{
                number: "Ending Salary must be a number."
            },
            employer1Responsibilities:{
                maxlength: "Responsibilities cannot be more than 350 characters."
            },
            employer1ReasonForLeaving:{
                maxlength: "Reason For Leaving cannot be more than 25 characters."
            },
            employer2Company:{
                maxlength: "Company name cannot be more than 75 characters long."
            },
            employer2Address:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            employer2City:{
                maxlength: "City cannot be more than 90 characters long."
            },
            employer2Zip:{
                rangelength : "Zip must be 5 characters long."
            },
            employer2SupervisorFirstName:{
                maxlength: "Supervisor First Name cannot be more than 50 characters long."
            },
            employer2SupervisorLastName:{
                maxlength: "Supervisor Last Name cannot be more than 100 characters long."
            },
            employer2JobTitle:{
                maxlength: "Job Title cannot be more than 25 characters long."
            },
            employer2StartingSal:{
                number: "Starting Salary must be a number."
            },
            employer2EndingSal:{
                number: "Ending Salary must be a number."
            },
            employer2Responsibilities:{
                maxlength: "Responsibilities cannot be more than 350 characters."
            },
            employer2ReasonForLeaving:{
                maxlength: "Reason For Leaving cannot be more than 25 characters."
            },
            employer3Company:{
                maxlength: "Company name cannot be more than 75 characters long."
            },
            employer3Address:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            employer3City:{
                maxlength: "City cannot be more than 90 characters long."
            },
            employer3Zip:{
                rangelength : "Zip must be 5 characters long."
            },
            employer3SupervisorFirstName:{
                maxlength: "Supervisor First Name cannot be more than 50 characters long."
            },
            employer3SupervisorLastName:{
                maxlength: "Supervisor Last Name cannot be more than 100 characters long."
            },
            employer3JobTitle:{
                maxlength: "Job Title cannot be more than 25 characters long."
            },
            employer3StartingSal:{
                number: "Starting Salary must be a number."
            },
            employer3EndingSal:{
                number: "Ending Salary must be a number."
            },
            employer3Responsibilities:{
                maxlength: "Responsibilities cannot be more than 350 characters."
            },
            employer3ReasonForLeaving:{
                maxlength: "Reason For Leaving cannot be more than 25 characters."
            }
        }
    });

    $('#salaryCalc').validate({
        rules:{
            hourlyWage:{
                number : true
            },
            hoursWorked:{
                number:true
            }
        }
    });

    $("#educationForm").validate({
        rules:{
            highschoolName:{
                maxlength:75
            },
            highschoolAddress:{
                maxlength: 100
            },
            highschoolCity:{
                maxlength: 90
            },
            highschoolState:{
                required: true
            },
            highschoolZip:{
                rangelength: [5,5],
                digits: true
            },
            highschoolStartDate:{
                date : true
            },
            highschoolEndDate:{
                date : true
            },
            highschoolDiploma:{
                maxlength: 75
            },
            collegeName:{
                maxlength:75
            },
            collegeAddress:{
                maxlength: 100
            },
            collegeCity:{
                maxlength: 90
            },
            collegeState:{
                required: true
            },
            collegeZip:{
                rangelength: [5,5],
                digits: true
            },
            collegeStartDate:{
                date : true
            },
            collegeEndDate:{
                date : true
            },
            collegeDegree:{
                maxlength: 75
            },
            otherEducationName:{
                maxlength:75
            },
            otherEducationAddress:{
                maxlength: 100
            },
            otherEducationCity:{
                maxlength: 90
            },
            otherEducationState:{
                required: true
            },
            otherEducationZip:{
                rangelength: [5,5],
                digits: true
            },
            otherEducationStartDate:{
                date : true
            },
            otherEducationEndDate:{
                date : true
            },
            otherEducationDegree:{
                maxlength: 75
            }
        },
        messages:{
            highschoolName:{
                maxlength: "Highschool Name cannot be more than 75 characters long."
            },
            highschoolAddress:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            highschoolCity:{
                maxlength: "City cannot be more than 90 characters long."
            },
            highschoolZip:{
                rangelength : "Zip must be 5 characters long."
            },
            highschoolDiploma:{
                maxlength: "Diploma cannot be more than 75 characters long."
            },
            collegeName:{
                maxlength: "College Name cannot be more than 75 characters long."
            },
            collegeAddress:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            collegeCity:{
                maxlength: "City cannot be more than 90 characters long."
            },
            collegeZip:{
                rangelength : "Zip must be 5 characters long."
            },
            collegeDegree:{
                maxlength: "Degree cannot be more than 75 characters long."
            },
            otherEducationName:{
                maxlength: "Other School Name cannot be more than 75 characters long."
            },
            otherEducationAddress:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            otherEducationCity:{
                maxlength: "City cannot be more than 90 characters long."
            },
            otherEducationZip:{
                rangelength : "Zip must be 5 characters long."
            },
            otherEducationDegree:{
                maxlength: "Degree cannot be more than 75 characters long."
            }
        }
    });

    $("#otherForm").validate({
        rules:{
            explainFelony:{
                maxlength: 1000
            },
            startDate:{
                date : true
            },
            endDate:{
                date : true
            },
            militaryStartDate:{
                date : true
            },
            militaryEndDate:{
                date : true
            },
            militaryRank:{
                maxlength : 30
            },
            militaryDischargeExplination:{
                maxlength : 1000
            }
        },
        messages:{
            militaryRank:{
                maxlength : "Rank at Discharge cannot be more than 30 characters long."
            },
            explainDischarge:{
                maxlength : "Explain Discharge cannot be more than 1000 characters long."
            }
        }
    });

    $("#referencesForm").validate({
        rules:{
            ref1FirstName: {
                maxlength: 50
            },
            ref1LastName:{
                maxlength: 100
            },
            ref1Relationship:{
                maxlength: 50
            },
            ref1Company:{
                maxlength: 75
            },
            ref1Phone:{
                phoneUS: true
            },
            ref1Email:{
                email: true
            },
            ref1Address:{
                maxlength: 100
            },
            ref1City:{
                maxlength: 90
            },
            ref1Zip:{
                rangelength: [5,5],
                digits: true
            },
            ref2FirstName: {
                maxlength: 50
            },
            ref2LastName:{
                maxlength: 100
            },
            ref2Relationship:{
                maxlength: 50
            },
            ref2Company:{
                maxlength: 75
            },
            ref2Phone:{
                phoneUS: true
            },
            ref2Email:{
                email: true
            },
            ref2Address:{
                maxlength: 100
            },
            ref2City:{
                maxlength: 90
            },
            ref2Zip:{
                rangelength: [5,5],
                digits: true
            },
            ref3FirstName: {
                maxlength: 50
            },
            ref3LastName:{
                maxlength: 100
            },
            ref3Relationship:{
                maxlength: 50
            },
            ref3Company:{
                maxlength: 75
            },
            ref3Phone:{
                phoneUS: true
            },
            ref3Email:{
                email: true
            },
            ref3Address:{
                maxlength: 100
            },
            ref3City:{
                maxlength: 90
            },
            ref3Zip:{
                rangelength: [5,5],
                digits: true
            }
        },
        messages:{
            ref1FirstName:{
                maxlength: "First Name cannot be more than 50 characters long."
            },
            ref1LastName:{
                maxlength: "Last Name cannot be more than 100 characters long."
            },
            ref1Relationship:{
                maxlength: "Relationship cannot be more than 50 characters long."
            },
            ref1Company:{
                maxlength: "CompanyName cannot be more than 75 characters long."
            },
            ref1Address:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            ref1City:{
                maxlength: "City cannot be more than 90 characters long."
            },
            ref1Zip:{
                rangelength : "Zip must be 5 characters long."
            },
            ref2FirstName:{
                maxlength: "First Name cannot be more than 50 characters long."
            },
            ref2LastName:{
                maxlength: "Last Name cannot be more than 100 characters long."
            },
            ref2Relationship:{
                maxlength: "Relationship cannot be more than 50 characters long."
            },
            ref2Company:{
                maxlength: "CompanyName cannot be more than 75 characters long."
            },
            ref2Address:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            ref2City:{
                maxlength: "City cannot be more than 90 characters long."
            },
            ref2Zip:{
                rangelength : "Zip must be 5 characters long."
            },            
            ref3FirstName:{
                maxlength: "First Name cannot be more than 50 characters long."
            },
            ref3LastName:{
                maxlength: "Last Name cannot be more than 100 characters long."
            },
            ref3Relationship:{
                maxlength: "Relationship cannot be more than 50 characters long."
            },
            ref3Company:{
                maxlength: "CompanyName cannot be more than 75 characters long."
            },
            ref3Address:{
                maxlength: "Address cannot be more than 100 characters long."
            },
            ref3City:{
                maxlength: "City cannot be more than 90 characters long."
            },
            ref3Zip:{
                rangelength : "Zip must be 5 characters long."
            }
        }
    });

    $("#submitPersonal").click(function(){
        if($("#personalForm").valid()){            
            $("#tabs").tabs({
                disabled: [0,2,3,4,5],
                active: 1
            })
        }
    });
    $("#submitEmployment").click(function(){
        if($("#employmentForm").valid()){
            $("#tabs").tabs({
                disabled: [0,1,3,4,5],
                active: 2
            })
        }
    });
    $("#calculate").click(function(){
        console.log("click");
        if($('#salaryCalc').valid()){
            var result = $("input[name='hourlyWage']").val()*$("input[name='hoursWorked']").val()*52;
            console.log(result);
            $("#calculatedSalary").text("$"+result);
        }
    })
    $("#submitEducation").click(function(){
        if($("#educationForm").valid()){
            $("#tabs").tabs({
                disabled: [0,1,2,4,5],
                active: 3
            })
        }
    });
    $("#submitOther").click(function(){
        if($("#otherForm").valid()){
            $("#tabs").tabs({
                disabled: [0,1,2,3,5],
                active: 4
            })
        }
    });
    $("#submitReferences").click(function(){
        if($("#referencesForm").valid()){
            $("#tabs").tabs({
                disabled: [0,1,2,3,4],
                active: 5
            })
        }
    });

    // personal


    // employment
    $("ul.table").sortable();

    var numberOfEmployers = 0;
    var employersHidden = [true, true, true];
    $("input[name='addEmployer']").click(function(){
        if(numberOfEmployers <= 2){
            numberOfEmployers++;
            if($("#employer1").is(":hidden")){
                $("#employer1").show();
                $("input[name='employer1Company']").focus();
            } else if($("#employer2").is(":hidden")){
                $("#employer2").show();
                $("input[name='employer2Company']").focus();
            }
            else{
                $("#employer3").show();
                $("input[name='employer3Company']").focus();
            }
        }
        if(numberOfEmployers == 3){
            $("input[name='addEmployer']").hide();
        }
    });
    $("input[name='employer1Remove']").click(function(){
        clearEmployerValues(1);
        $("#employer1").hide();
        numberOfEmployers--;
        $("input[name='addEmployer']").show();
        
    });
    $("input[name='employer2Remove']").click(function(){
        clearEmployerValues(2);
        $('#employer2').hide();
        numberOfEmployers--;
        $("input[name='addEmployer']").show();
    });
    $("input[name='employer3Remove']").click(function(){
        clearEmployerValues(3);
        $('#employer3').hide();
        numberOfEmployers--;
        $("input[name='addEmployer']").show();
    });

    $("input[name='employer1StartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='employer1EndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });

    $("input[name='employer2StartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='employer2EndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });
    
    $("input[name='employer3StartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='employer3EndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });

    // education
    $("input[name='attendedCollege']").change(function(){
        if($(this).val() == "yes"){
            $(".collegequestions").slideDown(300);
        }else{
            $(".collegequestions").slideUp(300);
        }
    });

    $("input[name='attendedOtherEducation']").change(function(){
        if($(this).val() == "yes"){
            $(".othereducationquestions").slideDown(300);
        }else{
            $(".othereducationquestions").slideUp(300);
        }
    });

    $("input[name='highschoolStartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='highschoolEndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });
    $("input[name='collegeStartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='collegeEndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });
    $("input[name='otherEducationStartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='otherEducationEndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });


    // other
    $("input[name='citizen']").change(function(){
        if($(this).val() == "no"){
            $(".nonCitizenQuestions").slideDown(300);
        }else{
            $(".nonCitizenQuestions").slideUp(300);
        }
    });
    $("input[name='felon']").change(function(){
        if($(this).val() == "no"){
            $(".felonQuestions").slideUp(300);
        }else{
            $(".felonQuestions").slideDown(300);
        }
    });
    $("input[name='formerEmployee']").change(function(){
        if($(this).val() == "no"){
            $(".formerEmployeeQuestions").slideUp(300);
        }else{
            $(".formerEmployeeQuestions").slideDown(300);
        }
    });
    $("input[name='servedInMilitary']").change(function(){
        if($(this).val() == "no"){
            $(".militaryQuestions").slideUp(300);
        }else{
            $(".militaryQuestions").slideDown(300);
        }
    });
    $("select[name='militaryDischarge']").change(function(){
        if($(this).val() == "Honorable discharge"){
            $(".dischargeQuestions").slideUp(300);
        }else{
            $(".dischargeQuestions").slideDown(300);
        }
    });

    $("input[name='dateAvailable']").datepicker({minDate: "+1D"});
    $("input[name='startDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='endDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });
    $("input[name='militaryStartDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "-1D"
    });
    $("input[name='militaryEndDate']").datepicker({
        changeYear : true,
        changeMonth : true,
        maxDate: "0"
    });
});

function clearEmployerValues(employerNumber){
    $("input[name='employer"+employerNumber+"Company']").val("");
    $("input[name='employer"+employerNumber+"Address']").val("");    
    $("input[name='employer"+employerNumber+"City']").val("");   
    // reset state not working, need to fix 
    $("input[name='employer"+employerNumber+"StateCode']").val("blank"); 
    $("input[name='employer"+employerNumber+"Zip']").val("");    
    $("input[name='employer"+employerNumber+"Phone']").val("");    
    $("input[name='employer"+employerNumber+"SupervisorFirstName']").val("");    
    $("input[name='employer"+employerNumber+"SupervisorLastName']").val("");
    $("input[name='employer"+employerNumber+"JobTitle']").val("");
    $("input[name='employer"+employerNumber+"StartingSal']").val("");
    $("input[name='employer"+employerNumber+"EndingSal']").val("");
    $("input[name='employer"+employerNumber+"Responsibilities']").val("");
    $("input[name='employer"+employerNumber+"StartDate']").val("");
    $("input[name='employer"+employerNumber+"EndDate']").val("");
    $("input[name='employer"+employerNumber+"ReasonForLeaving']").val("");
    //also not working, need to fix
    //$("input[name='employer"+employerNumber+"CanContactEmployer']").checkboxradio("refresh");
}