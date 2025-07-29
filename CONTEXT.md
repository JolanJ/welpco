# Project WELPCO: Full Context & Development Summary

## 1. Project Overview

- **Project Name:** WELPCO
- **Core Concept:** A web platform designed to connect users (homeowners, parents, etc.) with local, vetted freelancers, referred to as "Welpers," for a variety of home and personal care services.
- **Key Functionality:**
  - **User-Facing:** Service discovery, location-based search, viewing service provider profiles, scheduling, and booking.
  - **Provider-Facing ("Welper"):** Profile creation, service listing, managing bookings.
  - **Authentication:** Separate login and registration flows for users and Welpers.
- **Current Development Focus:** The primary user-facing website, including the landing page and the user authentication flow (Login/Registration). The signup page has been completed and the next step is creating the individual registration pages for users and Welpers.

## 2. Design System & Branding

### Color Palette

- **Primary Green:** `#005C3C` (Used for the main header, primary buttons, feature icons, and the "ticket-card" background).
- **Dark Green:** `#00492F` (Used for the hero section background).
- **Accent Green:** `#4CA76A` (Used for highlights, such as the numbers in the "How it works" section and the "Get Help Now" link).
- **Light Gray (Hover/Active):** `#F3F5F9` (Used for the background of a clicked/active FAQ item).
- **White:** `#FFFFFF` (Used for text on dark backgrounds, card backgrounds).
- **Text (Dark):** `text-gray-900` (Primary text color for headings and important content).
- **Text (Medium):** `text-gray-700`, `text-gray-600` (Secondary text for paragraphs and descriptions).
- **Social/Brand:**
  - Facebook Blue: `#1877F2`
  - Google Palette: `#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`

### Typography

- **Primary Font:** **Plus Jakarta Sans**. This was explicitly requested for the login page and has been implemented via dedicated layout files (`app/login/layout.tsx` and `app/signup/layout.tsx`). The intention is to use this font globally for brand consistency.
- **Font Weights & Sizes:** A clear hierarchy is established using Tailwind's typography scale.
  - **Hero Title:** `text-4xl lg:text-5xl font-bold`
  - **Section Titles:** `text-3xl lg:text-4xl font-bold` (font-weight 700)
  - **Sub-headings:** `text-xl font-bold` (font-weight 700)
  - **Page Titles:** `text-3xl font-medium` (font-weight 500) for login/signup pages
  - **Body Text:** `text-gray-600`, `text-lg`

### Visual Style & Iconography

- **Overall Feel:** Modern, clean, professional, and trustworthy.
- **Layout:** Responsive design using CSS Grid and Flexbox. Sections are clearly delineated with distinct background colors (`#00492F`, `#FFFFFF`, `bg-gray-50`).
- **Border Radius:** Consistent use of rounded corners for a soft, friendly aesthetic (`rounded-lg`, `rounded-2xl`, `rounded-3xl`, `rounded-full`).
- **Shadows:** Subtle shadows (`shadow-xl`, `hover:shadow-lg`) are used to create depth and highlight interactive elements.
- **Icons:** The `lucide-react` library is the standard for all icons (e.g., `Shield`, `Clock`, `MapPin`, `User`). Custom SVG icons were created for Google and Facebook logos on the login page.

## 3. Technology Stack & Code Implementation

- **Framework:** **Next.js 15** with the **App Router**.
- **Language:** **TypeScript**.
- **Styling:** **Tailwind CSS**. Custom styles are added in `app/globals.css`.
- **Components:** A mix of standard HTML elements, custom React components, and components from the **shadcn/ui** library (e.g., `Button`, `Input`).
- **State Management:** Primarily using React hooks (`useState`) for client-side interactivity, such as the FAQ accordion.
- **Backend/Database:** No backend is currently implemented, but the forms (Login, and the upcoming Register page) are built with future **Supabase** integration in mind.

### Key Code Snippets & Logic

**Ticket Card Effect (`app/globals.css`):**
This unique design was achieved with a precise `clip-path` polygon. The final iteration creates sharp, 60-degree angled cutouts on the sides.

```css
.ticket-card {
  position: relative;
  clip-path: polygon(
    0% 0%,
    0% 20%,
    1.4% 22%, /* Top of left cutout */
    1.4% 78%, /* Bottom of left cutout */
    0% 80%,
    0% 100%,
    100% 100%,
    100% 80%,
    98.6% 78%, /* Bottom of right cutout */
    98.6% 22%, /* Top of right cutout */
    100% 20%,
    100% 0%
  );
}
```

