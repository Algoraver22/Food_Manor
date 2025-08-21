# 🍽️ Food Manor - Project Documentation

## 0. Technology Explanations

### What is React?
**React** is a JavaScript library created by Facebook for building user interfaces, especially for web applications. Think of it like building blocks for websites.

**Key Concepts:**
- **Components**: Reusable pieces of UI (like LEGO blocks)
- **Virtual DOM**: React creates a copy of the webpage in memory for faster updates
- **JSX**: Allows you to write HTML-like code inside JavaScript
- **State**: Data that can change and update the UI automatically
- **Hooks**: Functions that let you use state and other React features

**Why Use React?**
- Makes complex websites easier to build and maintain
- Reusable components save development time
- Large community and job market
- Used by Facebook, Netflix, Instagram, Airbnb

**In Our Project**: React creates all the pages (Home, Restaurant Menu, Cart, About) and handles user interactions like adding items to cart and filtering restaurants.

---

### What is Redux Toolkit?
**Redux Toolkit** is the official, recommended way to write Redux logic. It's a state management library that helps manage application data across components.

**Key Concepts:**
- **Store**: Central place where all app data lives
- **Slices**: Pieces of state with their update logic
- **Actions**: Events that describe what happened
- **Reducers**: Functions that update state based on actions
- **Dispatch**: Function to send actions to the store

**Why Use Redux Toolkit?**
- Predictable state management
- Easy debugging with Redux DevTools
- Prevents prop drilling (passing data through many components)
- Time-travel debugging capabilities

**In Our Project**: Redux manages the shopping cart state, allowing users to add/remove items from any component and maintain cart data across page navigation.

---

### What is Tailwind CSS?
**Tailwind CSS** is a utility-first CSS framework that provides low-level utility classes to build custom designs.

**Key Concepts:**
- **Utility Classes**: Small, single-purpose classes (like `text-center`, `bg-blue-500`)
- **Responsive Design**: Built-in responsive utilities (`md:text-lg`, `lg:grid-cols-4`)
- **Component Composition**: Build complex components by combining utilities
- **Customization**: Easily customizable through configuration

**Why Use Tailwind CSS?**
- Rapid development with pre-built utilities
- Consistent design system
- Smaller CSS bundle size
- Mobile-first responsive design
- Easy maintenance and updates

**In Our Project**: Tailwind provides all styling for the modern, responsive interface including cards, buttons, grids, and animations.

---

### What is React Router DOM?
**React Router DOM** is a library for handling navigation and routing in React applications.

**Key Concepts:**
- **Routes**: Define which component to show for each URL
- **Links**: Navigate between pages without page refresh
- **Parameters**: Pass data through URLs (like restaurant ID)
- **Nested Routes**: Routes inside other routes
- **History**: Browser navigation history management

**Why Use React Router DOM?**
- Single Page Application (SPA) navigation
- SEO-friendly URLs
- Browser back/forward button support
- Programmatic navigation

**In Our Project**: React Router handles navigation between Home, About, Contact, Restaurant Menu, Cart, and Grocery pages with dynamic restaurant IDs.

---

### What is Framer Motion?
**Framer Motion** is a production-ready motion library for React that makes animations simple and powerful.

**Key Concepts:**
- **Motion Components**: Animated versions of HTML elements
- **Variants**: Reusable animation states
- **Gestures**: Hover, tap, drag interactions
- **Layout Animations**: Automatic layout change animations
- **Page Transitions**: Smooth transitions between routes

**Why Use Framer Motion?**
- Declarative animations
- Performance optimized
- Gesture support
- Easy to learn and implement

**In Our Project**: Framer Motion provides smooth animations for component transitions, hover effects, and loading states.

---

### What is React Hot Toast?
**React Hot Toast** is a lightweight, customizable toast notification library for React.

**Key Concepts:**
- **Toast Types**: Success, error, loading notifications
- **Customization**: Custom styling and positioning
- **Promise Integration**: Automatic loading/success/error states
- **Accessibility**: Screen reader support

**Why Use React Hot Toast?**
- Lightweight and fast
- Beautiful default styling
- Easy to customize
- Great developer experience

**In Our Project**: React Hot Toast shows notifications when items are added to cart, providing user feedback for actions.

---

