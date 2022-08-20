var dropdownMenu = document.querySelector( '.dropdown-menu' );
var dropdown = document.querySelector( '.dropdown' );

dropdown.addEventListener( 'mouseover', function(){
    dropdownMenu.classList.add( 'slideup' );
} );
dropdown.addEventListener( 'mouseout', function(){
    dropdownMenu.classList.remove( 'slideup' );
} );