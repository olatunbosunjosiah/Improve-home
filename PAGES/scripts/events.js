// Event for mobile click sidebar
AddEvent("#header-hamburger-icon","click",function(){
ToggleClass("mobile-sidebar","show");
ToggleClass("html","overflow-hidden");
});


// Event for closing mobile click sidebar
AddEvent("#close-mobile-sidebar","click",function(){
RemoveClass("html","overflow-hidden");

if(ContainsClass("mobile-sidebar","show")){
RemoveClass("mobile-sidebar","show");
}
})

// Event for Mobile Search 
AddEvent("#header-search-icon","click",function(){

    ToggleClass("mobile-logo","hide");
    ToggleClass("mobile-form-search","show");
    ToggleClass("header-search-icon","cancel-icon");

if(ContainsClass("header-search-icon","cancel-icon")) {
    AddInnerHtml("#header-search-icon",`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
<use href="#close-search-icon"></use>
    </svg>
    `);
}
else {
    AddInnerHtml("#header-search-icon",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<use href="#mobile-search-icon"></use>
</svg>`);
}

});