### What are Custom Hooks?
**Custom Hooks** are JavaScript functions that use React hooks and can be reused across components.

**Key Concepts:**
- **Reusability**: Share logic between components
- **Separation of Concerns**: Keep components clean
- **Testing**: Easier to test isolated logic
- **Composition**: Combine multiple hooks

**Why Use Custom Hooks?**
- Code reusability
- Cleaner components
- Better organization
- Easier testing and maintenance

**In Our Project**: Custom hooks like `useRestaurantMenu` and `useOnlineStatus` handle API calls and browser status detection.

---

### What is API Integration?
**API Integration** is the process of connecting your application to external services to fetch or send data.

**Key Concepts:**
- **REST APIs**: Standard way to communicate with servers
- **HTTP Methods**: GET, POST, PUT, DELETE operations
- **JSON**: Data format for API communication
- **Async/Await**: Handle asynchronous operations
- **Error Handling**: Manage failed requests

**Why Use API Integration?**
- Real-time data
- Dynamic content
- Third-party services
- Scalable architecture

**In Our Project**: Integration with Swiggy's API provides real restaurant data, menus, and images for a realistic food ordering experience.

---

## 1. Tech Stack

### Frontend Technologies
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **React** | 19.0.0 | Core frontend framework for building the user interface and managing component state |
| **React Router DOM** | 6.16.0 | Handles client-side routing between different pages (Home, Menu, Cart, About) |
| **Redux Toolkit** | 2.6.1 | State management for cart functionality and global app state |
| **React Redux** | 9.2.0 | React bindings for Redux to connect components to the store |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework for responsive design and styling |
| **Framer Motion** | 12.5.0 | Animation library for smooth transitions and interactive elements |
| **React Hot Toast** | 2.5.2 | Toast notifications for user feedback and alerts |
| **React Icons** | 5.5.0 | Icon library for consistent iconography throughout the app |

### Development & Testing
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **React Scripts** | 5.0.1 | Build tools and development server for React applications |
| **Jest** | 27.5.1 | JavaScript testing framework for unit and integration tests |
| **Testing Library** | 16.2.0 | Testing utilities for React components |
| **Babel** | 7.26.10 | JavaScript compiler for modern JS features |

### API & Data
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **Swiggy API** | - | External API for restaurant data, menus, and images |
| **Browser APIs** | - | Online/offline status detection and local storage |

### Build & Deployment
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **Webpack** | - | Module bundler (via React Scripts) |
| **PostCSS** | - | CSS processing (via Tailwind CSS) |
| **ESLint** | - | Code linting and quality assurance |

---

## 2. File-by-File Functionality

### Root Configuration Files
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `package.json` | Defines project dependencies, scripts, and metadata |
| `.gitignore` | Specifies files to ignore in version control |
| `README.md` | Project overview and basic setup instructions |
| `PROJECT_DOCUMENTATION.md` | Comprehensive project documentation (this file) |
| `tailwind.config.js` | Tailwind CSS configuration and customization |

### Public Directory (`/public`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `index.html` | Main HTML template that loads the React application |
| `manifest.json` | Web app manifest for PWA functionality |
| `favicon.ico` | Website icon displayed in browser tabs |
| `robots.txt` | Instructions for web crawlers |
| `logo192.png` | App logo for PWA (192x192) |
| `logo512.png` | App logo for PWA (512x512) |

### Source Code (`/src`)

#### Main Application Files
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `index.js` | Entry point that renders the React app into the DOM |
| `App.js` | Root component that sets up routing, providers, and global layout |
| `App.css` | Global CSS styles and custom styling |
| `index.css` | Base CSS styles and Tailwind imports |
| `reportWebVitals.js` | Performance monitoring and web vitals reporting |

#### Components (`/src/components`)

##### Core Components
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `Header.js` | Navigation header with logo, menu links, cart icon, and user authentication |
| `Footer.js` | Footer component with branding and copyright information |
| `Body.js` | Main homepage component with restaurant listing, search, and filters |
| `Error.js` | Error boundary component for handling routing errors |

##### Restaurant Components
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `RestaurantCard.js` | Individual restaurant card displaying image, name, rating, and details |
| `RestaurantMenu.js` | Detailed restaurant page with menu items and ordering functionality |
| `RestaurantCategory.js` | Accordion component for menu categories |
| `ItemList.js` | List component for menu items within categories |

