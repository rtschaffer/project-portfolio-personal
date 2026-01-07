/* RT StudioWorks project by Richard T. Schaffer
© 2025 by Richard T Schaffer licensed under MIT License.
102627152+rtschaffer@users.noreply.github.com
____________________________________________________________
ABOUT:
key_docDescription

* Title: key_docTitle
* Project: key_docProject
* Subject: key_docSubject
* Category: key_docCategory
* Keywords: key_docKeyword1, key_docKeyword2, key_docKeyword3
* Author: key_docAuthor
* version: key_docVersion
* Created: key_docCreated
* Updated: key_docUpdated
____________________________________________________________
LICENSE AND CREDITS:
* All credit to the respective owners of referenced works, authors and sources.
* This work is licensed under MIT License. To view a copy of this license, visit https://mit-license.org
    attribution block for copy: (don't forget to replace [title] including brackets)
        "RT StudioWorks:[title]" by Richard T. Schaffer, used under the MIT License.
* Where applicable, third party components are licensed under their own licenses, credit to respective owners.
____________________________________________________________
USAGE:

============================================================ */


class NavBtn {
    constructor(liElement) {
        this.li = liElement;
        this.a = liElement.querySelector('a');
        this.initEvents();
    }
    setHover() {
        this.li.classList.add('hover');
    }
    unsetHover() {
        this.li.classList.remove('hover');
    }
    setActive() {
        this.li.classList.add('active');
    }
    unsetActive() {
        this.li.classList.remove('active');
    }
    setCurrent() {
        this.li.classList.add('current');
    }
    unsetCurrent() {
        this.li.classList.remove('current');
    }
    setInactive() {
        this.li.classList.add('inactive');
    }
    unsetInactive() {
        this.li.classList.remove('inactive');
    }
    initEvents() {
        this.li.addEventListener('mouseenter', () => this.setHover());
        this.li.addEventListener('mouseleave', () => this.unsetHover());
        // On click, set this as active/current and unset others
        this.li.addEventListener('click', () => {
            NavBtn.clearAllActive();
            this.setActive();
            this.setCurrent();
        });
    }

    // Static method to clear active/current from all nav buttons
    static clearAllActive() {
        if (window.navBtns) {
            window.navBtns.forEach(btn => {
                btn.unsetActive();
                btn.unsetCurrent();
            });
        }
    }
}

// Collect nav li items in .site-nav and create NavBtn instances
document.addEventListener('DOMContentLoaded', function() {
    const navLis = document.querySelectorAll('ul.site-nav > li');
    window.navBtns = Array.from(navLis).map(li => new NavBtn(li));
    // Optionally, set the first item as current on load
    if (window.navBtns.length > 0) {
        window.navBtns[0].setCurrent();
    }
});
