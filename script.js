document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. MOBILE NAVIGATION TOGGLE MENU
       ========================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksMenu = document.getElementById('nav-links-menu');

    if (mobileMenuBtn && navLinksMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggles the navigation window visibility on smaller screens
            navLinksMenu.classList.toggle('active');
        });

        // Close mobile dropdown window automatically when an anchor link item is clicked
        const navAnchorLinks = navLinksMenu.querySelectorAll('a');
        navAnchorLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksMenu.classList.remove('active');
            });
        });
    }

    /* ==========================================
       2. REUSEABLE LIVE SEARCH FILTER FUNCTIONALITY
       ========================================== */
    const searchInput = document.getElementById('search-input');
    // Targets cards containing the class declaration ".searchable"
    const searchItems = document.querySelectorAll('.searchable');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchString = e.target.value.toLowerCase().trim();

            searchItems.forEach(item => {
                // Evaluates text layers within titles and text blocks
                const textContent = item.textContent.toLowerCase();
                
                if (textContent.includes(searchString)) {
                    // Item matches search parameters
                    item.style.display = '';
                } else {
                    // Item does not match search parameters; temporarily hiding card
                    item.style.display = 'none';
                }
            });
        });
    }

});

/* ==========================================
   💡 BEGINNER CHEAT SHEET: HOW TO ADD NEW GAMES
   ==========================================
   To insert a brand new game card on your website, find the line 
   marked "" inside index.html. 
   Copy a complete structural <div> block, like Game 1, and paste it 
   right below it. 

   Change these text points directly inside your copied code block:
   1. <h3>Game Title Name</h3>
   2. <p>Game Description text content details.</p>
   3. href="https://your-link-here.com/"
   
   Ensure the parent card contains class="card searchable" to keep 
   the automated live filter matching accurate!
*/
