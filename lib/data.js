export const quiz = {
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: 'What command is used to create a new Next.js app?',
        answers: ['npx create-next-app', 'npm create-next-app', 'next-init', 'create-react-app'],
        correctAnswer: 'npx create-next-app',
      },
      {
        id: 2,
        question: 'Which of the following is a feature of Next.js?',
        answers: ['Server-side rendering', 'Global state management', 'React Hooks', 'Component Lifecycle'],
        correctAnswer: 'Server-side rendering',
      },
      {
        id: 3,
        question: 'How do you define a page in Next.js?',
        answers: ['In the /pages directory', 'Using the <Page> component', 'Inside a Layout component', 'In the /components directory'],
        correctAnswer: 'In the /pages directory',
      },
      {
        id: 4,
        question: 'What is the purpose of getStaticProps in Next.js?',
        answers: [
          'To fetch data during the build process',
          'To fetch data on each request',
          'To manage component state',
          'To define API routes',
        ],
        correctAnswer: 'To fetch data during the build process',
      },
      {
        id: 5,
        question: 'How do you enable dynamic routing in Next.js?',
        answers: [
          'By using [brackets] in filenames inside the /pages directory',
          'By creating a router.js file',
          'By using the <Router> component',
          'By configuring routes in next.config.js',
        ],
        correctAnswer: 'By using [brackets] in filenames inside the /pages directory',
      },
      {
        id: 6,
        question: 'Which hook is provided by Next.js for accessing router information?',
        answers: ['useRouter', 'useHistory', 'useNavigation', 'useRouteMatch'],
        correctAnswer: 'useRouter',
      },
      {
        id: 7,
        question: 'What is the default export in a Next.js API route?',
        answers: ['A function that handles HTTP requests', 'A React component', 'A JSON object', 'A Redux action'],
        correctAnswer: 'A function that handles HTTP requests',
      },
      {
        id: 8,
        question: 'Which of the following is a common use case for getServerSideProps?',
        answers: [
          'Fetching data that needs to be up-to-date on every request',
          'Managing global state',
          'Handling form submissions',
          'Client-side routing',
        ],
        correctAnswer: 'Fetching data that needs to be up-to-date on every request',
      },
      {
        id: 9,
        question: 'What does Next.js use for image optimization?',
        answers: ['next/image', 'react-image', 'image-webpack-plugin', 'image-compressor'],
        correctAnswer: 'next/image',
      },
      {
        id: 10,
        question: 'Which of the following is a benefit of using Next.js?',
        answers: [
          'Automatic code splitting',
          'Automatic global state management',
          'Integrated Redux store',
          'Reduced need for CSS',
        ],
        correctAnswer: 'Automatic code splitting',
      },
    ],
  };
  