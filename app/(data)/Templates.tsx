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
        "name": "Article Summary",
        "desc": "Generate a concise summary for an article based on its content.",
        "category": "Article",
        "icon": "https://cdn-icons-png.flaticon.com/128/10218/10218655.png",
        "aiPrompt": "Summarize the article in 3-4 sentences based on the provided text. Present the summary in bullet points.",
        "slug": "generate-article-summary",
        "form": [
            {
                "label": "Enter article text",
                "field": "textarea",
                "name": "articleText",
                "required": true
            }
        ]
    },
    {
        "name": "SEO Meta Description",
        "desc": "Generate an SEO-friendly meta description for your webpage.",
        "category": "SEO",
        "icon": "https://cdn-icons-png.flaticon.com/128/17353/17353890.png",
        "aiPrompt": "Generate a 150-160 character SEO meta description based on the provided webpage content.",
        "slug": "generate-seo-meta-description",
        "form": [
            {
                "label": "Enter webpage content",
                "field": "textarea",
                "name": "webpageContent",
                "required": true
            }
        ]
    },
    {
        "name": "Social Media Post Ideas",
        "desc": "Generate creative post ideas for social media platforms based on a given topic.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/1968/1968641.png",
        "aiPrompt": "Provide 5 creative social media post ideas in bullet points for the given topic, optimized for engagement.",
        "slug": "generate-social-media-post-ideas",
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
        "name": "Blog Introduction Generator",
        "desc": "Generate a compelling blog introduction based on your topic and niche.",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/2593/2593510.png",
        "aiPrompt": "Write an engaging blog introduction based on the given topic and niche.",
        "slug": "generate-blog-introduction",
        "form": [
            {
                "label": "Enter your blog topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter your blog niche",
                "field": "input",
                "name": "niche",
                "required": true
            }
        ]
    },    
    {
        "name": "Blog Post Optimizer",
        "desc": "Optimize your blog post for SEO and readability.",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/3131/3131446.png",
        "aiPrompt": "Optimize the given blog post for SEO and readability.",
        "slug": "optimize-blog-post",
        "form": [
            {
                "label": "Enter your blog post content",
                "field": "textarea",
                "name": "content",
                "required": true
            },
            {
                "label": "Enter your target keywords",
                "field": "input",
                "name": "keywords",
                "required": true
            }
        ]
    },
    {
        "name": "Blog Conclusion Generator",
        "desc": "Generate a strong blog conclusion based on your topic and niche.",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/2593/2593510.png",
        "aiPrompt": "Write a compelling blog conclusion based on the given topic and niche.",
        "slug": "generate-blog-conclusion",
        "form": [
            {
                "label": "Enter your blog topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter your blog niche",
                "field": "input",
                "name": "niche",
                "required": true
            }
        ]
    },
    {
        "name": "Blog Outline Creator",
        "desc": "Create a structured blog outline based on your topic and niche.",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/11552/11552083.png",
        "aiPrompt": "Create a structured blog outline based on the given topic and niche.",
        "slug": "create-blog-outline",
        "form": [
            {
                "label": "Enter your blog topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter your blog niche",
                "field": "input",
                "name": "niche",
                "required": true
            }
        ]
    },  
    
      

]