import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mx-auto text-left'>
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
        </div>

    );
};

export default Blogs;