##### Cart & Shopping
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `Cart.js` | Shopping cart page with item management and checkout functionality |

##### Static Pages
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `About.js` | About page with company information and nested routing |
| `Contact.js` | Contact page with form and company details |
| `Grocery.js` | Lazy-loaded grocery section component |
| `Profile.js` | User profile component (nested in About) |

##### UI Components
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `Shimmer.js` | Loading skeleton component for restaurant cards |
| `ShimmerMenu.js` | Loading skeleton component for restaurant menu |
| `LoginModal.js` | Modal component for user authentication |

#### Utilities (`/src/utils`)

##### State Management
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `appStore.js` | Redux store configuration with cart reducer |
| `cartSlice.js` | Redux slice for cart state management (add, remove, clear items) |

##### Custom Hooks
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `useRestaurantMenu.js` | Custom hook for fetching restaurant menu data from API |
| `useOnlineStatus.js` | Custom hook for detecting online/offline browser status |

##### Configuration & Context
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `constants.js` | API URLs, CDN links, and static data configuration |
| `UserContext.js` | React Context for user authentication state |

#### Testing (`/src/components/__tests__`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `Contact.test.js` | Unit tests for Contact component |
| `Header.test.js` | Unit tests for Header component |
| `RestaurantCard.test.js` | Unit tests for RestaurantCard component |
| `Search.test.js` | Unit tests for search functionality |
| `sum.test.js` | Basic utility function tests |

#### Mock Data (`/src/components/mocks`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `mockResList.json` | Mock restaurant data for testing |
| `resCardMock.json` | Mock restaurant card data for testing |

---

## 3. How the Project Works (Overall Functionality)

### Application Overview
Food Manor is a modern, responsive food ordering web application that simulates a real-world food delivery service. It provides users with an intuitive interface to browse restaurants, view menus, add items to cart, and manage their orders. The application integrates with Swiggy's API to provide real restaurant data and images.

### User Journey Flow

#### 1. **Application Access & Landing**
- User visits the application URL
- Application loads with a modern, responsive design
- Header displays with navigation, online status, and cart icon
- Main dashboard shows restaurant listings with search and filter options

#### 2. **Restaurant Discovery**
- **Browse Restaurants**: Grid layout displaying restaurant cards with images, ratings, and basic info
- **Search Functionality**: Real-time search across restaurant names
- **Filter Options**: Filter by rating (4.0+), fast delivery, pure veg, and offers
- **Online Status**: Visual indicator showing user's internet connectivity
- **Loading States**: Shimmer components provide smooth loading experience

#### 3. **Restaurant Selection & Menu Browsing**
- **Restaurant Details**: Click on restaurant card navigates to detailed menu page
- **Restaurant Info**: Display restaurant image, name, cuisines, rating, delivery time, and cost
- **Menu Categories**: Accordion-style menu organization by food categories
- **Item Details**: Each menu item shows name, price, description, veg/non-veg indicator, and image
- **Offers Display**: Show available discounts and promotional offers

#### 4. **Shopping Cart Management**
- **Add to Cart**: Click "ADD +" button to add items to cart with toast notification
- **Cart Icon**: Header cart icon shows item count with badge
- **Cart Page**: Dedicated page showing all cart items with images and details
- **Item Management**: Remove individual items or clear entire cart
- **Price Calculation**: Automatic subtotal, delivery fee, and total calculation
- **Empty Cart State**: Friendly empty state with call-to-action to browse restaurants

#### 5. **Navigation & Additional Pages**
- **About Page**: Company information with nested profile section
- **Contact Page**: Contact form and company details
- **Grocery Section**: Lazy-loaded grocery component for future expansion
- **Error Handling**: Custom error pages for invalid routes

#### 6. **User Authentication**
- **Login Modal**: Modal-based login system with form validation
- **User State**: Persistent user state using localStorage
- **User Context**: Global user state management across components
- **Logout Functionality**: Clear user session and return to guest state

### Technical Architecture

#### **Frontend Architecture (React)**

