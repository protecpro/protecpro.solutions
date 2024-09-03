document.addEventListener('DOMContentLoaded', function() {
    const backgroundDiv = document.getElementById('background');
    const token = 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;
    const repoOwner = rsengam;
    const repoName = For-our-company;
    const filePath = Background.png; // Path to the image in the repo

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.content) {
            const base64Image = atob(data.content);
            const imageUrl = `data:${data.encoding};base64,${data.content}`;
            backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
        }
    })
    .catch(error => console.error('Error fetching the image:', error));
});
