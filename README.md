### Features

- **Built with Tailwind CSS:** Powered by Tailwind CSS for rapid UI development and responsive design.
- **Perfect Scores in PageSpeed Insights:** Achieve perfect 100s for both desktop and mobile performance.
- **Light & Dark Mode Support:** Seamlessly switch between light and dark themes to suit user preferences.
- **Fully Responsive & Customizable:** Ensure your site looks great on any device, with easy customization to match your brand’s identity.
- **SEO-friendly:** Optimized for search engines to improve visibility and organic traffic.
- **Pre-designed Pages:** Includes a variety of pages such as Home, Pricing, Features, Contact, and more, to get you started quickly.
- **Blog with MDX Support & Tags:** Create dynamic blog content with Markdown and JSX, complete with tagging for better organization.
- **Easy Updates with JSON Files:** Simplify content management and updates using structured JSON files.
- **Page Loading & Transition Animations:** Enhance user experience with smooth loading and transition effects.
- **Clean Code & Folder Structure:** Maintain a well-organized codebase that’s easy to navigate and extend.
- **Heroicons by Tailwind:** Access a wide range of high-quality icons to use across your site.
- **Built-in Contact Form:** Ready-to-use contact form included.
- **Utilizes WindUI Components:** Integrates optional WindUI TailwindCSS components.
- **Modular Design:** The template is organized into reusable blocks enabling easy customization and expansion.
- **Integrated Analytics:** Includes integrated Google Analytics and Google Tag Manager functionalities.
- **Sitemap Included:** Includes a sitemap to enhance website navigation and search engine indexing.

## Getting Started

### Commands

After downloading the template, you'll need to install some dependencies. Once that's done, you can run it on your local server. Check out the package.json file to see what scripts are available.

| Command           | Action                                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------------------- |
| `nvm use ...`     | [Install node js](https://nodejs.org/en/download/) You will need to use Node.js version 20.3.0 or later. |
| `npm install`     | Installs dependencies                                                                                    |
| `npm run dev`     | Starts local dev server at `localhost:4321`                                                              |
| `npm run build`   | Build your production site to `./dist/`                                                                  |
| `npm run preview` | Preview your build locally, before deploying                                                             |

### Folder structure

Inside Foxi Astro project, you'll see the following folders and files:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   └── blog/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── page-sections/
│   │   └── home/
│   │       └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Contains static assets like images and the favicon. These files are served directly at the root URL.                               |
| `src/assets/`            | Contains all images and assets used in the project.                                                                                |
| `src/components/`        | Contains reusable components for your site. This directory is divided into `ui` for UI components and `blocks` for section blocks. |
| `src/components/blocks/` | Contains Section blocks used throughout the site.                                                                                  |
| `src/components/ui/`     | Contains individual UI components.                                                                                                 |
| `src/config/`            | Contains configuration files for the project in typescript format.                                                                 |
| `src/content/`           | Holds collection data, such as blog posts.                                                                                         |
| `src/content/blog/`      | Contains individual blog posts in markdown.                                                                                        |
| `src/data/`              | Contains JSON and md files with content data (like features, testimonials etc).                                                    |
| `src/icons/`             | Contains all icons used in the project, sourced from [Heroicons](https://heroicons.com/).                                          |
| `src/layouts/`           | Contains layout components that define the overall structure of your pages.                                                        |
| `src/pages/`             | Contains `.astro` files for each page. Each file here is exposed as a route based on its file name.                                |
| `package.json`           | Lists dependencies and scripts for your project, including metadata and various package requirements.                              |

## Theme Configuration

You can find the configuration files in the `src/config` directory. The configuration files are written in TypeScript and contain various settings for the theme, such as basic information, navigation bar, footer navigation, analytics, and social links. You can customize these settings to fit your specific needs.

| Configuration File               | Description                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/config/config.ts`           | Includes the basic configuration settings including SEO, mode, and scroll animations.           |
| `src/config/navigationBar.ts`    | Includes menu options for the navigation bar.                                                   |
| `src/config/footerNavigation.ts` | Includes menu options for the footer navigation.                                                |
| `src/config/analytics.ts`        | Includes the required codes for Google Analytics, Google Tag Manager and Google Search Console. |
| `src/config/socialLinks.ts`      | Contains the social link data for the website.                                                  |

### Basic configuration settings

In the `src/config/config.ts` file, you can find the basic configuration settings.
These includes the default SEO settings:

- `siteTitle`: The default title of your website.
- `siteDescription`: The default description of your website.
- `ogImage`: The open graph image for your website.
- `logo`: The logo for your website.
- `canonical`: Whether to use canonical links for your website.
- `noindex`: Prevents search engines from indexing your website if set to true.

as well as the default site settings:

- `mode`: The default mode for your website. Can be set to 'auto', 'light', or 'dark'. Auto mode will automatically switch between light and dark modes based on the user's system settings, while 'light' and 'dark' will force the site to use the corresponding mode.
- `scrollAnimations`: Whether to enable smooth scrolling animations for your website.

## Theme Customization

### Customize the Colors

The theme uses two main colors: primary and neutral. These colors are defined in the Tailwind CSS configuration file. To personalize the color scheme of your project, you can easily modify these color values.

To customize the colors, follow these steps:

1. Open the `tailwind.config.js` file.
2. Find the `theme` section within the file.
3. Under `theme`, locate the `extend` property and then the `colors` object.
4. Modify the color values for `primary` and `neutral` to suit your preferred color palette.

You can use the [tailwind CSS colors](https://nodejs.org/en/download/) or create your [own palette](https://uicolors.app/create) .

### Customize the Fonts

To customize the fonts used in your project, follow these steps:

1. **Update the Tailwind CSS Configuration**

   Open the `tailwind.config.js` file. In the `theme` section, find the `extend` property and update the `fontFamily` object.

2. **Ensure Font Packages are Installed**

   Verify that the necessary font packages are included in your `package.json` file and also imported in the `src/layouts/Layout.astro` file.

You can add your own fonts by following [this guide](https://docs.astro.build/en/guides/fonts/#using-fontsource)

### Dark/Light Mode

By default, the site uses an automatic mode switcher, allowing it users to switch between light and dark modes based on the user's system settings or by using the mode switcher in the navigation bar. This is achioeved by setting the `mode-auto` class in the `Layout.astro` file.

If you need to enforce a specific theme, you can set the class above as **`mode-light`** or **`mode-dark`**. When **`mode-light`** is applied, the site will consistently display in light mode, and the switcher will not be functional. Similarly, **`mode-dark`** will force the site to dark mode, with the switcher rendered non-functional. These settings allow you to maintain a fixed appearance across the site regardless of user preferences or system settings.