**Component Hierarchy:**
```
App.js (Root)
├── Header.js (Navigation & User State)
├── Routes (React Router)
│   ├── Body.js (Home - Restaurant Listing)
│   │   ├── RestaurantCard.js (Individual Restaurant)
│   │   └── Shimmer.js (Loading State)
│   ├── RestaurantMenu.js (Menu Details)
│   │   ├── RestaurantCategory.js (Menu Categories)
│   │   ├── ItemList.js (Menu Items)
│   │   └── ShimmerMenu.js (Loading State)
│   ├── Cart.js (Shopping Cart)
│   ├── About.js (Company Info)
│   │   └── Profile.js (Nested Route)
│   ├── Contact.js (Contact Form)
│   ├── Grocery.js (Lazy Loaded)
│   └── Error.js (Error Boundary)
├── Footer.js (Footer Information)
└── LoginModal.js (Authentication)
```

**State Management Architecture:**
```
Redux Store (appStore.js)
└── Cart Slice (cartSlice.js)
    ├── items: [] (Cart Items Array)
    ├── addItem() (Add Item Action)
    ├── removeItem() (Remove Item Action)
    └── clearCart() (Clear All Items Action)

React Context (UserContext.js)
├── loggedInUser (User Name)
└── setUserName() (Update User)

Local Component State
├── useState() (Component-specific state)
├── useEffect() (Side effects & lifecycle)
└── Custom Hooks (Reusable logic)
```

**Routing Structure:**
```
/ (Home - Restaurant Listing)
/restaurant/:resId (Dynamic Restaurant Menu)
/cart (Shopping Cart)
/about (Company Information)
/about/profile (Nested User Profile)
/contact (Contact Form)
/grocery (Lazy-loaded Grocery Section)
/* (Error Page for Invalid Routes)
```

#### **Data Flow Architecture**

**Restaurant Data Flow:**
```
Swiggy API → useRestaurantMenu Hook → Component State → UI Render
```

**Cart Management Flow:**
```
User Action → Dispatch Action → Redux Store → Component Re-render → UI Update
```

**Search & Filter Flow:**
```
User Input → Local State Update → Filter Logic → Filtered Results → UI Update
```

**Authentication Flow:**
```
User Login → Form Validation → Local Storage → Context Update → UI Update
```

#### **API Integration**

**Swiggy API Endpoints:**
```javascript
// Restaurant List API
const RESTAURANT_LIST_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING";

// Restaurant Menu API
const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

// Image CDN
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
```

**Data Processing:**
1. **API Response Parsing**: Extract restaurant data from complex nested API response
2. **Error Handling**: Graceful handling of API failures with fallback UI
3. **Loading States**: Show shimmer components during data fetching
4. **Caching**: Browser caching for improved performance

### Key Features Explained

#### **Modern UI/UX Design**
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Card-based Layout**: Clean, modern card design for restaurants and menu items
- **Smooth Animations**: Framer Motion animations for interactions and transitions
- **Loading States**: Skeleton screens (Shimmer) for better perceived performance
- **Toast Notifications**: User feedback for actions like adding items to cart
- **Hover Effects**: Interactive hover states for better user engagement

#### **Restaurant Discovery**
- **Real-time Search**: Instant search results as user types
- **Smart Filters**: Multiple filter options (rating, delivery time, veg/non-veg, offers)
- **Visual Indicators**: Rating badges, delivery time, and cost information
- **Image Optimization**: Cloudinary CDN for fast image loading
- **Pagination Ready**: Architecture supports pagination for large datasets

#### **Menu & Ordering System**
- **Accordion Menu**: Organized menu categories with expand/collapse functionality
- **Item Details**: Comprehensive item information with images and descriptions
- **Veg/Non-veg Indicators**: Clear visual indicators for dietary preferences
- **Add to Cart**: One-click add to cart with immediate feedback
- **Price Display**: Clear pricing with currency formatting

#### **Shopping Cart**
- **Persistent Cart**: Cart state maintained across page navigation
- **Item Management**: Add, remove, and clear cart functionality
- **Price Calculation**: Automatic calculation of subtotal, delivery fee, and total
- **Visual Feedback**: Item count badge on cart icon
- **Empty State**: Engaging empty cart state with call-to-action

#### **Performance Optimizations**
- **Lazy Loading**: Code splitting with React.lazy() for Grocery component
- **Custom Hooks**: Reusable logic for API calls and browser status
- **Memoization**: Optimized re-renders with React optimization techniques
- **Image Optimization**: CDN-based image delivery with automatic optimization
- **Bundle Splitting**: Separate vendor and app bundles for better caching

