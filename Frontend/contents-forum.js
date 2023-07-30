var defaultThreads = [
    {
        id: 1,
        title: "Cancer",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        upvotes: 0,
        category: "Diseases",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        comments: [
            {
                author: "Doofus",
                date: Date.now(),
                content: "I have cancer"
            },
            {
                author: "Stanford Student <3",
                date: Date.now(),
                content: "That's sad"
            }
        ]
    },
    {
        id: 2,
        title: "Diabetes",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Diseases",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: [
            {
                author: "Natalie",
                date: Date.now(),
                content: "I want chocolate"
            },
            {
                author: "Aadi",
                date: Date.now(),
                content: "No."
            }
        ]
    },
    {
        id: 3,
        title: "Cough",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Diseases",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: [
            {
                author: "Shreyas",
                date: Date.now(),
                content: "I need to cough"
            },
            {
                author: "Siya",
                date: Date.now(),
                content: "Me too. I'm here for you."
            }
        ]
    },
    {
        id: 4,
        title: "Depression",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Diseases",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: [
            {
                author: "Aadi",
                date: Date.now(),
                content: "I'm sad"
            },
            {
                author: "Shreyas",
                date: Date.now(),
                content: "Yo watch this tiktok!"
            }
        ]
    },

    {
        id: 5,
        title: "Ibuprofin",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Prescription Medication",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: []
    },
    {
        id: 6,
        title: "I like pizza",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Miscellaneous",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: [
        
        ]
    }, 
    {
        id: 7,
        title: "I go to Stanford",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Miscellaneous",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: [
            
        ]
    }, 
    {
        id: 8,
        title: "This website is so cool",
        author: "Natalie",
        date: Date.now(),
        content: "Thread content 3",
        upvotes: 0,
        category: "Miscellaneous",
        recommended: 0,
        score: this.upvotes + 5 * this.comments,
        upvotes: 0,
      
        comments: [
            
        ]
    }
]


//localStorage.clear();
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
    defaultThreads = JSON.parse(localStorage.getItem('defaultThreads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('defaultThreads', defaultThreads);
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
