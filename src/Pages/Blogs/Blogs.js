import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mx-auto text-left'>
            <h2 className='my-10 text-primary text-3xl text-center font-bold' >Blogs</h2>
            <div className="divider"></div>
            <h2 className='my-5 text-primary text-2xl'>How will you improve the performance of a React Application?</h2>
            <p>Lazy loading has become one of the ways to optimize React applications to speed up the load time.
                react-lazyload (npm i react-lazyload)
                react-lazy-load-image-component(npm i --save
                react-lazy-load-image-component)
                react-lazy-load(npm install --save react-lazy-load)
                uselazy(npm install uselazy)
                Optimizing responsive applications by lazy loading elements and images for efficiency is very important in today's development. These libraries make it easier than ever to speed up the performance of your feedback app and improve the overall user experience. Libraries such as Gatsby-Image and React-Lazyload are more suitable for lazy loading image gallery applications, and more suitable for other libraries such as eugenics elements, and for response project.</p>
            {/* --------------------------- */}
            <h2 className='my-5 text-primary text-2xl'>What is a unit test? Why should write unit tests?</h2>
            <p>Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this may mean checking whether the element is rendering correctly for specific props.</p>

            {/* --------------------------------- */}
            <h2 className='my-5 text-primary text-2xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
            <p>if we update the hook value like this: product = [...]; then it will show us an error because we declare/ destructuring the hook as constant (const); but if we use it as let then it will run or set its value. there is an issue. if we don't use setProducts to update the state then the component will not re-render. setProducts is done the asynchronous task. then it will merge the new value and replace the old value then re-render that component</p>
            <h2 className='my-5 text-primary text-2xl'>How does prototypical inheritance work?</h2>
            <p>Prototype Inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, to get and set an [[prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set up using _proto_.</p>
            <h2 className='my-5 text-primary text-2xl'>What are the different ways to manage a state in a React application?</h2>
            <p>Manage my React app : Local state Global states

                Local (UI) State - Local state is the data that we manage on one or the other component. Local states are often manipulated in response using the useState hook. For example, to show or hide a model element, or to track form values ​​such as form submission, will require a local state when the form is inactive and the value of a form's inputs.

                Global (UI) State - The global state is the data that we manage across multiple elements. A global state is required when we want to receive and update data anywhere in our app, or at least in multiple elements.</p>
        </div>

    );
};

export default Blogs;