### Security & Best Practices

#### **Security Measures**
- **Input Validation**: Client-side validation for forms and user inputs
- **XSS Prevention**: Proper data sanitization and React's built-in protections
- **HTTPS**: Secure API communication
- **Local Storage**: Secure client-side data storage for user preferences

#### **Code Quality**
- **Component Structure**: Well-organized, reusable component architecture
- **Custom Hooks**: Separation of concerns with custom hooks
- **Error Boundaries**: Graceful error handling with Error components
- **Testing**: Unit tests for critical components and functionality
- **Code Splitting**: Optimized bundle sizes with lazy loading

#### **Accessibility**
- **Semantic HTML**: Proper HTML structure for screen readers
- **Keyboard Navigation**: Accessible navigation patterns
- **Alt Text**: Descriptive alt text for images
- **Color Contrast**: Sufficient color contrast for readability
- **Focus Management**: Proper focus handling for interactive elements

### Deployment Architecture

#### **Development Environment**
1. **Local Development**: React development server with hot reloading
2. **Build Process**: Webpack-based build system via React Scripts
3. **Testing**: Jest and React Testing Library for unit tests
4. **Linting**: ESLint for code quality and consistency

#### **Production Deployment**
1. **Build Optimization**: Minified and optimized production build
2. **Static Hosting**: Can be deployed to Vercel, Netlify, or similar platforms
3. **CDN Integration**: Automatic CDN distribution for static assets
4. **Environment Variables**: Secure configuration management

This architecture ensures a scalable, maintainable, and performant food ordering application that provides an excellent user experience while following modern web development best practices.

---

## 4. Advanced Theoretical Concepts

### Design Patterns Used

#### 1. **Component Composition Pattern**
**Theory**: Building complex UIs by combining smaller, focused components.

**Implementation**:
- `RestaurantCard` components compose the restaurant listing
- `ItemList` and `RestaurantCategory` compose the menu structure
- `Header`, `Body`, and `Footer` compose the main layout
- Reusable components like `Shimmer` for loading states

#### 2. **Container/Presentational Pattern**
**Theory**: Separating data logic from presentation logic.

**Implementation**:
- `Body.js` (Container): Manages restaurant data and filtering logic
- `RestaurantCard.js` (Presentational): Only displays restaurant information
- `Cart.js` (Container): Manages cart state and operations
- Custom hooks abstract data fetching from components

#### 3. **Higher-Order Component (HOC) Pattern**
**Theory**: Functions that take components and return enhanced components.

**Implementation**:
- Redux `connect` pattern through `useSelector` and `useDispatch` hooks
- React Router's route protection and navigation enhancement
- Error boundary wrapping for component error handling

#### 4. **Observer Pattern**
**Theory**: Objects automatically get notified when another object changes state.

**Implementation**:
- Redux store notifications to subscribed components
- React state updates triggering component re-renders
- Custom hooks like `useOnlineStatus` observing browser events
- Toast notifications responding to user actions

#### 5. **Factory Pattern**
**Theory**: Creating objects without specifying exact classes.

**Implementation**:
- Dynamic component rendering based on route parameters
- Toast notification creation with different types and styles
- Shimmer component generation for different loading states

#### 6. **Strategy Pattern**
**Theory**: Selecting algorithms at runtime based on context.

**Implementation**:
- Different filtering strategies (rating, delivery time, veg/non-veg)
- Multiple search strategies (name, cuisine, location)
- Conditional rendering strategies based on data availability

### Software Engineering Principles

#### **SOLID Principles**

1. **Single Responsibility Principle (SRP)**
   - Each component has one clear purpose
   - `RestaurantCard.js` only displays restaurant information
   - `cartSlice.js` only manages cart state
   - `useRestaurantMenu.js` only handles menu data fetching

2. **Open/Closed Principle (OCP)**
   - Components open for extension, closed for modification
   - New filter types can be added without changing existing filter logic
   - New menu item types can be added without changing ItemList component
   - Plugin architecture for additional features

3. **Liskov Substitution Principle (LSP)**
   - Components can be replaced with enhanced versions
   - Different shimmer components can substitute for each other
   - Various card components follow the same interface

