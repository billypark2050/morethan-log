const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Billy Park",
    image: "/Notion-profile_BP_transparent.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "PhD. Candidate",
    bio: "Gwangju Institute of Science and Technology(GIST)\nHAM Lab.", 
    email: "billypark@gmail.com",
    linkedin: "",
    github: "billypark2050",
    instagram: "b12_8k",
  },
  projects: [
    {
      name: `Ambituous Chicken`, // papers 로 추가하기.
      href: "https://github.com/billypark2050/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Ambituous Chicken",
    description: "welcome to billy-log!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required) // 링크를 공유했을 때 뜨는 이미지라네
  link: "https://morethan-log.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600, // revalidate time for [slug], index
}

module.exports = { CONFIG }
