import React, { useState, useEffect } from 'react';
import ReadListStoryItem from './ReadListStoryItem';

const Manageblog = ({ currentUser, stories, editDate }) => {
    // Filter stories to only show those published by the logged-in user
    const userStories = stories.filter(story => story.author.username === currentUser.username);

    return (
        <div className="manage-blog">
            <h2>Your Published Stories</h2>
            <div className="story-list">
                {userStories.length > 0 ? (
                    userStories.map(story => (
                        <ReadListStoryItem 
                            key={story.slug} 
                            story={story} 
                            editDate={editDate} 
                            currentUser={currentUser}
                        />
                    ))
                ) : (
                    <p>You have not published any stories yet.</p>
                )}
            </div>
        </div>
    );
};

export default Manageblog;