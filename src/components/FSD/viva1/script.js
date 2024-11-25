const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    message.style.display = 'block'; 
});

message.addEventListener('mouseover', function() {
    message.style.color = 'yellow'; 
});

message.addEventListener('mouseout', function() {
    message.style.display = 'none'; 
});