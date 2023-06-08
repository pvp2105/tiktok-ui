//Layout
import { HeadOnlyLayout } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// cho những router không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeadOnlyLayout },
    { path: '/search', component: Search, layout: null },
];

// cho những router cần đăng nhập mới vào đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
