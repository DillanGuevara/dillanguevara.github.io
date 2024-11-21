$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 400);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ) {
            $('.ir-arriba').slideDown(400);
        } else {
            $('.ir-arriba').slideUp(400);
        }
    });
});



const tbody = document.getElementsByTagName("tbody")[0];
const rows = tbody.rows;

for (i  = 0; i < rows.length; i++) {
    var row = rows[i]
    row.setAttribute('draggable', true);

    row.addEventListener('dragstart', (e) => {
        row = e.target;
    });

    row.addEventListener('dragover', (e) => {
        var e = e;
        e.preventDefault();

        let allRows = Array.from(rows);
        if (allRows.indexOf(e.target.parentNode) > allRows.indexOf(row))
            e.target.parentNode.after(row);
        else
            e.target.parentNode.before(row);
    });
}