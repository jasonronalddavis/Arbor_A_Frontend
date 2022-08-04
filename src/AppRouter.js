import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

// ROUTING LINKS TO STORYTEXT CONTAINER(PREFIXED AS '/storyTexts') 
// ROUTED STORYTEXT FORM PREFIXED AS '/storyTextForm'
// ROUTED TO USERSCONTAINER(PREFIXED AS /users')
//ROUTED TO '/' AS HOME PATH


const AppRouter = () => {
return (
<BrowserRouter>
<Routes>
    {/* <Route exact path='/' component={Home} />
    <Route path='/users' component={UsersContainer}/>
     <Route   path='/storyTexts' component={StoryTextContainer}/>
     <Route path='/createStory' component={CreateStory}/>
     <Route path='/about' component={About}/>
<Route path='/userProfile' component={UserProfile}/> */}
</Routes>
</BrowserRouter>
);
};












export default AppRouter;