**FAQ Accordion Logic (`app/page.tsx`):** A simple useState hook tracks the index of the currently open FAQ item. Clicking an item either opens it or closes it if it's already open.

```typescript
const [openFAQ, setOpenFAQ] = useState<number>(0); // First FAQ is open by default

const toggleFAQ = (index: number) => {
  setOpenFAQ(openFAQ === index ? -1 : index);
};
```

**Custom Font Implementation (`app/login/layout.tsx` and `app/signup/layout.tsx`):** To apply the "Plus Jakarta Sans" font to specific routes, dedicated layouts were created.

```typescript
import { Plus_Jakarta_Sans } from 'next/font/google';
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={plusJakartaSans.className}>{children}</div>;
}
```

## 4. Project File Structure

```
welpco/
├── app/
│   ├── globals.css         # Global styles, Tailwind directives, .ticket-card class
│   ├── page.tsx            # Main landing page component
│   ├── page.module.css     # (Default, currently minimal use)
│   ├── loading.tsx         # (Default, currently minimal use)
│   ├── login/
│   │   ├── layout.tsx      # Layout for /login to apply custom font
│   │   └── page.tsx        # Login page component
│   └── signup/
│       ├── layout.tsx      # Layout for /signup to apply custom font
│       └── page.tsx        # Signup page component (user type selection)
├── components/
│   └── ui/                 # shadcn/ui components (Button, Input, etc.)
├── public/
│   └── placeholder.svg     # Used for all images currently
├── CONTEXT.md              # Project context and development summary
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 5. Development History & Iterations

- **Initial Landing Page:** Built based on Figma designs, establishing the core structure and color scheme.
- **Hero Section Refinement:** Iterated multiple times on the hero section layout, content, and imagery (settling on placeholders).
- **"How It Works" Section:** Adjusted styling to make only the numbers colored (`#4CA76A`) and larger, removing the green circular background for a cleaner look.
- **"Ticket Card" Creation:** This was a multi-step, highly iterative process:
  - Initial card shape was created.
  - The "cutout" depth was increased.
  - The cutouts were changed from rounded to sharp, straight lines.
  - The angle was adjusted from 45 to 60 degrees.
  - The final depth was fine-tuned to 1.4% of the width.
- **FAQ Section:** Built to exact visual specifications, including the interactive accordion behavior and the background color change on click. The border was removed per user request.
- **Login Page:** Created a new, separate page (`/login`) with a two-column layout as specified. The design focuses on a clean user experience and readiness for backend integration. The "Plus Jakarta Sans" font was introduced here.
- **Signup Page:** Created a user type selection page (`/signup`) with:
  - Two-column layout (image on left, content on right)
  - Father and baby image with gradient overlay
  - Two choice cards side by side for user type selection
  - Plus Jakarta Sans font implementation
  - Navigation links to separate registration flows
- **Typography Updates:** Standardized font weights across the application:
  - Page titles (login/signup): font-weight 500 (medium)
  - Section headings and titles: font-weight 700 (bold)
  - Service category titles: font-weight 700 (bold)
- **Navigation Updates:** Added proper navigation from landing page "Join Now" button to signup page.

## 6. Current Status & Next Steps

- ✅ Landing page with hero, "How it Works", and FAQ sections completed
- ✅ Login page with two-column layout and Plus Jakarta Sans font implemented
- ✅ Signup page with user type selection completed
- ✅ Interactive FAQ accordion with proper state management
- ✅ Ticket card effect with custom CSS clip-path
- ✅ Typography standardization across all pages
- ✅ Navigation flow from landing page to signup page
- 🔄 **Next:** Create individual registration pages for users (`/register/user`) and Welpers (`/register/welper`)
- 📋 **Future:** Backend integration with Supabase for authentication and data management

## 7. Recent Changes Summary

### Signup Page Implementation
- Created `/app/signup/page.tsx` with user type selection interface
- Created `/app/signup/layout.tsx` for Plus Jakarta Sans font
- Implemented two-column layout with father/baby image and choice cards
- Added navigation links to separate registration flows

### Typography Standardization
- Updated all section headings to font-weight 700 (bold)
- Updated page titles to font-weight 500 (medium)
- Standardized service category titles to font-weight 700 (bold)

### Navigation Updates
- Added proper href to "Join Now" button on landing page
- Connected login page "Sign up" links to signup page

### Layout Improvements
- Made signup page choice cards side by side with equal heights
- Positioned buttons at exact same vertical position in both cards
- Changed button styling to white background with green text 