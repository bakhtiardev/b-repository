import { Outlet } from 'react-router-dom';
import { Particle } from '../Particles/Particle';
import Sidebar from '../Sidebar/Sidebar';

import './Layout.scss';

const Layout = () => {
    return (<>
        <div className="App">

            <Sidebar />
            <Particle />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet />

                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>

    </>)
}

export default Layout;