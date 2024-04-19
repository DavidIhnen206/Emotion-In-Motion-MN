$(document).ready(function () {
    var timer = setInterval(() => {
        $("#buunto-date-picker .buunto-time-slot-picker-dropdown option").each(function() {
            var start_time = $(this).text()
            if(start_time.indexOf("-") != -1) {
                start_time = start_time.split("-")[0]
            }
            $(this).text(start_time)
        })
        $("#buunto-date-picker .buunto-time-slot-picker-dropdown").change(function() {
            $(this).find("option").each(function() {
                var start_time = ""
                if($(this).text().indexOf("-") != -1) {
                    start_time = $(this).text().substring(0, 8)
                }
                else {
                    start_time = $(this).text().substring(0, 16)
                }
                $(this).text(start_time)
            })
        })
        $(".buuntoCal-day").each(function() {
            $(this).click(function() {
                $("#buunto-date-picker .buunto-time-slot-picker-dropdown").find("option").each(function() {
                    var start_time = ""
                    if($(this).text().indexOf("-") != -1) {
                        start_time = $(this).val().substring(0, 8)
                    }
                    else {
                        start_time = $(this).text().substring(0, 16)
                    }
                    $(this).text(start_time)
                })
            })
        })
        if($("#buunto-date-picker").length > 0) {
            clearInterval(timer)
        }
    }, 1000);
    
});