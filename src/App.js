function App() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <header className="flex justify-center h-screen w-screen text-xl sm:text-6xl text-slate-900 dark:text-slate-50 font-mono select-none">
        <div class="place-self-center text-center leading-tight">  
          <img src="https://avatars.githubusercontent.com/u/48795309?s=200" className="outline-blue-500 dark:outline-white cursor-not-allowed mx-auto mb-10 rounded-full outline outline-offset-0 outline-[6px] shadow-2xl" alt="logo" />
          <p className="place-self-center text-center">
            Hi! I am {' '}
            <a
              className="underline decoration-sky-900 dark:decoration-sky-500 decoration-6 hover:decoration-8" 
              href="https://github.com/blackawabi/"
              target="_blank"
              rel="noopener noreferrer"
            >blackawabi
            </a>.
            <br />
            Welcome to my github page!<br />
            But unfortunately, nothing here
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

