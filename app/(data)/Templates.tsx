export default [
    {
        name:"Blog title",
        desc:'Generate a blog title',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4922/4922073.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche and outline  topic and give me result in rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:"Enter blog outline ",
                field:"textarea",
                name:"outline",  
            }
        ]
    },
    {
        "name": "Excuse Generator",
        "desc": "Generate creative excuses for various situations.",
        "category": "Humor",
        "icon": "https://cdn-icons-png.flaticon.com/128/2917/2917908.png",
        "aiPrompt": "Generate 3 creative excuses for the given situation.",
        "slug": "generate-excuse",
        "form": [
            {
                "label": "Enter situation",
                "field": "input",
                "name": "situation",
                "required": true
            }
        ]
    },
    {
        "name": "Instagram Post Caption Generator",
        "desc": "Generate engaging captions for your Instagram posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733558.png",
        "aiPrompt": "Generate 5 engaging Instagram post captions based on the provided photo or topic.",
        "slug": "generate-instagram-caption",
        "form": [
            {
                "label": "Enter photo or topic description",
                "field": "textarea",
                "name": "description",
                "required": true
            }
        ]
    },
    {
        "name": "Instagram Reel Idea Generator",
        "desc": "Generate creative ideas for Instagram Reels.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/3820/3820286.png",
        "aiPrompt": "Generate 3 creative Instagram Reel ideas based on the given niche.",
        "slug": "generate-instagram-reel",
        "form": [
            {
                "label": "Enter your niche",
                "field": "input",
                "name": "niche",
                "required": true
            }
        ]
    },
    {
        "name": "TikTok Idea Generator",
        "desc": "Generate trending TikTok video ideas.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733585.png",
        "aiPrompt": "Generate 3 trending TikTok video ideas based on the given topic.",
        "slug": "generate-tiktok-idea",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Meme Generator",
        "desc": "Generate relevant memes based on your topic.",
        "category": "Humor",
        "icon": "https://cdn-icons-png.flaticon.com/128/616/616492.png",
        "aiPrompt": "Generate 3 relevant memes based on the given topic.",
        "slug": "generate-meme",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Mixed Language Generator",
        "desc": "Generate content that mixes different languages.",
        "category": "Language",
        "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        "aiPrompt": "Generate a sentence that mixes the given languages.",
        "slug": "generate-mixed-language",
        "form": [
            {
                "label": "Enter the first language",
                "field": "input",
                "name": "language1",
                "required": true
            },
            {
                "label": "Enter the second language",
                "field": "input",
                "name": "language2",
                "required": true
            }
        ]
    },
    {
        "name": "Motivational Quote Generator",
        "desc": "Generate motivational quotes based on your theme.",
        "category": "Inspiration",
        "icon": "https://cdn-icons-png.flaticon.com/128/566/566014.png",
        "aiPrompt": "Generate 3 motivational quotes based on the given theme.",
        "slug": "generate-motivational-quote",
        "form": [
            {
                "label": "Enter your theme",
                "field": "input",
                "name": "theme",
                "required": true
            }
        ]
    },
    {
        "name": "Poem Generator",
        "desc": "Generate a poem based on your topic or theme.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/618/618741.png",
        "aiPrompt": "Write a short poem based on the given topic or theme.",
        "slug": "generate-poem",
        "form": [
            {
                "label": "Enter your topic or theme",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Product Description Generator",
        "desc": "Generate compelling product descriptions.",
        "category": "E-commerce",
        "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        "aiPrompt": "Generate a product description based on the given product details.",
        "slug": "generate-product-description",
        "form": [
            {
                "label": "Enter product details",
                "field": "textarea",
                "name": "productDetails",
                "required": true
            }
        ]
    },
    {
        "name": "Event Invitation Generator",
        "desc": "Generate invitations for events.",
        "category": "Social",
        "icon": "https://cdn-icons-png.flaticon.com/128/845/845646.png",
        "aiPrompt": "Generate an invitation based on the event details provided.",
        "slug": "generate-event-invitation",
        "form": [
            {
                "label": "Enter event details",
                "field": "textarea",
                "name": "eventDetails",
                "required": true
            }
        ]
    },
    {
        "name": "Daily Affirmation Generator",
        "desc": "Generate daily affirmations for positivity.",
        "category": "Wellness",
        "icon": "https://cdn-icons-png.flaticon.com/128/2053/2053075.png",
        "aiPrompt": "Generate 3 daily affirmations based on the given theme.",
        "slug": "generate-daily-affirmation",
        "form": [
            {
                "label": "Enter your theme",
                "field": "input",
                "name": "theme",
                "required": true
            }
        ]
    },
    {
        "name": "Random Fun Fact Generator",
        "desc": "Generate fun facts based on a specific topic.",
        "category": "Education",
        "icon": "https://cdn-icons-png.flaticon.com/128/3230/3230413.png",
        "aiPrompt": "Generate 3 fun facts based on the given topic.",
        "slug": "generate-fun-fact",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Workout Routine Generator",
        "desc": "Generate a personalized workout routine.",
        "category": "Fitness",
        "icon": "https://cdn-icons-png.flaticon.com/128/837/837798.png",
        "aiPrompt": "Generate a workout routine based on the provided fitness goals.",
        "slug": "generate-workout-routine",
        "form": [
            {
                "label": "Enter your fitness goals",
                "field": "textarea",
                "name": "goals",
                "required": true
            }
        ]
    },
    {
        "name": "Travel Itinerary Generator",
        "desc": "Create a travel itinerary based on your destination.",
        "category": "Travel",
        "icon": "https://cdn-icons-png.flaticon.com/128/3263/3263392.png",
        "aiPrompt": "Generate a 3-day travel itinerary for the given destination.",
        "slug": "generate-travel-itinerary",
        "form": [
            {
                "label": "Enter your destination",
                "field": "input",
                "name": "destination",
                "required": true
            }
        ]
    },
    {
        "name": "Recipe Generator",
        "desc": "Generate recipes based on available ingredients.",
        "category": "Food",
        "icon": "https://cdn-icons-png.flaticon.com/128/3480/3480248.png",
        "aiPrompt": "Generate a recipe based on the provided ingredients.",
        "slug": "generate-recipe",
        "form": [
            {
                "label": "Enter available ingredients",
                "field": "textarea",
                "name": "ingredients",
                "required": true
            }
        ]
    },
    {
        name: "Article Summary",
        desc: "Generate a concise summary for an article based on its content.",
        category: "Article",
        icon: "https://cdn-icons-png.flaticon.com/128/10218/10218655.png",
        aiPrompt: "Summarize the article in 3-4 sentences based on the provided text. Present the summary in bullet points.",
        slug: "generate-article-summary",
        form: [
            {
                label: "Enter article text",
                field: "textarea",
                name: "articleText",
                required:true
            }
        ]
    },
    {
        name: "SEO Meta Description",
        desc: "Generate an SEO-friendly meta description for your webpage.",
        category: "SEO",
        icon: "https://cdn-icons-png.flaticon.com/128/17353/17353890.png",
        aiPrompt: "Generate a 150-160 character SEO meta description based on the provided webpage content.",
        slug: "generate-seo-meta-description",
        form: [
            {
                label: "Enter webpage content",
                field: "textarea",
                name: "webpageContent",
                required: true
            }
        ]
    },
    {
        name: "Social Media Post Ideas",
        desc: "Generate creative post ideas for social media platforms based on a given topic.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/1968/1968641.png",
        aiPrompt: "Provide 5 creative social media post ideas in bullet points for the given topic, optimized for engagement.",
        slug: "generate-social-media-post-ideas",
        form: [
            {
                label: "Enter your topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Blog Introduction Generator",
        desc: "Generate a compelling blog introduction based on your topic and niche.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2593/2593510.png",
        aiPrompt: "Write an engaging blog introduction based on the given topic and niche.",
        slug: "generate-blog-introduction",
        form: [
            {
                label: "Enter your blog topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            }
        ]
    },  
    {
        "name": "Book Recommendation Generator",
        "desc": "Get book recommendations based on your interests.",
        "category": "Entertainment",
        "icon": "https://cdn-icons-png.flaticon.com/128/3689/3689740.png",
        "aiPrompt": "Generate 3 book recommendations based on the provided interests.",
        "slug": "generate-book-recommendation",
        "form": [
            {
                "label": "Enter your interests",
                "field": "textarea",
                "name": "interests",
                "required": true
            }
        ]
    },
    {
        "name": "Reddit Post Generator",
        "desc": "Generate a Reddit post based on your topic.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/3670/3670154.png",
        "aiPrompt": "Generate a Reddit post based on the provided topic and subreddit.",
        "slug": "generate-reddit-post",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter the subreddit",
                "field": "input",
                "name": "subreddit",
                "required": true
            }
        ]
    },
    {
        "name": "Twitter Post Generator",
        "desc": "Generate tweet ideas optimized for engagement.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733579.png",
        "aiPrompt": "Generate 3 tweet ideas based on the given topic, optimized for engagement.",
        "slug": "generate-twitter-post",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Story Generator",
        "desc": "Generate creative story ideas based on a prompt.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384068.png",
        "aiPrompt": "Write a short story based on the given prompt.",
        "slug": "generate-story",
        "form": [
            {
                "label": "Enter story prompt",
                "field": "input",
                "name": "prompt",
                "required": true
            }
        ]
    },  
    {
        name: "Blog Post Optimizer",
        desc: "Optimize your blog post for SEO and readability.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/3131/3131446.png",
        aiPrompt: "Optimize the given blog post for SEO and readability.",
        slug: "optimize-blog-post",
        form: [
            {
                label: "Enter your blog post content",
                field: "textarea",
                name: "content",
                required: true
            },
            {
                label: "Enter your target keywords",
                field: "input",
                name: "keywords",
                required: true
            }
        ]
    },
    {
        name: "Blog Conclusion Generator",
        desc: "Generate a strong blog conclusion based on your topic and niche.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2593/2593510.png",
        aiPrompt: "Write a compelling blog conclusion based on the given topic and niche.",
        slug: "generate-blog-conclusion",
        form: [
            {
                label: "Enter your blog topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required:true
            }
        ]
    },
    {
        name: "Blog Outline Creator",
        desc: "Create a structured blog outline based on your topic and niche.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/11552/11552083.png",
        aiPrompt: "Create a structured blog outline based on the given topic and niche.",
        slug: "create-blog-outline",
        form: [
            {
                label: "Enter your blog topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            }
        ]
    },  
    {
        "name": "YouTube Title Generator",
        "desc": "Generate catchy titles for your YouTube videos.",
        "category": "Video",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        "aiPrompt": "Generate 5 engaging YouTube video titles based on the provided topic.",
        "slug": "generate-youtube-title",
        "form": [
            {
                "label": "Enter video topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Video Summary Generator",
        "desc": "Generate a concise summary for your video content.",
        "category": "Video",
        "icon": "https://cdn-icons-png.flaticon.com/128/1371/1371149.png",
        "aiPrompt": "Summarize the video content in 3-4 sentences based on the provided text.",
        "slug": "generate-video-summary",
        "form": [
            {
                "label": "Enter video content description",
                "field": "textarea",
                "name": "contentDescription",
                "required": true
            }
        ]
    },
    {
        "name": "YouTube Video Idea Generator",
        "desc": "Generate creative YouTube video ideas based on your niche.",
        "category": "Video",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        "aiPrompt": "Provide 5 unique YouTube video ideas based on the given niche.",
        "slug": "generate-youtube-video-idea",
        "form": [
            {
                "label": "Enter your niche",
                "field": "input",
                "name": "niche",
                "required": true
            }
        ]
    },
    {
        "name": "LinkedIn Post Generator",
        "desc": "Generate professional LinkedIn post ideas.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384062.png",
        "aiPrompt": "Generate 3 LinkedIn post ideas based on the provided topic and industry.",
        "slug": "generate-linkedin-post",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter your industry",
                "field": "input",
                "name": "industry",
                "required": true
            }
        ]
    },
    {
        "name": "Resume Builder",
        "desc": "Create a professional resume based on your skills and experience.",
        "category": "Career",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
        "aiPrompt": "Generate a resume summary and structure based on the provided information.",
        "slug": "build-resume",
        "form": [
            {
                "label": "Enter your skills",
                "field": "textarea",
                "name": "skills",
                "required": true
            },
            {
                "label": "Enter your experience",
                "field": "textarea",
                "name": "experience",
                "required": true
            }
        ]
    },
    {
        "name": "Letter Writing Assistant",
        "desc": "Generate personalized letters for various purposes.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384064.png",
        "aiPrompt": "Write a letter based on the provided purpose and recipient information.",
        "slug": "generate-letter",
        "form": [
            {
                "label": "Enter the purpose of the letter",
                "field": "input",
                "name": "purpose",
                "required": true
            },
            {
                "label": "Enter recipient details",
                "field": "input",
                "name": "recipient",
                "required": true
            }
        ]
    },
    {
        "name": "Hashtag Generator",
        "desc": "Generate relevant hashtags for social media posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384065.png",
        "aiPrompt": "Generate 10 trending hashtags based on the given topic.",
        "slug": "generate-hashtags",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Emoji Generator",
        "desc": "Generate emojis based on a given emotion or topic.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/742/742752.png",
        "aiPrompt": "Generate 5 emojis that best represent the given emotion or topic.",
        "slug": "generate-emojis",
        "form": [
            {
                "label": "Enter emotion or topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    
    {
        "name": "Fake Story Generator",
        "desc": "Generate a fake story for creative or entertainment purposes.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/11552/11552085.png",
        "aiPrompt": "Write a humorous or fake story based on the given prompt.",
        "slug": "generate-fake-story",
        "form": [
            {
                "label": "Enter story prompt",
                "field": "input",
                "name": "prompt",
                "required": true
            }
        ]
    },
    {
        "name": "Article Generator",
        "desc": "Generate an article based on a specific topic.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384070.png",
        "aiPrompt": "Write an informative article based on the given topic.",
        "slug": "generate-article",
        "form": [
            {
                "label": "Enter article topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "News Article Generator",
        "desc": "Generate a news article based on recent events.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384072.png",
        "aiPrompt": "Write a news article based on the given topic or event.",
        "slug": "generate-news-article",
        "form": [
            {
                "label": "Enter news topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Movie Recommendation Generator",
        "desc": "Get movie recommendations based on your preferences.",
        "category": "Entertainment",
        "icon": "https://cdn-icons-png.flaticon.com/128/4149/4149649.png",
        "aiPrompt": "Generate 3 movie recommendations based on the provided preferences.",
        "slug": "generate-movie-recommendation",
        "form": [
            {
                "label": "Enter your preferences",
                "field": "textarea",
                "name": "preferences",
                "required": true
            }
        ]
    },
    {
        "name": "Story Generator",
        "desc": "Generate a short story based on your prompt.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/2021/2021646.png",
        "aiPrompt": "Write a short story based on the provided prompt or theme.",
        "slug": "generate-story",
        "form": [
            {
                "label": "Enter your prompt or theme",
                "field": "textarea",
                "name": "prompt",
                "required": true
            }
        ]
    },
    {
        "name": "Fake News Generator",
        "desc": "Generate a fake news article for humor purposes.",
        "category": "Humor",
        "icon": "https://cdn-icons-png.flaticon.com/128/4027/4027525.png",
        "aiPrompt": "Generate a humorous fake news article based on the provided topic.",
        "slug": "generate-fake-news",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Horoscope Generator",
        "desc": "Generate a daily horoscope based on your zodiac sign.",
        "category": "Spirituality",
        "icon": "https://cdn-icons-png.flaticon.com/128/2760/2760781.png",
        "aiPrompt": "Generate a daily horoscope based on the provided zodiac sign.",
        "slug": "generate-horoscope",
        "form": [
            {
                "label": "Enter your zodiac sign",
                "field": "input",
                "name": "zodiacSign",
                "required": true
            }
        ]
    },
    {
        "name": "Resume Bullet Point Generator",
        "desc": "Generate strong bullet points for your resume based on your job role.",
        "category": "Career",
        "icon": "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
        "aiPrompt": "Generate 3 strong bullet points for the resume based on the provided job role and responsibilities.",
        "slug": "generate-resume-bullet-points",
        "form": [
            {
                "label": "Enter your job role",
                "field": "input",
                "name": "jobRole",
                "required": true
            },
            {
                "label": "Enter your responsibilities",
                "field": "textarea",
                "name": "responsibilities",
                "required": true
            }
        ]
    },
    {
        "name": "Email Response Generator",
        "desc": "Generate a professional response to emails.",
        "category": "Communication",
        "icon": "https://cdn-icons-png.flaticon.com/128/561/561127.png",
        "aiPrompt": "Generate a professional email response based on the provided email content.",
        "slug": "generate-email-response",
        "form": [
            {
                "label": "Enter the email content",
                "field": "textarea",
                "name": "emailContent",
                "required": true
            }
        ]
    },
    {
        "name": "LinkedIn Post Generator",
        "desc": "Generate a professional LinkedIn post based on a given topic.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/174/174857.png",
        "aiPrompt": "Generate a professional LinkedIn post based on the provided topic.",
        "slug": "generate-linkedin-post",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Instagram Thread Generator",
        "desc": "Generate an engaging instagram thread based on your topic.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733579.png",
        "aiPrompt": "Generate a Intsagram thread based on the provided topic.",
        "slug": "generate-instagram-thread",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    
    {
        "name": "Newsletter Generator",
        "desc": "Generate content for a newsletter based on the topic and audience.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/3027/3027864.png",
        "aiPrompt": "Generate a newsletter based on the provided topic and target audience.",
        "slug": "generate-newsletter",
        "form": [
            {
                "label": "Enter your topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter the target audience",
                "field": "input",
                "name": "audience",
                "required": true
            }
        ]
    },
    {
        "name": "Story Plot Generator",
        "desc": "Generate an intriguing plot for a story based on your idea.",
        "category": "Writing",
        "icon": "https://cdn-icons-png.flaticon.com/128/3022/3022546.png",
        "aiPrompt": "Generate a plot outline for a story based on the provided idea.",
        "slug": "generate-story-plot",
        "form": [
            {
                "label": "Enter your story idea",
                "field": "textarea",
                "name": "idea",
                "required": true
            }
        ]
    }
    
      

]