4. **Interface Segregation Principle (ISP)**
   - Components depend only on props they actually use
   - Specific prop interfaces for each component type
   - Minimal API surface area for custom hooks

5. **Dependency Inversion Principle (DIP)**
   - High-level components don't depend on low-level modules
   - Components depend on abstractions (custom hooks, context)
   - API layer abstracted through custom hooks

#### **React-Specific Principles**

1. **Composition over Inheritance**
   - Using component composition instead of class inheritance
   - Higher-order components and render props patterns
   - Custom hooks for logic reuse

2. **Unidirectional Data Flow**
   - Props flow down, events flow up
   - Redux actions flow through reducers to update state
   - Clear data flow patterns throughout the application

3. **Immutability**
   - Redux state updates through immutable patterns
   - React state updates with new objects/arrays
   - Preventing direct state mutations

### Performance Optimization Concepts

#### **React Performance Optimizations**

1. **Code Splitting & Lazy Loading**
   ```javascript
   const Grocery = lazy(() => import('./components/Grocery'));
   ```
   - Route-based code splitting
   - Component-level lazy loading
   - Dynamic imports for large dependencies

2. **Memoization Strategies**
   - React.memo() for component memoization
   - useMemo() for expensive calculations
   - useCallback() for function memoization
   - Custom hooks with built-in memoization

3. **Virtual DOM Optimization**
   - Efficient reconciliation algorithm
   - Key props for list rendering optimization
   - Minimal DOM manipulations
   - Batch state updates

4. **Bundle Optimization**
   - Tree shaking for unused code elimination
   - Webpack bundle analysis and optimization
   - Vendor chunk separation
   - Asset optimization and compression

#### **State Management Performance**

1. **Redux Performance**
   - Normalized state structure
   - Selector memoization with reselect
   - Action batching for multiple updates
   - Middleware optimization

2. **Component State Optimization**
   - Local state for component-specific data
   - Lifting state up only when necessary
   - Context optimization to prevent unnecessary re-renders

### Modern Web Development Concepts

#### **Progressive Web App (PWA) Features**
**Theory**: Web apps that provide native app-like experience.

**Implementation**:
- Service worker ready (via React Scripts)
- Web app manifest for installability
- Responsive design for all devices
- Offline-first architecture potential

#### **JAMstack Architecture**
**Theory**: JavaScript, APIs, and Markup for fast, secure websites.

**Implementation**:
- Static site generation capability
- API-driven content (Swiggy API)
- CDN deployment ready
- Serverless function integration potential

#### **Micro-Frontend Architecture**
**Theory**: Breaking frontend into smaller, manageable pieces.

**Implementation**:
- Component-based architecture
- Independent feature modules
- Lazy loading for feature isolation
- Potential for team-based development

### Advanced React Patterns

#### **Custom Hooks Pattern**
**Theory**: Extracting component logic into reusable functions.

**Implementation**:
```javascript
// useRestaurantMenu.js
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  
  return resInfo;
};
```

#### **Compound Component Pattern**
**Theory**: Components that work together to form a complete UI.

**Implementation**:
- `RestaurantMenu` with `RestaurantCategory` and `ItemList`
- `Header` with navigation, cart, and user components
- Modal components with trigger and content parts

#### **Render Props Pattern**
**Theory**: Sharing code between components using props with function values.

**Implementation**:
- Error boundary with custom error UI
- Loading states with custom loading components
- Conditional rendering based on data state

### Testing Strategies

#### **Testing Pyramid**
1. **Unit Tests**: Individual component and function testing
2. **Integration Tests**: Component interaction testing
3. **End-to-End Tests**: Full user journey testing

#### **React Testing Patterns**
```javascript
// Component testing example
test('renders restaurant card with correct data', () => {
  render(<RestaurantCard resData={mockData} />);
  expect(screen.getByText('Restaurant Name')).toBeInTheDocument();
});
```

#### **Testing Best Practices**
- Test behavior, not implementation
- Mock external dependencies
- Use data-testid for reliable element selection
- Test accessibility features

### Security Considerations

#### **Frontend Security**
1. **XSS Prevention**
   - React's built-in XSS protection
   - Proper data sanitization
   - Content Security Policy headers

2. **Data Validation**
   - Client-side input validation
   - Type checking with PropTypes or TypeScript
   - API response validation

