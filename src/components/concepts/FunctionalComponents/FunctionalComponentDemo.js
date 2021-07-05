const FunctionalComponentDemo = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Component</h1>
                <p>Functional components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Older class components in React use 'this'. Functional components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside of it.</dd>
                </dl>
                <h1>Functional Syntax vs Arrow Function</h1>
            </div>
        </div>
    );
};



export default FunctionalComponentDemo; 