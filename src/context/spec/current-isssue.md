## Error Type

Console Error

## Error Message

In HTML, <a> cannot be a descendant of <a>.
This will cause a hydration error.

...
<HTTPAccessFallbackErrorBoundary pathname="/" notFound={<SegmentViewNode>} forbidden={undefined} ...>
<RedirectBoundary>
<RedirectErrorBoundary router={{...}}>
<InnerLayoutRouter url="/#experience" tree={[...]} cacheNode={{lazyData:null, ...}} segmentPath={[...]}>
<SegmentViewNode type="page" pagePath="page.tsx">
<SegmentTrieNode>
<Home>
<div id="top" className="min-h-screen">
<Navbar>
<Hero>
<div>
<About>
<WorkExperience>
<Projects>
<section id="projects" className="py-24 md:p...">
<div className="max-w-6xl ...">
<SectionHeader>
<Reveal className="mb-8">
<motion.div className="mb-8" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} ...>
<div className="mb-8" style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>

>                             <a
>                               href="https://ghost-ai-vert-two.vercel.app"
>                               target="_blank"
>                               rel="noopener noreferrer"
>                               className="group relative block surface rounded-3xl p-8 md:p-10 overflow-hidden"
>                             >

                                <div>
                                <div className="relative">
                                  <div>
                                  <h3>
                                  <p>
                                  <div>
                                  <ProjectLinks links={[...]}>
                                    <div className="flex flex-...">

>                                     <a
>                                       href="https://ghost-ai-vert-two.vercel.app"
>                                       target="_blank"
>                                       rel="noopener noreferrer"
>                                       className="inline-flex items-center gap-1.5 text-sm font-medium text-white lin..."
>                                     >

                        ...
                  ...
            ...
          ...



    at createConsoleError (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_b0daae9a._.js:1605:71)
    at handleConsoleError (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_b0daae9a._.js:2203:54)
    at console.error (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_b0daae9a._.js:2354:57)
    at validateDOMNesting (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:1921:372)
    at completeWork (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6333:25)
    at runWithFiberInDEV (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:886:74)
    at completeUnitOfWork (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:8363:23)
    at performUnitOfWork (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:8300:28)
    at workLoopSync (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:8190:40)
    at renderRootSync (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:8173:13)
    at performWorkOnRoot (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:7932:56)
    at performWorkOnRootViaSchedulerTask (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:8882:9)
    at MessagePort.performWorkUntilDeadline (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/node_modules_next_dist_compiled_5150ccfd._.js:2601:64)
    at a (<anonymous>:null:null)
    at <unknown> (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/src_c9abdfb1._.js:1456:239)
    at Array.map (<anonymous>:null:null)
    at ProjectLinks (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/src_c9abdfb1._.js:1456:25)
    at Projects (file:///Users/ardhendu/Desktop/My Projects/my_portfolio/.next/static/chunks/src_c9abdfb1._.js:1606:239)
    at Home (about://React/Server/file:///Users/ardhendu/Desktop/My%20Projects/my_portfolio/.next/server/chunks/ssr/%5Broot-of-the-server%5D__dd1fa0f5._.js?8:403:264)

Next.js version: 15.5.7 (Turbopack)