3. **Secure Storage**
   - Secure localStorage usage
   - Sensitive data handling
   - Token management best practices

### Scalability Patterns

#### **Code Organization**
- Feature-based folder structure
- Barrel exports for clean imports
- Consistent naming conventions
- Documentation and comments

#### **Performance Monitoring**
- Web Vitals tracking
- Bundle size monitoring
- Runtime performance profiling
- User experience metrics

#### **Deployment Strategies**
- Continuous Integration/Continuous Deployment
- Environment-specific configurations
- Feature flags for gradual rollouts
- Monitoring and alerting systems

These theoretical concepts form the foundation of modern React application development and are essential for building scalable, maintainable, and performant applications like Food Manor.

---

## 5. Setup and Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git for version control
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Local Development Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Algoraver22/Food_Manor.git
cd Food_Manor
```

#### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

#### 3. Start Development Server
```bash
npm start
# or
yarn start
```

#### 4. Access the Application
- **Development Server**: http://localhost:3000
- **Hot Reload**: Automatic browser refresh on code changes

### Build for Production

#### 1. Create Production Build
```bash
npm run build
# or
yarn build
```

#### 2. Test Production Build Locally
```bash
npm install -g serve
serve -s build
```

### Testing

#### 1. Run Unit Tests
```bash
npm test
# or
yarn test
```

#### 2. Run Tests with Coverage
```bash
npm test -- --coverage
# or
yarn test --coverage
```

### Environment Configuration
No environment variables required for basic functionality. The app uses public APIs and browser storage.

### Deployment Options

#### **Vercel Deployment**
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on push to main branch

#### **Netlify Deployment**
1. Connect GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `build`
3. Deploy automatically on push to main branch

#### **GitHub Pages Deployment**
1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add homepage to package.json:
   ```json
   "homepage": "https://yourusername.github.io/Food_Manor"
   ```
3. Add deploy scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 6. API Documentation

### External API Integration

#### Swiggy Restaurant List API
**Endpoint**: `https://www.swiggy.com/dapi/restaurants/list/v5`

**Parameters:**
- `lat`: Latitude (default: 12.9351929)
- `lng`: Longitude (default: 77.624480699999999)
- `page_type`: DESKTOP_WEB_LISTING

**Response Structure:**
```json
{
  "data": {
    "cards": [
      {
        "card": {
          "card": {
            "gridElements": {
              "infoWithStyle": {
                "restaurants": [
                  {
                    "info": {
                      "id": "121603",
                      "name": "Restaurant Name",
                      "cloudinaryImageId": "image_id",
                      "cuisines": ["Indian", "Chinese"],
                      "avgRating": 4.2,
                      "costForTwo": "₹300 FOR TWO",
                      "sla": {
                        "deliveryTime": 25
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
}
```

#### Swiggy Restaurant Menu API
**Endpoint**: `https://www.swiggy.com/dapi/menu/pl`

**Parameters:**
- `page-type`: REGULAR_MENU
- `complete-menu`: true
- `lat`: Latitude
- `lng`: Longitude
- `restaurantId`: Restaurant ID

**Response Structure:**
```json
{
  "data": {
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "name": "Restaurant Name",
              "cuisines": ["Indian"],
              "avgRating": 4.2,
              "costForTwoMessage": "₹300 for two"
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Category Name",
                      "itemCards": [
                        {
                          "card": {
                            "info": {
                              "id": "item_id",
                              "name": "Item Name",
                              "price": 25000,
                              "description": "Item description",
                              "imageId": "image_id",
                              "isVeg": 1
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
}
```

#### Image CDN
**Base URL**: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`

**Usage**: `${CDN_URL}${imageId}`

### Internal API Structure

#### Custom Hooks API

##### useRestaurantMenu Hook
```javascript
const resInfo = useRestaurantMenu(restaurantId);
// Returns: Restaurant menu data or null while loading
```

##### useOnlineStatus Hook
```javascript
const onlineStatus = useOnlineStatus();
// Returns: boolean (true if online, false if offline)
```

#### Redux Store API

##### Cart Actions
```javascript
// Add item to cart
dispatch(addItem(menuItem));

// Remove last item from cart
dispatch(removeItem());

