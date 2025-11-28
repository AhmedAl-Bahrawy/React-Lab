# React Learning Lab 🧪

A comprehensive collection of React concepts, patterns, and mini-projects designed to master modern React development through hands-on practice.

## 📋 Project Overview

This repository serves as a living laboratory for learning and experimenting with React concepts. Each component represents a specific React pattern, hook, or technique, organized in a single-page application for easy navigation and reference.

## 🎯 Learning Objectives

- Master React fundamentals (state, props, events)
- Understand advanced hooks (useReducer, useContext, useMemo, useCallback)
- Learn performance optimization techniques
- Practice DOM manipulation with refs
- Implement routing and navigation patterns
- Explore modern React features (Server Components, Suspense, Transitions)
- Apply testing best practices
- Integrate TypeScript with React

## 🗂️ Project Structure

```
react-learning-lab/
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   ├── interactivity/         # useState, events, state management
│   │   ├── advanced-state/        # useReducer, Context API
│   │   ├── effects/               # useEffect, lifecycle
│   │   ├── advanced-hooks/        # useRef, useMemo, useCallback, custom hooks
│   │   ├── performance/           # React.memo, lazy loading, Suspense
│   │   ├── refs-dom/              # DOM manipulation, forwardRef
│   │   ├── patterns/              # Modern React patterns
│   │   ├── router/                # React Router examples
│   │   └── testing/               # Test examples
│   ├── App.jsx                    # Main component lab
│   └── main.jsx
├── tests/                          # Component tests
└── README.md
```

## 🧩 Components Checklist

### ✅ Completed
- [x] Button Collection with forwardRef
- [x] Basic useRef implementation
- [x] Check Enabled State (useState)
- [x] Counter with +/- buttons
- [x] Color-changing button (onClick)
- [x] Double-click counter (state snapshots)
- [x] Rapid increment button (state queueing)

### 🚧 In Progress


### 📝 Planned Components
- [ ] User profile form (object state)


#### **Interactivity & State**

- [ ] Add/remove list items (array state)

#### **Managing State (Advanced)**
- [ ] Todo list (useReducer)
- [ ] Theme switcher (Context API)
- [ ] Shared total calculator (lifting state)
- [ ] Parent-child counter sync
- [ ] Tab switcher with state preservation
- [ ] Shopping cart (reducer + actions)
- [ ] Multi-step form (reducer + context)

#### **Effects & Lifecycle**
- [ ] Real-time clock display
- [ ] Search box with API calls
- [ ] Chat send vs auto-save
- [ ] Auto-dismiss notification
- [ ] Mount/unmount logger

#### **Advanced Hooks**
- [ ] Focus input on button click (useRef)
- [ ] Factorial calculator (useMemo)
- [ ] Optimized child button (useCallback)
- [ ] useLocalStorage custom hook
- [ ] Custom input with imperative methods
- [ ] Positioned tooltip (useLayoutEffect)
- [ ] Large list filter (useTransition)
- [ ] Search with useDeferredValue

#### **Performance Optimization**
- [ ] Memoized child component
- [ ] Virtualized list concept
- [ ] Profiler measurements
- [ ] Lazy-loaded heavy component
- [ ] Suspense loading spinner
- [ ] Code-split routes
- [ ] Render optimization demo

#### **Refs & DOM Manipulation**
- [ ] Auto-scroll to bottom
- [ ] Focusable custom input
- [ ] Video player controls
- [ ] flushSync demonstration

#### **Escape Hatches**
- [ ] Interval counter (ref without render)
- [ ] Filtered list without effect
- [ ] useWindowSize hook
- [ ] WebSocket manager

#### **React Router**
- [ ] 3-page navigation
- [ ] Nested dashboard routes
- [ ] Dynamic user profile loading
- [ ] Form with navigation

#### **Modern React Patterns**
- [ ] Static blog renderer
- [ ] use() hook demo
- [ ] Concurrent rendering
- [ ] Automatic batching example
- [ ] Smooth tab transitions

#### **Testing**
- [ ] Checkbox component tests
- [ ] Form interaction tests
- [ ] Card snapshot tests
- [ ] Async loading tests

#### **TypeScript**
- [ ] Typed checkbox
- [ ] Button with prop types
- [ ] Typed hooks example
- [ ] Generic component

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📚 Learning Resources

- [React Official Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [React Testing Library](https://testing-library.com/react)
- [TypeScript with React](https://react.dev/learn/typescript)

## 🎓 Learning Strategy

1. **Sequential Learning**: Complete components in order of complexity
2. **Build and Understand**: Implement each pattern from scratch
3. **Experiment**: Modify and break things to understand edge cases
4. **Document**: Add comments explaining the "why" behind patterns
5. **Test**: Write tests for complex components
6. **Refactor**: Revisit early components with new knowledge

## 🔄 Project Workflow

1. Read the React documentation for the concept
2. Implement the mini-project
3. Test the functionality
4. Document learnings in code comments
5. Move to the next concept
6. Periodically refactor older components

## 📈 Progress Tracking

- **Total Components**: 70+
- **Completed**: 2
- **In Progress**: 1
- **Remaining**: 67+

## 🤝 Contributing

This is a personal learning project, but feel free to fork and create your own learning journey!

## 📝 License

MIT License - Feel free to use this structure for your own learning.

---

**Happy Learning! 🎉**

*Last Updated: November 2025*