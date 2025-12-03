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
│   │   ├── Button/                # Reusable button component
│   │   ├── Counter/               # Counter display component
│   │   ├── Toggle/                # Toggle switch component
│   │   ├── ColorPicker/           # Color picker component
│   │   ├── Input/                 # Input field component
│   │   ├── ComponentsLab.jsx      # Main wrapper component
│   │   └── index.js               # Component exports
│   ├── App.jsx                    # Main component lab
│   ├── App.css                    # App styles
│   └── main.jsx                   # Entry point
├── tests/                          # Component tests
└── README.md
```

## 🧩 Components Checklist

### ✅ Completed (7/70+)

#### **Interactivity & State**
- [x] Button with forwardRef (onClick, variants)
- [x] Toggle Switch (useState)
- [x] Counter with +/- buttons (useState)
- [x] Color-changing button (onClick, random colors)
- [x] Double-click counter (state snapshots)
- [x] Rapid increment button (state batching/queueing)
- [x] User profile form (object state)
- [x] Add/remove list items (array state)
- [x] Filtered search list
- [x] Form with validation
- [x] Multi-select checkboxes

### 📝 Planned Components (63+)


#### **Interactivity & State**
- [x] All Complete

_Special Note: This section is now complete! All interactivity & state components have been implemented and checked off. 🎉_


#### **Managing State (Advanced)**
- [ ] Todo list with useReducer
- [ ] Theme switcher (Context API)
- [ ] Shared total calculator (lifting state)
- [ ] Parent-child counter sync
- [ ] Tab switcher with state preservation
- [ ] Shopping cart (reducer + actions)
- [ ] Multi-step form (reducer + context)
- [ ] Undo/Redo functionality
- [ ] Global notification system

#### **Effects & Lifecycle**
- [ ] Real-time clock display
- [ ] Search box with debounced API calls
- [ ] Chat send vs auto-save
- [ ] Auto-dismiss notification
- [ ] Mount/unmount logger
- [ ] Window resize listener
- [ ] Scroll position tracker
- [ ] Data fetching with loading states
- [ ] Cleanup on unmount demo

#### **Advanced Hooks**
- [ ] Focus input on button click (useRef)
- [ ] Factorial calculator (useMemo)
- [ ] Optimized child button (useCallback)
- [ ] useLocalStorage custom hook
- [ ] useDebounce custom hook
- [ ] useToggle custom hook
- [ ] usePrevious custom hook
- [ ] Custom input with imperative methods
- [ ] Positioned tooltip (useLayoutEffect)
- [ ] Large list filter (useTransition)
- [ ] Search with useDeferredValue
- [ ] useId for accessibility

#### **Performance Optimization**
- [ ] Memoized child component (React.memo)
- [ ] Virtualized list concept
- [ ] Profiler measurements
- [ ] Lazy-loaded heavy component
- [ ] Suspense loading spinner
- [ ] Code-split routes
- [ ] Render optimization demo
- [ ] Expensive calculation optimization
- [ ] List key optimization

#### **Refs & DOM Manipulation**
- [ ] Auto-scroll to bottom
- [ ] Focusable custom input
- [ ] Video player controls
- [ ] flushSync demonstration
- [ ] Measuring DOM elements
- [ ] Canvas drawing
- [ ] Third-party library integration

#### **Escape Hatches**
- [ ] Interval counter (ref without render)
- [ ] Filtered list without effect
- [ ] useWindowSize hook
- [ ] WebSocket manager
- [ ] External store subscription

#### **React Router**
- [ ] 3-page navigation
- [ ] Nested dashboard routes
- [ ] Dynamic user profile loading
- [ ] Form with navigation
- [ ] Protected routes
- [ ] 404 page
- [ ] Route parameters
- [ ] Query string handling

#### **Modern React Patterns**
- [ ] Compound components
- [ ] Render props pattern
- [ ] Higher-Order Components (HOC)
- [ ] Static blog renderer
- [ ] use() hook demo
- [ ] Concurrent rendering
- [ ] Automatic batching example
- [ ] Smooth tab transitions
- [ ] Error boundaries
- [ ] Portal example

#### **Forms & Validation**
- [ ] Controlled vs uncontrolled inputs
- [ ] Form with Formik
- [ ] Form with React Hook Form
- [ ] Custom validation
- [ ] File upload
- [ ] Multi-step wizard

#### **Testing**
- [ ] Checkbox component tests
- [ ] Form interaction tests
- [ ] Card snapshot tests
- [ ] Async loading tests
- [ ] Custom hook tests
- [ ] Integration tests

#### **TypeScript**
- [ ] Typed checkbox
- [ ] Button with prop types
- [ ] Typed hooks example
- [ ] Generic component
- [ ] Typed context
- [ ] Typed reducer

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
- **Completed**: 7
- **In Progress**: 0
- **Remaining**: 63+
- **Completion**: 10%

## 🎯 Current Focus

**Next Up:**
1. Add/remove list items (array state manipulation)
2. Todo list with useReducer
3. Real-time clock with useEffect

## 🤝 Contributing

This is a personal learning project, but feel free to fork and create your own learning journey!

## 📝 License

MIT License - Feel free to use this structure for your own learning.

---

**Happy Learning! 🎉**

*Last Updated: November 29, 2025*