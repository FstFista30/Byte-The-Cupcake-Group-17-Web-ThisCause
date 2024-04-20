const hamburger = document.querySelector("#btn-toggle");
hamburger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});

document.addEventListener("DOMContentLoaded", function() {

    const sideIcon = document.querySelector('.sidebar-nav .sidebar-item a i.bxs-smile').parentNode;
    const footerIcon = document.querySelector('.sidebar-footer .chat-item a i.bxs-smile').parentNode;
    const sideMessageIcon = document.querySelector('.sidebar-nav .sidebar-item a i.bxs-message-dots').parentNode;
    const footerMessageIcon = document.querySelector('.sidebar-footer .chat-item a i.bxs-message-dots').parentNode;

    sideIcon.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.emoji-chat').classList.toggle('show');
    });
    footerIcon.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.emoji-chat').classList.toggle('show');
    });
    sideMessageIcon.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.wrapper-chat').classList.toggle('show');
    });
    footerMessageIcon.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.wrapper-chat').classList.toggle('show');
    });
});
