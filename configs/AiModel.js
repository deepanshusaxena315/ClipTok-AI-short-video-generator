import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const model = 'gemini-2.5-pro-preview-06-05';

export const chatSession = ai.getGenerativeModel({ model }).startChat({
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `Write a script to generate 30 seconds video on topic : Interesting Historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and contentText as field`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Considering the User's Request**

I'm now zeroing in on deconstructing the user's request...`,
        },
        {
          text: `\`\`\`json
[
  {
    "imagePrompt": "Photorealistic, historical colorized photo, 1932 Australia...",
    "contentText": "In 1932, after World War One, Australian farmers faced a new enemy, one they never expected."
  },
  {
    "imagePrompt": "Ultra-realistic, National Geographic style action shot...",
    "contentText": "An army of twenty-thousand emus, migrating for breeding, was systematically destroying their farmlands."
  },
  {
    "imagePrompt": "Cinematic still, realistic. Two Australian soldiers...",
    "contentText": "Desperate, the farmers, many of them ex-soldiers, petitioned the government, which responded by deploying the military."
  },
  {
    "imagePrompt": "Action shot, photorealistic. An Australian soldier...",
    "contentText": "Major G.P.W. Meredith of the Royal Australian Artillery was given his orders: wage war on the emus."
  },
  {
    "imagePrompt": "Dynamic wildlife photography, realistic...",
    "contentText": "But the emus proved to be tactical geniuses..."
  },
  {
    "imagePrompt": "Photorealistic, dramatic scene. A dejected Australian soldier...",
    "contentText": "After weeks of failed ambushes and firing thousands of rounds..."
  },
  {
    "imagePrompt": "Epic cinematic shot, realistic...",
    "contentText": "The birds had won. History would forever remember this bizarre conflict as 'The Great Emu War'."
  }
]
\`\`\``,
        },
      ],
    },
  ],
  generationConfig: {
    responseMimeType: 'application/json',
  },
});


