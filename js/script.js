"use strict";

// For sticky header
window.addEventListener("scroll", function() {
    const headerElment = document.querySelector("header");
    const windowScroll = this.scrollY;

    if(windowScroll > 0) headerElment.classList.add("sticky-header");
    else headerElment.classList.remove("sticky-header")
});


// For sidebar drawer
const sidebarNav = document.querySelector(".sidebar-nav");
const sidebarOpen = document.querySelector(".sidebar-open");
const sidebarClose = document.querySelector(".sidebar-close");

sidebarOpen.addEventListener("click", function() {
    sidebarNav.classList.replace("rh:-left-64", "rh:left-0");
    document.body.classList.add("overflow-y-hidden");
});

sidebarClose.addEventListener("click", function() {
    sidebarNav.classList.replace("rh:left-0", "rh:-left-64");
    document.body.classList.remove("overflow-y-hidden");
});