let story = localStorage.getItem('story');

try {
    if(!story) {
        console.log('Starting your story');
    } else {
        console.log('Enter ur chapter');
    }
} catch (error) {
    console.log('Error : ' + error);
}