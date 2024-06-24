import postEndpoint from './post.endpoint.js';
import userEndpoint from './user.endpoint';

const routes = function (router) {
    userEndpoint(router);
    postEndpoint(router);
};

export default routes;
