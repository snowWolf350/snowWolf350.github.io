function switchTab(tabId) {

    // Remove active class from all content
    document.querySelectorAll('.tab-content')
        .forEach(el => el.classList.remove('active'));

    // Remove active class from all buttons
    document.querySelectorAll('.tab')
        .forEach(el => el.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabId)
        .classList.add('active');

    // Highlight correct button
    event.target.classList.add('active');
}
