// Like Button Click Event (Toggles "Liked" state)
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        button.innerHTML = button.classList.contains('liked') ? '<i class="fa fa-thumbs-up"></i> Liked' : '<i class="fa fa-thumbs-up"></i> Like';
    });
});

// Comment Button Click Event with Comment Box Toggle
document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const postElement = e.target.closest('.post');
        const commentSection = postElement.querySelector('.comment-section');
        commentSection.classList.toggle('visible');
    });
});

// Chat Button Click Event to Open Chatbox Modal
document.querySelectorAll('.chat-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('chatbox-modal').classList.add('chatbox-visible');
    });
});

// Close Chatbox
document.getElementById('close-chatbox').addEventListener('click', () => {
    document.getElementById('chatbox-modal').classList.remove('chatbox-visible');
});

// Send Chat Message and Display in Chatbox
document.getElementById('send-message').addEventListener('click', () => {
    const message = document.getElementById('chat-input').value;
    if (message.trim()) {
        const messageBox = document.createElement('div');
        messageBox.classList.add('chat-message');
        messageBox.textContent = message;
        document.querySelector('.chatbox-messages').appendChild(messageBox);
        document.getElementById('chat-input').value = '';
        document.querySelector('.chatbox-messages').scrollTop = document.querySelector('.chatbox-messages').scrollHeight;
    }
});

// Plus button to open post modal
document.getElementById('plus-btn').addEventListener('click', () => {
    document.getElementById('post-modal').classList.add('modal-visible');
});

// Close modal by clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('post-modal');
    if (!modal.contains(e.target) && !e.target.matches('#plus-btn')) {
        modal.classList.remove('modal-visible');
    }
});

// Submit New Post Functionality
document.getElementById('post-submit').addEventListener('click', () => {
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').files[0];

    if (postText || postImage) {
        const postContainer = document.getElementById('feed');

        const newPost = document.createElement('div');
        newPost.classList.add('post');

        let postContent = `
            <div class="post-header">
                <img class="profile-pic" src="https://via.placeholder.com/50" alt="User Profile">
                <div class="user-info">
                    <h3>New User</h3>
                    <p class="timestamp">Just now</p>
                </div>
            </div>
            <p class="post-caption">${postText}</p>`;

        if (postImage) {
            const imageURL = URL.createObjectURL(postImage);
            postContent += `
                <div class="post-image-container">
                    <img class="post-image" src="${imageURL}" alt="New Post Image">
                </div>`;
        }

        postContent += `
            <div class="post-actions">
                <button class="like-btn"><i class="fa fa-thumbs-up"></i> Like</button>
                <button class="comment-btn"><i class="fa fa-comment"></i> Comment</button>
                <button class="chat-btn"><i class="fa fa-comment-alt"></i> Chat</button>
            </div>
            <div class="comment-section"></div>`;

        newPost.innerHTML = postContent;

        postContainer.prepend(newPost);
        document.getElementById('post-text').value = '';
        document.getElementById('post-image').value = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Story Click Event
    document.querySelectorAll('.story').forEach(story => {
        story.addEventListener('click', () => {
            const username = story.getAttribute('data-username');
            const storyDetails = story.getAttribute('data-story');

            document.getElementById('story-username').textContent = username;
            document.getElementById('story-details').textContent = storyDetails;

            document.getElementById('story-modal').style.display = 'block';
        });
    });

    // Close Story Modal
    document.getElementById('close-story-modal').addEventListener('click', () => {
        document.getElementById('story-modal').style.display = 'none';
    });

    // Like Button Click Event
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            button.innerHTML = button.classList.contains('liked') ? '<i class="fa fa-thumbs-up"></i> Liked' : '<i class="fa fa-thumbs-up"></i> Like';
        });
    });

    // Comment Button Click Event
    document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', () => {
            const commentSection = button.closest('.post').querySelector('.comment-section');
            commentSection.classList.toggle('visible');
        });
    });

    // Chat Button Click Event to Open Chatbox
    document.querySelectorAll('.chat-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('chatbox-modal').classList.add('chatbox-visible');
        });
    });

    // Close Chatbox
    document.getElementById('close-chatbox').addEventListener('click', () => {
        document.getElementById('chatbox-modal').classList.remove('chatbox-visible');
    });

    // Send Chat Message
    document.getElementById('send-message').addEventListener('click', () => {
        const message = document.getElementById('chat-input').value;
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        document.querySelector('.chatbox-messages').appendChild(messageBox);
        document.getElementById('chat-input').value = '';
    });

    // Add Post Button Click Event
    document.getElementById('plus-btn').addEventListener('click', () => {
        document.getElementById('post-modal').classList.add('modal-visible');
    });

    // Close Post Modal
    document.getElementById('post-submit').addEventListener('click', () => {
        document.getElementById('post-modal').classList.remove('modal-visible');
    });
});








document.addEventListener('DOMContentLoaded', () => {
    // Like Button Click Event - change color when clicked
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('liked');
            button.querySelector('i').style.color = "#e74c3c"; // Changes to red when liked
        });
    });

    // Comment Button Click Event - Show comment section immediately
    document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', () => {
            const commentSection = button.closest('.post').querySelector('.comment-section');
            commentSection.classList.add('visible'); // Show the comment section when clicked
        });
    });

    // Add Comment
    document.querySelectorAll('.comment-submit').forEach(button => {
        button.addEventListener('click', () => {
            const post = button.closest('.post');
            const commentInput = post.querySelector('.comment-input');
            const newComment = commentInput.value.trim();
            if (newComment) {
                const commentsList = post.querySelector('.comments-list');
                const commentBox = document.createElement('div');
                commentBox.textContent = newComment;
                commentsList.appendChild(commentBox);
                commentInput.value = ''; // Clear comment input
            }
        });
    });

    // Chat Button Click Event to Open Chatbox
    document.querySelectorAll('.chat-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('chatbox-modal').classList.add('visible');
        });
    });

    // Close Chatbox
    document.getElementById('close-chatbox').addEventListener('click', () => {
        document.getElementById('chatbox-modal').classList.remove('visible');
    });

    // Send Chat Message
    document.getElementById('send-message').addEventListener('click', () => {
        const message = document.getElementById('chat-input').value;
        if (message.trim() !== '') {
            const messageBox = document.createElement('div');
            messageBox.textContent = message;
            document.querySelector('.chatbox-messages').appendChild(messageBox);
            document.getElementById('chat-input').value = ''; // Clear chat input
        }
    });
});

