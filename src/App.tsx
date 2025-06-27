import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageStorage } from "./contexts/pageContext";
import { SearchStorage } from './contexts/searchContext';
import { UserStorage } from "./contexts/userContext";
import { VideoStorage } from "./contexts/videoContext";

import { Home } from "./pages/home";
import { SearchContent } from "./pages/searchContent";
import { Shorts } from "./pages/shorts";
import { Inscriptions } from "./pages/inscriptions";
import { SignIn } from "./pages/signIn";
import { SignUp } from "./pages/signUp";
import { UserChannel } from "./pages/userChannel";
import { UploadVideo } from "./pages/uploadVideo";

import { Header } from "./components/header";
import { Menu } from "./components/menu";


function App() {

  return (
<PageStorage>
  <SearchStorage>       
    <BrowserRouter>
      <UserStorage>
        <VideoStorage>
          <div className="App">
              <Header/>
              <div style={{width: '100%', display: 'flex'}}>
                <Menu/>
                  <div style={{width: '100%', maxWidth: '1400px', padding: '12px 24px', boxSizing: 'border-box'}}>
                    <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/search-content" element={<SearchContent/>}/>
                      <Route path="/shorts" element={<Shorts/>}/>
                      <Route path="/inscriptions" element={<Inscriptions/>}/>
                      <Route path="/sign-in" element={<SignIn/>}/>
                      <Route path="/sign-up" element={<SignUp/>}/>
                      <Route path="/user-channel" element={<UserChannel/>}/>
                      <Route path="/create-video" element={<UploadVideo/>}/>
                    </Routes>
                  </div>
              </div>
          </div>
        </VideoStorage>
      </UserStorage>
    </BrowserRouter>
  </SearchStorage>
</PageStorage>
      
  )
}

export default App;