// Clear entire cart
dispatch(clearCart());
```

##### Cart Selectors
```javascript
// Get all cart items
const cartItems = useSelector((store) => store.cart.items);

// Get cart item count
const itemCount = cartItems.length;
```

---

## 7. Component API Reference

### RestaurantCard Component
```javascript
<RestaurantCard resData={restaurantData} />
```
**Props:**
- `resData`: Object containing restaurant information

### RestaurantMenu Component
```javascript
// Accessed via route: /restaurant/:resId
```
**URL Parameters:**
- `resId`: Restaurant ID for menu fetching

### Cart Component
```javascript
<Cart />
```
**No props required** - Uses Redux store for cart data

### Header Component
```javascript
<Header />
```
**No props required** - Uses context and Redux for state

---

## 8. Contributing Guidelines

### Code Style
- Use functional components with hooks
- Follow React naming conventions (PascalCase for components)
- Use Tailwind CSS for styling
- Implement proper error handling
- Write meaningful commit messages

### Development Workflow
1. Create feature branch from main
2. Implement changes with proper testing
3. Ensure all tests pass
4. Create pull request with detailed description
5. Code review and merge

### Testing Requirements
- Write unit tests for new components
- Test user interactions and edge cases
- Maintain test coverage above 80%
- Test responsive design on different devices

### Performance Guidelines
- Optimize images and assets
- Implement lazy loading for large components
- Use React.memo() for expensive components
- Monitor bundle size and performance metrics

---

## 9. Troubleshooting

### Common Issues

#### API CORS Errors
**Problem**: CORS policy blocking API requests
**Solution**: Use browser extension to disable CORS for development, or implement proxy server

#### Images Not Loading
**Problem**: Cloudinary images not displaying
**Solution**: Check image ID format and CDN URL construction

#### Cart State Not Persisting
**Problem**: Cart items disappear on page refresh
**Solution**: Implement localStorage persistence for cart state

#### Build Failures
**Problem**: Production build failing
**Solution**: Check for unused imports, resolve dependency conflicts

### Performance Issues

#### Slow Initial Load
**Solutions:**
- Implement code splitting
- Optimize image sizes
- Use CDN for static assets
- Enable browser caching

#### Memory Leaks
**Solutions:**
- Clean up event listeners in useEffect
- Cancel pending API requests on component unmount
- Optimize Redux store structure

---

## 10. Future Enhancements

### Planned Features
- User authentication and profiles
- Order history and tracking
- Payment gateway integration
- Real-time order updates
- Push notifications
- Offline functionality
- Multi-language support

### Technical Improvements
- TypeScript migration
- Server-side rendering (Next.js)
- Progressive Web App features
- Advanced caching strategies
- Performance monitoring
- Automated testing pipeline

---

## 11. License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 12. Support and Contact

### Getting Help
- Check the troubleshooting section
- Review component documentation
- Search existing GitHub issues
- Create new issue with detailed description

### Contact Information
- **Developer**: Anurag Chaturvedi
- **GitHub**: [Algoraver22](https://github.com/Algoraver22)
- **Project Repository**: [Food_Manor](https://github.com/Algoraver22/Food_Manor)

---

## 13. Acknowledgments

### Technologies Used
- React.js and ecosystem
- Swiggy API for restaurant data
- Tailwind CSS for styling
- Redux Toolkit for state management
- Various open-source libraries

### Inspiration
- Modern food delivery applications
- React best practices and patterns
- User experience design principles

---

*Last updated: December 2024*

---

## Appendix

### Useful Commands
```bash
# Development
npm start                 # Start development server
npm test                  # Run tests
npm run build            # Create production build

# Analysis
npm run build -- --analyze  # Analyze bundle size
npm audit                    # Check for vulnerabilities

# Deployment
npm run deploy              # Deploy to GitHub Pages
```

### Folder Structure
```
Food_Manor/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── utils/            # Utilities and hooks
│   ├── __tests__/        # Test files
│   └── mocks/            # Mock data
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── README.md            # Basic documentation
```

### Key Dependencies
```json
{
  "react": "^19.0.0",
  "react-router-dom": "^6.16.0",
  "@reduxjs/toolkit": "^2.6.1",
  "tailwindcss": "^3.4.17",
  "framer-motion": "^12.5.0",
  "react-hot-toast": "^2.5.2"
}
```